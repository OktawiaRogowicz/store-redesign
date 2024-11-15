"use client";

import React from "react";
import { useForm } from "@mantine/form";
import { useTranslations } from "next-intl";

import StyledCheckbox from "@/components/StyledCheckbox";
import StyledIconButton from "@/components/StyledIconButton";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTextInput from "@/components/StyledTextInput";
import { ArrowRightIconSmall } from "@/icons";
import { FooterContentType } from "@/sanity/types/documents/FooterContentType";

import classes from "./FooterNewsletter.module.css";

type FooterPropsType = {
  footer: FooterContentType;
};

const FooterNewsletter: React.FunctionComponent<FooterPropsType> = ({
  footer,
}) => {
  const t = useTranslations("components");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value)
          ? null
          : t("footer.newsletter.form.email.error"),
      termsOfService: (value) =>
        value ? null : t("footer.newsletter.form.terms-of-service.error"),
    },
  });

  return (
    <form
      className={classes["footer-newsletter"]}
      onSubmit={form.onSubmit((values) => console.log(values))}
    >
      <StyledParagraph type="size-S-semi-bold">
        {t("footer.newsletter.title")}
      </StyledParagraph>
      <StyledParagraph type="size-M-light">
        {footer.newsletter.description}
      </StyledParagraph>
      <StyledTextInput
        placeholder={t("footer.newsletter.form.email.placeholder")}
        rightSection={
          <StyledIconButton type="submit" icon={<ArrowRightIconSmall />} />
        }
        key={form.key("email")}
        {...form.getInputProps("email")}
      />
      <StyledCheckbox
        label={footer.newsletter.termsOfService}
        key={form.key("termsOfService")}
        {...form.getInputProps("termsOfService", { type: "checkbox" })}
      />
    </form>
  );
};

export default FooterNewsletter;
