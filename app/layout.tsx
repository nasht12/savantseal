import {
  ClerkProvider,
  OrganizationSwitcher,
  SignedIn,
  UserButton,
  useAuth
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
import { Toaster } from "@/components/ui/sonner"

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
  return (
    <html lang="en">
      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
        <body>
          <div className="dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
            <main>
              <ConvexClientProvider>
                <Navigation />
                {children}
              </ConvexClientProvider>
            </main>
            <Toaster />
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
