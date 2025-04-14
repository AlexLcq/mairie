"use client"

import type React from "react"

import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export type CreateActuType = {
    category: string
    title: string
    description: string
    date: Date
}

const CreateActuForm = () => {
    const [form, setForm] = useState<CreateActuType>({
        category: "",
        title: "",
        description: "",
        date: new Date(),
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

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, date: new Date(e.target.value) })
        if (error) setError(null)
        if (success) setSuccess(false)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)
        setSuccess(false)

        try {
            await axios.post("/api/actu", form)
            setForm({ category: "", title: "", description: "", date: new Date() })
            setSuccess(true)
        } catch (err) {
            setError("Une erreur est survenue lors de la création de l'actualité. Veuillez réessayer.")
            console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="w-full max-w-md shadow-lg mx-auto">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">Créer une nouvelle actualité</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="category">Catégorie</Label>
                        <Input
                            id="category"
                            name="category"
                            placeholder="Catégorie de l'actualité"
                            value={form.category}
                            onChange={handleChange}
                            required
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="title">Titre</Label>
                        <Input
                            id="title"
                            name="title"
                            placeholder="Titre de l'actualité"
                            value={form.title}
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
                            placeholder="Description détaillée de l'actualité"
                            value={form.description}
                            onChange={handleChange}
                            required
                            className="w-full min-h-[100px]"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input
                            id="date"
                            name="date"
                            type="date"
                            value={form.date.toISOString().split("T")[0]}
                            onChange={handleDateChange}
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
                            <AlertDescription>Actualité créée avec succès!</AlertDescription>
                        </Alert>
                    )}

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Création en cours..." : "Créer l'actualité"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default CreateActuForm
