import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider"; // MUST BE IMPORTED

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Modern Website",
  description: "Built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* CRITICAL: suppressHydrationWarning must be right here */
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100`}>
        
        {/* CRITICAL: ThemeProvider must wrap everything inside the body */}
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}