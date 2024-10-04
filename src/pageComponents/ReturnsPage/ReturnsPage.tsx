"use client";

import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTitle from "@/components/StyledTitle";
import { useCartContext } from "@/contexts/Cart/useCart";

import classes from "./ReturnsPage.module.css";
import SectionContainer from "@/components/SectionContainer";
import SectionWrapper from "@/components/SectionWrapper";

type ReturnsPageType = {
  siteConfiguration: { footer: any; header: any };
  returnPageContent: any;
};

const ReturnsPage: React.FunctionComponent<ReturnsPageType> = ({
  siteConfiguration,
  returnPageContent,
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
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <StyledTitle order={1}>Zwroty</StyledTitle>
            <StyledParagraph type="size-M-light">
              beoboeoeoeobeoebepbebp
            </StyledParagraph>
          </div>
        </SectionContainer>
      </SectionWrapper>
      <Footer footer={siteConfiguration.footer} />
    </div>
  );
};

export default ReturnsPage;
