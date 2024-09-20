import { useState, useEffect } from "react";
import { UserIC } from "../../assets/IndexAssets";
import { IoIosClose } from "react-icons/io"; // ic x
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProfilUser() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const logoutHandler = () => {
    const result = localStorage.removeItem("token");
    console.log("Result: ", result);

    navigate("/login");
  };

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
      <div className="w-full m-auto my-8 max-w-sm bg-white border-x-2">
        <button
          onClick={() => navigate("/")}
          className="absolute right-0 top-0 hover:bg-red-600 transition duration-500"
        >
          <IoIosClose size={40} className="hover:text-white" />
        </button>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg bg-cover object-cover bg-center"
            src={UserIC}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user.name}
          </h5>
          <span className="mb-5 -mt-2 font-light">{user.email}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user.role}
          </span>
          <div className="flex justify-center items-center my-5 ml-[12px] text-center">
            <button
              onClick={logoutHandler}
              type="button"
              className="text-red-700 transition duration-500 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-10 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
