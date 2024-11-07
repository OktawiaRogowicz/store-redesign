import { FooterContentType } from "../schemas/documents/footer";
import { HeaderContentType } from "../schemas/documents/header";

export type SiteConfigurationContentType = {
  header: HeaderContentType;
  footer: FooterContentType;
};
