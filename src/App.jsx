import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <>
      <header className="site-header">
        <Navbar />
        <Hero />
      </header>
      <Footer />
    </>
  )
}
