import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../components/loader";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function register() {
    if (firstName.trim() === "") {
      toast.error("First name is required");
      return;
    }
    if (lastName.trim() === "") {
      toast.error("Last name is required");
      return;
    }
    if (email.trim() === "") {
      toast.error("Email is required");
      return;
    }
    if (password.trim() === "") {
      toast.error("Password is required");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/", {
        email: email.trim(),
        password: password.trim(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
      });

      toast.success("Registration successful! Welcome to I computers.");
      navigate("/login");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      
      // Handle specific error responses
      if (err.response?.status === 400) {
        toast.error(err.response.data.message || "Registration failed! Please check your data and try again.");
      } else if (err.response?.status === 409) {
        toast.error("This email is already registered. Please use a different email or try logging in.");
      } else if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Registration failed! Please check your data and try again.");
      }
      console.log(err);
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat flex flex-col lg:flex-row">
  
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


      <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-12">
        <div className="w-full max-w-md backdrop-blur-lg shadow-2xl rounded-2xl p-8 lg:p-10 flex flex-col">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center drop-shadow-lg">
            Register
          </h1>

     
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="Your first name"
            className="w-full h-12 mb-4 rounded-lg border border-accent bg-white/10 px-4 text-white placeholder-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
          />

        
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Your last name"
            className="w-full h-12 mb-4 rounded-lg border border-accent bg-white/10 px-4 text-white placeholder-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
          />

      
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            className="w-full h-12 mb-4 rounded-lg border border-accent bg-white/10 px-4 text-white placeholder-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
          />

   
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Your password"
            className="w-full h-12 mb-4 rounded-lg border border-accent bg-white/10 px-4 text-white placeholder-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
          />

      
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm your password"
            className="w-full h-12 mb-6 rounded-lg border border-accent bg-white/10 px-4 text-white placeholder-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
          />

    
          <button
            onClick={register}
            disabled={isLoading}
            className="w-full h-12 mb-4 bg-accent text-white font-bold text-lg rounded-lg border-2 border-accent hover:bg-transparent hover:text-accent transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Register Now
          </button>

      
          <p className="text-white text-center text-sm sm:text-base">
            Already have an account?{" "}
            <Link to="/login" className="text-gold italic hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>

   
      {isLoading && <Loader />}
    </div>
  );
}