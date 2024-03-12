import { mutation, query } from "./_generated/server";
import { v } from "convex/values"

export const createProfile = mutation({
    args: { profile: v.object({username: v.string(), email: v.string(), residence: v.string(), nationality: v.string(), race: v.string(), gender: v.string(),bio: v.string(),}) },
    handler: async (ctx, args) => {
      await ctx.db.insert("profiles", args.profile);
    },
  });
