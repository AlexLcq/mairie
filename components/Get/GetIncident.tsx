"use client"

import type React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { MapPin, AlertCircle, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

type IncidentType = {
    id: number
    title: string
    description: string
    status: string
    location: string
    username: string
}

const IncidentList: React.FC = () => {
    const [incidents, setIncidents] = useState<IncidentType[]>([])
    const [filteredIncidents, setFilteredIncidents] = useState<IncidentType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [statusFilter, setStatusFilter] = useState<string>("all")
    const [locationFilter, setLocationFilter] = useState<string>("all")

    useEffect(() => {
        axios
            .get("/api/incident")
            .then((res) => {
                setIncidents(res.data.data)
                setFilteredIncidents(res.data.data) // Initial display without filters
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message || "Une erreur est survenue lors du chargement des incidents")
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        // Filter incidents based on the selected status and location
        let filtered = incidents

        if (statusFilter !== "all") {
            filtered = filtered.filter((incident) => incident.status === statusFilter)
        }

        if (locationFilter !== "all") {
            filtered = filtered.filter((incident) => incident.location === locationFilter)
        }

        setFilteredIncidents(filtered)
    }, [statusFilter, locationFilter, incidents])

    const handleStatusChange = (value: string) => {
        setStatusFilter(value)
    }

    const handleLocationChange = (value: string) => {
        setLocationFilter(value)
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Open":
                return "bg-blue-100 text-blue-800 border-blue-200"
            case "Closed":
                return "bg-gray-100 text-gray-800 border-gray-200"
            case "In Progress":
                return "bg-amber-100 text-amber-800 border-amber-200"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-3xl font-bold mb-6">Incidents</h1>
                <div className="grid grid-cols-1 gap-4">
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className="w-full">
                            <CardHeader className="pb-2">
                                <Skeleton className="h-6 w-3/4 mb-2" />
                                <Skeleton className="h-4 w-1/2" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-4 w-full mb-2" />
                                <Skeleton className="h-4 w-full mb-2" />
                                <Skeleton className="h-4 w-2/3" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                        <CardTitle className="flex items-center text-red-700">
                            <AlertCircle className="mr-2 h-5 w-5" />
                            Erreur
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-red-700">{error}</p>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">Incidents</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Status:</label>
                    <Select value={statusFilter} onValueChange={handleStatusChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Tous les statuts" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Tous</SelectItem>
                            <SelectItem value="Open">Open</SelectItem>
                            <SelectItem value="Closed">Closed</SelectItem>
                            <SelectItem value="In Progress">In Progress</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Location:</label>
                    <Select value={locationFilter} onValueChange={handleLocationChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Toutes les locations" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Toutes les locations</SelectItem>
                            <SelectItem value="Paris">Paris</SelectItem>
                            <SelectItem value="London">London</SelectItem>
                            <SelectItem value="New York">New York</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {filteredIncidents.length === 0 ? (
                <Card className="w-full">
                    <CardContent className="pt-6 text-center text-muted-foreground">
                        Aucun incident ne correspond à vos critères de recherche.
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {filteredIncidents.map((incident) => (
                        <Card key={incident.id} className="w-full">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-xl">{incident.title}</CardTitle>
                                    <Badge className={`${getStatusColor(incident.status)}`}>{incident.status}</Badge>
                                </div>
                                <CardDescription className="mt-1">{incident.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                    <div className="flex items-center text-muted-foreground">
                                        <MapPin className="mr-2 h-4 w-4" />
                                        {incident.location}
                                    </div>
                                    <div className="flex items-center text-muted-foreground">
                                        <User className="mr-2 h-4 w-4" />
                                        {incident.username}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

export default IncidentList
