import { lazy } from "react";
const DashboardPage = lazy(() => import('@/pages/dashboard/DashboardPage'));

const dashboardRoutes = [
  {
    path: "/dashboard",
    element: DashboardPage
  }
]
export default dashboardRoutes;
