"use client"
import { useState } from "react";
import NotFound from "./not-found";
import { Metadata } from "next";
// export const metadata = {
//     title: 'product 1 review 1'
// };

// type Prop = {
//     productId: string;
//     reviewId: string;
// };
// type params = {
//     params: Prop;
// };

// export const generateMetadata = (params: {
//     params: {
//         productId: string,
//         reviewId: string,
//     }
// }): Metadata => {
// const product = params.params.productId;
// return {
//     title: `product ${product}`,
//     description: `product ${product} is best in the market`
// }
// };

// const generateRandomNumberWithSomeDelay = (delay: number, count: number): Promise<number> => {
//     return new Promise<number>((resolve) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * count);
//             resolve(randomNumber);
//         }, delay)
//     });
// }



const generateRandomNumber = (count: number): number => {
    return Math.floor(Math.random() * count)
}

const reviewPage = ({params}: {
    params: {
        productId: string,
        reviewId: string,
    }
}) => {

    const randomNumber = generateRandomNumber(2);
    if (randomNumber === 1){
        throw new Error(`Error while loading review id ${params.reviewId}`)
    }
    if (parseInt(params.reviewId) < 1000){
        return <h1>Product: {params.productId} Review: {params.reviewId}</h1>
    } else {
        return <NotFound />;
    }

}

export default reviewPage;