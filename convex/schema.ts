import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  college: defineTable({
    admissionRate: v.float64(),
    city: v.string(),
    grad_students: v.union(v.null(), v.float64()),
    in_state: v.union(v.null(), v.float64()),
    name: v.string(),
    out_of_state: v.union(v.null(), v.float64()),
    school_url: v.union(v.null(), v.string()),
    size: v.union(v.null(), v.float64()),
    state: v.string(),
  }).searchIndex("search_name", {
    searchField: "name",
  }),
  tasks: defineTable({
    isCompleted: v.boolean(),
    text: v.string(),
  }),
  collegelist: defineTable({
    name: v.string(),
    city: v.string(),
    state: v.string(),
  }),
  list2: defineTable({
    items: v.array(
      v.object({
        name: v.string(),
        city: v.string(),
        state: v.string(),
      })
    ),
  }),
  profiles: defineTable({
    username: v.string(),
    email: v.string(),
    nationality: v.string(),
    residence: v.string(),
    race: v.string(),
    gender: v.string(),
    bio: v.string(),
    // urls: v.optional(v.array(v.object({ value: v.string() }))),
  }),
});
