import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const truthyValues = new Set(["1", "true"]);

function isDemoToolsEnabledByEnv(): boolean {
  return truthyValues.has((process.env.NEXT_PUBLIC_DEMO_TOOLS ?? "").toLowerCase());
}

export function middleware(request: NextRequest) {
  const envEnabled = isDemoToolsEnabledByEnv();
  if (envEnabled) return NextResponse.next();
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/adminv1/:path*"]
};
