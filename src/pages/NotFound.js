import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Route Not Found</h1>
      <p className="text-lg mb-6 text-gray-400">
        Oops! The page you're looking for doesn’t exist.
      </p>
      <Link to='/'>
        <button className="px-6 py-2 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition">
          Go Back to Homepage
        </button>
      </Link>
    </div>
  );
}
