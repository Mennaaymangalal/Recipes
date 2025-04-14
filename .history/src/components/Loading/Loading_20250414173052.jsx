import { Spinner } from '@heroui/react'
import React from 'react'

export default function Loading() {
  return (
    <>
     <div className="f min-h-52">
     <Spinner color="warning"  label="wave" variant="wave" />
     </div> 
    </>
  )
}
