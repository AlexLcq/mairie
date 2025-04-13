"use client"

import { useEffect, useState } from "react"
import { UserType } from "@/lib/type"
import axios from "axios"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Loader2, Save, UserCog } from 'lucide-react'

export default function AdminUser() {
    const [users, setUsers] = useState<UserType[]>([])
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const [changedUsers, setChangedUsers] = useState<number[]>([])

    useEffect(() => {
        setLoading(true)
        setErrors(null)

        axios
            .get("/api/user")
            .then((response) => {
                setUsers(response.data.message)
            })
            .catch(() => {
                setErrors("Erreur lors du chargement des utilisateurs")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const submit = (user: UserType) => {
        console.log(user)
        // Simuler une mise à jour réussie
        setSuccess(`Le rôle de ${user.username} a été mis à jour avec succès`)
        setChangedUsers((prev) => prev.filter((id) => id !== user.id))
    }

    const submitAll = (users: UserType[]) => {
        console.log(users)
        // Simuler une mise à jour réussie
        setSuccess("Tous les rôles ont été mis à jour avec succès")
        setChangedUsers([])
    }

    const submitChange = (newRole: string, userId: number) => {
        // Mettre à jour l'état des utilisateurs avec le nouveau rôle
        setUsers((prevUsers) => prevUsers.map((user) => (user.id === userId ? { ...user, user_type: newRole } : user)))

        // Ajouter l'ID de l'utilisateur à la liste des utilisateurs modifiés
        if (!changedUsers.includes(userId)) {
            setChangedUsers((prev) => [...prev, userId])
        }
    }



    const getRoleBadgeColor = (role: string) => {
        switch (role) {
            case "ADMIN":
                return "bg-red-100 text-red-800 hover:bg-red-100/80 border-red-200"
            case "SUPER":
                return "bg-amber-100 text-amber-800 hover:bg-amber-100/80 border-amber-200"
            default:
                return "bg-blue-100 text-blue-800 hover:bg-blue-100/80 border-blue-200"
        }
    }

    return (
        <div className="container py-8 max-w-7xl mx-auto px-4">
            <Card className="border-blue-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <CardTitle className="text-2xl flex items-center gap-2">
                                <UserCog className="h-6 w-6" />
                                Gestion des utilisateurs
                            </CardTitle>
                            <p className="text-blue-100 mt-1">
                                Gérez les rôles et les permissions des utilisateurs de la plateforme
                            </p>
                        </div>

                        {changedUsers.length > 0 && (
                            <Button
                                onClick={() => submitAll(users)}
                                disabled={changedUsers.length === 0}
                                className="bg-white text-blue-800 hover:bg-blue-50 w-full md:w-auto"
                            >
                                <Save className="mr-2 h-4 w-4" />
                                Enregistrer tous les changements ({changedUsers.length})
                            </Button>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="p-6">
                    {loading && (
                        <div className="flex justify-center items-center py-8">
                            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                            <span className="ml-2 text-lg">Chargement des utilisateurs...</span>
                        </div>
                    )}

                    {errors && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertDescription>{errors}</AlertDescription>
                        </Alert>
                    )}

                    {success && (
                        <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
                            <AlertDescription>{success}</AlertDescription>
                        </Alert>
                    )}

                    {!loading && users.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-500">Aucun utilisateur trouvé</p>
                        </div>
                    ) : (
                        <div className="rounded-lg border border-blue-200 overflow-hidden">
                            <Table>
                                <TableHeader className="bg-blue-50">
                                    <TableRow>
                                        <TableHead className="text-blue-800 font-semibold">Username</TableHead>
                                        <TableHead className="text-blue-800 font-semibold">Email</TableHead>
                                        <TableHead className="text-blue-800 font-semibold">Prénom</TableHead>
                                        <TableHead className="text-blue-800 font-semibold">Nom</TableHead>
                                        <TableHead className="text-blue-800 font-semibold">Role</TableHead>
                                        <TableHead className="text-blue-800 font-semibold text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {users.map((user) => (
                                        <TableRow key={user.id} className={changedUsers.includes(user.id) ? "bg-blue-50/50" : ""}>
                                            <TableCell className="font-medium">{user.username}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.firstname}</TableCell>
                                            <TableCell>{user.lastname}</TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className={getRoleBadgeColor(user.user_type)}>
                                                    {user.user_type}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Select
                                                        defaultValue={user.user_type}
                                                        onValueChange={(value) => submitChange(value, user.id)}
                                                    >
                                                        <SelectTrigger className="w-[110px] border-blue-200">
                                                            <SelectValue placeholder="Sélectionner" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="USER">USER</SelectItem>
                                                            <SelectItem value="SUPER">SUPER</SelectItem>
                                                            <SelectItem value="ADMIN">ADMIN</SelectItem>
                                                        </SelectContent>
                                                    </Select>

                                                    {changedUsers.includes(user.id) && (
                                                        <Button
                                                            size="sm"
                                                            onClick={() => submit(user)}
                                                            className="bg-blue-600 hover:bg-blue-700"
                                                        >
                                                            Soumettre
                                                        </Button>
                                                    )}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
