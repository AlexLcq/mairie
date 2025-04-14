import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
    const { id } = params;
    const userData = await request.json();

    if (!userData) {
        return NextResponse.json(
            { message: "No user found" },
            { status: 400 }
        );
    }


    await prisma.tableUser.update({
        where: { id: id },
        data: {
            email: userData.email,
            role: userData.role,
            autorized: userData.autorized,
        },
    });

    return NextResponse.json(
        { mesage: "User updated" },
        { status: 200 }
    );
}