import ContactCardSection from "@/components/contact/ContactCardSection";
import ContactFormSection from "@/components/contact/ContactFormSection";

const ContactUs = () => {
  return (
    <section className="container section_padding">
      <ContactFormSection />
      <ContactCardSection/>
    </section>
  );
};

export default ContactUs;
