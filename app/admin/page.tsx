"use client"


import {Deroulant} from "@/components/Deroulant";
import IncidentEditor from "@/components/Admin/IncidentAdmin";
import IotEditor from "@/components/Admin/IotAdmin";
import ActuEditor from "@/components/Admin/ActuAdmin";
import ServiceEditor from "@/components/Admin/ServiceAdmin";


export default function AdminPage() {


    return (
        <>
            <Deroulant title={"Edité un Incident"}>
                <IncidentEditor/>
            </Deroulant>
            <Deroulant title={"Edité un objet IOT"}>
                <IotEditor/>
            </Deroulant>
            <Deroulant title={"Edité une Actu"}>
                <ActuEditor/>
            </Deroulant>
            <Deroulant title={"Edité un Service"}>
                <ServiceEditor/>
            </Deroulant>
        </>


    )
}