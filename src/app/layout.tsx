"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { CategoryProvider } from "@/context/CategoryContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <meta
        name="google-site-verification"
        content="HAcjahPzGlaocABzjNpZDgat7oIQZftVNe1KzPqRD7w"
      />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <CategoryProvider>
          <UserProvider>
            <Providers>
              <Header />
              {children}
              <Analytics />
              <Footer />
              <ScrollToTop />
            </Providers>
          </UserProvider>
        </CategoryProvider>
      </body>
      <meta name="google-adsense-account" content="ca-pub-6537827972143266" />
    </html>
  );
}

import { Providers } from "./providers";
