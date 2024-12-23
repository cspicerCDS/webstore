import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
//import Nav from "./components/nav";
import Footer from "./components/footer";
import { NavProvider } from './components/nav-context'
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chrismspicer.com/platterparty'),
  title: "PlatterParty Music",
  description: "Your premier destination for vinyl records and music collectibles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <NavProvider>
          <Header />
          
          <main className="flex-1 container mx-auto max-w-6xl px-4 md:px-6">
            {children}
          </main>
          <Footer />
        </NavProvider>
        <Toaster />
      </body>
    </html>
  );
}
