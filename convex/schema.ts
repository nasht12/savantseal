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
  }),
  tasks: defineTable({
    isCompleted: v.boolean(),
    text: v.string(),
  }),
});
