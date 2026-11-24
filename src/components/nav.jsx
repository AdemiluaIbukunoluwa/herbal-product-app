import CartLogo from '../assets/cartLogo';

const Navigation = () => {
    return (
        <header className="site-header">
            <a className="brand logo" href="/" aria-label="dewbloom home">
                    <img src="/logo.png" alt="dewbloom logo" className="w-8 h-8" />
                <span>dewbloom</span>
            </a>            
            <nav aria-label="Main navigation">
                <ul className="site-nav">
                <li>
                    <a href="/product-builder" className="byo w-full text-wrap p-3 rounded lg">Build Your Own Product</a>
                </li>
                <li><a href="/">Home</a></li>
                <li><a href="/#products">Shop</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="/cart"><CartLogo /></a></li>
                </ul>
  
            </nav>
        </header>
    );
};

export default Navigation;