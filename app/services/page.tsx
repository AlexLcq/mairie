"use client"

import {ProtectedComponent} from "@/components/protectedComponent";
import CreateServiceForm from "@/components/Post/PostService";
import ServiceList from "@/components/Get/GetService";
import {Deroulant} from "@/components/Deroulant";

export default function PageService(){

    return (
        <>


            <ProtectedComponent habilitation={"SUPER"}>
                <Deroulant title={"Ajouter un Service"}>
                    <CreateServiceForm/>
                </Deroulant>
            </ProtectedComponent>

            <ProtectedComponent habilitation={"ADMIN"}>
                <Deroulant title={"Ajouter un Service"}>
                    <CreateServiceForm/>
                </Deroulant>
            </ProtectedComponent>

            <ServiceList/>

        </>
    )
}