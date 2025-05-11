import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function VisitorDashboard() {

    const {userAuth} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(userAuth){
            if(userAuth.data.user.role === 'super-user'){
                navigate('/dashboard');
            }
        }else{
            navigate('/');
        }
    }, [userAuth]);
    

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800 max-w-lg w-full rounded-2xl shadow-lg p-8 text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="bg-primary p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.206 0 4-1.794 4-4S14.206 4 12 4 8 5.794 8 8s1.794 4 4 4zM12 14c-4.418 0-8 1.791-8 4v2h16v-2c0-2.209-3.582-4-8-4z" />
            </svg>
          </div>
        </div>

        {/* Heading and Subtext */}
        <h1 className="text-2xl font-bold mb-2">Unauthorized Access</h1>
        <p className="text-sm text-gray-300 mb-6">
          You've landed on a page that's not meant for regular visitors.
        </p>

        {/* Quote */}
        <blockquote className="italic border-l-4 border-primary pl-4 text-gray-400 mb-6">
          “Creativity knows no boundaries, but our systems do. Unlock the door
          to limitless visual possibilities by becoming a premium user.”
        </blockquote>

        {/* Offer Box */}
        <div className="bg-gray-700 p-5 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-1">Premium Image Credits</h2>
          <p className="text-sm text-gray-300 mb-3">
            High-quality AI-generated images
          </p>
          <div className="text-2xl font-bold text-white mb-2">
            $10{" "}
            <span className="text-sm font-normal text-gray-300">
              for 100 credits
            </span>
          </div>
          <ul className="text-sm text-gray-300 space-y-1 text-left pl-4 list-disc">
            <li>High resolution outputs</li>
            <li>Advanced style control</li>
            <li>Commercial usage rights</li>
          </ul>
        </div>

        {/* Purchase Button */}
        <Link to='/payments'>
          <button className="bg-primary hover:bg-primary text-white font-semibold py-2 px-6 rounded-md w-full border border-transparent hover:border-white">
            Purchase Credits
          </button>
        </Link>

        <p className="text-xs text-gray-400 mt-2">
          Secure payment processing • Instant access
        </p>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-500 mt-4">
        Need help?{" "}
        <a href="#" className="text-indigo-400 underline">
          Contact our support team
        </a>{" "}
        for assistance.
      </div>
    </div>
  );
}
