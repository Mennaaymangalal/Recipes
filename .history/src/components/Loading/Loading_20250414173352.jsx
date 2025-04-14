import { Spinner } from '@heroui/react'
import React from 'react'

export default function Loading() {
  return (
    <>
     <div className="flex align-middle justify-center min-h-full">
     <Spinner size="lg" color="warning"  variant="wave" />   
     </div> 
    </>
  )
}
