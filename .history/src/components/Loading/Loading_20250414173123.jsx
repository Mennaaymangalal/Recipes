import { Spinner } from '@heroui/react'
import React from 'react'

export default function Loading() {
  return (
    <>
     <div className="flex align-middle justify-center min-h-52">
     <Spinner color="warning"  label="wave" variant="wave" /> <Spinner color="warning" classNames={{label: "text-foreground mt-4"}} label="wave" variant="wave" />   
     </div> 
    </>
  )
}
