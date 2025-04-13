import {PostConnectedObject} from "@/lib/type";
import {NextRequest, NextResponse} from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {

    const CoObject: PostConnectedObject = await request.json();

    try {
        if (CoObject === undefined) {
            return NextResponse.json(
                {message: "Merci de renseigner l'objet connecté"},
                {status: 400}
            );
        }

        const ObjetConnecte = await prisma.connectedObject.create({
            data: {
                name: CoObject.name,
                type: CoObject.type,
                status: CoObject.status,
                location: CoObject.location,
            }
        })

        return NextResponse.json({message: "Objet connecté ajouté avec succès", CoObject: ObjetConnecte.name}, {status: 200});
    } catch (error) {
        console.error("Erreur lors de la création de l'objet connecté:", error);
        return NextResponse.json({message: "Erreur lors de la création de l'objet connecté"}, {status: 500});
    }

}

export async function GET() {
    const CoObject = await prisma.connectedObject.findMany();

    if (CoObject.length === 0 || !CoObject[0]) {
        return (
            NextResponse.json({message: "Erreur lors de l'obtention des objets connectés"}, {status: 400})
        );
    }

    return (
        NextResponse.json({message : CoObject}, {status: 200})
    );
}