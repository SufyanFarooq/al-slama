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
  title: "Al-Slama Transport LLC",
  description: "Industrial Equipment & Plant Hire",
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
