import {UserType} from "@/type/UserType";
import {ReactNode} from "react";

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
