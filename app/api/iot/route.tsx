import { PrismaClient } from "@prisma/client";
import { CreateIotType, IotType } from "@/type/IotType";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    const iotDevices: IotType[] = await prisma.tableObject.findMany({
        select: {
            id: true,
            name: true,
            type: true,
            status: true,
            location: true,
        }
    });

    if (!iotDevices) {
        return NextResponse.json(
            { message: "No IoT device found" },
            { status: 404 }
        );
    }

    return NextResponse.json(
        { data: iotDevices },
        { status: 200 }
    );
}

export async function POST(request: NextRequest) {
    const iot: CreateIotType = await request.json();

    if (!iot) {
        return NextResponse.json(
            { message: "No IoT device data provided" },
            { status: 404 }
        );
    }

    const iotData = await prisma.tableObject.create({
        data: {
            name: iot.name,
            type: iot.type,
            status: iot.status,
            location: iot.location,
            lastUpdate: new Date(),
        }
    });

    return NextResponse.json(
        { message: `IoT device created successfully: ${iotData.name}` },
        { status: 201 }
    );
}

export async function PUT(request: NextRequest) {
    const iotDevices: IotType[] = await request.json();

    if (!iotDevices) {
        return NextResponse.json(
            { message: "No IoT device data provided" },
            { status: 404 }
        );
    }

    for (const iot of iotDevices) {
        await prisma.tableObject.update({
            where: { id: iot.id },
            data: {
                name: iot.name,
                type: iot.type,
                status: iot.status,
                location: iot.location,
                lastUpdate: new Date(),
            }
        });
    }

    return NextResponse.json(
        { message: "IoT devices updated" },
        { status: 200 }
    );
}
