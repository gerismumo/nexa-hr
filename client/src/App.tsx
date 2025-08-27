import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./presentation/pages/auth/Login";
import DashboardLayout from "./presentation/components/DashboardLayout";
import { Dashboard } from "./presentation/pages/DashBoard/DashBoard";
import Interviews from "./presentation/pages/Interviews/Interviews";
import InterviewDetail from "./presentation/pages/interview-detail/InterviewDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="interviews">
            <Route index element={<Interviews />} />
            <Route path=":id" element={<InterviewDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
