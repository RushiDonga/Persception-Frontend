import React from "react";
import { useState } from "react";
import Stripe from 'stripe';

export default function PaymentPage() {
  const [amount, setAmount] = useState(0);
  const [selectPackage, setSelectPackage] = useState("popular"); // Default selection

  const packages = [
    {
      id: "starter",
      name: "Starter",
      price: "$10 CAD",
      credits: "100 credits",
      bg: "bg-gray-700",
    },
    {
      id: "popular",
      name: "Popular",
      price: "$25 CAD",
      credits: "250 credits",
      bg: "bg-indigo-600",
      tag: "Best Value",
    },
    {
      id: "professional",
      name: "Professional",
      price: "$50 CAD",
      credits: "500 credits",
      bg: "bg-gray-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6 bg-gray-800 p-6 rounded-2xl shadow-lg">
          {/* Current Balance */}
          <div className="text-xl font-semibold text-blue-400">
            Your Current Balance
            <div className="text-3xl font-bold text-white">
              0 <span className="text-base font-normal">credits available</span>
            </div>
          </div>

          {/* Purchase Credits */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Purchase Credits</h2>
            <input
              type="number"
              placeholder="Enter amount in CAD"
              className="w-full p-2 rounded-md bg-gray-700 text-white mb-2"
              value={amount}
              onChange={(e) => setAmount(() => e.target.value)}
            />
            <div className="text-sm text-gray-300">
              Credits You'll Receive:{" "}
              <span className="font-bold text-white">
                ${amount * 10} credits
              </span>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full p-2 rounded-md bg-gray-700 text-white"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/2 p-2 rounded-md bg-gray-700 text-white"
                />
                <input
                  type="text"
                  placeholder="123"
                  className="w-1/2 p-2 rounded-md bg-gray-700 text-white"
                />
              </div>
            </div>
            <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 p-2 rounded-md text-white font-semibold">
              Complete Payment
            </button>
            <p className="text-xs text-gray-400 mt-2">
              By completing this payment, you agree to our{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-6">
          {/* Credits Info */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Credits Information</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
              <li>Credits are used to generate AI images.</li>
              <li>1 credit = 1 standard image generation.</li>
              <li>Credits never expire.</li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Popular Packages</h2>
            <div className="space-y-2">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectPackage(pkg.id)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectPackage === pkg.id
                      ? "bg-indigo-600 shadow-lg text-white"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>
                      {pkg.name}
                      {pkg.tag && (
                        <span className="bg-white text-indigo-600 px-2 py-0.5 rounded text-xs font-bold ml-1">
                          {pkg.tag}
                        </span>
                      )}
                    </span>
                    <span>{pkg.price}</span>
                  </div>
                  <div
                    className={`text-sm ${
                      selectPackage === pkg.id ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {pkg.credits}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
