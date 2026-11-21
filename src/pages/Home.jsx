import ProductList from '../components/productList';
import LandingPage from './LandingPage';

const Home = () => {

    return (
        <main>
            <LandingPage />
            <section className="catalogue" id="products">
                <div className="catalogue-heading">
                    <div>
                        <p className="eyebrow">A little goodness, every day</p>
                        <h2>Find your feel-good</h2>
                    </div>
                    <p className="catalogue-note">Plant-inspired picks for your daily ritual.</p>
                </div>
                <ProductList />
            </section>
        </main>
    );
};

export default Home;