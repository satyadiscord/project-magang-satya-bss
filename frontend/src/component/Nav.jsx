import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import logoNav from "../../img/logoNav.png";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [user, setUser] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  function userHandler() {
    setOpenUser(!openUser);
  }

  function navHandler() {
    setOpenNav(!openNav);
  }

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setOpenNav(true);
      } else {
        setOpenNav(false);
      }
    };

    // Initialize state based on current window size
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  // classs location file
  const linkClasses = (path) =>
    `flex items-center p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 group ${
      location.pathname === path
        ? "text-white bg-blue-500 dark:bg-blue-700"
        : "text-gray-900 dark:text-white"
    }`;

  // Check if current route is login
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null; // navbar akan tidak dirender
  }

  return (
    <>
      <div>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  onClick={navHandler}
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  {/* open side bar */}
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
                <div className="flex ms-2 md:me-24">
                  <img
                    src={logoNav}
                    className="h-8 me-3"
                    alt="Logo Universitas"
                  />
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                    Univer
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ms-3">
                  <div>
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded="false"
                      onClick={userHandler}
                      data-dropdown-toggle="dropdown-user"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user photo"
                      />
                      {/* userrrrrrr */}
                    </button>
                  </div>
                  <div
                    className={`z-50 ${
                      openUser ? "block" : "hidden"
                    } absolute bottom-0 right-0 -my-[135px] text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p
                        className="text-sm text-gray-900 dark:text-white"
                        role="none"
                      >
                        {user.name}
                      </p>
                      <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                      >
                        {user.email}
                      </p>
                      <p
                        className="text-sm mt-1 font-normal text-gray-500 truncate dark:text-gray-300"
                        role="none"
                      >
                        {user.role}
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <button
                          onClick={logoutHandler}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Log out
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Sidebar */}
        <aside
          id="logo-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform transform ${
            openNav ? "translate-x-0" : "-translate-x-full"
          } bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 md:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              {user.role === "teacher" ? (
                <>
                  <li>
                    <Link to="/" className={linkClasses("/")}>
                      <span className="ms-3">Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mataPelajaran"
                      className={linkClasses("/mataPelajaran")}
                    >
                      <span className="ms-3">Mata Pelajaran</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/kelas" className={linkClasses("/kelas")}>
                      <span className="ms-3">Kelas</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/student" className={linkClasses("/student")}>
                      <span className="ms-3">Student</span>
                    </Link>
                  </li>
                </>
              ) : user.role === "student" ? (
                <>
                  <li>
                    <Link to="/" className={linkClasses("/")}>
                      <span className="ms-3">Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/kelas" className={linkClasses("/kelas")}>
                      <span className="ms-3">Kelas</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/reqKelas" className={linkClasses("/reqKelas")}>
                      <span className="ms-3">Request Kelas</span>
                    </Link>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
