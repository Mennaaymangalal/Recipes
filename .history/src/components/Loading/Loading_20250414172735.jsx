import React from 'react'

export default function Loading() {
  return (
    <>
     <div className="">
     <Spinner classNames={{label: "text-foreground mt-4"}} color="warning label="wave" variant="wave" />   
     </div> 
    </>
  )
}
