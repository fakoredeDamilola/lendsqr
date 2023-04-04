import React from "react";


const Home = React.lazy(() => import("../pages/Home/Home"));
const Signin = React.lazy(() => import("../pages/signin/Signin"));
const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const User = React.lazy(() => import("../pages/User/User"));

export type AppRoutes = {
    path: string;
    exact: boolean;
    component: any;
  };

export const routes: AppRoutes[] = [
  { path: '/dashboard', exact: true, component: Dashboard },
  { path: '/user/:id', exact: true, component: User },
  { path: '/', exact: true, component: Home },
  { path: '/signin', exact: true, component: Signin },
  ];
  
  ///council/dispute
  export const authRoutes: AppRoutes[] = [
    // { path: '/', exact: true, component: Home },
    // { path: '/signin', exact: true, component: Signin },
    // { path: '/dashboard', exact: true, component: Dashboard }
  ];
  