"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import type { UserType } from "@/type/UserType"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function UserManagement() {
    const [users, setUsers] = useState<UserType[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    useEffect(() => {
        axios
            .get<{ data: UserType[] }>("/api/user")
            .then((res) => {
                setUsers(res.data.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [])

    const handleChange = (id: number, field: keyof UserType, value: string | boolean) => {
        setUsers((prev) => prev.map((user) => (user.id === id ? { ...user, [field]: value } : user)))
    }

    const handleSave = () => {
        setSaving(true)
        setError(null)
        setSuccess(null)

        axios
            .put("/api/user", users)
            .then(() => {
                setSuccess("Modifications enregistrées avec succès.")
                setSaving(false)
            })
            .catch((error) => {
                setError(error)
                setSaving(false)
            })
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
                    <p className="text-sm text-gray-500">Chargement des utilisateurs...</p>
                </div>
            </div>
        )
    }

    return (
        <Card className="w-full shadow-sm">
            <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Gestion des utilisateurs</CardTitle>
            </CardHeader>
            <CardContent>
                {error && (
                    <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {success && (
                    <Alert className="mb-4 border-green-200 bg-green-50 text-green-800">
                        <CheckCircle2 className="h-4 w-4" />
                        <AlertDescription>{success}</AlertDescription>
                    </Alert>
                )}

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50">
                                <TableHead className="font-medium">Username</TableHead>
                                <TableHead className="font-medium">Email</TableHead>
                                <TableHead className="font-medium">Role</TableHead>
                                <TableHead className="font-medium text-center">Autorisé</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.username}</TableCell>
                                    <TableCell>
                                        <Input
                                            className="h-9"
                                            value={user.email}
                                            onChange={(e) => handleChange(user.id, "email", e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Select value={user.role} onValueChange={(value) => handleChange(user.id, "role", value)}>
                                            <SelectTrigger className="h-9">
                                                <SelectValue placeholder="Sélectionner un rôle" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ADMIN">ADMIN</SelectItem>
                                                <SelectItem value="USER">USER</SelectItem>
                                                <SelectItem value="SUPER">SUPER</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <div className="flex justify-center">
                                            <Checkbox
                                                checked={user.autorized}
                                                onCheckedChange={(checked) => handleChange(user.id, "autorized", checked === true)}
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="mt-4 flex justify-end">
                    <Button onClick={handleSave} disabled={saving} className="px-6">
                        {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Sauvegarder
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
