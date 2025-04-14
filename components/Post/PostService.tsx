"use client"

import type React from "react"

import { useState } from "react"
import axios from "axios"
import type { CreateServiceType } from "@/type/ServiceType"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const CreateServiceForm = () => {
    const [form, setForm] = useState<CreateServiceType>({
        name: "",
        type: "",
        status: "",
        description: "",
        localisation: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        // Clear error when user starts typing again
        if (error) setError(null)
        if (success) setSuccess(false)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)
        setSuccess(false)

        try {
            await axios.post("/api/service", form)
            setForm({ name: "", type: "", status: "", description: "", localisation: "" })
            setSuccess(true)
        } catch (err) {
            setError("Une erreur est survenue lors de la création du service. Veuillez réessayer.")
            console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="w-full max-w-md shadow-lg mx-auto">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">Créer un nouveau service</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nom</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Nom du service"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="type">Type</Label>
                        <Input
                            id="type"
                            name="type"
                            placeholder="Type de service"
                            value={form.type}
                            onChange={handleChange}
                            required
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="status">Statut</Label>
                        <Input
                            id="status"
                            name="status"
                            placeholder="Statut du service"
                            value={form.status}
                            onChange={handleChange}
                            required
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Description détaillée du service"
                            value={form.description}
                            onChange={handleChange}
                            required
                            className="w-full min-h-[100px]"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="localisation">Localisation</Label>
                        <Input
                            id="localisation"
                            name="localisation"
                            placeholder="Emplacement du service"
                            value={form.localisation}
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
                            <AlertDescription>Service créé avec succès!</AlertDescription>
                        </Alert>
                    )}

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Création en cours..." : "Créer le service"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default CreateServiceForm
