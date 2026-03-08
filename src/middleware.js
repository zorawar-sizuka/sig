// LOGIN PAGE FOR PRODUCTION// 

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    // Only protect /admin routes except login
    if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
      if (!token || token.role !== "ADMIN") {
        const loginUrl = new URL("/admin/login", req.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;
        if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
          return !!token && token.role === "ADMIN";
        }
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"],
};