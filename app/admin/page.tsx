"use client"

import { ProtectedPage } from "@/components/protectedPage"
import AdminUser from "@/components/AdminUser";
import AdminPostNews from "@/components/AdminPostNews";
import {CollapsibleSection} from "@/components/MenuDeroulant";

export default function Page() {

    return (
        <ProtectedPage habilitation="ADMIN">
            <CollapsibleSection title="PostNews" defaultOpen={false}>
                <AdminPostNews/>
            </CollapsibleSection>
            <CollapsibleSection title="User" defaultOpen={false}>
                <AdminUser/>
            </CollapsibleSection>
        </ProtectedPage>
    )
}
