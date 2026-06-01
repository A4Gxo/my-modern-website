// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gyanaranjan Moharana | Portfolio",
  description: "Software Engineer & Data Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body className={`${inter.className} flex min-h-screen flex-col bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
          
        </ThemeProvider>
      </body>
    </html>
  );
}