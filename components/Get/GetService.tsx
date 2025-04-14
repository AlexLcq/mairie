"use client"

import type React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { AlertCircle, MapPin, Info } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"

type ServiceType = {
    id: number
    name: string
    type: string
    status: string
    description: string
    localisation: string
}

const ServiceList: React.FC = () => {
    const [services, setServices] = useState<ServiceType[]>([])
    const [filteredServices, setFilteredServices] = useState<ServiceType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [typeFilter, setTypeFilter] = useState<string>("")
    const [statusFilter, setStatusFilter] = useState<string>("")

    useEffect(() => {
        axios
            .get("/api/service")
            .then((res) => {
                setServices(res.data.data)
                setFilteredServices(res.data.data) // Initial display without filters
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message || "Une erreur est survenue lors du chargement des services")
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        // Filter services based on selected type and status
        let filtered = services

        if (typeFilter) {
            filtered = filtered.filter((service) => service.type === typeFilter)
        }

        if (statusFilter) {
            filtered = filtered.filter((service) => service.status === statusFilter)
        }

        setFilteredServices(filtered)
    }, [typeFilter, statusFilter, services])

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTypeFilter(event.target.value)
    }

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatusFilter(event.target.value)
    }

    // Helper function to get status badge color
    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active":
                return "bg-green-500 hover:bg-green-600"
            case "Inactive":
                return "bg-red-500 hover:bg-red-600"
            case "Pending":
                return "bg-yellow-500 hover:bg-yellow-600"
            default:
                return "bg-gray-500 hover:bg-gray-600"
        }
    }

    // Helper function to get type badge color
    const getTypeColor = (type: string) => {
        switch (type) {
            case "Internal":
                return "bg-purple-500 hover:bg-purple-600"
            case "External":
                return "bg-sky-500 hover:bg-sky-600"
            case "Support":
                return "bg-orange-500 hover:bg-orange-600"
            default:
                return "bg-gray-500 hover:bg-gray-600"
        }
    }

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">Incidents de la ville</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <Card key={i} className="p-6 shadow-md">
                            <Skeleton className="h-6 w-3/4 mb-4" />
                            <Skeleton className="h-4 w-1/2 mb-2" />
                            <Skeleton className="h-4 w-1/3 mb-2" />
                            <Skeleton className="h-20 w-full mb-4" />
                            <Skeleton className="h-4 w-2/3" />
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Incidents de la ville</h1>

                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Type d&#39;incident:</label>
                            <select
                                value={typeFilter}
                                onChange={handleTypeChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            >
                                <option value="">Tous les types</option>
                                <option value="Internal">Internal</option>
                                <option value="External">External</option>
                                <option value="Support">Support</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Statut:</label>
                            <select
                                value={statusFilter}
                                onChange={handleStatusChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            >
                                <option value="">Tous les statuts</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
                </div>

                {filteredServices.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-lg shadow-md">
                        <Info className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">Aucun incident trouvé</h3>
                        <p className="mt-2 text-gray-500">Essayez de modifier vos filtres pour voir plus de résultats.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredServices.map((service) => (
                            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h2 className="text-xl font-bold text-gray-800 line-clamp-2">{service.name}</h2>
                                        <Badge className={getStatusColor(service.status)}>{service.status}</Badge>
                                    </div>

                                    <Badge className={`mb-4 ${getTypeColor(service.type)}`}>{service.type}</Badge>

                                    <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

                                    <div className="flex items-center text-gray-500">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        <span className="text-sm">{service.localisation}</span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ServiceList
