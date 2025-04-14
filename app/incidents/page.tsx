"use client"

import AddIncident from "@/components/Post/PostIncident";
import IncidentList from "@/components/Get/GetIncident";
import {ProtectedComponent} from "@/components/protectedComponent";
import {Deroulant} from "@/components/Deroulant";

export default function PageIncidents() {
    return (
        <>


            <ProtectedComponent habilitation={"SUPER"}>
                <Deroulant title={"Ajouter un Incident"}>
                    <AddIncident/>
                </Deroulant>
            </ProtectedComponent>

            <ProtectedComponent habilitation={"ADMIN"}>
                <Deroulant title={"Ajouter un Incident"}>
                    <AddIncident/>
                </Deroulant>
            </ProtectedComponent>

            <IncidentList/>

        </>
    )
}