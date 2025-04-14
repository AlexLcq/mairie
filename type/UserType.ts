export type UserType = {
    id: number;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    role: string;
    autorized: boolean;
}

export type RegisterType = {
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    comfirmPassword: string;
}

export type LoginType = {
    username: string;
    password: string;
}

