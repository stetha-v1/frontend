import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  /* HomePage, */
  LoginPage,
  LoginAction,
  RegisterPage,
  RegisterAction,
  AppointmentsPage,
} from "./pages";
import { RootDashBoardLayout } from "./layouts";
import { PageNotFound } from "./components";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootDashBoardLayout />}>
        <Route index element={<AppointmentsPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
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
