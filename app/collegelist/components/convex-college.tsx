"use client"
import React from 'react'
import { useQuery, usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { DataTable } from './data-table';
import { columns } from './columns';

type College = {
  _id: string;
  acceptanceRate: number | null;
  name: string;
  size: number | null;
  city: string;
  state: string;
  admissionRate: number;
  grad_students: number | null;
  in_state: number | null;
  out_of_state: number | null;
  school_url: string | null;
};

export default function CollegeConvexTable() {
    const collegesData = useQuery(api.college.getCollegeData) || [];
    console.log(collegesData);

    const colleges: College[] = collegesData.map(({ _id, acceptanceRate, name, size, city, state, admissionRate, grad_students, in_state, out_of_state, school_url }) => ({
        name,
        _id,
        acceptanceRate,
        size,
        city,
        state,
        admissionRate,
        grad_students,
        in_state,
        out_of_state,
        school_url
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
