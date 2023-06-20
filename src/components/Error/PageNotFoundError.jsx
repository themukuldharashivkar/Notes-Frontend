import React from "react";

const PageNotFoundError = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-4xl flex flex-col justify-center text-center text-white">
      <h1 className="text-center justify-center text-2xl">
        We are working really hard!
      </h1>
      <div className="text-center justify-center text-lg text-red-600">Apologies for the 404. Page does not exist</div>
    </div>
  );
};

export default PageNotFoundError;
