import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Resource",
  description: "Get access to resources needed for your development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
