"use client";
import React from "react";
import "./carousel.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../assets/carousel/saladBanner.png";
import img2 from "../../assets/carousel/saladBanner.png";
import Image from "next/image";

const CarouselCom = () => {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <Image
      src={img1}
      onDragStart={handleDragStart}
      alt="carousel image"
      role="presentation"
      style={{ objectFit: "contain" }}
      loading="eager"
    />,
    <Image
      src={img2}
      onDragStart={handleDragStart}
      alt="carousel image"
      role="presentation"
      style={{ objectFit: "contain" }}
       loading="eager"
    />,
  ];
  const renderPrevButton = ({ isDisabled }:{isDisabled:boolean}) => {
    return (
      <button className="carousel-nav-btn prev-btn" disabled={isDisabled}>
        <ChevronLeft size={30} />
      </button>
    );
  };

  const renderNextButton = ({ isDisabled }:{isDisabled:boolean}) => {
    return (
      <button className="carousel-nav-btn next-btn" disabled={isDisabled}>
        <ChevronRight size={30} />
      </button>
    );
  };
  return (
    <div className="pt-14">
      <div className="carousel-container-wrapper">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay={true}
          autoPlayInterval={10000}
          infinite={true}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
          disableButtonsControls={false}
          sx={{ height: "600px" }}
        />
      </div>
    </div>
  );
};

export default CarouselCom;
