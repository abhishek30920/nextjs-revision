import React from 'react'
 // it catches all url segments and handles in single page
// for example: /docs/one/two/three will be handled by this page
async function page({params}:
  {params:Promise<{slug: string[]}>}
) {
  const {slug} = await params
  console.log(slug)
  if(slug?.length==2){
    return <div>docs
      <h1>page {slug.join('/')}</h1>
    </div>
  }
  else if(slug?.length==1){
    return <div>docs
      <h1>page {slug.join('/')}</h1>
    </div>
  }

  return <h1>docs here </h1>

 // if i do localhost:3000/docs -> it will give error because i use [...slug] which means it should have atleast one segment
  // if i do localhost:3000/docs/one -> it will show page one
//[[]] it will do optional of so it can be empty or have some value
}

export default page