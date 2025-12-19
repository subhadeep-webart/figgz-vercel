import ContactCard from "@/components/ui/Cards/ContactCard";

const ContactCardSection=()=>{
    return(
        <section className="grid grid-cols-3 gap-9 !mt-5">
            <ContactCard keys="Phone Number" value="0203 3554 591"/>
            <ContactCard keys="Email ID" value="0203 3554 591"/>
            <ContactCard keys="Address" value="124 City Road London United Kingdom EC1V 2NX"/>
        </section>
    )
};

export default ContactCardSection;