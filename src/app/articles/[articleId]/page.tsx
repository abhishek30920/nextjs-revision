import { use } from "react";
import Link from "next/link";
// if u want to use this in server component then u have to use async function
// if u want to use this in client component then u have to use normal function 
// use keyword
export default  async function NewsArticlePage({params,searchParams}:{
  params: Promise<{articleId: string}>,
  searchParams: Promise<{lang: string}>
}) {
  const {articleId} = await params;
  const {lang} = await searchParams;  // it is use to get the query parameter
  console.log(articleId);
  console.log(lang);
  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Reading in language {lang}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=${lang}`}>English</Link>
        <Link href={`/articles/${articleId}?lang=${lang}`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=${lang}`}>French
        </Link>
        
        
      </div>
    </div>
  );
}