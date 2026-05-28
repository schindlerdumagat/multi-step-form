import Button from "./components/Button"
import Form from "./components/Form"
import StepNumber from "./components/StepNumber"

function App() {

  return (
    <main className="relative h-screen bg-[url(/images/bg-sidebar-mobile.svg)] bg-no-repeat bg-contain bg-top bg-blue-100 md:bg-none px-4">

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
    </main>
  )
}

export default App
