import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/navbar";

export const metadata: Metadata = {
  title: "Innerstep Journey",
  description:
    "Innerstep Journey is a travel website that allows users to explore different countries and cultures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
