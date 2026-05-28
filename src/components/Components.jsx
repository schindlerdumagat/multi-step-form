import Button from "./Button"
import H1 from "./H1"
import Label from "./Label"
import P from "./P"
import TextInput from "./TextInput"
import Error from "./Error"
import StepNumber from "./StepNumber"
import StepTitle from "./StepTitle"
import StepDescription from "./StepDescription"

function Components() {

  return (
    <>
      <H1 className="font-bold text-2xl/tight text-blue-950 md:text-3xl/tight">Personal info</H1>
      <P>Please provide your name, email address, and phone number.</P>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Button variant="primary">Next Step</Button>
        <Button variant="secondary">Confirm</Button>
        <Button variant="tertiary">Go Back</Button>
      </div>
      <div style={{ display: "inline-flex", flexDirection: "column", gap: "0.5rem" }}>
        <Label htmlFor="name">Name</Label>
        <Error>This field is required</Error>
        <TextInput type="text" id="name" name="name" placeholder="e.g. Stephen King" autoComplete="name" />
      </div>
      <div style={{ display: "flex", gap: "0.5rem", backgroundColor: '#483EFF' }} className="p-2">
        <StepNumber isCurrent={true}>1</StepNumber>
        <StepNumber>2</StepNumber>
        <StepNumber>3</StepNumber>
        <StepNumber>4</StepNumber>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", backgroundColor: '#483EFF' }} className="p-2">
        <StepTitle>step 1</StepTitle>
        <StepTitle>step 2</StepTitle>
        <StepTitle>step 3</StepTitle>
        <StepTitle>step 4</StepTitle>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", backgroundColor: '#483EFF' }} className="p-2">
        <StepDescription>your info</StepDescription>
        <StepDescription>select plan</StepDescription>
        <StepDescription>add-ons</StepDescription>
        <StepDescription>summary</StepDescription>
      </div>
    </>
  )

}

export default Components;