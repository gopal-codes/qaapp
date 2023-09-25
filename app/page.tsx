import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import ForSeo from "@/components/ForSeo";
import WhyChooseUs from "@/components/WhyChooseUs";
import ViewQA from "@/components/pageHelperComponents.js/ViewQA";
import axios from "axios";

export default async function Home() {

  
  return (
    <>
    <ForSeo />
    <Nav />
    <main>
      <HeroSection />
      <ViewQA />
      <WhyChooseUs />     
    </main>
    <Footer />
    </>
  );
}
