"use client"

import { useState, useEffect } from "react";

import {AuthContextType, AuthProviderProps} from "@/type/type";
import {UserType} from "@/type/UserType";
import { createContext } from "react";


export const AuthContext = createContext<AuthContextType | null>(null);

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

