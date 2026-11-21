const LandingPage = () => {
    return (
        <main>
                       <section className="hero">
                <div className="hero-copy">
                    <p className="eyebrow">Good things grow naturally</p>
                    <h1>A softer kind of <span>self-care.</span></h1>
                    <p className="hero-description">
                        Thoughtful, plant-inspired essentials for your everyday rituals.
                        A little nature goes a long way.
                    </p>
                    <a className="hero-button" href="#products">
                        Explore the collection <span aria-hidden="true">→</span>
                    </a>
                </div>
                <div className="hero-art" aria-label="A selection of natural care products">
                    <img
                        className="hero-image"
                        src="https://img.magnific.com/free-photo/cosmetic-male-beauty-products-with-display_23-2150435210.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Natural beauty products arranged together"
                    />
                </div>
            </section>
        </main>
    );
};

export default LandingPage;