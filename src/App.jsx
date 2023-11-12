import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import PageNotFound from "./pages/PageNotFound";
import AddStudents from "./pages/AddStudents/index";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/register" element={<AddStudents />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
