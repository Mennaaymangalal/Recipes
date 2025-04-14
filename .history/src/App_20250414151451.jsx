import {HeroUIProvider} from "@heroui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/mainLayout/MainLayout";
import All from "./pages/All/All";
import Beef from "./pages/Beef/Beef";
import Breakfast from "./pages/Breakfast/Breakfast";
import Chicken from "./pages/Chicken/Chicken";
import Dessert from "./pages/Dessert/Dessert";
import Goat from "./pages/Goat/Goat";
import Lamb from "./pages/Lamb/Lamb";
import Miscellaneous from "./pages/Miscellaneous/Miscellaneous";
import Pasta from "./pages/Pasta/Pasta";
import Pork from "./pages/Pork/Pork";
import Seafood from "./pages/Seafood/Seafood";
import Side from "./pages/Side/Side";
import Starter from "./pages/Starter/Starter";
import Vegan from "./pages/Vegan/Vegan";
import Vegetarian from "./pages/Vegetarian/Vegetarian";



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
      {path: 'pasta' , element:<Pasta/>},
      {path: 'pork' , element:<Pork/>},
      {path: 'seafood' , element:<Seafood/>},
      {path: 'side' , element:<Side/>},
      {path: 'starter' , element:<Starter/>},
      {path: 'vegan' , element:<Vegan/>},
      {path: 'vegetarian' , element:<Vegetarian/>},
    ]}
  ])

  return (
    <> 
      <HeroUIProvider>
      <RouterProvider      
      </HeroUIProvider> 
   
    </>
  )
}

export default App
