"use client"

import type React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Loader2, Cpu, Wifi, MapPin } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

type IotType = {
    id: number
    name: string
    type: string
    status: string
    location: string
}

const IotList: React.FC = () => {
    const [iotDevices, setIotDevices] = useState<IotType[]>([])
    const [filteredIotDevices, setFilteredIotDevices] = useState<IotType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [typeFilter, setTypeFilter] = useState<string>("all")
    const [statusFilter, setStatusFilter] = useState<string>("all")

    useEffect(() => {
        axios
            .get("/api/iot")
            .then((res) => {
                setIotDevices(res.data.data)
                setFilteredIotDevices(res.data.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message || "Une erreur est survenue lors du chargement des appareils IoT")
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        let filtered = iotDevices

        // Filter IoT devices based on selected type and status
        if (typeFilter !== "all") {
            filtered = filtered.filter((iot) => iot.type === typeFilter)
        }

        if (statusFilter !== "all") {
            filtered = filtered.filter((iot) => iot.status === statusFilter)
        }

        setFilteredIotDevices(filtered)
    }, [typeFilter, statusFilter, iotDevices])

    const handleTypeChange = (value: string) => {
        setTypeFilter(value)
    }

    const handleStatusChange = (value: string) => {
        setStatusFilter(value)
    }

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "active":
                return "bg-green-100 text-green-800"
            case "inactive":
                return "bg-gray-100 text-gray-800"
            case "faulty":
                return "bg-red-100 text-red-800"
            default:
                return "bg-blue-100 text-blue-800"
        }
    }

    const getTypeIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case "sensor":
                return <Cpu className="h-4 w-4 mr-1" />
            case "actuator":
                return <Wifi className="h-4 w-4 mr-1" />
            case "gateway":
                return <MapPin className="h-4 w-4 mr-1" />
            default:
                return null
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
                <span className="ml-2 text-gray-500">Chargement des appareils IoT...</span>
            </div>
        )
    }

    if (error) {
        return (
            <Alert variant="destructive" className="max-w-2xl mx-auto mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Appareils IoT</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type d&#39;appareil</label>
                    <Select value={typeFilter} onValueChange={handleTypeChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Tous les types" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Tous les types</SelectItem>
                            <SelectItem value="Sensor">Sensor</SelectItem>
                            <SelectItem value="Actuator">Actuator</SelectItem>
                            <SelectItem value="Gateway">Gateway</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Statut</label>
                    <Select value={statusFilter} onValueChange={handleStatusChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Tous les statuts" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Tous les statuts</SelectItem>
                            <SelectItem value="Active">Active</SelectItem>
                            <SelectItem value="Inactive">Inactive</SelectItem>
                            <SelectItem value="Faulty">Faulty</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {filteredIotDevices.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Aucun appareil ne correspond à vos critères de recherche.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredIotDevices.map((iot) => (
                        <Card key={iot.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-xl">{iot.name}</CardTitle>
                                    <Badge className={getStatusColor(iot.status)}>{iot.status}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col space-y-3 text-sm">
                                    <div className="flex items-center">
                                        {getTypeIcon(iot.type)}
                                        <span className="font-medium">Type: </span>
                                        <span className="ml-1">{iot.type}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        <span className="font-medium">Emplacement: </span>
                                        <span className="ml-1">{iot.location}</span>
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

export default IotList
