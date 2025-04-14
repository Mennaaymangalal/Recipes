import React from 'react'

export default function Loading() {
  return (
    <>
     <div className="">
     <Spinner color="warning" classNames={{label: "text-foreground mt-4"}} label="wave" variant="wave" />   
     <Spinner
  color="warning"
  label="wave"
  variant="wave"
  classNames={{ label: "text-foreground mt-4" }}
/>

     </div> 
    </>
  )
}
