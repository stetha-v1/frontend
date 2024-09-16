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
  AppointmentsPastPage,
  AppointmentsCancelledPage,
  AppointmentsResheduledPage,
  AppointmentsUpcomingPage,
  SingleAppointmentPage,
  DoctorsPage,
  SingleDoctorPage,
  ChatAI
} from "./pages";
import {
  RootDashBoardLayout,
  AppointmentsPageLayout,
  SingleAppointmentsLayout,
  HelpPageLayout,
} from "./layouts";
import { PageNotFound } from "./components";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootDashBoardLayout />}>
        <Route index element={<HomePage />} />
        <Route path="appointments" element={<AppointmentsPageLayout />}>
          <Route index element={<AppointmentsUpcomingPage />} />
          <Route path="past" element={<AppointmentsPastPage />} />
          <Route path="cancelled" element={<AppointmentsCancelledPage />} />
          <Route path="reschedule" element={<AppointmentsResheduledPage />} />
        </Route>
        // Doctors Route
        <Route path="doctors" element={<DoctorsPage />} />
        <Route path="doctors/:id" element={<SingleDoctorPage />} />
      </Route>
      // Single Appoinments pages
      <Route path="appointments/:id" element={<SingleAppointmentsLayout />}>
        <Route index element={<SingleAppointmentPage />} />
      </Route>
      // Help Route
      <Route path="help" element={<HelpPageLayout />}>
        <Route index element={<ChatAI />} />
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
