import { groq } from "next-sanity";

import { client } from "../client";

export async function getAboutUsPage() {
  const query = groq`*[_type == "aboutUsPage"][0]{
    name,
    slug,
    headerSection,
    iconDescriptionsSection[] {
      "id": icon.assetId,
      title,
      "icon": icon.asset,
      description
    },
    "twoImagesSection": {
      "productLeft": twoImagesSection.productLeft->store,
      "productRight": twoImagesSection.productRight->store
    }
  }`;

  const aboutUsPage = await client.fetch(query, { cache: "no-store" } as any);

  console.log("aboutUsPageaboutUsPageaboutUsPageaboutUsPage: ", aboutUsPage);

  return aboutUsPage;
}
