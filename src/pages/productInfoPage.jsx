import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getProducts } from '../api/products';
import { productImage } from '../utils/productImage';

const ProductPage = () => {
    const { name } = useParams();
    const { state } = useLocation();
    const linkedProduct = state?.product?.name === name ? state.product : null;
    const [lookup, setLookup] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('');
    const [cartError, setCartError] = useState('');
    const result = lookup?.name === name ? lookup : null;
    const product = linkedProduct || result?.product;

    useEffect(() => {
        if (linkedProduct) return;

        let active = true;
        getProducts()
            .then((products) => {
                if (active) {
                    setLookup({ name, product: products.find((item) => item.name === name) });
                }
            })
            .catch((error) => {
                console.error('Error loading product:', error);
                if (active) setLookup({ name, error: true });
            });

        return () => { active = false; };
    }, [name, linkedProduct]);

    const changeQuantity = (change) => {
        setQuantity((current) => Math.max(1, current + change));
        setMessage('');
        setCartError('');
    };

    const addToCart = () => {
        console.log('Adding to cart:', { product, quantity });
    };

    if (!product) {
        return (
            <main className="product-page">
                <Link className="back-link" to="/">← Back to shop</Link>
                <p className="product-page-status" role={result?.error ? 'alert' : 'status'}>
                    {result?.error ? 'Could not load this product. Please try again later.' :
                        result ? 'Product not found.' : 'Loading product...'}
                </p>
            </main>
        );
    }

    return (
        <main className="product-page">
            <Link className="back-link" to="/">← Back to shop</Link>
            <div className="product-page-layout">
                <div className="product-page-image-wrap">
                    <img className="product-page-image" src={productImage} alt={product.name} />
                    {product.type && <span className="product-type">{product.type}</span>}
                </div>
                <section className="product-page-info">
                    <p className="eyebrow">A little everyday goodness</p>
                    <h1>{product.name}</h1>
                    <p className="product-page-price">${product.price}</p>
                    <p className="product-page-description">{product.description}</p>
                    <div className="product-purchase">
                        <p className="quantity-label" id="quantity-label">Quantity</p>
                        <div className="purchase-controls">
                            <div className="quantity-control" role="group" aria-labelledby="quantity-label">
                                <button type="button" aria-label="Decrease quantity" disabled={quantity === 1}
                                    onClick={() => changeQuantity(-1)}>−</button>
                                <output aria-live="polite" aria-label="Quantity">{quantity}</output>
                                <button type="button" aria-label="Increase quantity"
                                    disabled={quantity === Number.MAX_SAFE_INTEGER}
                                    onClick={() => changeQuantity(1)}>+</button>
                            </div>
                            <button className="product-add-button" type="button" onClick={addToCart}>
                                Add to cart
                            </button>
                        </div>
                        <p className="cart-feedback" role={cartError ? 'alert' : 'status'}>
                            {cartError || message}
                        </p>
        
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ProductPage;
