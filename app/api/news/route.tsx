import {PostNews} from "@/lib/type";
import {NextRequest, NextResponse} from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {

    const news: PostNews = await request.json();

    try {
        if (news === undefined) {
            return NextResponse.json(
                {message: "Merci de renseigner une Actualité"},
                {status: 400}
            );
        }

        const Newnews = await prisma.news.create({
            data: {
                title: news.title,
                description: news.description,
                date: news.date,
                category: news.category
            }
        })

        return NextResponse.json({message: "Actualité ajouté avec succès", news: Newnews.title}, {status: 200});
    } catch (error) {
        console.error("Erreur lors de la création de la news:", error);
        return NextResponse.json({message: "Erreur lors de la création de la news"}, {status: 500});
    }

}

export async function GET() {
    const news = await prisma.news.findMany();

    if (news.length === 0 || !news) {
        return (
            NextResponse.json({message: "Erreur lors de l'obtention des Actualités"}, {status: 400})
        );
    }

    return (
        NextResponse.json({message : news}, {status: 200})
    );
}