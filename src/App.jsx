import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import RegisterPage from "./pages/registerPage/RegisterPage.jsx";
import ForgotPage from "./pages/forgotPage/ForgotPage.jsx";
import ResetPage from "./pages/resetPage/Resetpage.jsx";
import DashboardPage from "./pages/dashboard/DashboardPage.jsx";

/*Rutas para practicar hooks */
import HomeHooks from "./playground/HomeHooks.jsx";
import HookUseState from "./playground/HookUseState.jsx";
import HookUseNavigate from "./playground/HookUseNavigate.jsx";

function App() {
  return (

    <BrowserRouter>
    <Routes>

      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot" element={<ForgotPage />} />
      <Route path="/reset" element={<ResetPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />


      /*Rutas de playground para hooks*/
      <Route path="/hooks" element={<HomeHooks />} />
      <Route path="/hooks/usestate" element={<HookUseState />} />
      <Route path="/hooks/usenavigate" element={<HookUseNavigate />} /> 

    </Routes>
    </BrowserRouter>

  );
}

export default App;
