import InfoForm from "./InfoForm";
import InfoHead from "./InfoHead";

const PersonalInfoPage=()=>{
    return(
        <section className="flex flex-col gap-9">
            <div><InfoHead/></div>
            <div><InfoForm/></div>
        </section>
    )
}

export default PersonalInfoPage;