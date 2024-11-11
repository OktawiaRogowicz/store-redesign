import { HeaderContentType } from "@/sanity/types/documents/HeaderContentType";
import { FooterContentType } from "@/sanity/types/documents/FooterContentType";

export type SiteConfigurationContentType = {
  header: HeaderContentType;
  footer: FooterContentType;
};
