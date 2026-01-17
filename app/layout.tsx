import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/app/theme-provider";
import Navbar from "@/components/app/navbar/navbar";
import { Barlow_Condensed } from 'next/font/google';
import SmoothScroll from "@/components/providers/SmoothScroll";

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-barlow',
});

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GDG NITH",
  description: "Developer Students Club NIT Hamirpur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} ${barlow.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
           {/* Wrap everything here */}
          <SmoothScroll>
            {children}
          </SmoothScroll>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
