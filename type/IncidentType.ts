export type IncidentType = {
    id: number;
    title: string;
    description: string;
    status: string;
    location: string;
    username: string;
}

export type CreateIncidentType = {
    title: string;
    description: string;
    status: string;
    location: string;
    username: string;
}
