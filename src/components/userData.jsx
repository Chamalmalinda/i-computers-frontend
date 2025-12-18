import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserData() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    // If no token, don't make API call
    if (token == null) {
      setUser(null);
      return;
    }

    // Only make API call if token exists
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Error fetching user:", error.message);
        // If 401, clear token
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
        }
        setUser(null);
      });
  }, []);

  const [selectedOption, setSelectedOption] = useState("user");

  return (
    <>
      {user ? (
        <div className="flex items-center gap-3 group">
          <img
            src={user.image}
            referrerPolicy="no-referrer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-white/30 shadow-lg transition-transform group-hover:scale-110"
            alt={user.firstName}
          />
          <select
            className="bg-transparent outline-none text-white font-medium text-sm sm:text-base cursor-pointer appearance-none pr-8 relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-4 after:border-transparent after:border-t-white/70"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: "right 0.5rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "12px",
            }}
            value={selectedOption}
            onChange={(e) => {
              if (e.target.value === "logout") {
                localStorage.removeItem("token");
                window.location.href = "/login";
              } else if (e.target.value === "my-orders") {
                window.location.href = "/orders";
              }
              setSelectedOption("user");
            }}
          >
            <option className="bg-accent text-white" value={"user"}>
              {user.firstName}
            </option>
            <option className="bg-accent text-white" value={"logout"}>
              Logout
            </option>
            <option className="bg-accent text-white" value={"my-orders"}>
              My Orders
            </option>
          </select>
        </div>
      ) : (
        <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base">
          <Link
            to="/login"
            className="px-4 sm:px-6 py-2 bg-white text-accent font-semibold rounded-full hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
          >
            Login
          </Link>
          <span className="text-white hidden sm:inline">/</span>
          <Link
            to="/register"
            className="px-4 sm:px-6 py-2 bg-white text-accent font-semibold rounded-full hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
          >
            Register
          </Link>
        </div>
      )}
    </>
  );
}