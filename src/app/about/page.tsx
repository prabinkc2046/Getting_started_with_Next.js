import Link from "next/link";
export const metadata = {
  title:'about',
  description: 'this is a about page',
};
export default function About() {
  return <div>About <Link href={'/'}>Home</Link></div>
}
