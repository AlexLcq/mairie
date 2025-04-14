"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "@/hook/useAuth"
import axios from "axios"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type CreateIncidentType = {
    title: string
    description: string
    status: string
    location: string
    username: string
}

const AddIncident = () => {
    const { user } = useAuth()

    const [form, setForm] = useState<CreateIncidentType>({
        title: "",
        description: "",
        status: "open",
        location: "",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        username: user.username,
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
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
        console.log(form)

        try {
            await axios.post("/api/incident", form)
            console.log(form)
            setForm({
                title: "",
                description: "",
                status: "open",
                location: "",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                username: user.username,
            })
            setSuccess(true)
        } catch (err) {
            setError("Une erreur est survenue lors de l'ajout de l'incident. Veuillez réessayer.")
            console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">Ajouter un incident</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Titre</Label>
                        <Input
                            id="title"
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="Titre"
                            required
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Description"
                            required
                            className="w-full min-h-[100px]"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="status">Statut</Label>
                        <Select value={form.status} onValueChange={(value) => handleSelectChange("status", value)}>
                            <SelectTrigger id="status" className="w-full">
                                <SelectValue placeholder="Sélectionner un statut" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="open">Ouvert</SelectItem>
                                <SelectItem value="in-progress">En cours</SelectItem>
                                <SelectItem value="resolved">Résolu</SelectItem>
                                <SelectItem value="closed">Fermé</SelectItem>
                                <SelectItem value="critical">Critique</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            placeholder="Location"
                            required
                            className="w-full"
                        />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Ajout en cours..." : "Ajouter Incident"}
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col items-start pt-0">
                {error && (
                    <Alert variant="destructive" className="mt-2 w-full">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                {success && (
                    <Alert className="mt-2 w-full bg-green-50 text-green-800 border-green-200">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <AlertDescription>Incident ajouté avec succès !</AlertDescription>
                    </Alert>
                )}
            </CardFooter>
        </Card>
    )
}

export default AddIncident
