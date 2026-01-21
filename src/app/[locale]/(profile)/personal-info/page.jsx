import InfoForm from "./InfoForm";
import InfoHead from "./InfoHead";

const PersonalInfoPage=()=>{
    return(
        <section className="flex flex-col gap-9  border border-border-product-filter !p-5 md:border-none md:!p-0 rounded-3xl md:rounded-none">
            <div><InfoHead/></div>
            <div><InfoForm/></div>
        </section>
    )
}

export default PersonalInfoPage;