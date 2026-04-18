import type { ReactNode } from "react";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Shopify Furniture Storefront",
  description: "Mobile-first premium storefront scaffold using Next.js, TypeScript, and Tailwind CSS."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
