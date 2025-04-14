export type IotType = {
    id: number;
    name: string;
    type: string;
    status: string;
    location: string;
}

export type CreateIotType = {
    name: string;
    type: string;
    status: string;
    location: string;
}