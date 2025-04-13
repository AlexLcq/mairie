"use client"

import { useAuth } from "@/hook/useAuth"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Bell, FileText, Newspaper } from "lucide-react"

export default function Accueil() {
    const { user } = useAuth()

    const mainSections = [
        {
            title: "Actualités",
            description: "Restez informé des dernières nouvelles et événements de la ville de Cergy",
            icon: <Newspaper className="h-12 w-12 text-blue-600" />,
            link: "/actualites",
            color: "from-blue-50 to-blue-100",
            buttonColor: "bg-blue-600 hover:bg-blue-700",
        },
        {
            title: "Services",
            description: "Découvrez et accédez à tous les services municipaux disponibles",
            icon: <FileText className="h-12 w-12 text-emerald-600" />,
            link: "/services",
            color: "from-emerald-50 to-emerald-100",
            buttonColor: "bg-emerald-600 hover:bg-emerald-700",
        },
        {
            title: "Incidents",
            description: "Signalez et suivez les incidents dans votre quartier",
            icon: <Bell className="h-12 w-12 text-amber-600" />,
            link: "/incidents",
            color: "from-amber-50 to-amber-100",
            buttonColor: "bg-amber-600 hover:bg-amber-700",
        },
    ]

    return (
        <div className="flex min-h-[calc(100vh-4rem)] flex-col">
            <main className="flex-1 flex flex-col justify-center">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-blue-50">
                    <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                    Bienvenue à la Mairie de Cergy
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                                    {user
                                        ? <>Bonjour <strong>{user.lastname.toUpperCase()} {user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1).toLowerCase()}</strong>, bienvenue sur le portail citoyen de Cergy.</>
                                        : "Votre portail citoyen pour accéder aux services de la ville."}
                                </p>
                            </div>
                            {!user && (
                                <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:opacity-90"
                                    >
                                        <Link href="/register">Créer un compte</Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg">
                                        <Link href="/login">Se connecter</Link>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Main Sections */}
                <section className="w-full py-12 md:py-24 bg-white flex-1 flex items-center">
                    <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-12">Nos services principaux</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {mainSections.map((section, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className={`bg-gradient-to-br ${section.color} p-6 flex justify-center`}>{section.icon}</div>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold mb-2 text-center">{section.title}</h3>
                                        <p className="text-gray-500 mb-6 text-center">{section.description}</p>
                                        <Button asChild className={`w-full ${section.buttonColor}`}>
                                            <Link href={section.link}>Accéder</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t py-6 bg-gray-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                        <p className="text-sm text-gray-500">© 2024 Mairie de Cergy. Tous droits réservés.</p>
                        <div className="flex items-center gap-4">
                            <Link href="/mentions-legales" className="text-sm text-gray-500 hover:text-blue-600">
                                Mentions légales
                            </Link>
                            <Link href="/confidentialite" className="text-sm text-gray-500 hover:text-blue-600">
                                Politique de confidentialité
                            </Link>
                            <Link href="/contact" className="text-sm text-gray-500 hover:text-blue-600">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
