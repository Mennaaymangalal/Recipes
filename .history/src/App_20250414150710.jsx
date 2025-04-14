import {HeroUIProvider} from "@heroui/react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/mainLayout/MainLayout";
import All from "./pages/All/All";
import Beef from "./pages/Beef/Beef";
import Breakfast from "./pages/Breakfast/Breakfast";
import Chicken from "./pages/Chicken/Chicken";



function App() {
 
  createBrowserRouter([
    {path: '/' , element: <MainLayout/> , children:[
      {index:true , element:<All/>},
      {path: 'beef' , element:<Beef/>},
      {path: 'breakfast' , element:<Breakfast/>},
      {path: 'beef' , element:<Chicken/>},
      {path: 'beef' , element:<Beef/>},
      {path: 'beef' , element:<Beef/>},
      {path: 'beef' , element:<Beef/>},
      {path: 'beef' , element:<Beef/>},
      {path: 'beef' , element:<Beef/>},
      {path: 'beef' , element:<Beef/>},
      {path: 'beef' , element:<Beef/>},
      {path: 'beef' , element:<Beef/>},
      {path: 'beef' , element:<Beef/>},
      {path: 'beef' , element:<Beef/>},
      {path: 'beef' , element:<Beef/>},
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
