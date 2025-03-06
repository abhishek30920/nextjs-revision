import React from "react"


export default function ComplextDashboardLayout({
  children,
  users,
  revenue,
  notifications
}:{
  children:React.ReactNode,
  users:React.ReactNode,
  revenue:React.ReactNode,
  notifications:React.ReactNode
}){
  return (
    <>
    <div>{children}</div>
    <UserAnalytics />
    <RevenureMetrics />
    <Notifications />
    </>
  )
}