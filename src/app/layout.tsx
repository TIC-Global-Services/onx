import type { Metadata } from "next";
import { Antonio } from "next/font/google";
import "./globals.css";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Footer } from "@/components/layout/footer";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
  variable: "--font-antonio",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arc & Bore — Built to Decide",
  description:
    "We are a precision-focused indoor training space built for those who value control, discipline, and performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${antonio.variable} bg-onx-black`}>
      <body className="font-antonio text-onx-white antialiased">
        {children}
        <ProgressiveBlur />
        <CustomCursor />
        <Footer />
      </body>
    </html>
  );
}
