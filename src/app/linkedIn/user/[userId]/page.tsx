import { Metadata } from "next";
export const metadata: Metadata = {
    title: {
        absolute: "it will come hre"
    }
}

type UserIdType = {
    userId: string;
}

type ParamsProp = {
    params: UserIdType;
}



const DynamicUserPage = ({params}: ParamsProp) => {
    const {userId} = params;
    return (
        <div>
            <h1>Userid: {userId}</h1>
            <p>User name: {userId}</p>
        </div>
    )
};


export default DynamicUserPage;