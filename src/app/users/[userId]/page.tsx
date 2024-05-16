"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
}

interface UserDetailProps {
    params: {
        userId: string;
    }
}
const UserDetail: React.FC<UserDetailProps> = ({params}) => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<String | null>(null);
    const {userId } = params;
    console.log(userId);
    useEffect(() => {
        const fetchUser = async () => {
            try{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
                setUser(response.data);
                console.log(response.data)
            } catch(error){
                setError("Error has occured in user page");
            }
        };
        fetchUser();
    },[userId])

    if (error){
        throw new Error(`${error}`);
    }
    
  return (
    <div>
        {user && (
            <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )}
    </div>
  )
}

export default UserDetail;