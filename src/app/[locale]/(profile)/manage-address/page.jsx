import AddressesCard from "@/components/ui/Cards/ProfileCards/AddressesCard";
import AddressFormSection from "./AddressFormSection";

const ManageAddress=()=>{
    return(
        <section className="w-full">
        <AddressesCard address="Batanagr south 24 PGS" description="Vorem ipsum dolor sit amet, consectetur adipiscing m dolor sit amet,
            consectetur adipiscingm dolor sit."/>
              <AddressesCard address="Sodepur 700147" description="Vorem ipsum dolor sit amet, consectetur adipiscing m dolor sit amet,
            consectetur adipiscingm dolor sit."/>
            <AddressFormSection/>
        </section>
    )
};

export default ManageAddress;