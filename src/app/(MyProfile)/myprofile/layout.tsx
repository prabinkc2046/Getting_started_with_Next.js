"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

const nav = [
    {name: 'Display', href:'/myprofile/display'},
    {name: 'Login & Authentication', href:'/myprofile/auth'},
    {name: 'SSH Keys', href:'/myprofile/keys'},
    {name: 'LISH Console Settings', href:'/myprofile/lish'},
];
const MyProfileLayout = ({children}: {children: React.ReactNode}) => {
    const pathName = usePathname();

    return(
        <>
        {nav.map(({name, href}) => {
            const activePage = pathName.startsWith(href);
            return (
                <Link href={href} className={activePage ? 'font-bold text-black underline m-1' : 'font-normal text-current m-1'}>{name}</Link>
            )
        })}
        {children}
        </>
    )
}
export default MyProfileLayout;