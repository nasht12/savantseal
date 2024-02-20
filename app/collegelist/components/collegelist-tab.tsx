import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AllColleges from './all-colleges';
import CollegeTable from './college-table';
import SaveCollegeData from './store-college-data';
import CollegeConvexTable from './convex-college';
import CollegeSearch from './search';

export default function CollegeListTab() {
  return (
    <Tabs defaultValue="CollegeSearch" className="p-8">
      <TabsList>
        <TabsTrigger value="table">Table</TabsTrigger>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="CollegeSearch">CollegeSearch</TabsTrigger>
        {/* <TabsTrigger value="top100">Top 100</TabsTrigger> */}
        {/* <TabsTrigger value="table2">Table2</TabsTrigger> */}
      </TabsList>
      <TabsContent value="all">
        <CollegeConvexTable />
      </TabsContent>
      {/* <TabsContent value="top100"><SaveCollegeData /></TabsContent> */}
      <TabsContent value="table">
        {/* <CollegeTable /> */}
      </TabsContent>
      <TabsContent value="CollegeSearch">
        <CollegeSearch />
      </TabsContent>
      {/* <TabsContent value="table2"><AllColleges /></TabsContent> */}
    </Tabs>
  );
}
