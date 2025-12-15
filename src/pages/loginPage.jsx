import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { GrGoogle } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../components/loader";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: (response) => {
      setIsLoading(true);
      axios
        .post(import.meta.env.VITE_BACKEND_URL + "/users/google-login", {
          token: response.access_token,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);

          if (res.data.role == "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }

          toast.success("Login successful!.");
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    },
    onError: () => {
      toast.error("Google Login Failed");
    },
    onNonOAuthError: () => {
      toast.error("Google Login Failed");
    },
  });

  async function login() {
    console.log("Login button clicked");
    console.log("Email:", email);
    console.log("Password:", password);
    setIsLoading(true);

    try {
      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/users/login",
        {
          email: email,
          password: password,
        }
      );

      localStorage.setItem("token", res.data.token);

      if (res.data.role == "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

      toast.success("Login successful! Welcome back.");
      setIsLoading(false);
    } catch (err) {
      toast.error("Login failed! Please check your credentials and try again.");
      console.log("Error during login:");
      console.log(err);
      setIsLoading(false);
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat flex flex-col lg:flex-row">
      {/* Left Section - Branding */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16 text-center lg:text-left bg-black/40 lg:bg-transparent">
        <img
          src="/logo.png"
          alt="logo"
          className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 mb-6 object-contain drop-shadow-2xl"
        />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gold drop-shadow-2xl leading-tight">
          Plug In. Power Up. Play Hard.
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-white italic opacity-90">
          Your Ultimate Destination for Gaming Gear
        </p>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-12">
        <div className="w-full max-w-md backdrop-blur-lg shadow-2xl rounded-2xl p-8 lg:p-10 flex flex-col">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center drop-shadow-lg">
            Login
          </h1>

          {/* Email Input */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            className="w-full h-12 mb-4 rounded-lg border border-accent bg-white/10 px-4 text-white placeholder-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
          />

          {/* Password Input */}
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Your password"
            className="w-full h-12 mb-4 rounded-lg border border-accent bg-white/10 px-4 text-white placeholder-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
          />

          {/* Forgot Password */}
          <p className="text-white text-right mb-6 text-sm sm:text-base">
            Forgot your password?{" "}
            <Link to="/forgot-password" className="text-gold italic hover:underline">
              Reset it here
            </Link>
          </p>

          {/* Login Button */}
          <button
            onClick={login}
            className="w-full h-12 mb-4 bg-accent text-white font-bold text-lg rounded-lg border-2 border-accent hover:bg-transparent hover:text-accent transition duration-300"
          >
            Login
          </button>

          {/* Google Login Button */}
          <button
            onClick={googleLogin}
            className="w-full h-12 bg-accent text-white font-bold text-lg rounded-lg border-2 border-accent hover:bg-transparent hover:text-accent transition duration-300 flex items-center justify-center gap-3"
          >
            Login with Google
            <GrGoogle className="text-xl" />
          </button>

          {/* Register Link */}
          <p className="text-white text-center mt-6 text-sm sm:text-base">
            Don't have an account?{" "}
            <Link to="/register" className="text-gold italic hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && <Loader />}
    </div>
  );
}