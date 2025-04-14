import React from 'react'
import {  Link, NavLink } from 'react-router-dom';
import { Button } from '@heroui/react';

export default function ButtonLayout() {
     const categories = [
        { label: 'All', value: '' },
        { label: 'Beef', value: 'beef' },
        { label: 'Breakfast', value: 'breakfast' },
        { label: 'Chicken', value: 'chicken' },
        { label: 'Dessert', value: 'dessert' },
        { label: 'Goat', value: 'goat' },
        { label: 'Lamb', value: 'lamb' },
        { label: 'Miscellaneous', value: 'miscellaneous' },
        { label: 'Pasta', value: 'pasta' },
        { label: 'Pork', value: 'pork' },
        { label: 'Seafood', value: 'Seafood' },
        { label: 'Side', value: 'side' },
        { label: 'Starter', value: 'Starter' },
        { label: 'Vegan', value: 'Vegan' },
        { label: 'Vegetarian', value: 'Vegetarian' },
      ];
    
  return (
    <>
       <div className="container mx-auto p-4">
        <h1 className='text-4xl font-bold font-pacifico bg-gradient-to-r from-gradientfrom to-greadiaetto bg-clip-text text-transparent  mb-6'>
          Learn, Cook, Eat Your Food
        </h1>

        {/* Category Selection for Small Screens */}
        <div className="md:hidden flex justify-center">
          <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            
            {categories.map((category, index) => (
              <option key={index}>              
               <Link to={category}>
               {category.label}    
               </Link>          
              </option>
            ))}
                  
          </select>
        </div>

        {/* Flex-Wrap Layout for Larger Screens */}
        <div className="hidden md:flex flex-wrap justify-start gap-x-6 gap-y-4 mt-8">
          {categories.map((category, index) => (
            <NavLink key={index} to={"/all"}>
              <Button className="px-6 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full hover:scale-105 hover:shadow-md hover:text-black font-semibold font-pacifico text-lg text-center">
                {category.label}
              </Button>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}
