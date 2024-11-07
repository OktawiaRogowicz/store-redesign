import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: ["en", "de"],
    defaultLocale: "en",
  });
  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  matcher: ["/((?!api|studio|_next|_vercel\\..*).*)"],
};
