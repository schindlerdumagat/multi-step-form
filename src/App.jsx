import Button from "./components/Button"
import Form from "./components/Form"
import StepNumber from "./components/StepNumber"
import StepTitle from "./components/StepTitle"
import StepDescription from "./components/StepDescription";

function App() {

  return (
    <main className="flex justify-center md:items-center relative h-screen bg-[url(/images/bg-sidebar-mobile.svg)] bg-no-repeat bg-contain bg-top bg-blue-100 md:bg-none px-4">
      <section className="md:hidden">
        <div className="flex justify-center gap-4 py-8">
          <StepNumber isCurrent={true}>1</StepNumber>
          <StepNumber>2</StepNumber>
          <StepNumber>3</StepNumber>
          <StepNumber>4</StepNumber>
        </div>
        <Form />
        <div className="flex justify-end absolute bottom-0 left-0 right-0 p-4 bg-white">
          <Button type="button" variant="primary">Next Step</Button>
        </div>
      </section>
      <section className="bg-white p-4 rounded-2xl hidden md:grid md:grid-cols-[1fr_2fr] min-h-150">
        <div className="flex flex-col gap-8 bg-[url(/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover px-6 md:px-8 py-10 rounded-[0.625rem]">
          <div className="flex items-center gap-4">
            <StepNumber isCurrent={true}>1</StepNumber>
            <div>
              <StepTitle>step 1</StepTitle>
              <StepDescription>your info</StepDescription>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <StepNumber isCurrent={true}>2</StepNumber>
            <div>
              <StepTitle>step 2</StepTitle>
              <StepDescription>select plan</StepDescription>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <StepNumber isCurrent={true}>3</StepNumber>
            <div>
              <StepTitle>step 3</StepTitle>
              <StepDescription>add-ons</StepDescription>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <StepNumber isCurrent={true}>4</StepNumber>
            <div>
              <StepTitle>step 4</StepTitle>
              <StepDescription>summary</StepDescription>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <Form />
          <Button classes={"self-end"} variant="primary" type="button">Next Step</Button>
        </div>
      </section>
    </main>
  )
}

export default App
