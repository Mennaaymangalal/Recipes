import {HeroUIProvider} from "@heroui/react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/mainLayout/MainLayout";



function App() {
 
  createBrowserRouter([
    {path: '/' , element: <MainLayout/> , children:[
      
    ]}
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
