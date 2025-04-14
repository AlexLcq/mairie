"use client"

import type React from "react"

import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type CreateIotType = {
    name: string
    type: string
    status: string
    location: string
}

const CreateIotForm = () => {
    const [form, setForm] = useState<CreateIotType>({
        name: "",
        type: "",
        status: "offline",
        location: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        // Clear error when user starts typing again
        if (error) setError(null)
        if (success) setSuccess(false)
    }

    const handleSelectChange = (name: string, value: string) => {
        setForm({ ...form, [name]: value })
        if (error) setError(null)
        if (success) setSuccess(false)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)
        setSuccess(false)

        try {
            await axios.post("/api/iot", form)
            setForm({ name: "", type: "", status: "offline", location: "" })
            setSuccess(true)
        } catch (err) {
            setError("Une erreur est survenue lors de la création de l'appareil IoT. Veuillez réessayer.")
            console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="w-full max-w-md shadow-lg mx-auto">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">Ajouter un nouvel appareil IoT</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nom</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Nom de l'appareil"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="type">Type</Label>
                        <Select value={form.type} onValueChange={(value) => handleSelectChange("type", value)}>
                            <SelectTrigger id="type" className="w-full">
                                <SelectValue placeholder="Sélectionner un type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sensor">Capteur</SelectItem>
                                <SelectItem value="actuator">Actionneur</SelectItem>
                                <SelectItem value="gateway">Passerelle</SelectItem>
                                <SelectItem value="camera">Caméra</SelectItem>
                                <SelectItem value="other">Autre</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="status">Statut</Label>
                        <Select value={form.status} onValueChange={(value) => handleSelectChange("status", value)}>
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

                    <div className="space-y-2">
                        <Label htmlFor="location">Emplacement</Label>
                        <Input
                            id="location"
                            name="location"
                            placeholder="Emplacement de l'appareil"
                            value={form.location}
                            onChange={handleChange}
                            required
                            className="w-full"
                        />
                    </div>

                    {error && (
                        <Alert variant="destructive" className="mt-4">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {success && (
                        <Alert className="mt-4 bg-green-50 text-green-800 border-green-200">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <AlertDescription>Appareil IoT ajouté avec succès!</AlertDescription>
                        </Alert>
                    )}

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Ajout en cours..." : "Ajouter l'appareil"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default CreateIotForm
