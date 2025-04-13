"use client"

import { useState, useEffect } from "react";
import { UserType, AuthProviderProps } from "@/lib/type";
import {AuthContext} from "@/context/AuthContext";



export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [user, setUser] = useState<UserType>();

    const login = (userData: UserType) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    }

    const logout = () => {
        setUser(undefined);
        localStorage.removeItem("user");
    }

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

