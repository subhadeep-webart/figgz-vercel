import InputField from "../../InputField";
import TextareaField from "../../TextArea";

const ContactUsForm = () => {
  return (
    <div className="flex flex-col gap-9">
      <InputField
        label="Your Name"
        placeholder="Enter your name"
        type="text"
        classNames={{
          inputWrapper: [
            "bg-transparent",
            "hover:bg-transparent",
            "focus:bg-transparent",
            "active:bg-transparent",

            "data-[hover=true]:bg-transparent",
            "data-[focus=true]:bg-transparent",
            "data-[focus-visible=true]:shadow-none",
            "data-[pressed=true]:bg-transparent",

            "data-[filled=true]:bg-transparent",
            "data-[filled=true]:data-[hover=true]:bg-transparent",
            "data-[filled=true]:data-[focus=true]:bg-transparent",
          ],
        }}
      />
      <div className="flex gap-10">
        <InputField
          label="Email ID"
          placeholder="Enter email id"
          type="email"
          classNames={{
            inputWrapper: [
              "bg-transparent",
              "hover:bg-transparent",
              "focus:bg-transparent",
              "active:bg-transparent",

              "data-[hover=true]:bg-transparent",
              "data-[focus=true]:bg-transparent",
              "data-[focus-visible=true]:shadow-none",
              "data-[pressed=true]:bg-transparent",

              "data-[filled=true]:bg-transparent",
              "data-[filled=true]:data-[hover=true]:bg-transparent",
              "data-[filled=true]:data-[focus=true]:bg-transparent",
            ],
          }}
        />
        <InputField
          label="Phone Number"
          placeholder="Enter phone number"
          type="text"
          classNames={{
            inputWrapper: [
              "bg-transparent",
              "hover:bg-transparent",
              "focus:bg-transparent",
              "active:bg-transparent",

              "data-[hover=true]:bg-transparent",
              "data-[focus=true]:bg-transparent",
              "data-[focus-visible=true]:shadow-none",
              "data-[pressed=true]:bg-transparent",

              "data-[filled=true]:bg-transparent",
              "data-[filled=true]:data-[hover=true]:bg-transparent",
              "data-[filled=true]:data-[focus=true]:bg-transparent",
            ],
          }}
        />
      </div>
      <TextareaField label="Message" placeholder="Enter your message"  classNames={{
          inputWrapper: [
            "bg-transparent",
            "hover:bg-transparent",
            "focus:bg-transparent",
            "active:bg-transparent",

            "data-[hover=true]:bg-transparent",
            "data-[focus=true]:bg-transparent",
            "data-[focus-visible=true]:shadow-none",
            "data-[pressed=true]:bg-transparent",

            "data-[filled=true]:bg-transparent",
            "data-[filled=true]:data-[hover=true]:bg-transparent",
            "data-[filled=true]:data-[focus=true]:bg-transparent",
          ],
        }} />
    </div>
  );
};

export default ContactUsForm;
