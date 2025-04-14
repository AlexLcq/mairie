"use client"

import {useAuth} from "@/hook/useAuth";
import {ProtectedProps} from "@/type/type";

export const ProtectedComponent = ({ children, habilitation }: ProtectedProps) => {

    const {user} = useAuth();

    if (user?.role !== habilitation || !user){
        return null;
    }

    return children;
};