import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
  <h1>
    hello world
  </h1>
  <Link href="/products">Product</Link>
  <Link className="mr-5" href="articles/breaking-news-123?lang=en">Read in english</Link>
    <Link  className="mr-5" href="articles/breaking-news-123?lang=es">Leer en espanol</Link>
    <Link  className="mr-5" href="articles/breaking-news-123?lang=fr">Lire en francais</Link>
  </>
  );
}
