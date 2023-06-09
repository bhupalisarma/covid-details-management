import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import "tailwindcss/tailwind.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="w-4/5 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contacts" element={<ContactList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
