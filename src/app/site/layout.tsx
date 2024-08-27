import React from 'react'
import { Navigation } from '@/components/site/'

const layout = ({children}: {children:React.ReactNode }) => {
  return (
    <main className="h-full">
        <Navigation/>
        {children}
        </main>
  )
}

export default layout