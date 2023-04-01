import React from "react";


const Home = React.lazy(() => import("../pages/Home/Home"));
const Signin = React.lazy(() => import("../pages/signin/Signin"));
const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));

export type AppRoutes = {
    path: string;
    exact: boolean;
    component: any;
  };

export const routes: AppRoutes[] = [
    
  ];
  
  ///council/dispute
  export const authRoutes: AppRoutes[] = [
    { path: '/', exact: true, component: Home },
    { path: '/signin', exact: true, component: Signin },
    { path: '/dashboard', exact: true, component: Dashboard }
  ];
  