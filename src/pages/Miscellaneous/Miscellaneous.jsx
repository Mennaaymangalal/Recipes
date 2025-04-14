import React from 'react'
import Categorie from '../Categorie/Categorie'
import Loading from '../../components/Loading/Loading'
import useFetch from '../../Hooks/UseFetch/UseFetch'



export default function Miscellaneous() {
  
  const {products , isLoading} = useFetch("miscellaneous")

  return (
    <>
    {
      isLoading 
      ? 
      <Loading/>
      :
   <>
     {/* Categories Layout */}
    <div className="mt-16 grid sm:grid-cols-2 px-4  lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-28 justify-center mb-3 ">
      {
        products?.map((product,index)=>{
          return <Categorie key={index} product={product}/>

        })
      }

    </div>
   </>
    }
</>
  )
}
