import { Fragment } from 'react';

interface Product {
	title: string;
	id: number;
	isFruit: boolean;
}

export default function ListView() {
	const products: Product[] = [
		{ title: 'Cabbage', id: 1, isFruit: false },
		{ title: 'Garlic', id: 2, isFruit: false },
		{ title: 'Apple', id: 3, isFruit: true },
	];

	const listItems = products.map((product: Product) => (
		<Fragment key={product.id}>
			<li
				style={{
					color: product.isFruit ? 'red' : 'black',
				}}
			>
				{product.title}
			</li>
			<span>Ok</span>
		</Fragment>
	));

	return (
		<ul>
			{
				listItems
				// products.map(product => <li key={product.id}>{product.title}</li>)
			}
		</ul>
	);
}
