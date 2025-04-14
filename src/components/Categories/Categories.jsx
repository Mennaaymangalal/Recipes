import { Button } from '@heroui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories({product}) {
  return (
    <>
       <div  className="lg:w-fit w-full  h-full group   px-9  py-4 shadow-md bg-white rounded-3xl text-center hover:scale-x-105">
            <div className="flex align-middle justify-center">
              <img  src={product.strMealThumb} alt="" className='group-hover:rotate-360 transition-all duration-700 rounded-full w-40 h-40 shadow-2xl  -mt-20'/>
            </div>
            <div className="flex flex-col items-center ">
              <h3 className=' pt-6 font-bold text-2xl font-pacifico'>{product.strCategory}</h3>
              <h5 className=' pb-4 font-semibold text-xl font-pacifico text-green-500 line-clamp-1'>{product.strArea}</h5>
              <Button  className='px-5 py-8 font-pacifico mb-6 bg-green-500 text-white text-lg font-bold rounded-full '>
                <Link to={"/mealdetails/" + product.idMeal} >View Recipe</Link>
              </Button>
            </div>
          </div>      
    </>
  )
}
