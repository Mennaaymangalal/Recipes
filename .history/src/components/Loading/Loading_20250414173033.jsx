import { Spinner } from '@heroui/react'
import React from 'react'

export default function Loading() {
  return (
    <>
     <div className="min-h-52">
     <Spinner color="warning" classNames={{label: "text-foreground mt-4"}} label="wave" variant="wave" />
     </div> 
    </>
  )
}
