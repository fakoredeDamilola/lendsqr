import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense } from 'react'
import AppWrapper from "./components/AppWrapper";
import { AppRoutes, authRoutes, routes } from "./utils/routes";
import useLogin from "./hooks/useLogin";
import PrivateRoute from "./components/PrivateRoute";
import "./styles/main.scss"
import CustomLoadingPage from "./components/custom/CustomLoadingPage";
import Logo from "./components/Logo";
import NotFound from "./components/NotFound";

function App() {

const {authenticated} = useLogin()
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
                <Route path='*' element={<NotFound text="Uhm....abeg, go back home" title="this is 404!!!" style={{margin:"100px 0"}} />
                  }/>
            </Routes>
        </AppWrapper>
      
      </Router>
    
    </Suspense>
  )
}

export default App
