import { mutation, query } from "./_generated/server";
import { v } from "convex/values"

// Fetch college data from the College Scorecard API
// export const storeCollegeData = mutation(async (ctx, { data }: { data: College[] }) => {
//   for (const item of data) {
//     await ctx.db.insert('college', item);
//   }
// });

// Query for college data from Convex College Database

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