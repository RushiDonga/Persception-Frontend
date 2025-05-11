import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function NewHero() {
  const [prompt, setPrompt] = useState("");
  const { userAuth } = useAuth();
  const navigate = useNavigate();

  const handleGenerateButton = () => {
    if (!prompt) {
      return;
    }

    if (!userAuth) {
      navigate("/freeDashboard", { state: { prompt } })
    } else {
      navigate("/dashboard", { state: { prompt } })
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-6 animate-fade-in-up mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight transition-opacity duration-700">
            Create Stunning{" "}
            <span className="text-primary animate-text-pop">
              AI-Generated Images
            </span>
          </h1>

          <p className="text-gray-400 text-lg transition-opacity duration-700 delay-100">
            Transform your ideas into beautiful visuals with our advanced AI
            image generation platform. No design skills required.
          </p>

          <div className="space-y-4 transition-transform duration-700 delay-200">
            <input
              placeholder="Magical forest with glowing mushrooms"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-primary outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleGenerateButton();
                }
              }}
            />
            <button
              onClick={handleGenerateButton}
              className="w-full bg-gray-400 hover:bg-primary transition-all py-3 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105"
            >
              Generate
            </button>
          </div>
        </div>

        {/* Right Section (Image Preview) */}
        <div className="flex justify-center">
          <img
            src="/images/generations/hero.png"
            alt="AI Generated Example"
            className="rounded-2xl shadow-2xl w-full max-w-md aspect-square object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 animate-fade-in"
          />
        </div>
      </div>
    </div>
  );
}
