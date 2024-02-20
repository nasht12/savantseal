"use client";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Input } from "@/components/ui/input";

export default function CollegeSearch() {
  const [searchText, setSearchText] = useState("");
  const searchResults = useQuery(api.college.searchCollege, { query: searchText }) || [];
  const [selectedRow, setSelectedRow] = useState([{}]);

  const handleRowSelect = (row) => {
    setSelectedRow([...selectedRow, row]);
    console.log(selectedRow);
  };

console.log(searchResults);
  return (
    <main>
      <div className="search">
        <h2>Search Colleges</h2>
        <div className="flex flex-1 items-center space-x-2">
          <Input
            placeholder="Filter tasks..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="h-8 w-[150px] lg:w-[250px]"
          />
        </div>
        {searchResults.length > 0 && (
          <DataTable
            data={searchResults}
            columns={columns}
            onRowSelect={handleRowSelect}
          />
        )}
      </div>
      {/* <div> */}
        {/* <DataTable
          data={selectedRow}
          columns={columns}
        />
      </div> */}
    </main>
  );
}