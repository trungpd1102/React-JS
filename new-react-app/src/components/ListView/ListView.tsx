export default function ListView() {
    const products = [
        { title: 'Cabbage', id: 1, isFruit: false },
        { title: 'Garlic', id: 2, isFruit: false },
        { title: 'Apple', id: 3, isFruit: true },
    ];

    const listItems = products.map(product =>
        <li 
            key={product.id} 
            style={{
                color: product.isFruit ? 'red' : 'white'
            }}
        >
            {product.title}
        </li>
    );

    return (
        <ul>{
            listItems
            // products.map(product => <li key={product.id}>{product.title}</li>)
        }</ul>
    );
} 