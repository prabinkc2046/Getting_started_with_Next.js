import { Metadata } from "next";
type Product  = {
    productId: string;
}

type ProductParams = {
    params: Product;
}

export const  generateMetadata = ({params}: ProductParams): Metadata => {
    const { productId} = params;
    return {
        title: `product title ${productId}`,
        description: `product description ${productId}`
    }
}
const DynamicProductDetailPage = ({params}: ProductParams) => {
    const {productId} = params;
    //use this product id to fetch data from the database 
    return (
        <div>
            <h1>Product: {productId}</h1>
            <p>This is detail of {productId}</p>
        </div>
    )
};

export default DynamicProductDetailPage;


