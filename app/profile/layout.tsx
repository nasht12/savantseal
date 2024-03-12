import { Metadata } from "next"
import Image from "next/image"
import { redirect } from "next/navigation";
import { auth, clerkClient } from "@clerk/nextjs";
import { Separator } from "../../components/ui/separator"
import { SidebarNav } from "./components/sidebarnav"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/profile",
  },
  {
    title: "Test scores",
    href: "/profile/testscores",
  },
  {
    title: "Activities",
    href: "/profile/activities",
  },
  {
    title: "College List",
    href: "/profile/collegelist",
  },
  {
    title: "College Results",
    href: "/profile/collegeresults",
  },
]

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default async function ProfileLayout({ children }: ProfileLayoutProps) {
    const { userId } = auth();

    if (!userId) {
      redirect("/");
    }
    const user = await clerkClient.users.getUser(userId);
    console.log(user)

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/forms-light.png"
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <Image
          src="/examples/forms-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">
            {user && (
              <>
                👋 Hi, {user.firstName || `Stranger`}
                {/* <code>{JSON.stringify(user)}</code> */}
              </>
            )}
          </h2>
          <p className="text-muted-foreground">
            Manage your profile settings and college preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}