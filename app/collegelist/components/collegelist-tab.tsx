import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CollegeConvexTable from './convex-college';
import CollegeSearch from './search';

export default function CollegeListTab() {
  return (
    <div className='min-h-screen '>
    <Tabs defaultValue="CollegeSearch" className="p-8">
      <TabsList>
        <TabsTrigger value="table">Table</TabsTrigger>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="CollegeSearch">CollegeSearch</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <CollegeConvexTable />
      </TabsContent>
      <TabsContent value="table"></TabsContent>
      <TabsContent value="CollegeSearch">
        <CollegeSearch />
      </TabsContent>
    </Tabs>
    </div>
  );
}
