"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {IncidentType} from "@/type/IncidentType";



export default function IncidentEditor() {
    const [incidents, setIncidents] = useState<IncidentType[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    useEffect(() => {
        axios
            .get("/api/incident")
            .then((res) => {
                setIncidents(res.data.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message || "Une erreur est survenue lors du chargement des incidents")
                setLoading(false)
            })
    }, [])

    const handleChange = (index: number, key: keyof IncidentType, value: string) => {
        const updated = [...incidents]
        ;(updated[index][key] as string) = value
        setIncidents(updated)
    }

    const handleSave = () => {
        setSaving(true)
        setError(null)
        setSuccess(null)

        axios
            .put("/api/incident", incidents)
            .then(() => {
                setSuccess("Incidents enregistrés avec succès")
            })
            .catch((error) => {
                setError(error.message || "Une erreur est survenue lors de l'enregistrement des incidents")
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
                    <p className="text-sm text-gray-500">Chargement des incidents...</p>
                </div>
            </div>
        )
    }

    return (
        <Card className="w-full shadow-sm">
            <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Gestion des incidents</CardTitle>
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
                    {incidents.map((incident, index) => (
                        <div key={incident.id} className="p-4 border rounded-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Titre</label>
                                    <Input
                                        value={incident.title}
                                        onChange={(e) => handleChange(index, "title", e.target.value)}
                                        placeholder="Titre"
                                        className="h-9"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Statut</label>
                                    <Input
                                        value={incident.status}
                                        onChange={(e) => handleChange(index, "status", e.target.value)}
                                        placeholder="Statut"
                                        className="h-9"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Localisation</label>
                                    <Input
                                        value={incident.location}
                                        onChange={(e) => handleChange(index, "location", e.target.value)}
                                        placeholder="Localisation"
                                        className="h-9"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Utilisateur</label>
                                    <Input
                                        value={incident.username}
                                        readOnly
                                        placeholder="Nom d'utilisateur"
                                        className="h-9"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="text-sm font-medium mb-1 block">Description</label>
                                    <Input
                                        value={incident.description}
                                        onChange={(e) => handleChange(index, "description", e.target.value)}
                                        placeholder="Description"
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
