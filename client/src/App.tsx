import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppLoader from "./presentation/components/Loader";
import NotFound from "./presentation/pages/NotFound";

const LoginForm = lazy(() => import("./presentation/pages/auth/Login"));
const DashboardLayout = lazy(
  () => import("./presentation/components/DashboardLayout")
);
const Dashboard = lazy(
  () => import("./presentation/pages/DashBoard/DashBoard")
);
const Interviews = lazy(
  () => import("./presentation/pages/Interviews/Interviews")
);
const InterviewDetail = lazy(
  () => import("./presentation/pages/interview-detail/InterviewDetail")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="interviews">
              <Route index element={<Interviews />} />
              <Route path=":id" element={<InterviewDetail />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
