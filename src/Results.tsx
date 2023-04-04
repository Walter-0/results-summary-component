import React from "react";
import Result from "./Result";

interface ResultsProps {
  data: { category: string; score: number; icon: string }[];
}

const colors = ["light-red", "orangey-yellow", "green-teal", "cobalt-blue"];

const Results: React.FC<ResultsProps> = ({ data }) => {
  return (
    <div className="lg:flex lg:h-[32rem] lg:w-[46rem] lg:flex-row lg:rounded-3xl lg:shadow-2xl">
      <div className="rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-7 text-center lg:flex lg:w-1/2 lg:flex-col lg:items-center lg:justify-evenly lg:rounded-3xl">
        <p className="mb-4 text-2xl text-gray-300 lg:m-0">Your Result</p>
        <div className="m-auto mb-4 flex h-40 w-40 flex-col justify-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue lg:m-0">
          <p className="text-bold text-6xl text-white">76</p>
          <p className="text-lg text-gray-300">of 100</p>
        </div>
        <p className="text-bold text-3xl text-white">Great</p>
        <p className="text-lg text-gray-300">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div className="p-8 lg:flex lg:w-1/2 lg:flex-col lg:justify-evenly lg:rounded-r-3xl ">
        <p className="text-bold text-2xl text-dark-gray-blue">Summary</p>

        <div>
          {data.map((result, i) => (
            <Result
              key={i}
              category={result.category}
              score={result.score}
              icon={result.icon}
              color={colors[i]}
            />
          ))}
        </div>

        <button className="w-full rounded-full bg-dark-gray-blue py-4 text-white hover:bg-light-royal-blue lg:w-80">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Results;
