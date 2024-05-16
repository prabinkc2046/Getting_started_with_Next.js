import Link from "next/link";

export default function Home() {
  return (
    <div>
      Home page
      /about
      <Link href={'/about'}>About</Link>
    </div>
  )
}
