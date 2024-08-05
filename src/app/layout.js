"use client";
import "styles/global.css";
import Script from "next/script";
import { useEffect } from "react";
import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inder&family=Inknut+Antiqua:wght@300;400;900&display=swap"
          rel="stylesheet"
        ></link>
        <Header />
        {children}
      </body>
    </html>
  );
}
