import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import TheHeader from "@/components/TheHeader";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import TheFooter from "@/components/TheFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Elearning Platform",
  description: "Elearning Platform by Haneko",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <TheHeader />
          {children}
          <TheFooter />
        </SessionProvider>
      </body>
    </html>
  );
}
