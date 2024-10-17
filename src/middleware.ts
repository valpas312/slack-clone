import {
    convexAuthNextjsMiddleware,
    createRouteMatcher,
    nextjsMiddlewareRedirect,
  } from "@convex-dev/auth/nextjs/server";
   
  const isSignInPage = createRouteMatcher(["/auth"]);
   
  export default convexAuthNextjsMiddleware((request, { convexAuth }) => {
    if (isSignInPage(request) && convexAuth.isAuthenticated()) {
      return nextjsMiddlewareRedirect(request, "/");
    }
    if (!isSignInPage(request) && !convexAuth.isAuthenticated()) {
      return nextjsMiddlewareRedirect(request, "/auth");
    }
  });
   
  export const config = {
    // The following matcher runs middleware on all routes
    // except static assets.
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  };