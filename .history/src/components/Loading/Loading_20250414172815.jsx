import React from 'react'

export default function Loading() {
  return (
    <>
     <div className="">
     <Spinner  classNames={{label: "text-foreground mt-4"}} label="wave" variant="wave" />   
     </div> 
    </>
  )
}
