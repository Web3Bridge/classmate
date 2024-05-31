// app/user/dashboard/layout.tsximport type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Raleway as FontSans } from "next/font/google";
import { ReactNode } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function UserDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-white",
          fontSans.variable
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
