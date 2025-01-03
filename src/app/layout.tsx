import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Your Streaming List",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 w-full h-screen text-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
