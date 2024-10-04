"use client";

import React, { useState } from "react";

import SectionContainer from "@/components/SectionContainer";
import StyledIconButton from "@/components/StyledIconButton";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTextInput from "@/components/StyledTextInput";
import SectionWrapper from "@/components/SectionWrapper";
import { ArrowRightIconSmall } from "@/icons";

import classes from "./Footer.module.css";
import StyledCheckbox from "@/components/StyledCheckbox";

type FooterPropsType = {
  footer: any;
  opened?: boolean;
};

const Footer: React.FunctionComponent<FooterPropsType> = ({ footer }) => {
  const [checked, setChecked] = useState(false);
  const [newsletterInputValue, setNewsletterInputValue] = useState("");

  const designComponent = (
    <StyledParagraph type="size-S-light" color="beige">
      {footer.credits}
      {"\n"}Design & development: Oktawia Rogowicz
    </StyledParagraph>
  );

  return (
    <SectionWrapper>
      <SectionContainer>
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
                return (
                  <StyledParagraph type="size-M-light">
                    <a href={menuItem.slug}>{menuItem.title}</a>
                  </StyledParagraph>
                );
              })}
            </div>
          )}
          {footer?.newsletter && (
            <div className={classes["footer__info-column"]}>
              <StyledParagraph type="size-S-semi-bold">
                newsletter
              </StyledParagraph>
              <StyledParagraph type="size-M-light">
                {footer.newsletter.description}
              </StyledParagraph>
              <StyledTextInput
                placeholder="Wpisz swój adres e-mail"
                rightSection={
                  <StyledIconButton icon={<ArrowRightIconSmall />} />
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
