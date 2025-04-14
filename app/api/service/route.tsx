import { PrismaClient } from "@prisma/client";
import {CreateServiceType, ServiceType} from "@/type/ServiceType";
import {NextRequest, NextResponse} from "next/server";


const prisma = new PrismaClient();

export async function GET(){
    const service : ServiceType[] = await prisma.tableService.findMany({
        select: {
            id: true,
            name: true,
            type: true,
            status: true,
            description: true,
            localisation: true
        }
    });

    if (!service) {
        return NextResponse.json(
            { message: "No service found" },
            { status: 404 }
        );
    }

    return NextResponse.json(
        { data: service },
        { status: 200 }
    );
}

export async function POST(request: NextRequest){

    const service : CreateServiceType = await request.json();

    if (!service) {
        return NextResponse.json(
            { message: "No service found" },
            { status: 404 }
        );
    }

    const serviceData = await prisma.tableService.create({
        data: {
            name: service.name,
            type: service.type,
            status: service.status,
            description: service.description,
            localisation: service.localisation,
        }
    })

    return NextResponse.json(
        { message: `Service créé avec succès : ${serviceData.name}` },
        { status: 201 }
    );

}

export async function PUT(request: NextRequest){
    const services : ServiceType[] = await request.json();

    if (!services) {
        return NextResponse.json(
            { message: "No service found" },
            { status: 404 }
        );
    }

    for (const service of services) {
        await prisma.tableService.update({
            where: { id: service.id },
            data: {
                name: service.name,
                type: service.type,
                status: service.status,
                description: service.description,
                localisation: service.localisation,
            }
        })
    }

    return NextResponse.json(
        { mesage: "Services updated" },
        { status: 200 }
    );

}