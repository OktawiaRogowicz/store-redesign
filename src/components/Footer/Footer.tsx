"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

import StyledCheckbox from "@/components/StyledCheckbox";
import SectionContainer from "@/components/SectionContainer";
import StyledIconButton from "@/components/StyledIconButton";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTextInput from "@/components/StyledTextInput";
import SectionWrapper from "@/components/SectionWrapper";
import { ArrowRightIconSmall } from "@/icons";
import { FooterContentType } from "@/sanity/schemas/documents/footer";

import classes from "./Footer.module.css";

type FooterPropsType = {
  footer: FooterContentType;
  opened?: boolean;
};

const Footer: React.FunctionComponent<FooterPropsType> = ({ footer }) => {
  const t = useTranslations("components");
  const [checked, setChecked] = useState(false);
  const [newsletterInputValue, setNewsletterInputValue] = useState("");

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
          {footer?.newsletter && (
            <div className={classes["footer__info-column"]}>
              <StyledParagraph type="size-S-semi-bold">
                {t("footer.newsletter.title")}
              </StyledParagraph>
              <StyledParagraph type="size-M-light">
                {footer.newsletter.description}
              </StyledParagraph>
              <StyledTextInput
                placeholder="Wpisz swój adres e-mail"
                rightSection={
                  <StyledIconButton
                    icon={<ArrowRightIconSmall />}
                    onClick={() => console.log("to do")}
                  />
                }
                value={newsletterInputValue}
                onChange={(event) =>
                  setNewsletterInputValue(event.currentTarget.value)
                }
              />
              <StyledCheckbox
                label={footer.newsletter.termsOfService}
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
              />
            </div>
          )}
          <div className={classes["footer__design--mobile"]}>
            {designComponent}
          </div>
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default Footer;
