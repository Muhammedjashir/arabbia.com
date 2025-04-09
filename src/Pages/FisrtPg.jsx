import React from "react";

const propertyData = [
  {
    title: "Apartments for Sale in Dubai",
    ready: "25,346",
    offPlan: "17,356",
    locations: [
      { name: "Dubai Marina", ready: "650", offPlan: "600" },
      { name: "JVC", ready: "428", offPlan: "610" },
      { name: "Business Bay", ready: "545", offPlan: "390" },
      { name: "Dubai Creek Harbour", ready: "217", offPlan: "370" },
    ],
    image: "https://dubai-fh.gitdr.com/assets/images/property-1.webp",
  },
  {
    title: "Villas for Sale in Dubai",
    ready: "25,346",
    offPlan: "17,356",
    locations: [
      { name: "Dubai Hills", ready: "1,258", offPlan: "2,235" },
      { name: "MBR City", ready: "488", offPlan: "789" },
      { name: "Tilal Al Ghaf", ready: "387", offPlan: "218" },
      { name: "Arabian Ranches", ready: "870", offPlan: "970" },
    ],
    image: "https://dubai-fh.gitdr.com/assets/images/property-2.webp",
  },
  {
    title: "Townhouses for Sale in Dubai",
    ready: "5,349",
    offPlan: "6,214",
    locations: [
      { name: "Dubai Hills", ready: "1,258", offPlan: "2,235" },
      { name: "MBR City", ready: "428", offPlan: "789" },
      { name: "Tilal Al Ghaf", ready: "387", offPlan: "218" },
      { name: "Arabian Ranches", ready: "279", offPlan: "79" },
    ],
    image: "https://dubai-fh.gitdr.com/assets/images/property-3.webp",
  },
  {
    title: "Penthouses for Sale in Dubai",
    ready: "1,346",
    offPlan: "2,189",
    locations: [
      { name: "Dubai Marina", ready: "650", offPlan: "600" },
      { name: "JVC", ready: "428", offPlan: "610" },
      { name: "Business Bay", ready: "545", offPlan: "390" },
      { name: "Dubai Creek Harbour", ready: "217", offPlan: "370" },
    ],
    image: "https://dubai-fh.gitdr.com/assets/images/property-4.webp",
  },
  {
    title: "Full Floor for Sale in Dubai",
    ready: "346",
    offPlan: "514",
    locations: [
      { name: "Dubai Hills", ready: "1,258", offPlan: "2,235" },
      { name: "MBR City", ready: "488", offPlan: "789" },
      { name: "Tilal Al Ghaf", ready: "387", offPlan: "218" },
      { name: "Arabian Ranches", ready: "870", offPlan: "970" },
    ],
    image: "https://dubai-fh.gitdr.com/assets/images/property-5.webp",
  },
  {
    title: "Duplexes for Sale in Dubai",
    ready: "5,349",
    offPlan: "6,214",
    locations: [
      { name: "Dubai Hills", ready: "1,258", offPlan: "2,235" },
      { name: "MBR City", ready: "428", offPlan: "789" },
      { name: "Tilal Al Ghaf", ready: "387", offPlan: "218" },
      { name: "Arabian Ranches", ready: "279", offPlan: "79" },
    ],
    image: "https://dubai-fh.gitdr.com/assets/images/property-6.webp",
  },
  {
    title: "Residential Land for Sale in Dubai",
    ready: "346",
   
    locations: [
      { name: "Dubai Hills", ready: "1,258"},
      { name: "MBR City", ready: "428"},
      { name: "Tilal Al Ghaf", ready: "387" },
      { name: "Arabian Ranches", ready: "279"},
    ],
    image: "https://dubai-fh.gitdr.com/assets/images/property-7.webp",
  },
  {
    title: "Buildings for Sale in Dubai",
    ready: "546",
    offPlan: "1189",
    locations: [
      { name: "Dubai Hills", ready: "1,258", offPlan: "2,235" },
      { name: "MBR City", ready: "488", offPlan: "789" },
      { name: "Tilal Al Ghaf", ready: "387", offPlan: "218" },
      { name: "Arabian Ranches", ready: "279", offPlan: "79" },
    ],
    image: "https://dubai-fh.gitdr.com/assets/images/property-8.webp",
  },
  {
    title: "Offices for Sale in Dubai",
    ready: "346",
    offPlan: "514",
    locations: [
      { name: "Dubai Marina", ready: "650", offPlan: "600" },
      { name: "JVC", ready: "428", offPlan: "789" },
      { name: "Business Bay", ready: "545", offPlan: "390" },
      { name: "Dubai Creek Harbour", ready: "217", offPlan: "370" },
    ],
    image: "https://dubai-fh.gitdr.com/assets/images/property-9.webp",
  },
  {
    title: "Shops for Sale in Dubai",
    ready: "1,546",
    offPlan: "2,452",
    locations: [
      { name: "Dubai Marina", ready: "650", offPlan: "600" },
      { name: "JVC", ready: "428", offPlan: "610" },
      { name: "Business Bay", ready: "545", offPlan: "390" },
      { name: "Dubai Creek Harbour", ready: "217", offPlan: "370" },
    ],
    image: "https://dubai-fh.gitdr.com/assets/images/property-10.webp",
  },
  {
    title: "Commercial Buildings for Sale in Dubai",
    ready: "346",
    offPlan: "514",
    locations: [
      { name: "Dubai Marina", ready: "650", offPlan: "600" },
      { name: "JVC", ready: "428", offPlan: "610" },
      { name: "Buisness Bay", ready: "545", offPlan: "390" },
      { name: "Dubai Creek Harbour ", ready: "217", offPlan: "370" },
    ],
    image: "https://dubai-fh.gitdr.com/assets/images/property-11.webp",
  },
  {
    title: "Commercial Land for Sale in Dubai",
    ready: "346",
    
    locations: [
      { name: "Dubai Marina", ready: "650"},
      { name: "JVC", ready: "428" },
      { name: "Business Bay", ready: "545" },
      { name: "Dubai Creek Harbour", ready: "217" },
    ],
    image: "https://dubai-fh.gitdr.com/assets/images/property-12.webp",
  },
];

const PropertySection = ({ title, ready, offPlan, locations, image, reverse }) => (
  <div className={` flex flex-col-reverse sm:flex-row items-center px-4 sm:px-6 lg:px-10 gap-6 sm:gap-10 ${reverse ? "sm:flex-row-reverse " : ""}`}>
    
    {/* Image Section */}
     <img src={image} alt={title} className="w-full max-w-[500px] h-auto mx-auto md:mx-0 shadow-md " />
    
    {/* Content Section */}
    <div className="space-y-3 text-center sm:text-left  ">
      <h3 className="text-xl sm:text-3xl font-semibold">{title}</h3>
      <p className="text-base sm:text-lg mb-3">
        <span className="text-sky-500 font-semibold">Ready– {ready}</span> | 
        <span className="text-pink-500 font-semibold"> Off Plan– {offPlan}</span>
      </p>
      <div className="text-sm sm:text-lg space-y-2 ">
        {locations.map((loc, index) => (
          <p key={index}>
            {loc.name}:{" "}
            <span className="text-black">Ready–{loc.ready}</span> | 
            <span className="text-black"> Off Plan–{loc.offPlan}</span>
          </p>
        ))}
      </div>
    </div>
  </div>
);

function FirstPg() {
  return (
    <div className="bg-gray-700 text-white py-8 px-4 font-sans relative">
      <h2 className="text-center text-xl sm:text-3xl font-semibold mb-6">
        FreeHold Properties For Sale in Dubai
      </h2>

      <div className="bg-white text-black max-w-7xl mx-auto p-4 sm:p-8 space-y-12">
        {propertyData.map((property, index) => (
          <PropertySection key={index} {...property} reverse={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}

export default FirstPg;


