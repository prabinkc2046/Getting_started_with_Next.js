"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export const Linode = () => {
    const router = useRouter();
    
    const handleClick = () => {
        console.log("all condition passsed");
        router.push("/linodes/create");
        console.log(router);
    }
    return (
    <div>
        <h2>Linodes</h2>
        <h3>Cloud-based virtual machines</h3>
        <p>Host your websites, applications, or any other Cloud-based workloads on a scalable and reliable platform.</p>
        <button onClick={handleClick}>Create Linode</button>
    </div>
  )
}

export default Linode;
