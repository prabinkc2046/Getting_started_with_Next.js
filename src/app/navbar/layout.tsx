"use client"
import Link from "next/link"; 
import React from "react";
import './style.css';
import { usePathname } from "next/navigation";
const links = [
    {name:'Home', href:'/navbar/home'},
    {name:'About', href:'/navbar/about'},
    {name:'Contact', href:'/navbar/contact'}
];

const NavbarLayout = ({children}: {children: React.ReactNode}) => {
    const pathName = usePathname();    
    return(
        <>
        {links.map((link) => {
            const isActive = pathName.startsWith(link.href);
            return(
                <Link href={link.href} key={link.name} className={isActive ? "activeLink": "notActiveLink"}>{link.name}</Link>
            )
        })}
        {children}
        </>
        
    )
};

export default NavbarLayout;