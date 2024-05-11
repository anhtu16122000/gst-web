import { URL_AUTH } from "@/constants/routes";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const allow = ["/login", "/register"];

const productEditRegex = /^\/products\/\d+\/edit$/;

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("access_token");
  if (accessToken?.value && URL_AUTH.includes(pathname)) {
    // return NextResponse.redirect(new URL('/', request.url));
  }
  // const sessionToken = request.cookies.get('sessionToken')?.value;
  // Chưa đăng nhập thì không cho vào private paths
  // if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
  //     return NextResponse.redirect(new URL('/login', request.url));
  // }
  // Đăng nhập rồi thì không cho vào login/register nữa
  // if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
  //     return NextResponse.redirect(new URL('/me', request.url));
  // }
  // if (pathname.match(productEditRegex) && !sessionToken) {
  //     return NextResponse.redirect(new URL('/login', request.url));
  // }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/me", "/login", "/register", "/products/:path*"],
};
