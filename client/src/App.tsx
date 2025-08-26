import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./presentation/pages/auth/Login";
import DashboardLayout from "./presentation/components/DashboardLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<div>Dashboard</div>} />
          <Route path="settings" element={<div>Settings</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
