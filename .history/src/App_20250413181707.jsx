import {HeroUIProvider} from "@heroui/react";
import { Button } from "@heroui/react"


function App() {


  return (
    <> 
      <HeroUIProvider>
      <h1>App</h1>
      <Button color="">show</Button>
      </HeroUIProvider> 
   
    </>
  )
}

export default App
