"use client"

import Link from "next/link"
import { useAuth } from "@/hook/useAuth"
import { ProtectedComponent } from "@/components/protectedComponent"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {Menu, LogOut, User, ChevronDown, Settings} from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
    const { user, logout } = useAuth()
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path

    const navItems = [
        { name: "Accueil", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Incidents", path: "/incidents" },
        { name: "Actualités", path: "/actualites" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
            <div className="container px-4 md:px-6 lg:px-8 mx-auto">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="ghost" size="icon" className="mr-2">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="lg:hidden">
                                <div className="flex flex-col gap-4 mt-8">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.path}
                                            href={item.path}
                                            onClick={() => setOpen(false)}
                                            className={`text-lg font-medium ${
                                                isActive(item.path) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}

                                    <ProtectedComponent habilitation={"ADMIN"}>
                                        <Link
                                            href="/admin"
                                            onClick={() => setOpen(false)}
                                            className={`text-lg font-medium ${
                                                isActive("/admin") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                                            }`}
                                        >
                                            Administration
                                        </Link>
                                    </ProtectedComponent>
                                </div>
                            </SheetContent>
                        </Sheet>

                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-2 rounded-md">
                                <span className="font-bold text-sm">CERGY</span>
                            </div>
                            <span className="font-bold text-xl hidden sm:inline-block">Mairie de Cergy</span>
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm font-medium transition-colors ${
                                    isActive(item.path) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <ProtectedComponent habilitation={"ADMIN"}>
                            <Link
                                href="/admin"
                                className={`text-sm font-medium transition-colors ${
                                    isActive("/admin") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                                }`}
                            >
                                Administration
                            </Link>
                        </ProtectedComponent>
                    </nav>

                    <div className="flex items-center gap-2">
                        {!user ? (
                            <>
                                <Button variant="ghost" asChild className="hidden sm:flex">
                                    <Link href="/login">Se connecter</Link>
                                </Button>
                                <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:opacity-90">
                                    <Link href="/register">S&#39;inscrire</Link>
                                </Button>
                            </>
                        ) : (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="flex items-center gap-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                                            <User className="h-4 w-4" />
                                        </div>
                                        <span className="hidden sm:inline-block font-medium">{user.username.toUpperCase()}</span>
                                        <p>[{user.user_type}]</p>
                                        <ChevronDown className="h-4 w-4 opacity-50" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <div className="flex flex-col space-y-1 p-2">
                                        <p className="font-medium">{user.username}</p>
                                        <p className="text-xs text-muted-foreground">{user.email}</p>
                                    </div>
                                    <DropdownMenuSeparator />
                                    <ProtectedComponent habilitation={"ADMIN"}>
                                        <DropdownMenuItem asChild>
                                            <Link href="/admin" className="cursor-pointer">
                                                Gestion des utilisateurs
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/admin" className="cursor-pointer">
                                                Administration
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                    </ProtectedComponent>
                                    <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                                        <Settings className="mr-2 h-4 w-4" />
                                        <Link href="/user" className="cursor-pointer">
                                            Réglages Utilisateurs
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600 focus:text-red-600">
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Déconnexion</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
