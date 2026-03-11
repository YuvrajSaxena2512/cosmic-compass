import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BirthForm from "@/components/BirthForm";
import CosmicLoader from "@/components/CosmicLoader";
import Footer from "@/components/Footer";
import type { FormData } from "@/components/BirthForm";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (data: FormData) => {
    setLoading(true);
    setTimeout(() => {
      navigate("/report", { state: { formData: data } });
    }, 3000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Starfield />
      {loading && <CosmicLoader />}
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <BirthForm onSubmit={handleSubmit} />
      <Footer />
    </div>
  );
};

export default Index;
