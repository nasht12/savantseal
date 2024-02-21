import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { OrgDetails, SessionDetails, UserDetails } from "./details";
import Link from "next/link";
import CollegeSearch from "./components/search";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const user = await clerkClient.users.getUser(userId);

  return (
    <div className="px-8 py-12 sm:py-16 md:px-20">
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="createlist">Create College List</TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Selected Colleges
          </TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Edit college list
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <div className="py-4">
            {user && (
              <>
                <h1 className="text-3xl font-semibold text-black">
                  👋 Hi, {user.firstName || `Stranger`}
                </h1>
                <div className="grid gap-4 mt-8 lg:grid-cols-3">
                  <UserDetails />
                </div>
              </>
            )}
          </div>
        </TabsContent>
        <TabsContent value="createlist">
          <CollegeSearch />
        </TabsContent>
      </Tabs>
    </div>
  );
}
