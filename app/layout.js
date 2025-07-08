import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppClientWrapper from "./components/AppClientWrapper";
import SocialSidebar from "./components/SocialSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alslama Transport | Mobile Crane Rental Dubai | Heavy Lifting Services UAE",
  description: "Alslama Transport LLC offers mobile crane rental, heavy lifting, and transport services in Dubai and across the UAE. Choose from a wide range of cranes (Sany, Tadano, Zoomlion) for all your industrial and construction needs. Reliable, safe, and efficient equipment hire.",
  openGraph: {
    title: "Alslama Transport | Mobile Crane Rental Dubai | Heavy Lifting Services UAE",
    description: "Mobile crane rental and heavy lifting services in Dubai, UAE. Sany, Tadano, Zoomlion cranes available for industrial, construction, and transport projects.",
    url: "https://alslamatransport.com/",
    siteName: "Alslama Transport",
    images: [
      {
        url: "/services/liebherr-ltm-1500-8-1-steil_w800.jpg",
        width: 800,
        height: 600,
        alt: "Mobile Crane Rental Dubai - Alslama Transport",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "crane rental Dubai",
    "mobile crane UAE",
    "heavy lifting Dubai",
    "industrial equipment hire",
    "Sany crane Dubai",
    "Tadano crane UAE",
    "Zoomlion crane rental",
    "construction equipment Dubai",
    "transport services UAE"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppClientWrapper>
          <SocialSidebar />
          {children}
        </AppClientWrapper>
      </body>
    </html>
  );
}
