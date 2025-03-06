'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks=[
  {name:"Register",href:"/register"},
  {name:"Login",href:"/login"},
  {name:"forgot password",href:"/forgot-password"}
]

export default function AuthLayout({ children }:{children:React.ReactNode}) {
  const pathname=usePathname()
  return (
    <div>
      <nav>
        {navLinks.map((link,index)=>{
          const isActive=pathname===link.href || (pathname.startsWith(link.href) && link.href!=='/')
          return (
          <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} key={index} href={link.href}>
           {link.name}
          </Link>
          )
        }
        )}
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
}
 