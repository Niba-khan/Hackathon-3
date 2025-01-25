
import Header from "./components/header";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import EditorsPick from "./components/editorsPick";
import SellerProduct from "./components/sellerProduct";
import Banner from "./components/banner";
import ContainerFluide from "./components/containerfluide";
import FeaturedPost from "./components/featuredpost";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
     <Header/>
      <Navbar/>
      <HeroSection/>
      <EditorsPick/>
      <SellerProduct/>
      <Banner/>
      <ContainerFluide/>
      <FeaturedPost/>
      <Footer/>
    </div>
  )
}