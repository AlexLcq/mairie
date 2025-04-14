import {NextRequest, NextResponse} from "next/server";
import {UserType} from "@/type/UserType";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function GET() {
    const users : UserType[] = await prisma.tableUser.findMany({
        select: {
            id: true,
            username: true,
            firstname: true,
            lastname: true,
            email: true,
            role: true,
            autorized: true,
        }
    });

    if (!users) {
        return NextResponse.json(
            { message: "No user found" },
            { status: 404 }
        );
    }

    return NextResponse.json(
        { data: users },
        { status: 200 }
    );
}



export async function PUT(request: NextRequest) {
    const usersData = await request.json();

    if (!usersData) {
        return NextResponse.json(
            { message: "No user found" },
            { status: 404 }
        );
    }

    for (const user of usersData) {
        await prisma.tableUser.update({
            where: { id: user.id },
            data: {
                email: user.email,
                role: user.role,
                autorized: user.autorized,
            },
        });
    }

    return NextResponse.json(
        { mesage: "Users updated" },
        { status: 200 }
    );



}