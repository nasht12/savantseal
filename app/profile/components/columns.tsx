"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface RowType {
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

export const columns: ColumnDef<RowType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "state",
    header: "State",
  },
]
