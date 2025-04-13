import { NextResponse, NextRequest } from "next/server";
import {LoginType, UserType} from "@/lib/type";
import { compare } from "bcrypt";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const login: LoginType = await request.json();

        if (!login.username || !login.password) {
            return NextResponse.json(
                { message: "Merci de renseigner un nom d'utilisateur et un mot de passe !" },
                { status: 400 }
            );
        }

        const result = await prisma.user.findUnique({
            where: { username: login.username }
        });

        if (!result) {
            return NextResponse.json(
                { message: "Nom d'utilisateur ou mot de passe incorrect" },
                { status: 401 }
            );
        }

        const passwordMatch = await compare(login.password, result.password);

        if (passwordMatch) {
            const user : UserType = {...result};
            return NextResponse.json(
                { message : user },
                { status: 200 });
        } else {
            return NextResponse.json(
                { message: "Nom d'utilisateur ou mot de passe incorrect" },
                { status: 401 }
            );
        }
    } catch (error) {
        console.error("Erreur d'authentification:", error);
        return NextResponse.json({ message: "Erreur du serveur" }, { status: 500 });
    }
}