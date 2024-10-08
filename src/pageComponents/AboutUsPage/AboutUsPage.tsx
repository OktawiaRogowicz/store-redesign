"use client";

import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useCartContext } from "@/contexts/Cart/useCart";
import { SiteConfigurationContentType } from "@/sanity/types/SiteConfigurationType";
import AboutUsHeroSection from "@/sections/AboutUsHeroSection";
import IconDescriptionCardsSection from "@/sections/IconDescriptionCardsSection";
import TwoImagesSection from "@/sections/TwoImagesSection";

import classes from "./AboutUsPage.module.css";

type AboutUsPageType = {
  siteConfiguration: SiteConfigurationContentType;
  aboutUsPageContent: any;
};

const AboutUsPage: React.FunctionComponent<AboutUsPageType> = ({
  siteConfiguration,
  aboutUsPageContent,
}) => {
  const cartContext = useCartContext();

  console.log("aboutUsPageContent: ", aboutUsPageContent);

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
      <TwoImagesSection content={aboutUsPageContent?.twoImagesSection} />
      <Footer footer={siteConfiguration.footer} />
    </div>
  );
};

export default AboutUsPage;
