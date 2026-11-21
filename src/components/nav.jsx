const Navigation = () => {
    return (
        <header className="site-header">
            <a className="brand" href="/" aria-label="dewbloom home">
                <span className="brand-mark" aria-hidden="true">✦</span>
                <span>dewbloom</span>
            </a>
            <nav aria-label="Main navigation">
                <ul className="site-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/#products">Shop</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;