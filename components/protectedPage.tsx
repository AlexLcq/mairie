"use client"

import { useRouter } from "next/navigation";
import { useAuth } from "@/hook/useAuth";
import {useEffect} from "react";
import {ProtectedProps} from "@/type/type";

export function ProtectedPage({ children, habilitation }: ProtectedProps) {
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        if (user && user.role !== habilitation || !user) {
            router.push("/");
        }
    }, [user, habilitation, router]);

    return <>{children}</>
}
