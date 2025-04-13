import { RegisterType } from "@/lib/type";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const register: RegisterType = await request.json();

        if (!register.username || !register.password || !register.email || !register.firstname || !register.lastname) {
            return NextResponse.json({ message: "Merci de renseigner tous les champs" }, { status: 400 });
        }

        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { username: register.username },
                    { email: register.email }
                ]
            }
        });

        if (existingUser) {
            return NextResponse.json({
                message: "Un utilisateur avec ce nom d'utilisateur ou cet email existe déjà"
            }, { status: 409 });
        }

        const hashedPassword = await hash(register.password, 10);

        const user = await prisma.user.create({
            data: {
                username: register.username,
                password: hashedPassword,
                email: register.email,
                firstname: register.firstname,
                lastname: register.lastname,
                user_type: "USER",
            },
        });

        return NextResponse.json({message: "Utilisateur créé avec succès", user: user.username}, { status: 201 });
    } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
        return NextResponse.json({message: "Erreur lors de la création de l'utilisateur"}, { status: 500 });
    }
}