"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export type IotType = {
    id: number
    name: string
    type: string
    status: string
    location: string
}

export default function IotEditor() {
    const [iots, setIots] = useState<IotType[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    useEffect(() => {
        axios
            .get("/api/iot")
            .then((res) => {
                setIots(res.data.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [])

    const handleChange = (index: number, key: keyof IotType, value: string) => {
        const updated = [...iots]
        ;(updated[index][key] as string) = value
        setIots(updated)
    }

    const handleSave = () => {
        setSaving(true)
        setError(null)
        setSuccess(null)

        axios
            .put("/api/iot", iots)
            .then(() => {
                setSuccess("Appareils IoT enregistrés avec succès")
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setSaving(false)
            })
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
                    <p className="text-sm text-gray-500">Chargement des appareils IoT...</p>
                </div>
            </div>
        )
    }

    return (
        <Card className="w-full shadow-sm">
            <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Gestion des appareils IoT</CardTitle>
            </CardHeader>
            <CardContent>
                {error && (
                    <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {success && (
                    <Alert className="mb-4 border-green-200 bg-green-50 text-green-800">
                        <CheckCircle2 className="h-4 w-4" />
                        <AlertDescription>{success}</AlertDescription>
                    </Alert>
                )}

                <div className="space-y-4">
                    {iots.map((iot, index) => (
                        <div key={iot.id} className="p-4 border rounded-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Nom</label>
                                    <Input
                                        value={iot.name}
                                        onChange={(e) => handleChange(index, "name", e.target.value)}
                                        placeholder="Nom"
                                        className="h-9"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Type</label>
                                    <Input
                                        value={iot.type}
                                        onChange={(e) => handleChange(index, "type", e.target.value)}
                                        placeholder="Type"
                                        className="h-9"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Statut</label>
                                    <Select value={iot.status} onValueChange={(value) => handleChange(index, "status", value)}>
                                        <SelectTrigger id="status" className="w-full">
                                            <SelectValue placeholder="Sélectionner un statut" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="online">En ligne</SelectItem>
                                            <SelectItem value="offline">Hors ligne</SelectItem>
                                            <SelectItem value="maintenance">En maintenance</SelectItem>
                                            <SelectItem value="error">Erreur</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Localisation</label>
                                    <Input
                                        value={iot.location}
                                        onChange={(e) => handleChange(index, "location", e.target.value)}
                                        placeholder="Localisation"
                                        className="h-9"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 flex justify-end">
                    <Button onClick={handleSave} disabled={saving} className="px-6">
                        {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Sauvegarder
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
