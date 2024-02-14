import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AllColleges from './all-colleges';

export default function CollegeListTab() {
  return (
    <Tabs defaultValue="all" className="p-8">
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="top100">Top 100</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <AllColleges />
      </TabsContent>
      <TabsContent value="top100">Top 100</TabsContent>
    </Tabs>
  );
}
