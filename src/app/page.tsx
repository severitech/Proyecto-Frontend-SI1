import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1>Este es el home </h1>
      <Link href='/auth/login'><Button>Ir al login</Button></Link>
    </div>
  )
}

export default page
