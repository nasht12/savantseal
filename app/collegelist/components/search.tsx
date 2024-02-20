"use client";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { DataTable } from './data-table';
import { columns } from './columns';

export default function CollegeSearch() {
  const [searchText, setSearchText] = useState("");
  const searchResults = useQuery(api.college.searchCollege, { query: searchText }) || [];

  return (
    <main>
      {/* <h1>College Search</h1> */}
      <div className="search">
        <h2>Search Colleges</h2>
        <input
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search for a college"
        />
        {/* <ul>
          {searchResults.map((college) => (
            <li key={college._id}>
              <span>{college.name}</span>
              <span>{college.city}, {college.state}</span>
            </li>
          ))}
        </ul> */}
        <DataTable columns={columns} data={searchResults} />
      </div>
    </main>
  );
}