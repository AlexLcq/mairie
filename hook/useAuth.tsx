import {useContext} from "react";
import {AuthContext} from "@/provider/AuthProvider";




export const useAuth = () => {
    const contexte = useContext(AuthContext);
    if (!contexte) throw new Error("useAuth must be used within an AuthProvider");
    return contexte;
}