"use client"

import type React from "react"
import { useState } from "react"
import axios from "axios"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Loader2, NewspaperIcon, CheckCircle } from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { ProtectedPage } from "@/components/protectedPage"

export type PostNews = {
    title: string
    description: string
    date: Date
    category: string
}

const categories = [
    { value: "evenement", label: "Événement" },
    { value: "travaux", label: "Travaux" },
    { value: "culture", label: "Culture" },
    { value: "sport", label: "Sport" },
    { value: "education", label: "Éducation" },
    { value: "environnement", label: "Environnement" },
    { value: "autre", label: "Autre" },
]

export default function AdminPostNews() {
    const [newsData, setNewsData] = useState<PostNews>({
        title: "",
        description: "",
        date: new Date(),
        category: "",
    })

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [error, setError] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setNewsData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleDateChange = (date: Date | undefined) => {
        if (date) {
            setNewsData((prev) => ({
                ...prev,
                date,
            }))
        }
    }

    const handleCategoryChange = (value: string) => {
        setNewsData((prev) => ({
            ...prev,
            category: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")
        setError(null)

        axios
            .post("/api/news", newsData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(() => {
                setMessage("Article publié avec succès !")
                setNewsData({
                    title: "",
                    description: "",
                    date: new Date(),
                    category: "",
                })
            })
            .catch((err) => {
                if (axios.isAxiosError(err)) {
                    setError(err.response?.data?.message || "Erreur lors de la publication")
                } else {
                    setError("Une erreur inconnue est survenue")
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <ProtectedPage habilitation="ADMIN">
            <div className="container py-8 max-w-3xl mx-auto px-4">
                <Card className="border-blue-200 shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
                        <div className="flex items-center gap-2">
                            <NewspaperIcon className="h-6 w-6" />
                            <CardTitle>Publication d&#39;actualité</CardTitle>
                        </div>
                        <CardDescription className="text-blue-100">
                            Créez et publiez une nouvelle actualité sur le site de la mairie
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Titre de l&#39;article</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    value={newsData.title}
                                    onChange={handleChange}
                                    placeholder="Saisissez le titre de l'actualité"
                                    required
                                    className="border-blue-200"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    value={newsData.description}
                                    onChange={handleChange}
                                    placeholder="Saisissez le contenu de l'actualité"
                                    required
                                    className="min-h-[150px] border-blue-200"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="date">Date de publication</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className={cn(
                                                    "w-full justify-start text-left font-normal border-blue-200",
                                                    !newsData.date && "text-muted-foreground",
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {newsData.date ? (
                                                    format(newsData.date, "dd MMMM yyyy", { locale: fr })
                                                ) : (
                                                    <span>Sélectionnez une date</span>
                                                )}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar mode="single" selected={newsData.date} onSelect={handleDateChange} initialFocus />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="category">Catégorie</Label>
                                    <Select value={newsData.category} onValueChange={handleCategoryChange} required>
                                        <SelectTrigger className="border-blue-200">
                                            <SelectValue placeholder="Sélectionnez une catégorie" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem key={category.value} value={category.value}>
                                                    {category.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {message && (
                                <Alert className="bg-green-50 text-green-800 border-green-200">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <AlertDescription>{message}</AlertDescription>
                                </Alert>
                            )}

                            {error && (
                                <Alert variant="destructive">
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}

                            <CardFooter className="px-0 pt-2">
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:opacity-90"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Publication en cours...
                                        </>
                                    ) : (
                                        "Publier l'actualité"
                                    )}
                                </Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </ProtectedPage>
    )
}
