// "use client";
import React, { useEffect, useState } from 'react';
import { College, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<College[]> {
    // const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 50;

  const response = await fetch(
    `https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=RkKx2oqf53kdFKXiQCQloGt4Tz1SlLbzNNb1NOGD&per_page=${itemsPerPage}`
  );
  const data = await response.json();

  return data.results.map((college: any) => ({
    id: college.id,
    name: college.latest.school.name,
    city: college.latest.school.city,
    state: college.latest.school.state,
  }));
}

export default async function CollegeTable() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
