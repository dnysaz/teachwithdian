import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Teach With Dian",
  description: "Luh Putu Diantari Kusuma Dewi — English Lecturer, Writer & Lifelong Learner",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.className} bg-[#fafafa] text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
