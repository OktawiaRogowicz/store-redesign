"use client";

import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useCartContext } from "../../contexts/Cart/useCart";
import HeroSection from "../../sections/HeroSection";
import ProductsSliderSection from "../../sections/ProductsSliderSection";

import classes from "./HomePage.module.css";
import { SiteConfigurationContentType } from "../../sanity/types/SiteConfigurationType";
import { ROUTES } from "../../config";

type SectionContainerType = {
  siteConfiguration: SiteConfigurationContentType;
  homePageContent: any;
};

const HomePage: React.FunctionComponent<SectionContainerType> = ({
  siteConfiguration,
  homePageContent,
}) => {
  const cartContext = useCartContext();

  return (
    <div className={classes["home-page"]}>
      <Header
        variant="yellow"
        header={siteConfiguration.header}
        cartContext={cartContext}
      />
      <HeroSection
        images={homePageContent?.heroSection.images}
        title={homePageContent?.heroSection?.title}
        button={{
          text: homePageContent?.heroSection?.button,
          href: `${ROUTES.category.href}/${homePageContent?.heroSection?.slug}`,
        }}
      />
      <ProductsSliderSection
        title={homePageContent?.productsSliderSection?.title}
        products={homePageContent?.productsSliderSection?.products}
        href={`${ROUTES.category.href}/${homePageContent?.productsSliderSection?.handle}`}
      />
      <Footer footer={siteConfiguration.footer} />
    </div>
  );
};

export default HomePage;
