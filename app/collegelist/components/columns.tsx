"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type College = {
  id: string
  name: number
  city: string
  state: string
  acceptanceRate: number
}

export const columns: ColumnDef<College>[] = [
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
  {
    accessorKey: "school_url",
    header: "School URL",
  },
]
