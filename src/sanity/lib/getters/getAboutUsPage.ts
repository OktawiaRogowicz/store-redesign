import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

export async function getAboutUsPage() {
  const query = groq`*[_type == "aboutUsPage"][0]`;

  const aboutUsPage = await client.fetch(query);

  return aboutUsPage;
}
