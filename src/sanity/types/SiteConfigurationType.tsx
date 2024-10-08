import { FooterContentType } from "@/sanity/schemas/documents/footer";
import { HeaderContentType } from "@/sanity/schemas/documents/header";

export type SiteConfigurationContentType = {
  header: HeaderContentType;
  footer: FooterContentType;
};
