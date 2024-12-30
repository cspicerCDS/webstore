import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
//import Nav from "./components/nav";
import Footer from "@/components/footer";
import { NavProvider } from '@/components/nav-context'
import { Toaster } from "@/components/ui/toaster"

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chrismspicer.com/platterparty'),
  title: "Platter Party Music",
  description: "Your premier destination for vinyl records and music collectibles",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} antialiased min-h-screen flex flex-col`}
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
