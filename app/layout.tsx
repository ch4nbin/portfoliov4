import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "chanbin park",
  description: "Personal website of Chanbin Park.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
