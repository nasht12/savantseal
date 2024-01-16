"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function CollegeList() {
  const tasks = useQuery(api.tasks.get);
  console.log('tasks', tasks);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      {tasks?.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
    </main>
  );
}