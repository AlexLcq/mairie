export type ServiceType = {
    id: number;
    name: string;
    type: string;
    status: string;
    description: string;
    localisation: string;
}

export type CreateServiceType = {
    name: string;
    type: string;
    status: string;
    description: string;
    localisation: string;
}