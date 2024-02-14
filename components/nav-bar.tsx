"use client"
import { OrganizationSwitcher, SignedIn, UserButton } from '@clerk/nextjs';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname();

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-2 shadow bg-base-100 rounded-box"
            >
              <li className={pathname === "/blog" ? "active bg-slate-100" : ""}>
                <Link href="/blog">Blog</Link>
              </li>
              <li className={pathname === "/dashboard" ? "active" : ""}>
                <Link href="/dashboard">Sivvy</Link>
              </li>
              <li className={pathname === "/profile" ? "active" : ""}>
                <Link href="/profile">Profile</Link>
              </li>
              <li className={pathname === "/collegelist" ? "active" : ""}>
              <Link href="/collegelist">College List</Link>
            </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" href="/">Savant Seal</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className={pathname === "/blog" ? "active bg-gray-300 rounded-lg" : ""}>
              <Link href="/blog">Blog</Link>
            </li>

            <li className={pathname === "/dashboard" ? "active bg-gray-300 rounded-lg " : ""}>
              <Link href="/dashboard">Sivvy</Link>
            </li>
            <li className={pathname === "/profile" ? "active bg-gray-300 rounded-lg" : ""}>
              <Link href="/profile">Profile</Link>
            </li>
            <li className={pathname === "/collegelist" ? "active bg-gray-300 rounded-lg" : ""}>
              <Link href="/collegelist">College List</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
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
        </div>
      </div>
    </div>
  );
}
