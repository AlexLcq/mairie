import CreateIotForm from "@/components/Post/PostIot";
import IotList from "@/components/Get/GetIot";
import {ProtectedComponent} from "@/components/protectedComponent";
import {Deroulant} from "@/components/Deroulant";

export default function PageIot() {
    return (
        <>


            <ProtectedComponent habilitation={"SUPER"}>
                <Deroulant title={"Ajouter un objet IOT"}>
                    <CreateIotForm/>
                </Deroulant>
            </ProtectedComponent>

            <ProtectedComponent habilitation={"ADMIN"}>
                <Deroulant title={"Ajouter un objet IOT"}>
                    <CreateIotForm/>
                </Deroulant>
            </ProtectedComponent>

            <IotList/>

        </>
    )
}