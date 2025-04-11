import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const areaData = [
  {
    area: "Business Bay",
    total: 3669,
    ready: 2384,
    offPlan: 1285,
  },
  {
    area: "Dubai Marina",
    total: 3577,
    ready: 2125,
    offPlan: 1452,
  },
  {
    area: "Downtown Dubai",
    total: 3024,
    ready: 1899,
    offPlan: 1125,
  },
  {
    area: "Jumeirah Lake Towers",
    total: 2243,
    ready: 1287,
    offPlan: 956,
  },
  {
    area: "Dubai Creek Harbour",
    total: 2037,
    ready: 1125,
    offPlan: 912,
  },
  {
    area: "MBR City",
    total: 1955,
    ready: 1098,
    offPlan: 857,
  },
  {
    area: "Business Bay",
    total: 1857,
    ready: 1012,
    offPlan: 845,
  },
  {
    area: "Dubai Marina",
    total: 1738,
    ready: 943,
    offPlan: 795,
  },
  {
    area: "Downtown Dubai",
    total: 1494,
    ready: 842,
    offPlan: 652,
  },
];

const Agenciese = () => {
  const [sortType, setSortType] = useState(null);

  const sortedData = [...areaData].sort((a, b) => {
    if (sortType === "az") return a.area.localeCompare(b.area);
    if (sortType === "09") return b.total - a.total;
    return 0;
  });

  return (
    <>
      <div className="bg-white min-h-screen">
        <Header />

        {/* Top Section with Buttons */}
        <div className="max-w-full mx-auto bg-white ">
          <div className="flex justify-end bg-gray-700">
            <div className="flex space-x-2  mr-10 rounded-xl mt-5 mb-5 ">
              <h2 className="text-xl font-semibold text-gray-200 ">Sort By</h2>
              <button
                onClick={() => setSortType("az")}
                className="bg-pink-500 text-white px-4 py-1 rounded cursor-pointer"
              >
                A → Z
              </button>
              <button
                onClick={() => setSortType("09")}
                className="bg-blue-500 text-white px-4 py-1 rounded cursor-pointer"
              >
                0 → 9
              </button>
            </div>
          </div>
          
          <div className=" min-h-screen flex flex-col items-center ">
          <div className="text-center text-2xl text-gray-800 flex justify-center bg-gray-300 w-full py-2">
            <h1>Appartments for sale in Dubai Marina-Ready Properties</h1>
          </div>
            {/* Header Section */}
            <div className="bg-white max-w-7xl w-full shadow-lg flex flex-col   mt-7 mb-3 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mb-20 gap-5 ml-10 mr-10 mt-10">
                {sortedData.map((area, index) => (
                  <div
                    key={index}
                    className="bg-white rounded shadow mt-5 "
                  >
                    <div className="text-gray-900 font-semibold text-center bg-gray-500 py-2">
                      {area.area} – {area.total.toLocaleString()} Nos
                    </div>
                    <div className="flex justify-center space-x-4 mt-3 ">
                      <span className="text-sky-500 text-sm font-medium ">
                        Ready–{area.ready.toLocaleString()}
                      </span>
                      <span className="text-pink-500 text-sm font-medium">
                        Off Plan–{area.offPlan.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-center text-sm text-gray-600 mt-2 font-semibold bg-gray-300 py-2">
                      Apartments
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-200 ">
                <p className="text-center text-xl font-semibold text-gray-700 mt-3 mb-3  ">
                  Apartments for Sale in Dubai - Areawise List
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Agenciese;
