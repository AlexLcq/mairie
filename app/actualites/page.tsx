import CreateActuForm from "@/components/Post/PostActu";
import ActuList from "@/components/Get/GetActu";
import {Deroulant} from "@/components/Deroulant";
import {ProtectedComponent} from "@/components/protectedComponent";

export default function PageActu() {


    return (
        <>


            <ProtectedComponent habilitation={"SUPER"}>
                <Deroulant title={"Ajouter une actu"}>
                    <CreateActuForm/>
                </Deroulant>
            </ProtectedComponent>

            <ProtectedComponent habilitation={"ADMIN"}>
                <Deroulant title={"Ajouter une actu"}>
                    <CreateActuForm/>
                </Deroulant>
            </ProtectedComponent>

            <ActuList/>

        </>
    )
}