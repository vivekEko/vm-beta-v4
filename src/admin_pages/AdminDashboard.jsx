import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Admin</h1>

      <button
        className="p-2 bg-gray-300 rounded-lg "
        onClick={() => {
          localStorage?.clear();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
