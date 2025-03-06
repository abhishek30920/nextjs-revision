import React from 'react'


import { notFound ,redirect} from 'next/navigation';
function getRandomInt(count:number){
  return Math.floor(Math.random() * count)
}
async function page({params}:
  {params:Promise<{productId:string, reviewId:string}>}  // nested  dynamic route params
) {

  const random=getRandomInt(3)
 if(random===1){
    throw new Error("Something went wrong")
 }


  const {productId, reviewId} = (await params)
  if(parseInt(reviewId) > 10){
    redirect("/products") // redirect the page to products page
    // return notFound()  // if reviewId is greater than 10 then show 404 page
  }
  return (
    
    <div>page {productId}  review {reviewId} </div>
  )
}

export default page