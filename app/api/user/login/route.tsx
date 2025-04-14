import { NextResponse, NextRequest } from "next/server";
import { compare } from "bcrypt";
import { LoginType} from "@/type/UserType";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {

    const login: LoginType = await request.json();

    if (!login) {
        return NextResponse.json(
            { message: "No data" },
            { status: 400 }
        );
    }

    const userData = await prisma.tableUser.findUnique({
        where: { username: login.username },
        select: {
            id: true,
            username: true,
            email: true,
            firstname: true,
            lastname: true,
            role: true,
            autorized: true,
            password: true,
        }
    });

    if (!userData) {
        return NextResponse.json(
            { message: "Nom d'utilisateur ou mot de passe incorrect" },
            { status: 401 }
        );
    }

    const passwordMatch = await compare(login.password, userData.password);

    if (passwordMatch) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...user } = userData;

        return NextResponse.json(
            { data: user },
            { status: 200 }
        );
    } else {
        return NextResponse.json(
            { message: "Nom d'utilisateur ou mot de passe incorrect" },
            { status: 401 }
        );
    }
}
