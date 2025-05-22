import Header from "../../components/Header/Header";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import MenuSection from "../../components/MenuSection/MenuSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import MapSection from "../../../pages/Map/MapSection";

function Home() {
  return (
    <div className="home-page">
      <Header />

      <AboutUsSection />

      <MenuSection />

      <MapSection />
      
      <ContactSection />
    </div>
  );
}

export default Home;
