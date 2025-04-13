import {PostIncident} from "@/lib/type";
import {NextRequest, NextResponse} from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {

    const incident: PostIncident = await request.json();

    try {
        if (incident === undefined) {
            return NextResponse.json(
                {message: "Merci de renseigner un Incident"},
                {status: 400}
            );
        }

        const Incidents = await prisma.incident.create({
            data: {
                title: incident.title,
                description: incident.description,
                status: incident.status,
                location: incident.location,
                userId: incident.userId,
            }
        })

        return NextResponse.json({message: "Incident ajouté avec succès", incident: Incidents.title}, {status: 200});
    } catch (error) {
        console.error("Erreur lors de la création de l'incident:", error);
        return NextResponse.json({message: "Erreur lors de la création de l'incident"}, {status: 500});
    }

}

export async function GET() {
    const incident = await prisma.incident.findMany();

    if (incident.length === 0 || !incident) {
        return (
            NextResponse.json({message: "Erreur lors de l'obtention des Incidents"}, {status: 400})
        );
    }

    return (
        NextResponse.json({message : incident}, {status: 200})
    );
}