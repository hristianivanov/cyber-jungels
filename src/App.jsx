import Header from "./components/header/Header"
import InfoSection from './components/infoSection/InfoSection'
import CharacterSection from "./components/characterSection/CharacterSection";
import HistorySection from "./components/historySection/HistorySection";
import CardSection from "./components/cardSection/CardSection";

import Footer from "./components/footer/Footer";

import './index.css';

export default function App() {
  return (
    <div className="site-container">
      <Header />
      <InfoSection />
      <CharacterSection />
      <HistorySection/>
      <CardSection/>
      <Footer />
    </div>
  )
}
