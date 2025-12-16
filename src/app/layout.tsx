import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Feast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
