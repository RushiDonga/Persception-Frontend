import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaCheck, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { signIn } from "../api/auth";
import { googleAuth } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import LoadingOverlay from "../components/LoadingOverlay";
import { useGoogleLogin } from "@react-oauth/google";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsVisiblePassword] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();

  const googleLogin = useGoogleLogin({
    onSuccess: async (responseData) => {

      setIsLoading(true);

      // Decode the data using Google API
      const googleRes = await googleAuth(responseData.access_token);

      // Upload data to Database
      handleSignIn(googleRes.email, "This is a sample Password", "google");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignIn = async (email, password, createdUsing) => {
    setIsLoading(true);
    const response = await signIn(email, password, setError, createdUsing);

    // Add data to global state
    if (response) {
      login(response);
      
      let pendingPrompt = sessionStorage.getItem('pendingPrompt');
      if(pendingPrompt){
        pendingPrompt = JSON.parse(pendingPrompt).prompt
        sessionStorage.removeItem('pendingPrompt');
  
        navigate('/dashboard', {state: { prompt : pendingPrompt}});
      }else{
        navigate('/dashboard');
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
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
      onClick={() => googleLogin()}
      className="flex items-center justify-center w-full gap-2 px-4 py-2 rounded-md border border-gray-700 hover:bg-[#2c2c2c] transition"
    >
      <FaGoogle className="text-lg text-white" />
      <span className="font-medium text-white">Continue with Google</span>
    </button>

    <div className="flex items-center gap-2">
      <hr className="flex-grow border-gray-700" />
      <span className="text-xs text-gray-500">OR</span>
      <hr className="flex-grow border-gray-700" />
    </div>

    <div className="space-y-1 relative">
      <label className="block text-sm font-medium text-white">Email</label>
      <input
        type="email"
        className="w-full px-4 py-2 pr-10 rounded-md bg-[#2b2b2b] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {isValidEmail(email) && (
        <FaCheck className="absolute right-3 top-9 text-green-500" />
      )}
    </div>

    {isValidEmail(email) && (
      <div className="space-y-1 relative">
        <label className="block text-sm font-medium text-white">Password</label>
        <input
          type={isPasswordVisible ? "text" : "password"}
          className="w-full px-4 py-2 pr-10 rounded-md bg-[#2b2b2b] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isPasswordVisible ? (
          <FaRegEyeSlash
            onClick={() => setIsVisiblePassword(false)}
            className="absolute right-3 top-9 text-gray-400 cursor-pointer"
          />
        ) : (
          <FaRegEye
            onClick={() => setIsVisiblePassword(true)}
            className="absolute right-3 top-9 text-gray-400 cursor-pointer"
          />
        )}
      </div>
    )}

    {error && (
      <p className="text-red-500 text-sm mt-1 font-medium">{error.message}</p>
    )}

    <button
      onClick={() => handleSignIn(email, password, "email")}
      className={`w-full mt-4 py-2 rounded-md font-semibold ${
        isValidEmail(email) && password.length > 6
          ? "bg-[#4f46e5] text-white hover:bg-[#4338ca]"
          : "bg-[#3a3a3a] text-gray-500 cursor-not-allowed"
      }`}
    >
      Continue
    </button>

    <p className="text-sm text-gray-400 text-center pt-4">
      Don’t have an account?{" "}
      <Link to="/signup" className="text-[#4f46e5] hover:underline font-medium">
        Sign up
      </Link>
    </p>
  </div>

  <LoadingOverlay isLoading={isLoading} />
</div>

  );
}
