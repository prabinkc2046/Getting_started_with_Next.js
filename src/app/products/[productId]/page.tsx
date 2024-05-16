const productDetails  = ({ params }: {params: {productId: string}}) => {

	//make api call 
	//fetch(`https://prabinkc.com/products/${productId}`);
	return (
	<h1> Product id: {params.productId}</h1>
	);
};

export default productDetails;
