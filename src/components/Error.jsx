import React from "react";
import { useNavigate, useRouteError } from "react-router";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Error = () => {
  const error = useRouteError();

  //Used to intilizae
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oh no, error detected!</h1>
      <p className="text-lg mb-4">{error.message || error.statusText}</p>
      <div>
        <button
          className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={() => navigate(-1)}
        >
          <span className="mr-2">Go Back</span>
          <ArrowUturnLeftIcon className="w-5 h-5"/>
        </button>
      </div>
    </div>
  );
};

export default Error;