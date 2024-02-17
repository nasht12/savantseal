"use client"
import { OrganizationSwitcher, SignedIn, UserButton } from '@clerk/nextjs';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image';

export default function Navigation() {
    const pathname = usePathname();

  return (
    <header className="flex items-center h-20 gap-4 px-4 border-b  border-solid sm:px-8 border-opacity-20 ">
      <Link href="/" className="flex items-center h-20 gap-2 sm:gap-4">
        <Image
          src="/savant2.svg"
          alt="SavantSeal"
          width={102}
          height={32}
          priority
        />
      </Link>
      <Link
        href="/blog"
        className="text-black font-semibold p-2 rounded hover:text-blue-400"
      >
        <button
          className={`px-4 py-2 rounded-md border bg-white text-neutarl-700 text-sm transition duration-200 ${
            pathname === "/blog"
              ? "text-blue-400 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
              : "border-transparent hover:text-blue-400 hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
          }`}
        >
          Blog
        </button>
      </Link>
      <Link
        href="/dashboard"
        className="text-black font-semibold p-2 rounded hover:text-blue-400"
      >
<button
          className={`px-4 py-2 rounded-md border bg-white text-neutarl-700 text-sm transition duration-200 ${
            pathname === "/dashboard"
              ? "text-blue-400 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
              : "border-transparent hover:text-blue-400 hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
          }`}
        >          Sivvy
        </button>
      </Link>
      <Link
        href="/profile"
        className="text-black font-semibold p-2 rounded hover:text-blue-400"
      >
<button
          className={`px-4 py-2 rounded-md border bg-white text-neutarl-700 text-sm transition duration-200 ${
            pathname === "/profile"
              ? "text-blue-400 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
              : "border-transparent hover:text-blue-400 hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
          }`}
        >          Profile
        </button>
      </Link>
      <Link
        href="/collegelist"
        className="text-black font-semibold p-2 rounded hover:text-blue-400"
      >
<button
          className={`px-4 py-2 rounded-md border bg-white text-neutarl-700 text-sm transition duration-200 ${
            pathname === "/collegelist"
              ? "text-blue-400 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
              : "border-transparent hover:text-blue-400 hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
          }`}
        >          College List
        </button>
      </Link>
      <div className="grow" />
      <SignedIn>
        <div className="hidden sm:block">
          <OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" />
        </div>
        <div className="block sm:hidden">
          <OrganizationSwitcher
            afterCreateOrganizationUrl="/dashboard"
            appearance={{
              elements: {
                organizationSwitcherTriggerIcon: `hidden`,
                organizationPreviewTextContainer: `hidden`,
                organizationSwitcherTrigger: `pr-0`,
              },
            }}
          />
        </div>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </header>
  );
}
