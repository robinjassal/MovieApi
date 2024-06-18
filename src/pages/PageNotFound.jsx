import React, { useEffect } from "react";
import Error from "../assets/Error.jpg";
import { Link } from "react-router-dom";
function PageNotFound() {
  useEffect(() => {
    document.title = `PageNotFound`;
  }, []);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-800 font-bold my-10 dark:text-white">
            404, oops..
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={Error} alt="404" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-50 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-150 to-blue-800 rounded-lg px-5 py-3 mr-2 mb-4 font-medium">
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PageNotFound;
