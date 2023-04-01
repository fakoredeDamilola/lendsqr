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

function App() {

const {loading,authenticated} = useLogin()

  return (
    <Suspense fallback={"loading...."}>
      <Router>

      <AppWrapper>

            <Routes>
              {routes.map((route: AppRoutes, index: number) => {
                const { component: Component, path, exact } = route;
                return (
                  <Route key={index} path={path} element={<Component />} />
                );
              })}

              {!loading ?
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
                : null}
            </Routes>
        </AppWrapper>
      </Router>
    
    </Suspense>
  )
}

export default App
