export const dynamic="force-static"
export async function GET() {
  const categories=[
    {id:1,name:"Electronics"},
    {id:2,name:"Clothing"},
    {id:3,name:"Footwear"},
    {id:4,name:"Books"},
    {id:5,name:"Furniture"},
  ]
  return Response.json(categories)
}