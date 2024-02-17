import {
  ClerkProvider,
  OrganizationSwitcher,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { auth } from "@clerk/nextjs";
import ConvexClientProvider from "./ConvexClientProvider";
import Navigation from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Clerk Savant seal AI",
  description:
    "An AI assistant for college applications.",
  openGraph: { images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${inter.className} min-h-screen flex flex-col`}>
          <Navigation />
          <main className="grow">
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </main>
          <footer className="flex items-center h-20 gap-1 px-8 font-medium border-t md:px-20">
            <Image
              src="/savant2.svg"
              alt="savant Logo"
              width={64}
              height={32}
              priority
            />
            <span className="text-sm">© 2023</span>
          </footer>
        </body>
      </ClerkProvider>
    </html>
  );
}
