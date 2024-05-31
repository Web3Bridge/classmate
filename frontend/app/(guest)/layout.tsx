import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Raleway as FontSans } from "next/font/google";
import Header from "@/components/shared/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Classmate",
  description: "Classmate - LMS system onchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-white",
          fontSans.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
