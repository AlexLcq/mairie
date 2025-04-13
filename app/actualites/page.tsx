"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Loader2, Filter, Calendar, Tag } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface News {
    id: string | number
    title: string
    description: string
    date: Date
    category: string
}

const categoryColors: Record<string, string> = {
    evenement: "bg-blue-100 text-blue-800 hover:bg-blue-100/80 border-blue-200",
    travaux: "bg-amber-100 text-amber-800 hover:bg-amber-100/80 border-amber-200",
    culture: "bg-purple-100 text-purple-800 hover:bg-purple-100/80 border-purple-200",
    sport: "bg-green-100 text-green-800 hover:bg-green-100/80 border-green-200",
    education: "bg-cyan-100 text-cyan-800 hover:bg-cyan-100/80 border-cyan-200",
    environnement: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100/80 border-emerald-200",
    default: "bg-gray-100 text-gray-800 hover:bg-gray-100/80 border-gray-200",
}

const categories = [
    { value: "all", label: "Toutes les catégories" },
    { value: "evenement", label: "Événement" },
    { value: "travaux", label: "Travaux" },
    { value: "culture", label: "Culture" },
    { value: "sport", label: "Sport" },
    { value: "education", label: "Éducation" },
    { value: "environnement", label: "Environnement" },
]

export default function ActualitesPage() {
    const [news, setNews] = useState<News[]>([])
    const [filteredNews, setFilteredNews] = useState<News[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [sortNewest, setSortNewest] = useState(true)

    useEffect(() => {
        setLoading(true)
        setError(null)

        axios
            .get("/api/news")
            .then((response) => {
                const newsWithDates = response.data.message.map(
                    (item: { id: string | number; title: string; description: string; date: string; category: string }) => ({
                        ...item,
                        date: new Date(item.date),
                    }),
                )
                setNews(newsWithDates)
                setFilteredNews(sortNews(newsWithDates, selectedCategory, sortNewest))
            })
            .catch(() => {
                setError("Erreur lors du chargement des actualités")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        setFilteredNews(sortNews(news, selectedCategory, sortNewest))
    }, [news, selectedCategory, sortNewest])

    const sortNews = (newsArray: News[], category: string, newest: boolean) => {
        let filtered = [...newsArray]

        // Filter by category
        if (category !== "all") {
            filtered = filtered.filter((item) => item.category === category)
        }

        // Sort by date
        filtered.sort((a, b) => {
            return newest ? b.date.getTime() - a.date.getTime() : a.date.getTime() - b.date.getTime()
        })

        return filtered
    }

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value)
    }

    const toggleSortOrder = () => {
        setSortNewest(!sortNewest)
    }

    const getCategoryColor = (category: string) => categoryColors[category] || categoryColors.default

    const formatDate = (date: Date) => format(date, "dd MMMM yyyy", { locale: fr })

    return (
        <div className="container mx-auto py-8">
            <Card className="border-blue-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
                    <CardTitle className="text-2xl">Actualités de la ville</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="flex flex-col gap-4 mb-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <p className="text-gray-600">Retrouvez toutes les dernières actualités et événements de la ville</p>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={toggleSortOrder}
                                className="flex items-center gap-1 border-blue-200"
                            >
                                {sortNewest ? "Plus récent d'abord" : "Plus ancien d'abord"}
                            </Button>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Filter className="h-4 w-4 text-blue-600" />
                                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                                    <SelectTrigger className="w-full max-w-xs border-blue-200">
                                        <SelectValue placeholder="Filtrer par catégorie" />
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
                    </div>

                    {loading && (
                        <div className="flex justify-center items-center py-8">
                            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                            <span className="ml-2 text-lg">Chargement des actualités...</span>
                        </div>
                    )}

                    {error && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {!loading && filteredNews.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-500">Aucune actualité trouvée</p>
                            {selectedCategory !== "all" && (
                                <Button variant="outline" onClick={() => setSelectedCategory("all")} className="mt-4">
                                    Voir toutes les actualités
                                </Button>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {filteredNews.map((actu) => (
                                <Card key={actu.id} className="border-blue-100 overflow-hidden">
                                    <CardHeader className="bg-blue-50 pb-2">
                                        <CardTitle className="text-xl text-blue-800">{actu.title}</CardTitle>
                                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mt-2">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{formatDate(actu.date)}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Tag className="h-4 w-4" />
                                                <Badge variant="outline" className={getCategoryColor(actu.category)}>
                                                    {categories.find((c) => c.value === actu.category)?.label || actu.category}
                                                </Badge>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        <p>{actu.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
