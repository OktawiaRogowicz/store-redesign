import React, { ReactNode } from "react";
import Head from "next/head";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { unstable_setRequestLocale, getMessages } from "next-intl/server";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
// import "@mantine/notifications/styles.css";
import "./global.css";

import { locales } from "@/config";
import { themeConfiguration } from "@/theme/themeConfig";
import CartProvider from "@/contexts/Cart/CartProvider";
// import NotificationsContainer from "@/components/NotificationsContainer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  if (!locales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <ColorSchemeScript />
      </Head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MantineProvider
            theme={themeConfiguration}
            withGlobalClasses
            // withNormalizeCSS
          >
            <CartProvider>
              {/*<NotificationsContainer />*/}
              {children}
            </CartProvider>
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}