import React from 'react'

async function page({params}:
  {params:Promise<{productId:string}>}  //  dynamic route params
) {
  const productId=(await params).productId  // 
  return (
    <div>page {productId}</div>
  )
}

export default page

