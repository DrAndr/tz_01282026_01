import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { CURRENCY_COOKIE_NAME } from "@/lib/constants";
import { Currency } from "@/lib/types";
import { getCurrencyValue } from "@/lib/utils";
import { CurrencyProvider } from "./providers";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Таиланд",
  description: "Недвижимость в Таиланде",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currencyValue = (await cookies()).get(CURRENCY_COOKIE_NAME)?.value as Currency;
  const currency = getCurrencyValue(currencyValue)

  return (
    <html lang="ru">
      <body className={`${roboto.variable} antialiased`}>
        <CurrencyProvider initCurrency={currency}>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
