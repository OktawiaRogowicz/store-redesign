"use client";

import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutUsHeroSection from "@/sections/AboutUsHeroSection";
import IconDescriptionCardsSection from "@/sections/IconDescriptionCardsSection";
import TwoImagesSection from "@/sections/TwoImagesSection";

import classes from "./AboutUsPage.module.css";
import { useCartContext } from "@/contexts/Cart/useCart";

type SanityFooterType = {
  name: string;
};

type AboutUsPageType = {
  siteConfiguration: { footer: any; header: any };
  aboutUsPageContent: any;
};

const AboutUsPage: React.FunctionComponent<AboutUsPageType> = ({
  siteConfiguration,
  aboutUsPageContent,
}) => {
  const cartContext = useCartContext();

  return (
    <div className={classes["about-us-page"]}>
      <Header
        variant="black"
        header={siteConfiguration.header}
        cartContext={cartContext}
      />
      <AboutUsHeroSection
        title={aboutUsPageContent?.headerSection.title}
        description={aboutUsPageContent?.headerSection.description}
        image={aboutUsPageContent?.headerSection.image}
      />
      <IconDescriptionCardsSection
        items={aboutUsPageContent?.iconDescriptionsSection}
      />
      <TwoImagesSection />
      <Footer footer={siteConfiguration.footer} />
    </div>
  );
};

export default AboutUsPage;
