import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import ReactQueryProvider from "@/components/providers/react-quary-provider";
import NavBar from "@/components/ui/navbar";
import {Provider} from 'jotai'
import {Toaster} from 'react-hot-toast'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product NFT",
  description: "personalized NFT for product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <Provider>
          <NavBar/>
        {children}
        <Toaster/>
          </Provider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
