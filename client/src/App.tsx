import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./presentation/pages/auth/Login";
import DashboardLayout from "./presentation/components/DashboardLayout";
import { Dashboard } from "./presentation/pages/DashBoard/DashBoard";
import Interviews from "./presentation/pages/Interviews/Interviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="interviews" element={<Interviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
