import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertySlider from "@/components/PropertySlider";
import Footer from "@/components/Footer";
import backgroundTexture from "@/assets/background-texture.jpg";

const Index = () => {
  return (
    <div 
      className="min-h-screen font-inter relative"
      style={{
        backgroundImage: `url(${backgroundTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/40" />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <PropertySlider />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;