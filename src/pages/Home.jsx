import ProductList from '../components/productList';
import LandingPage from './LandingPage';
import AboutSection from '../components/aboutSection';
import ContactSection from '../components/contactSection';
const Home = () => {

    return (
        <main>
            <LandingPage />
            <section className="catalogue" id="products">
                <div className="catalogue-heading">
                    <div className="mt-10">
                        <h2>Find your feel-good</h2>
                    </div>
                    <p className="catalogue-note">Plant-inspired picks for your daily ritual.</p>
                </div>
                <ProductList />
                <AboutSection />
                <ContactSection />
            </section>
        </main>
    );
};

export default Home;