import React from "react";

interface ResultProps {
  category: string;
  score: number;
  icon: string;
  color: string;
}

const Result: React.FC<ResultProps> = ({ category, score, icon, color }) => {
  return (
    <div className={`bg-${color}/10 my-4 flex rounded-lg p-4 lg:w-80`}>
      <img src={icon} className="mr-4" alt={category} />
      <p className={`text-${color} text-bold flex-grow`}>{category}</p>
      <p>
        <span className="text-bold text-dark-gray-blue">{score}</span>{" "}
        <span className="text-bold text-gray-400">/ 100</span>
      </p>
    </div>
  );
};

export default Result;
