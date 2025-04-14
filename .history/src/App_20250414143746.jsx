import {HeroUIProvider} from "@heroui/react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/mainLayout/MainLayout";
import All from "./pages/All/All";



function App() {
 
  createBrowserRouter([
    {path: '/' , element: <MainLayout/> , children:[
      {index:true , element:<All/>},
      {path: 'beef' , element:<B}
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
