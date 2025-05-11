import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { googleAuth } from "../api/auth";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { handleSignUp } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";

export default function Signup() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

    const { login } = useAuth();

  const googleSignUp = useGoogleLogin({
    onSuccess: async (responseData) => {

      setIsLoading(true);

      // Decode the data using Google API
      const googleRes = await googleAuth(responseData.access_token);

      setIsLoading(true);

      // Upload data to Database
      const response = await handleSignUp(googleRes, "google", setError);

        // Add data to global state
    if (response) {
      login(response);
      navigate('/dashboard')
    }
    setIsLoading(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <MoonLoader color="#6d29d3" size={80} />
        </div>
      )}

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/generations/homeBackground.png')" }}
      ></div>
    
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    
      {/* Sign-in Card */}
      <div className="relative z-10 w-full max-w-md space-y-8 p-8 rounded-2xl shadow-xl border border-[#2a2a2a] bg-[#1a1a1a]/90 backdrop-blur-md">
        <div className="text-center space-y-2">
          <h1 className="text-xl md:text-2xl font-bold text-primary font-orbitron">
          AI ImageGen
        </h1>
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-sm text-gray-400">Sign in to continue to AI ImageGen</p>
        </div>
    
        <button
          onClick={() => googleSignUp()}
          className="flex items-center justify-center w-full gap-2 px-4 py-2 rounded-md border border-gray-700 hover:bg-[#2c2c2c] transition"
        >
          <FaGoogle className="text-lg text-white" />
          <span className="font-medium text-white">Continue with Google</span>
        </button>
    
        {error && (
          <p className="text-red-500 text-sm mt-1 font-medium">{error.message}</p>
        )}
    
    
        <p className="text-sm text-gray-400 text-center pt-4">
          Don’t have an account?{" "}
          <Link to="/signin" className="text-primary hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>  );
}
