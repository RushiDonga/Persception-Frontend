import React from "react";
import { Link } from "react-router-dom";

export default function ModalDashboard({ isOpen, onClose, children, buttonName, routeTo }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 text-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-purple-400">
            Notification
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl font-bold"
          >
            &times;
          </button>
        </div>

        <div className="mb-6">{children}</div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-sm px-4 py-2 rounded"
          >
            Cancel
          </button>
          <Link to={`/${routeTo}`}>
            <button
            className="bg-primary hover:bg-purple-600 text-sm px-4 py-2 rounded"
          >
            {buttonName}
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
