import CartLogo from '../assets/cartLogo';
import QuantityWidget from '../components/quantityWidget';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getProducts } from '../api/products';
import { productImage } from '../utils/productImage';

const ProductPage = () => {
    const { name } = useParams();
    const { state } = useLocation();
    // Check if the product was passed via state and matches the URL parameter  
    // If not, it will be looked up from the API based on the name parameter
    const linkedProduct = state?.product?.name === name ? state.product : null;
    const [lookup, setLookup] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('');
    const [cartError, setCartError] = useState('');
    const result = lookup?.name === name ? lookup : null;
    const product = linkedProduct || result?.product;

    const {description, price, type, ingredients, tags } = product;

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
                    <img className="product-page-image" src={productImage} alt={name} />
                    {type && <span className="product-type">{type}</span>}
                </div>
                <section className="product-page-info">
                    <h1 className="product-page-title">{name}</h1>
                    <p className="product-page-price">${price}</p>
                    <p className="product-page-description">{description}</p>
                    <div className="product-info">
                        <div>
                            {
                                ingredients && (
                                    <p className="product-ingredients">
                                        <strong>Ingredients:</strong> {ingredients.join(', ')}
                                    </p>
                                )
                            }
                        </div>
                        <div className="product-tags-container p-4">
                            {/* create little boxes for each tag */}
                            {
                                tags && (
                                    <div className="product-tags">
                                        {tags.map((tag, index) => (
                                            <span key={index} className="product-tag rounded-lg mr-2 p-3">{tag}</span>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="product-purchase">
                        <p className="quantity-label" id="quantity-label">Quantity</p>
                        <div className="purchase-controls">
                            <QuantityWidget
                                quantity={quantity}
                                onIncrease={() => changeQuantity(1)}
                                onDecrease={() => changeQuantity(-1)}
                            />
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
