import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  HomePage,
  LoginPage,
  LoginAction,
  RegisterPage,
  RegisterAction,
} from "./pages";

import { RootDashBoardLayout } from "./layouts";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/"  element={<RootDashBoardLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<h1>404 - Not Found</h1>} />
      <Route path="/auth/login" element={<LoginPage />} action={LoginAction} />
      <Route
        path="/auth/register"
        element={<RegisterPage />}
        action={RegisterAction}
      />
    </>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
