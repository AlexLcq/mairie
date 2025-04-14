import { PrismaClient } from "@prisma/client";
import { ActuType, CreateActuType } from "@/type/ActuType";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    const actus: ActuType[] = await prisma.tableActu.findMany({
        select: {
            id: true,
            category: true,
            title: true,
            description: true,
            date: true
        }
    });

    if (!actus) {
        return NextResponse.json(
            { message: "No actu found" },
            { status: 404 }
        );
    }

    return NextResponse.json(
        { data: actus },
        { status: 200 }
    );
}

export async function POST(request: NextRequest) {
    const actu: CreateActuType = await request.json();

    if (!actu) {
        return NextResponse.json(
            { message: "No actu provided" },
            { status: 400 }
        );
    }

    const actuData = await prisma.tableActu.create({
        data: {
            category: actu.category,
            title: actu.title,
            description: actu.description,
            date: actu.date,
        }
    });

    return NextResponse.json(
        { message: `Actu créée avec succès : ${actuData.title}` },
        { status: 201 }
    );
}

export async function PUT(request: NextRequest) {
    const actus: ActuType[] = await request.json();

    if (!actus) {
        return NextResponse.json(
            { message: "No actus provided" },
            { status: 400 }
        );
    }

    for (const actu of actus) {
        await prisma.tableActu.update({
            where: { id: actu.id },
            data: {
                category: actu.category,
                title: actu.title,
                description: actu.description,
            }
        });
    }

    return NextResponse.json(
        { message: "Actus updated" },
        { status: 200 }
    );
}
