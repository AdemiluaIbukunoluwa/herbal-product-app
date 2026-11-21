import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import ProductItem from './productItem';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    console.log(import.meta.env.VITE_BACKEND_API_URL)

    useEffect(() => {
        getProducts()
        .then (data => {
            setProducts(data);
        })
        .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="product-grid">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
        </div>
    );
}

export default ProductList;