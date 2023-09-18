import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import ForSeo from "@/components/ForSeo";
import WhyChooseUs from "@/components/WhyChooseUs";
import ViewQA from "@/components/pageHelperComponents.js/ViewQA";
import axios from "axios";

export default async function Home() {


  const result = await axios.get(
    `http://localhost:3000/api/qabank`
  );
  
  return (
    <>
    <ForSeo />
    <Nav />
    <main>
      <HeroSection />
      <ViewQA data={result?.data?.data} admin={true} />
      <WhyChooseUs />     
    </main>
    <Footer />
    </>
  );
}
