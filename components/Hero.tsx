"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Encuentra, reserva o alquila un coche - ¡Rápido y fácil!
        </h1>
        <p className="hero__subtitle">
          Optimiza tu experiencia de alquiler de coches con nuestra plataforma
          intuitiva y segura. Encuentra coches disponibles, reserva con
          facilidad y disfruta de un viaje sin complicaciones.
        </p>

        <CustomButton
          title="Explorar vehículos"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />

          <div className="hero__image-overlay">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
