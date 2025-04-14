import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@heroui/react';

export default function ButtonLayout() {
  const navigate = useNavigate();

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
    { label: 'Seafood', value: 'seafood' },
    { label: 'Side', value: 'side' },
    { label: 'Starter', value: 'starter' },
    { label: 'Vegan', value: 'vegan' },
    { label: 'Vegetarian', value: 'vegetarian' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-gradientfrom to-greadiaetto bg-clip-text text-transparent mb-6">
        Learn, Cook, Eat Your Food
      </h1>

      {/* Mobile dropdown */}
      <div className="md:hidden flex justify-center">
        <select
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            const value = e.target.value;
            navigate(value === '' ? '/' : `/${value}`);
          }}
        >
          {categories.map((category, index) => (
            <option key={index} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop buttons using Link */}
      <div className="hidden md:flex flex-wrap justify-start gap-x-6 gap-y-4 mt-8">
        {categories.map((category, index) => (
         <NavLink
         key={index}
         to={category.value === '' ? '/' : `/${category.value}`}
       >
         {({ isActive }) => (
           <Button
             className={`px-6 py-2 border bg-transparent border-gray-400 rounded-full font-pacifico text-md text-center transition-all ${
               isActive
                 ? "bg-black text-white shadow-lg"
                 : "text-gray-700 hover:text-black hover:shadow-md hover:scale-105"
             }`}
           >
             {category.label}
           </Button>
         )}
       </NavLink>
       
        ))}
      </div>
    </div>
  );
}


  
          
