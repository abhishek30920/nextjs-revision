'use client'
import { usePathname } from "next/navigation" 
export default function NotFound(){  // for page not found
  const pathname=usePathname(); // path name of current page// for example: /products/1/reviews/2
  console.log(pathname)
  const productId=pathname.split('/')[2]
  const reviewId=pathname.split('/')[4]

  return (
    <div>
      <h2>review for product {productId }not found and review not found for {reviewId}</h2>
    </div>
  )
}