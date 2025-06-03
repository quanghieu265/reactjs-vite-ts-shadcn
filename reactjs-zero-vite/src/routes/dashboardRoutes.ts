import { withSuspense } from "@/utilities/functions";
import { lazy } from "react";
const DashboardPage = lazy(() => import('@/pages/dashboard/DashboardPage'));

const dashboardRoutes = [
  {
    path: "/dashboard",
    element: withSuspense(DashboardPage)
  }
]
export default dashboardRoutes;
