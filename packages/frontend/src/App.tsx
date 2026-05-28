import { Suspense, lazy, type ComponentType } from "react";
import { createRootRoute, createRoute, createRouter, RouterProvider } from "@tanstack/react-router";
import { RootRoute } from "./routes/__root";
import { Spinner } from "./components/ui/Spinner";

const HomeRoute = lazy(() => import("./routes/home").then((module) => ({ default: module.HomeRoute })));
const LoginRoute = lazy(() => import("./routes/login").then((module) => ({ default: module.LoginRoute })));
const RegisterRoute = lazy(() => import("./routes/register").then((module) => ({ default: module.RegisterRoute })));
const DiscoverRoute = lazy(() => import("./routes/discover").then((module) => ({ default: module.DiscoverRoute })));
const InviteRoute = lazy(() => import("./routes/invite.$code").then((module) => ({ default: module.InviteRoute })));
const SettingsRoute = lazy(() => import("./routes/settings").then((module) => ({ default: module.SettingsRoute })));
const PrivacyRoute = lazy(() => import("./routes/privacy").then((module) => ({ default: module.PrivacyRoute })));
const TermsRoute = lazy(() => import("./routes/terms").then((module) => ({ default: module.TermsRoute })));
const DevelopersRoute = lazy(() => import("./routes/developers").then((module) => ({ default: module.DevelopersRoute })));
const DeveloperDocsRoute = lazy(() => import("./routes/developers/docs").then((module) => ({ default: module.DeveloperDocsRoute })));
const DeveloperDocRoute = lazy(() => import("./routes/developers/doc.$docId").then((module) => ({ default: module.DeveloperDocRoute })));
const DeveloperApplicationsRoute = lazy(() =>
  import("./routes/developers/applications").then((module) => ({ default: module.DeveloperApplicationsRoute }))
);
const AdminIndexRoute = lazy(() => import("./routes/admin").then((module) => ({ default: module.AdminIndexRoute })));
const AdminUsersRoute = lazy(() => import("./routes/admin/users").then((module) => ({ default: module.AdminUsersRoute })));
const AdminServersRoute = lazy(() => import("./routes/admin/servers").then((module) => ({ default: module.AdminServersRoute })));
const AdminReportsRoute = lazy(() => import("./routes/admin/reports").then((module) => ({ default: module.AdminReportsRoute })));
const AdminBadgesRoute = lazy(() => import("./routes/admin/badges").then((module) => ({ default: module.AdminBadgesRoute })));
const AdminBotsRoute = lazy(() => import("./routes/admin/bots").then((module) => ({ default: module.AdminBotsRoute })));
const AdminAnnouncementsRoute = lazy(() => import("./routes/admin/announcements").then((module) => ({ default: module.AdminAnnouncementsRoute })));
const AdminFlagsRoute = lazy(() => import("./routes/admin/flags").then((module) => ({ default: module.AdminFlagsRoute })));
const ChannelRoute = lazy(() =>
  import("./routes/channels/$serverId/$channelId").then((module) => ({ default: module.ChannelRoute }))
);

function withSuspense(Component: ComponentType) {
  return function SuspendedRoute() {
    return (
      <Suspense fallback={<Spinner />}>
        <Component />
      </Suspense>
    );
  };
}

const rootRoute = createRootRoute({ component: RootRoute });

const routeTree = rootRoute.addChildren([
  createRoute({ getParentRoute: () => rootRoute, path: "/", component: withSuspense(HomeRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/login", component: withSuspense(LoginRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/register", component: withSuspense(RegisterRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/privacy", component: withSuspense(PrivacyRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/terms", component: withSuspense(TermsRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/discover", component: withSuspense(DiscoverRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/developers", component: withSuspense(DevelopersRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/developers/docs", component: withSuspense(DeveloperDocsRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/developers/docs/$docId", component: withSuspense(DeveloperDocRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/developers/applications", component: withSuspense(DeveloperApplicationsRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/invite/$code", component: withSuspense(InviteRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/settings", component: withSuspense(SettingsRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/channels/$serverId/$channelId", component: withSuspense(ChannelRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/admin", component: withSuspense(AdminIndexRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/admin/users", component: withSuspense(AdminUsersRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/admin/servers", component: withSuspense(AdminServersRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/admin/reports", component: withSuspense(AdminReportsRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/admin/badges", component: withSuspense(AdminBadgesRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/admin/bots", component: withSuspense(AdminBotsRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/admin/announcements", component: withSuspense(AdminAnnouncementsRoute) }),
  createRoute({ getParentRoute: () => rootRoute, path: "/admin/flags", component: withSuspense(AdminFlagsRoute) })
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return <RouterProvider router={router} />;
}
