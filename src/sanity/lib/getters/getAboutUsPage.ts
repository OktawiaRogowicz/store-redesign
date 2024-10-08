import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

export async function getAboutUsPage() {
  const query = groq`*[_type == "aboutUsPage"][0]{
    name,
    slug,
    headerSection,
    iconDescriptionsSection,
    "twoImagesSection": {
      "productLeft": twoImagesSection.productLeft->store,
      "productRight": twoImagesSection.productRight->store
    }
  }`;

  const aboutUsPage = await client.fetch(query, { cache: "no-store" });

  return aboutUsPage;
}
