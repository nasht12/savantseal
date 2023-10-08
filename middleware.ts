import { authMiddleware } from "@clerk/nextjs";
export const dynamic = 'force-static'

export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
