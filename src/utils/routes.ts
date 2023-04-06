import React from "react";


const Signin = React.lazy(() => import("../pages/signin/Signin"));
const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const User = React.lazy(() => import("../pages/User/User"));
const Unauthorized = React.lazy(() => import("../pages/unauthorized/Unauthorized"));

export type AppRoutes = {
    path: string;
    exact: boolean;
    component: any;
  };

export const routes: AppRoutes[] = [
  { path: '/signin', exact: true, component: Signin },
  { path: '/unauthorized', exact: true, component: Unauthorized },

  ];
  
  ///council/dispute
  export const authRoutes: AppRoutes[] = [
    { path: '/dashboard', exact: true, component: Dashboard },
    { path: '/', exact: true, component: Dashboard },
    { path: '/user/:id', exact: true, component: User },
  ];
  