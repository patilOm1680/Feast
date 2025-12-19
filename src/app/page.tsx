import Carousel from "@/components/Carousel/Carousel";
import Categories from "@/components/Categories/Categories";
import FoodCards from "@/components/FoodCards/FoodCards";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
     
        <div className="pt-[80px] md:mx-22 mx-0">
          <div className="hidden md:block">
            <Carousel/>
          </div>
          
          <Categories/>
          <FoodCards/>
        </div>
      
    </>
  );
}
