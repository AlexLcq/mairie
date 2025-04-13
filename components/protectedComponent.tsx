import {ProtectedProps} from "@/lib/type";
import {useAuth} from "@/hook/useAuth";

export const ProtectedComponent = ({ children, habilitation }: ProtectedProps) => {

    const {user} = useAuth();

    if (user?.user_type !== habilitation || !user){
        return null;
    }

    return children;
};