"use client"
import React from 'react'
import { useQuery, usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { DataTable } from './data-table';
import { columns } from './columns';

type CollegeColumn = {
  id: string;
  name: string;
  city: string;
  state: string;
};

export default function CollegeConvexTable() {
    const collegesData = useQuery(api.college.getCollegeData) || [];
    console.log(collegesData);

    const colleges: CollegeColumn[] = collegesData.map(({ _id, name, size, city, state }) => ({
        name,
        id: _id,
        size,
        city,
        state,
      }));
    console.log(colleges);
    return (
      <div>
        convex-college
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={colleges} />
        </div>
      </div>
    );
}
