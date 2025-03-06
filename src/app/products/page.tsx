import React from 'react'
import Link from 'next/link'
const page = () => {
  const productId=100
  return (
    <>
    <div>products</div>
    <Link href="/">home</Link>
    <Link href="/products/1">product 1</Link>
    <Link href={`/products/${productId}`}>product {productId}</Link>
 

    </>
  )
}

export default page