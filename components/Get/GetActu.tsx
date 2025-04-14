"use client"

import type React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { CalendarIcon, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type ActuType = {
    id: number
    category: string
    title: string
    description: string
    date: Date
}

const ActuList: React.FC = () => {
    const [actuList, setActuList] = useState<ActuType[]>([])
    const [filteredActuList, setFilteredActuList] = useState<ActuType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [categoryFilter, setCategoryFilter] = useState<string>("")
    const [dateFilter, setDateFilter] = useState<string>("")
    const [calendarOpen, setCalendarOpen] = useState(false)

    useEffect(() => {
        axios
            .get("/api/actu")
            .then((res) => {
                setActuList(res.data.data)
                setFilteredActuList(res.data.data) // Initial display without filters
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message || "Une erreur est survenue lors du chargement des actualités")
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        let filtered = actuList

        // Filter by category
        if (categoryFilter) {
            filtered = filtered.filter((actu) => actu.category === categoryFilter)
        }

        // Filter by date if selected
        if (dateFilter) {
            const selectedDate = new Date(dateFilter)
            filtered = filtered.filter((actu) => new Date(actu.date).toDateString() === selectedDate.toDateString())
        }

        setFilteredActuList(filtered)
    }, [categoryFilter, dateFilter, actuList])

    const handleCategoryChange = (value: string) => {
        setCategoryFilter(value)
    }

    const handleDateChange = (date: Date | undefined) => {
        setDateFilter(date ? date.toISOString() : "")
        setCalendarOpen(false)
    }

    const handleResetFilters = () => {
        setCategoryFilter("")
        setDateFilter("")
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Technology":
                return "bg-purple-100 text-purple-800"
            case "Health":
                return "bg-green-100 text-green-800"
            case "Sports":
                return "bg-blue-100 text-blue-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
                <Loader2 className="h-10 w-10 text-gray-400 animate-spin mb-4" />
                <p className="text-gray-500 font-medium">Chargement des actualités...</p>
            </div>
        )
    }

    if (error) {
        return (
            <Alert variant="destructive" className="my-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Erreur</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Actualités de votre ville</h1>

            <div className="bg-white rounded-lg shadow-sm border p-4 mb-8">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    <div className="w-full md:w-auto">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                        <Select value={categoryFilter} onValueChange={handleCategoryChange}>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="Toutes les catégories" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Toutes</SelectItem>
                                <SelectItem value="Technology">Technology</SelectItem>
                                <SelectItem value="Health">Health</SelectItem>
                                <SelectItem value="Sports">Sports</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full md:w-auto">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="w-full md:w-[240px] justify-start text-left font-normal">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {dateFilter ? (
                                        format(new Date(dateFilter), "dd MMMM yyyy", { locale: fr })
                                    ) : (
                                        <span>Sélectionner une date</span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={dateFilter ? new Date(dateFilter) : undefined}
                                    onSelect={handleDateChange}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    {(categoryFilter || dateFilter) && (
                        <Button variant="ghost" onClick={handleResetFilters} className="mt-4 md:mt-6">
                            Réinitialiser les filtres
                        </Button>
                    )}
                </div>
            </div>

            {filteredActuList.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed">
                    <p className="text-gray-500">Aucune actualité ne correspond à vos critères</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredActuList.map((actu) => (
                        <Card key={actu.id} className="overflow-hidden transition-all duration-200 hover:shadow-md">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <Badge className={`${getCategoryColor(actu.category)}`}>{actu.category}</Badge>
                                    <CardDescription>
                                        {new Date(actu.date).toLocaleDateString("fr-FR", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </CardDescription>
                                </div>
                                <CardTitle className="mt-2 text-xl">{actu.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">{actu.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ActuList
