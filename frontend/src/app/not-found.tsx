"use client";

import React from "react";
import Error from "next/error";
import { defaultLocale } from "@/config";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
