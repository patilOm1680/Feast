"use client";
import React from "react";
import "./carousel.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const CarouselCom = () => {
  const handleDragStart = (e: any) => e.preventDefault();
  const items = [
    <Image
      src="/carousel/saladBanner.png"
      onDragStart={handleDragStart}
      alt="carousel image"
      role="presentation"
      style={{ objectFit: "contain" }}
      loading="eager"
      fill
    />,
    <Image
      src="/carousel/Banner2.png"
      onDragStart={handleDragStart}
      alt="carousel image"
      role="presentation"
      style={{ objectFit: "contain" }}
      loading="eager"
      fill
    />,
  ];
  const renderPrevButton = ({ isDisabled }: { isDisabled: any }) => {
    return (
      <button className="carousel-nav-btn prev-btn" disabled={isDisabled}>
        <ChevronLeft size={30} />
      </button>
    );
  };

  const renderNextButton = ({ isDisabled }: { isDisabled: any }) => {
    return (
      <button className="carousel-nav-btn next-btn" disabled={isDisabled}>
        <ChevronRight size={30} />
      </button>
    );
  };
  return (
    <div className="pt-14 md:pt-0 md:-mt-8 relative z-10">
      <div className="carousel-container-wrapper">
        <AliceCarousel
          {...({
            renderPrevButton,
            renderNextButton,
          } as any)}
          mouseTracking
          items={items}
          autoPlay={true}
          autoPlayInterval={50000}
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
