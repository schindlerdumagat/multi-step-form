import Button from "./components/Button"
import H1 from "./components/H1"
import Label from "./components/Label"
import P from "./components/P"
import TextInput from "./components/TextInput"
import Error from "./components/Error"

function App() {

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
        <Label htmlFor={"name"}>Name</Label>
        <Error>This field is required</Error>
        <TextInput type="text" id="name" name="name" placeholder="e.g. Stephen King" autoComplete="name" />
      </div>
    </>
  )
}

export default App
