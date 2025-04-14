"use client"

import type React from "react"
import { useState } from "react"
import axios from "axios"
import { useRouter, useSearchParams } from "next/navigation"

import { useAuth } from "@/hook/useAuth"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle } from "lucide-react"
import {LoginType} from "@/type/UserType";

export default function LoginPage() {
    const [loginData, setLoginData] = useState<LoginType>({
        username: "",
        password: "",
    })
    const [errors, setErrors] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()

    const router = useRouter()
    const searchParams = useSearchParams()
    const registered = searchParams.get("registered")
    const username = searchParams.get("username")

    const submitLogin = (formulaire: React.FormEvent<HTMLFormElement>) => {
        formulaire.preventDefault()
        setLoading(true)
        setErrors(null)

        axios
            .post("/api/user/login", loginData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response.data.data)
                login(response.data.data)
                router.push("/")
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) {
                    setErrors(error.response?.data?.message || "Échec de la connexion")
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
        setLoginData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-muted/30 px-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Se connecter</CardTitle>
                    <CardDescription className="text-center">Entrez vos identifiants pour accéder à votre compte</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    {registered && (
                        <Alert className="bg-green-50 text-green-800 border-green-200">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <AlertDescription>
                                Inscription réussie ! Vous pouvez maintenant vous connecter
                                {username ? ` avec le nom d'utilisateur ${username}` : ""}.
                            </AlertDescription>
                        </Alert>
                    )}

                    <form onSubmit={submitLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Nom dutilisateur</Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                value={loginData.username}
                                onChange={handleChange}
                                required
                                placeholder="Entrez votre nom d'utilisateur"
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Mot de passe</Label>
                            </div>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={loginData.password}
                                onChange={handleChange}
                                required
                                placeholder="Entrez votre mot de passe"
                                className="w-full"
                            />
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
                                    Connexion en cours...
                                </>
                            ) : (
                                "Se connecter"
                            )}
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="flex flex-col space-y-4">
                    <div className="text-center text-sm">
                        Vous navez pas de compte ?{" "}
                        <Link href="/register" className="text-primary hover:underline font-medium">
                            Créer un compte
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
