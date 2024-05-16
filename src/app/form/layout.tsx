"use client"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";


export const FormLayout = ({children}: {children: React.ReactNode}) => {
    const pathName = usePathname();
    const router = useRouter();
    const handleNextButton = () => {
        router.push("/form/experience");
    }

    const handlePreviousButton = () => {
        router.back();
    }
    return(
        <>
        {children}
        <div>
            <button onClick={handlePreviousButton}>Previous</button>
            <button onClick={handleNextButton}>Next</button>
        </div>
        </>
    )
};

export default FormLayout;