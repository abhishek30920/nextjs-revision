export default async function Blog(){
  await new Promise((resolve) => {setTimeout(()=>{
    resolve("inter");
  }, 5000)});
 return (
   <div>Blog</div>
  )
}