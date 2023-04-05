import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense, useState } from 'react'
import AppWrapper from "./components/AppWrapper";
import { AppRoutes, authRoutes, routes } from "./utils/routes";
import useLogin from "./hooks/useLogin";
import PrivateRoute from "./components/PrivateRoute";
import "./styles/main.scss"
import CustomLoadingPage from "./components/custom/CustomLoadingPage";
import Logo from "./components/Logo";
import usePortal from "./hooks/usePortal";
import NotificationModal from "./components/modal/NotificationModal";

function App() {

const {loading,authenticated} = useLogin()
  return (
    <Suspense fallback={
      <CustomLoadingPage >
      <Logo text={true} />
      </CustomLoadingPage>
      }>
      <Router>
     
      <AppWrapper>

            <Routes>
              {routes.map((route: AppRoutes, index: number) => {
                const { component: Component, path, exact } = route;
                return (
                  <Route key={index} path={path} element={<Component />} />
                );
              })}

              {
                authRoutes.map((route: AppRoutes, i: number) => {
                  const { component: Component, path, exact } = route;
                  return (
                    <Route
                      key={"auth" + i}
                      path={path}
                      element={
                        <PrivateRoute authenticated={authenticated}>
                          <Component />
                        </PrivateRoute>
                      }
                    />
                  );
                })
                }
            </Routes>
        </AppWrapper>
        
      </Router>
    
    </Suspense>
  )
}

export default App
