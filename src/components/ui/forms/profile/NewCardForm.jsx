import InputField from "../../InputField";

const NewCardForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      <InputField
        label="Card Holder Name"
        placeholder="Enter card holder name"
        type="text"
      />
       <InputField
        label="Card Number"
        placeholder="Enter card number"
        type="text"
      />
       <InputField
        label="Expire Date"
        placeholder="Enter expire date"
        type="text"
      />
       <InputField
        label="CVV"
        placeholder="Enter CVV"
        type="text"
      />
    </div>
  );
};
export default NewCardForm;
