import { comments } from "../data";


export async function GET(_request:Request,{params}:{params:{id:string}}) {
  const comment = comments.find(comment => comment.id.toString() === params.id)
  if(comment){
    return new Response(JSON.stringify(comment),{
      headers:{
        "Content-Type":"application/json"
      }
    })
  }else{
    return new Response("Comment not found",{
      status:404
    })
  }

}

export async function PATCH(
  request:Request,
  {params}:{params:{id:string}}
){
  const {id}=await params;
  const body =await request.json()
  const {text}=body
  const index=comments.findIndex(comment=>comment.id.toString()===id)
  comments[index].text=text
  return new Response(JSON.stringify(comments[index]),{
    headers:{
      "Content-Type":"application/json"
    }
  })
}

export async function DELETE(request:Request,{params}:{params:{id:string}}){
  const {id}=await params;
  const index=comments.findIndex(comment=>comment.id.toString()===id)
  comments.splice(index,1)
  return new Response("Comment deleted",{
    status:200
  })
}