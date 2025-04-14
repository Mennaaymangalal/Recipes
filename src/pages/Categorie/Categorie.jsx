import { Button } from '@heroui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Categorie({product}) {
  return (
    <>
         <div  className=" group w-fit px-9  py-4 shadow-md bg-white rounded-3xl text-center hover:scale-x-105">
            <div className="">
              <img  src={product.strMealThumb} alt="" className='group-hover:rotate-360 transition-all duration-700 rounded-full w-40 h-40 shadow-2xl  -mt-20'/>
            </div>
            <div className="flex flex-col items-center ">
              <h3 className=' pt-6 font-bold text-2xl font-pacifico line-clamp-4 min-h-36'>{product.strMeal}</h3>              
              <Button className='px-5 py-8 font-pacifico mb-6 bg-green-500 text-white text-lg font-bold rounded-full '>
                <Link  to={"/mealdetails/" + product.idMeal} >View Recipe</Link>
              </Button>
            </div>
          </div>    
    </>
  )
}
