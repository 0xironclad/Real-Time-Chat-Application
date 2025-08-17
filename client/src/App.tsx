import { Button } from "@/components/ui/button"

function App() {
  return (
    <div>
      <Button variant="outline" onClick={() => {
        alert("Hello")
      }}>Click me</Button>
    </div>
  )
}

export default App