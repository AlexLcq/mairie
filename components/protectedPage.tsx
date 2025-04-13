"use client"

import { useRouter } from "next/navigation";
import { useAuth } from "@/hook/useAuth";
import {ProtectedProps} from "@/lib/type";
import {useEffect} from "react";

export function ProtectedPage({ children, habilitation }: ProtectedProps) {
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        if (user && user.user_type !== habilitation || !user) {
            router.push("/");
        }
    }, [user, habilitation, router]);

    return <>{children}</>
}
