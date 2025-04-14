import {HeroUIProvider} from "@heroui/react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/mainLayout/MainLayout";
import All from "./pages/All/All";
import Beef from "./pages/Beef/Beef";
import Breakfast from "./pages/Breakfast/Breakfast";
import Chicken from "./pages/Chicken/Chicken";
import Dessert from "./pages/Dessert/Dessert";
import Goat from "./pages/Goat/Goat";
import Lamb from "./pages/Lamb/Lamb";



function App() {
 
  createBrowserRouter([
    {path: '/' , element: <MainLayout/> , children:[
      {index:true , element:<All/>},
      {path: 'beef' , element:<Beef/>},
      {path: 'breakfast' , element:<Breakfast/>},
      {path: 'chicken' , element:<Chicken/>},
      {path: 'dessert' , element:<Dessert/>},
      {path: 'goat' , element:<Goat/>},
      {path: 'lamb' , element:<Lamb/>},
      {path: 'miscellaneous' , element:<Miscellaneous/>},
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
