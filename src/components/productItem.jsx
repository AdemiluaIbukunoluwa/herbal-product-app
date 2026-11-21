import { Link } from 'react-router-dom';
import { productImage } from '../utils/productImage';

const ProductItem = ({ product }) => {

    const { name, description, price, type } = product;
    return (
        <Link className="product-card" to={`/product/${encodeURIComponent(name)}`}
        state = {{ product }}
        >
            <div className="product-image-wrap">
                <img src={productImage} alt={name} className="product-image" />
                <span className="product-type">{type}</span>
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <p className="product-description">{description}</p>
                <div className="product-footer">
                    <p className="product-price">${price}</p>
                    <span className="cart-button">View details</span>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;