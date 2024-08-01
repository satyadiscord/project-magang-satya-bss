import { useState, useEffect } from "react";
import axios from "axios";
import DashTeacher from "./dashboard_teacher/DashTeacher";
import DashStudent from "./dashboard_student/DashStudent";

export default function Dashboard() {
  const [user, setUser] = useState({});

  // api get data user
  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <h1>Dashboard</h1>
            {user.role === "teacher" ? (
              <DashTeacher />
            ) : user.role === "student" ? (
              <DashStudent />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
