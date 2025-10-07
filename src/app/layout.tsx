import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AdminAccess from "@/components/admin-access";
import FirstTimeSetup from "@/components/first-time-setup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer",
  description: "A modern portfolio showcasing full-stack development projects and skills",
  keywords: ["portfolio", "full-stack", "developer", "react", "nextjs", "typescript"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio - Full Stack Developer",
    description: "A modern portfolio showcasing full-stack development projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
        <AdminAccess />
        <FirstTimeSetup />
      </body>
    </html>
  );
}
