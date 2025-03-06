import { NextRequest } from "next/server";
import { cookies, headers } from "next/headers";
export async function GET(request :NextRequest){
//  const requestHeaders= new Headers(request.headers)
//  console.log(requestHeaders.get("Authorization"))

 const headerList=await headers()
 console.log(headerList.get("Authorization"))

 const theme= request.cookies.get("theme")
 console.log(theme)
 const cookieStore=await cookies()
 cookieStore.set("theme","dark")
 console.log(cookieStore.get("theme"))
  return new Response("Hello from profile route",{
    headers: {
      "content-type":"text/html", // customer headers,
      "Set-Cookie": "theme=dark" // set cookie
    }
  });
  
}

//redirect in nextjs