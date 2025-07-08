"use client";
import ScrollProgress from "./ScrollProgress";

export default function AppClientWrapper({ children }) {
  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
} 