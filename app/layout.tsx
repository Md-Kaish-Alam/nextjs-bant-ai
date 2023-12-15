import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { ModalProvider } from "@/components/modals/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BentAI - AI Platform",
  description: `This AI platform is more than just a tool; it's a gateway to a world of possibilities. Sign up today and experience the power of AI for yourself.`,
  icons: {
    icon: [
      {
        url: "/logo.png",
        href: "/logo.png",
      },
    ],
  },
}; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
