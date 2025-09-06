import "./globals.css";
import AppClientWrapper from "./components/AppClientWrapper";
import SocialSidebar from "./components/SocialSidebar";

export const metadata = {
  title: "Alslama Transport | Mobile Crane Rental Dubai | Heavy Lifting Services UAE",
  description: "Alslama Transport LLC offers mobile crane rental, heavy lifting, and transport services in Dubai and across the UAE. Choose from a wide range of cranes (Sany, Tadano, Zoomlion) for all your industrial and construction needs. Reliable, safe, and efficient equipment hire.",
  openGraph: {
    title: "Alslama Transport | Mobile Crane Rental Dubai | Heavy Lifting Services UAE",
    description: "Mobile crane rental and heavy lifting services in Dubai, UAE. Sany, Tadano, Zoomlion cranes available for industrial, construction, and transport projects.",
    url: "https://alsalamatransport.org/",
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
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <AppClientWrapper>
          <SocialSidebar />
          {children}
        </AppClientWrapper>
      </body>
    </html>
  );
}
