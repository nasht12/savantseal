"use client";
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link';
import { OrganizationSwitcher, SignedIn, UserButton } from '@clerk/nextjs';
  

export default function NavMenu() {
  return (
    <div className='flex'>
    <NavigationMenu className="relative flex justify-center w-full z-10">
      <NavigationMenuList className="flex justify-center bg-white p-1 rounded-md list-none shadow-md m-0">
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior>
            <NavigationMenuLink>Blog</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/dashboard" legacyBehavior passHref>
            <NavigationMenuLink>Sivvy</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/profile" legacyBehavior passHref>
            <NavigationMenuLink>Profile</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/collegelist" legacyBehavior passHref>
            <NavigationMenuLink>College List</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className="ml-auto">
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
    </NavigationMenu>
    </div>
  );
}
