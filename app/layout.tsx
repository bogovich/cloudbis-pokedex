import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/_components/Header";
import { ThemeProvider } from 'next-themes'
import "@/app/_styles/globals.css";
import "@/app/_styles/reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloudbis Pokedex",
  description: "Interview project for Cloudbis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
