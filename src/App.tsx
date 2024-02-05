import { Routes, Route } from "react-router-dom";
import "devextreme/dist/css/dx.fluent.saas.dark.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Dashboard from "./layouts/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import DashboardProfile from "./pages/Dashboard/DashboardProfile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<DashboardProfile />} />
      </Route>
    </Routes>
  );
};

export default App;
