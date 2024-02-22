"use client";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { SelectDataTable } from "./select-data-table";
import { columns } from "./columns";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner"

interface RowType {
  _id: string;
  _creationTime: number;
  name: string;
  size: number | null;
  state: string;
  admissionRate: number;
  city: string;
  grad_students: number | null;
  in_state: number | null;
  out_of_state: number | null;
  school_url: string | null;
}

export default function CollegeSearch() {
  const [searchText, setSearchText] = useState("");
  const searchResults = useQuery(api.college.searchCollege, { query: searchText }) || [];
  const [selectedRow, setSelectedRow] = useState<RowType[]>([]);

  const handleRowSelect = (row: RowType) => {
    if (selectedRow.find((item) => item._id === row._id)) {
      return;
    }
    setSelectedRow([...selectedRow, row]);
    toast(`${row.name} is added to your list`, {
      description: `Update your selections from selected colleges tab.`,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      }
    })
  };

console.log('selectedRow', selectedRow);
  return (
    <main>
      <div className="flex">
        <Card className="flex-grow">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div>
              <h1>Create college list</h1>
              <div className="items-center space-x-2 my-2">
                <Input
                  placeholder="Search Colleges..."
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                  className="h-8 w-[150px] lg:w-[250px]"
                />
              </div>
              <div className="">
                {searchResults.length > 0 && (
                  <SelectDataTable
                    data={searchResults}
                    columns={columns}
                    onRowSelect={handleRowSelect}
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-grow">
          <CardHeader>
            <CardTitle>Selected Colleges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-16 m-2">
              {selectedRow.length > 0 && (
                <SelectDataTable data={selectedRow} columns={columns} />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}