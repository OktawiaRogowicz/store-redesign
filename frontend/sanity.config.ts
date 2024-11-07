"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

// import { dataset, projectId, studioUrl, apiVersion } from "@/sanity/lib/api";
import { schemaTypes } from "@/sanity/schemas/documents";
import { structure } from "@/sanity/structure";

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  "Next.js Personal Website with Sanity.io";

export const sanityConfig = defineConfig({
  basePath: "/studio",
  projectId: "73vuarhv",
  dataset: "production" || "",
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: schemaTypes,
  },
  plugins: [
    structureTool({ structure }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: "2023-06-21" }),
  ],
} as any);
