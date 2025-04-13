import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Header from "@/components/header"
import {AuthProvider} from "@/provider/AuthProvider";



export const metadata: Metadata = {
  title: "Mairie",
  description: "Site web d'une mairie connectée",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

          <AuthProvider>
              <Header/>
                {children}
          </AuthProvider>
      </body>
    </html>
  );
}
