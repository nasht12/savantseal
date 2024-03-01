"use client";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { DataTable } from './data-table';
import { columns } from './columns';

export default function CollegeSearch() {
  const [searchText, setSearchText] = useState("");
  const searchResults = useQuery(api.college.searchCollege, { query: searchText }) || [];

  const formattedSearchResults = searchResults.map(result => ({
    ...result,
    id: result._id,
  }));

  return (
    <div className="search">
      <h2>Search Colleges</h2>
      <input
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="Search for a college"
      />
      <DataTable columns={columns} data={formattedSearchResults} />
    </div>
  );
}