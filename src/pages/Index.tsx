import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertySlider from "@/components/PropertySlider";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Hero />
        <PropertySlider />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
