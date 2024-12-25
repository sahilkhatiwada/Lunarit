import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import About from './components/home/About';
import Stats from './components/home/Stats';
import FAQ from './components/home/Faq/Faq';
import Contact from './components/home/Contact';
import ProductSection from './components/home/Product/Product';
import OurClients from './components/home/Client/Client';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ProductSection />
        <OurClients />
        <Stats />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
