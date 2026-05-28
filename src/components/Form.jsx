import Button from "./Button";
import Error from "./Error";
import FormField from "./FormField";
import FormInputHeader from "./FormInputHeader";
import H1 from "./H1";
import Label from "./Label";
import P from "./P";
import TextInput from "./TextInput";

function Form() {

  return (
    <form className="flex flex-col gap-6 bg-white px-6 py-8 rounded-[0.625rem]">
      <div className="flex flex-col gap-2">
        <H1>Personal info</H1>
        <P>Please provide your name, email address, and phone number.</P>
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        <FormField>
          <FormInputHeader>
            <Label htmlFor={"name"}>Name</Label>
            {/* <Error id={"name-error"}>This field is required</Error> */}
          </FormInputHeader>
          <TextInput id={"name"} name={"name"} type="text" placeholder={"e.g. Stephen King"} autoComplete="name" ariaDescribedBy={"name-error"} />
        </FormField>
        <FormField>
          <FormInputHeader>
            <Label htmlFor={"email"}>Email Address</Label>
            {/* <Error id={"email-error"}>This field is required</Error> */}
          </FormInputHeader>
          <TextInput id={"email"} name={"email"} type="email" placeholder={"e.g. stephenking@lorem.com"} autoComplete="email" ariaDescribedBy={"email-error"} />
        </FormField>
        <FormField>
          <FormInputHeader>
            <Label htmlFor={"phoneNo"}>Phone Number</Label>
            {/* <Error id={"phone-error"}>This field is required</Error> */}
          </FormInputHeader>
          <TextInput id={"phoneNo"} name={"phoneNo"} type="text" placeholder={"e.g. +1 234 567 890"} autoComplete="mobile tel" ariaDescribedBy={"phone-error"} />
        </FormField>
      </div>
    </form>
  )

}

export default Form;