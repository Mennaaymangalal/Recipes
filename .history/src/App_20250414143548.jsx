import {HeroUIProvider} from "@heroui/react";
import { createBrowserRouter } from "react-router-dom";



function App() {
 
  createBrowserRouter([
    {path: '/' , e}
  ])

  return (
    <> 
      <HeroUIProvider>
      <h1>App</h1>
      
      </HeroUIProvider> 
   
    </>
  )
}

export default App
