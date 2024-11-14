"use client";

import React from "react";
import { useTranslations } from "next-intl";

import SectionContainer from "@/components/SectionContainer";
import StyledParagraph from "@/components/StyledParagraph";
import SectionWrapper from "@/components/SectionWrapper";
import { FooterContentType } from "@/sanity/types/documents/FooterContentType";

import classes from "./Footer.module.css";
import FooterNewsletter from "./components/FooterNewsletter";

type FooterPropsType = {
  footer: FooterContentType;
  opened?: boolean;
};

const Footer: React.FunctionComponent<FooterPropsType> = ({ footer }) => {
  const t = useTranslations("components");

  const designComponent = (
    <StyledParagraph type="size-S-light" color="beige">
      {footer?.credits}
      {"\n"}
      {t("footer.designed-by")}
    </StyledParagraph>
  );

  return (
    <SectionWrapper>
      <SectionContainer border={{ top: true }}>
        <div className={classes["footer"]}>
          <div className={classes["footer__column-wrapper"]}>
            <div className={classes["footer__column"]}>
              {footer?.customerService && (
                <div className={classes["footer__info-column"]}>
                  <StyledParagraph type="size-S-semi-bold">
                    {footer.customerService.title}
                  </StyledParagraph>
                  <StyledParagraph type="size-M-light">
                    {footer.customerService.phoneNumber}
                    <br />
                    {footer.customerService.email}
                    <br />
                    {footer.customerService.openingHours}
                  </StyledParagraph>
                </div>
              )}
              {footer?.contact && (
                <div className={classes["footer__info-column"]}>
                  <StyledParagraph type="size-S-semi-bold">
                    {footer.contact.title}
                  </StyledParagraph>
                  <StyledParagraph type="size-M-light">
                    {footer.contact.street}
                    <br />
                    {footer.contact.postalCode} {footer.contact.city}
                    <br />
                    {footer.contact.country}
                  </StyledParagraph>
                </div>
              )}
            </div>
            <div className={classes["footer__design--desktop"]}>
              {designComponent}
            </div>
          </div>
          {footer?.menu.length > 0 && (
            <div className={classes["footer__info-column"]}>
              {footer.menu.map((menuItem) => {
                if (!menuItem?.slug.current) return;
                return (
                  <StyledParagraph
                    type="size-M-light"
                    key={menuItem.slug.current}
                  >
                    <a href={`/${menuItem.slug.current}`}>{menuItem.title}</a>
                  </StyledParagraph>
                );
              })}
            </div>
          )}
          {footer?.newsletter && <FooterNewsletter footer={footer} />}
          <div className={classes["footer__design--mobile"]}>
            {designComponent}
          </div>
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default Footer;
