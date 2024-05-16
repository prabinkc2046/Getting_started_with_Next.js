
import Link from "next/link";
interface Product {
id: number;
name: string;
}

const productList = [
{id: 1, name: 'product 1'},
{id: 2, name: 'product 2'},
{id: 3, name: 'product 3'},
];
const Products: React.FC<Product[]> = () =>  {
	return (
	<div>
	{productList.map( (product) => (
	<li key={product.id}>
		<Link href={`/products/${product.id}`} replace={product.id === 3}>{product.name}</Link>
	</li>
	))}
	
	</div>
	);
};

export default Products;
