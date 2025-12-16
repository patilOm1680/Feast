import Carousel from "@/components/Carousel/Carousel";
import Categories from "@/components/Categories/Categories";
import FoodCards from "@/components/FoodCards/FoodCards";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
     
        <div className="mx-22">
          <Carousel/>
          <Categories/>
          <FoodCards/>
        </div>
      
    </>
  );
}
