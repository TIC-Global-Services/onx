import type { Metadata } from "next";
import { Antonio } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
  variable: "--font-antonio",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ONX Sports — Built to Decide",
  description:
    "ONX Sports is a precision-focused indoor training space built for those who value control, discipline, and performance.",
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
      </body>
    </html>
  );
}
