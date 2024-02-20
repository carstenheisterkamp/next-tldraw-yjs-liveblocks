import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tldraw Starter App",
  description: "A live drawing starter app",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="./img/favicon.svg"
          rel="icon"
          type="image/svg+xml"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY;
const API_KEY_WARNING = `No LIVEBLOCKS_SECRET_KEY provided. You will not be able to save your drawings.`;

if (!API_KEY) {
  console.warn(API_KEY_WARNING);
}