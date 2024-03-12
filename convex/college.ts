import { mutation, query } from "./_generated/server";
import { v } from "convex/values"

// Fetch college data from the College Scorecard API
// export const storeCollegeData = mutation(async (ctx, { data }: { data: College[] }) => {
//   for (const item of data) {
//     await ctx.db.insert('college', item);
//   }
// });

// Query for college data from Convex College Database

type College = {
  id: string;
  name: string;
  city: string;
  state: string;
};

export const getCollegeData = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("college").collect();
  },
});

export const searchCollege = query({
  args: { query: v.string() },
  handler: async (ctx, { query }) => {
    return await ctx.db
      .query("college")
      .withSearchIndex("search_name", (q) => q.search("name", query))
      .take(10);
  },
});

export const createTask = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const taskId = await ctx.db.insert("tasks", { isCompleted: false, text: args.text });
  },
});

// save each object in the array to the table

export const addCollegeList = mutation({
  args: { colleges: v.array(v.object({ city: v.string(), name: v.string(), state: v.string() })) },
  handler: async (ctx, args) => {
    for (const college of args.colleges) {
      await ctx.db.insert("collegelist", college);
    }
  },
});

//save an array to db

export const addCollegeList2 = mutation({
  args: { items: v.array(v.object({ city: v.string(), name: v.string(), state: v.string() })) },
  handler: async (ctx, args) => {
    await ctx.db.insert("list2", args);
  },
});

export const getCollegeList = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("list2").collect();
  },
});
