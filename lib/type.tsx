import {ReactNode} from "react";

export type LoginType = {
    username: string;
    password: string;
}

export type RegisterType = {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    firstname: string;
    lastname: string;
}

export type UserType = {
    id: number;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    user_type: string;
}

export type PostNews = {
    title: string;
    description: string;
    date: Date;
    category: string;
}

export type News = {
    id: number;
    title: string;
    description: string;
    date: Date;
    category: string;
}

export type PostIncident = {
    title: string;
    description: string;
    status: string;
    location: string;
    userId: number;
}

export type PostConnectedObject = {
    name: string;
    type: string;
    status: string;
    location: string;
}

export type AuthContextType = {
    user: UserType | undefined;
    login: (userData: UserType) => void;
    logout: () => void;
}

export type AuthProviderProps = {
    children: ReactNode;
}

export type ProtectedProps = {
    children: ReactNode;
    habilitation: string;
};
