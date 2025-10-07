import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PaymentCalculator from "@/components/PaymentCalculator";

export const metadata: Metadata = {
  title: "Jason Young - All Western Mortgage",
  description: "Jason Young, Loan Officer at All Western Mortgage. NMLS# 7513. Licensed in AL, GA, FL, TN, VA. Helping home buyers achieve their dreams of homeownership since 2003.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <PaymentCalculator />
      </body>
    </html>
  );
}
