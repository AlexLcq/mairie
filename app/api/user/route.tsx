import { PrismaClient } from "@/generated/prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    const users = await prisma.user.findMany();

    if (!users || users.length === 0) {
        return NextResponse.json(
            { message: "No user found." },
            { status: 404 }
        );
    }

    return NextResponse.json(
        { message : users },
        { status: 200 }
    );
}