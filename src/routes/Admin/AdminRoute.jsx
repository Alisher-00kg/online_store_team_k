import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import AdminPage from "./AdminPage";

const AdminRoute = () => {
  const routes = [
    {
      path: "/admin",
      element: <Navigate to="/admin/male" replace />,
    },
    {
      path: "/admin/male",
      element: <AdminPage />,
    },
    {
      path: "/admin/female",
      element: <AdminPage />,
    },
    {
      path: "/admin/children",
      element: <AdminPage />,
    },
  ];

  const element = useRoutes(routes);
  return element;
};

export default AdminRoute;
