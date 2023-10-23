import React from "react";
import Hero from "../../hero-section/hero-section.component";
import CategoriesLayout from "../../categories-layout/categories-layout.component";
import Carousel from "../../carousel/carousel.component";
import Section from "../../section/section.component";
import Cta from "../../cta/cta.component";

const HomePage = () => {
  return (
    <div className="App">
        <Hero />
        <CategoriesLayout />
        <Section/>
        <Carousel />
        <Cta/>
    </div>
  );
};

export default HomePage;
