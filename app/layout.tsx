import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
