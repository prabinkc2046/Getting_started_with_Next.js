"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const generateRandomNumber = (count: number): number => {
    return Math.floor(Math.random() * count)
}

//define the link here
const links = [
    {name: 'Desktop', href: '/partners/desktop'},
    {name: 'Iot Device', href: '/partners/iot-device'},
    {name: 'Public Cloud', href: '/partners/public-cloud'}
]

const LayOutPage = ({children}: {children: React.ReactNode}) => {
    const [url, setUrl] = useState<string | null>(null)
    const random = generateRandomNumber(2);
    if(random === 1){
        throw new Error(`Error occur`)
    }
    const pathName = usePathname();
    return(
        <>
        {links.map(({name, href}) => {
            let isActive = pathName.startsWith(href);
            
            return(
                <nav>
                    <ul>
                        <Link href={href} key={name}>{name}</Link>
                    </ul>
                </nav>
            )
            
        })}
        {children}
        </>
    )
}

export default LayOutPage;