import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-10 pt-30 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-6">About</h1>
      <button
        className="bg-blue-500 dark:bg-blue-600 text-white px-6 py-3 rounded-md hover:scale-95 transition-all"
        onClick={() => navigate("/country")}
      >
        Explore the Country
      </button>
    </div>
  );
};

export default About;
