"use client"

import UserManagement from "@/components/Admin/UserAdmin";
import {ProtectedPage} from "@/components/protectedPage";


export default function AdminPage() {


    return (
        <>
            <ProtectedPage habilitation="ADMIN">
                <UserManagement/>
            </ProtectedPage>

        </>


    )
}