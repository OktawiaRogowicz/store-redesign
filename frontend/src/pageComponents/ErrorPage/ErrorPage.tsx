"use client";

import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import SectionWrapper from "@/components/SectionWrapper";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTitle from "@/components/StyledTitle";
import { useCartContext } from "@/contexts/Cart/useCart";
import { SiteConfigurationContentType } from "@/sanity/types/SiteConfigurationType";

import classes from "./ErrorPage.module.css";

type ErrorPageType = {
  siteConfiguration: SiteConfigurationContentType;
  errorPageContent: any;
};

const ErrorPage: React.FunctionComponent<ErrorPageType> = ({
  siteConfiguration,
  errorPageContent,
}) => {
  const cartContext = useCartContext();

  return (
    <div className={classes["returns-page"]}>
      <Header
        variant="black"
        header={siteConfiguration.header}
        cartContext={cartContext}
      />
      <SectionWrapper>
        <SectionContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StyledTitle order={1}>TEXTTOCHANGEError 404</StyledTitle>
            <StyledParagraph type="size-M-light">
              TEXTTOCHANGENot found :(
            </StyledParagraph>
          </div>
        </SectionContainer>
      </SectionWrapper>
      <Footer footer={siteConfiguration.footer} />
    </div>
  );
};

export default ErrorPage;
