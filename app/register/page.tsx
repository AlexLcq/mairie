"use client"

import type React from "react"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import type { RegisterType } from "@/lib/type"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"

export default function RegisterPage() {
    const [registerData, setRegisterData] = useState<RegisterType>({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        firstname: "",
        lastname: "",
    })
    const [errors, setErrors] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const submitRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setErrors(null)

        if (registerData.password !== registerData.confirmPassword) {
            setErrors("Les mots de passe ne correspondent pas")
            setLoading(false)
            return
        }

        axios
            .post("/api/register", registerData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((reponse) => {
                router.push(`/login?registered=true&username=${reponse.data.user}`)
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) {
                    setErrors(error.response?.data?.message || "Échec de l'inscription")
                } else {
                    setErrors("Une erreur est survenue")
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setRegisterData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-muted/30 px-4 py-8">
            <Card className="w-full max-w-lg">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Créer un compte</CardTitle>
                    <CardDescription className="text-center">
                        Remplissez le formulaire ci-dessous pour créer votre compte
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={submitRegister} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstname">Prénom</Label>
                                <Input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    value={registerData.firstname}
                                    onChange={handleChange}
                                    required
                                    placeholder="Entrez votre prénom"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="lastname">Nom</Label>
                                <Input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    value={registerData.lastname}
                                    onChange={handleChange}
                                    required
                                    placeholder="Entrez votre nom"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={registerData.email}
                                onChange={handleChange}
                                required
                                placeholder="exemple@email.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="username">Nom d'utilisateur</Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                value={registerData.username}
                                onChange={handleChange}
                                required
                                placeholder="Choisissez un nom d'utilisateur"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="password">Mot de passe</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={registerData.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="Créez un mot de passe"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={registerData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    placeholder="Confirmez votre mot de passe"
                                />
                            </div>
                        </div>

                        {errors && (
                            <Alert variant="destructive">
                                <AlertDescription>{errors}</AlertDescription>
                            </Alert>
                        )}

                        <Button type="submit" disabled={loading} className="w-full">
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Création en cours...
                                </>
                            ) : (
                                "S'inscrire"
                            )}
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="flex justify-center">
                    <div className="text-center text-sm">
                        Vous avez déjà un compte ?{" "}
                        <Link href="/login" className="text-primary hover:underline font-medium">
                            Se connecter
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
