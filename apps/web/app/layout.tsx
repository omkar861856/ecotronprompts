import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Prompt Library | AI Gallery",
  description: "Explore the world's most sophisticated AI prompt library. Professional generation parameters for FLUX, Midjourney, and Stable Diffusion.",
  keywords: ["AI Prompts", "Prompt Engineering", "ChatGPT Prompts", "Midjourney Prompts", "AI Social Network"],
  authors: [{ name: "PromptFeed Team" }],
  openGraph: {
    title: "Prompt Library | AI Gallery",
    description: "Explore the world's most sophisticated AI prompt library.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

