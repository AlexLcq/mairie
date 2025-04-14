import { PrismaClient } from "@prisma/client";
import { IncidentType, CreateIncidentType } from "@/type/IncidentType";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    const incidents: IncidentType[] = await prisma.tableIncident.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            status: true,
            location: true,
            username: true,
        }
    });

    if (!incidents) {
        return NextResponse.json(
            { message: "No incident found" },
            { status: 404 }
        );
    }

    return NextResponse.json(
        { data: incidents },
        { status: 200 }
    );
}

export async function POST(request: NextRequest) {
    const incident: CreateIncidentType = await request.json();

    if (!incident) {
        return NextResponse.json(
            { message: "No incident provided" },
            { status: 400 }
        );
    }

    const incidentData = await prisma.tableIncident.create({
        data: {
            title: incident.title,
            description: incident.description,
            status: incident.status,
            location: incident.location,
            username: incident.username,
        }
    });

    return NextResponse.json(
        { message: `Incident créé avec succès : ${incidentData.title}` },
        { status: 201 }
    );
}

export async function PUT(request: NextRequest) {
    const incidents: IncidentType[] = await request.json();

    if (!incidents) {
        return NextResponse.json(
            { message: "No incidents provided" },
            { status: 400 }
        );
    }

    for (const incident of incidents) {
        await prisma.tableIncident.update({
            where: { id: incident.id },
            data: {
                title: incident.title,
                description: incident.description,
                status: incident.status,
                location: incident.location,
            }
        });
    }

    return NextResponse.json(
        { message: "Incidents updated" },
        { status: 200 }
    );
}
