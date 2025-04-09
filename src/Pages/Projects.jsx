import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function PropertyCard({
  image,
  permitNo,
  listingId,
  agentImage,
  agentName,
  agency,
  building,
  location,
  type,
  price,
  size,
  pricePerSqft,
  completion,
  listedDate,
  listedAgo,
  area,
  bedrooms,
  bathrooms,
  parking,
  balcony,
  description,
  detailLink,
}) {
  return (
    <div className="bg-white  overflow-auto  mb-6">
      <div className="flex flex-row justify-around items-center bg-gray-200">
        <div className="text-sm text-gray-500 mb-1">
          <span className="font-semibold text-pink-500 ">
            Listed by {agency}
          </span>
        </div>
        <div className=" mb-2 text-sm font-semibold mr-0 bg-gray-300">
          <span>{building}</span>
        </div>
        <div className="mb-2 text-sm font-semibold mr-40 ">
          <span>{location}</span>
        </div>
      </div>
      <div className="flex flex-row justify-around tex-sm bg-gray-300">
        <span className="font-semibold  sm:ml-5 ">{type}</span>
        <span className="font-semibold sm:mr-10 mt-1  sm:mt-0">{price}</span>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 w-full h-[240px] md:h-auto">
          <img
            src={image}
            alt="Property"
            className="w-full h-full object-cover"
          />
          <div className="text-gray-500 text-sm px-4 py-1">
            Trakheesi Permit No: {permitNo}
          </div>
          <div className="text-gray-600 text-sm px-4 pb-2">
            dubaiFI Property Listing No: {listingId}
          </div>
        </div>

        <div className="md:w-2/3 w-full flex flex-col md:flex-row">
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 text-sm mb-1"></div>
            <div className="text-sm text-gray-700">
              Size – {size} | {pricePerSqft}
            </div>
            <div className="text-sm text-gray-700">{completion}</div>
            <div className="text-sm text-gray-700">
              Listed on {listedDate} – {listedAgo}
            </div>
            <div className="text-sm text-gray-700">Freehold Area – {area}</div>
            <div className="text-sm flex gap-4 items-center my-1">
              <span>Bedroom – {bedrooms}</span>
              <span>Bathrooms – {bathrooms}</span>
              <span>Parking – {parking}</span>
              <span>Balcony – {balcony}</span>
            </div>
            <div className="text-sm text-gray-600 mb-2">{description}</div>
            <a
              href={detailLink}
              className="text-blue-600 hover:underline text-sm font-semibold"
            >
              View full property details – Listing No:{listingId}
            </a>
          </div>

          <div className="w-full md:w-[200px] flex flex-col items-center justify-between  mt-4 md:mt-0 pl-4">
            <div className="text-center">
              <div className="font-semibold text-sm text-white bg-gray-900 px-2 py-4">
                {agentName}
              </div>
              <img
                src={agentImage}
                alt="Agent"
                className="w-[1000px] h-full  object-cover "
              />
            </div>
            <div className="bg-gray-400 mt-13 py-1 px-11">
            <button className=" bg-blue-500 text-sm px-2 py-1  rounded-lg hover:bg-blue-600 text-yellow-300">
              Contact Now
            </button>
            </div>
            <div className="text-sm font-semibold text-center px-11 py-2 bg-gray-900 text-white ">
              {agency}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});

  const filters = [
    {
      label: "Price",
      options: ["AED < 1M", "AED 1-2M", "AED 2M-5M", "AED 5-10 M", "10M +"],
    },
    {
      label: "Size",
      options: ["Studio", "1 Bed", "2 Beds", "3 Beds", "4+ Beds"],
    },
    {
      label: "Rate/Sq ft",
      options: ["Under $500", "$500 - $800", "$800 - $1,200", "Over $1,200"],
    },
    {
      label: "Completion",
      options: ["Ready", "Off Plan", "Under Construction"],
    },
    {
      label: "Distress Sale",
      options: ["Yes", "No"],
    },
    {
      label: "Broker's Hot",
      options: ["Hot Deals", "New Listings", "Featured"],
    },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleFilterSelect = (filterLabel, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterLabel]: option,
    }));
    setActiveDropdown(null);
  };

  const clearFilters = () => {
    setSelectedFilters({});
    setActiveDropdown(null);
  };

  // Dummy data
  const properties = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/c11f/07cc/75e99a622da2672558b7c576509035b1?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TGM0BXkg0M2i-RGC2ujlk6fea96v-vrjfb9~9RyuusOhGF6f72-q9TBeFj1-DRhJo1hD2eSzGoz~l24JXTTybDOsrmy2Vftl~reSxxComqUufU7F17ln3z7PxNZnUs9hl30qRtcxgplSRZ3W3bmFGk~esaoBZNOYHreTWjHfTpRtLOWcmhaFzDT~L8Tw3l3UYT4xT0w6opl7SX5~oeIpPTUbRf48KExtIaUO4HWcswdeqWZMUHisEkS3BXhz8zKEnk4L5Qa3RIJE5C2-1c7EVVEdth2PBO~lav9x72k3sjcqwgnBxYEjMq9k2SwTDqpLMxgyo8mm-vIPGEEIS5rwGA__",
      permitNo: "56565",
      listingId: "12896",
      agentImage:
        "https://s3-alpha-sig.figma.com/img/ce45/a896/d958cf406bb83c3c0a93e2f03fcb0bef?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=neln8-kiAk8hQqcres-ouZWdeuDGE-elvJ1lPuwg2A2yyIC7U1mEKOb--WTW--h-yhHk2fqKqsc4Nr7O72sJd1a878DKurXzUJqnpMn~r8AgU762kBn4KzzCFvhe02U6llsN41J1abVosPg8kH8s6R2M-778xxWeYhFaN98rL9En5nARn2szQZqgArZgxTvMJVD4qGc1XSsnB-38nAMNGkbfnDleZqwEgm5n0z-PqrHjYqKOFvtqO8GwtqZ7JNnl~8zHzayjjhAz95lPcUvwmOmHuIj--altx4FQ4CyjsVHBmMx4INc2jXHyOlmu3yI7NiG7CfVMExNLFV~Ztcc90A__",
      agentName: "Rakesh Jain",
      agency: "FAM Properties",
      building: "Signature Building",
      location: "Dubai Marina",
      type: "2 Bedroom Apartment",
      price: "AED 36,00,000",
      size: "3,200 Sq ft",
      pricePerSqft: "AED 1125/ Sq ft",
      completion: "Ready Property | Completed in 2023",
      listedDate: "12-05-2023",
      listedAgo: "12 days ago",
      area: "Dubai Marina | Marina 1",
      bedrooms: "2",
      bathrooms: "3",
      parking: "1",
      balcony: "1",
      description:
        "Beautiful 2 bedroom apartment facing Marina. Central A/C apartment with shared swimming pool, Shared...",
      detailLink: "#",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7251/a15b/ab748424861b078662b6fa1cf42202e3?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m1B9uAk~AAYUzKqkTb~rPR-pRy4BzFIeeUozQpEt1EF~1R1Nr~hhQFZjsRNVVypOHpdbmG0AuvWsvSZ-ZATSxPopA9WwcBCY9ELn8iIdxOUc0jIq8kM4f95cLnSwWqh5JbXAZwDVGakQRwCXfsMGle89QR7okl5cVEGUEIYf6E-YOP6315cEbXrvZOSUqkN3wFdJ5vi37VMoatrH1Ul9ogeCETr4ZSPRiyMiEKe9tFoqvZtCj3KpsLcV5mHb5Qayll-cuL~WFFWgmbiVmU2d-pLBIKeCKTVyrkNS6wEjJKCnF1~MgvB60JjVa9YNb7JFLlHyxhSJAhgbL3A8u2bEYw__",
      permitNo: "53558",
      listingId: "15687",
      agentImage:
        "https://s3-alpha-sig.figma.com/img/5434/446e/ff00088f8524bfba308ca961a83bd7c5?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cGQipiB~oD31FY1aLF4wUljMZp8hvtq4Snka0Qx3tKbkpNkwVIl~jbIbf92HzZG9~cTjncsqJVNrs74YDKmGGYirsHQ6M9GMFp2CzCKvF508ODIUXI8lyaj~rmvAHjQyntPF07KDI9xxlPXOoIO1Vvc1P7hKXYN7zh-ycoxYfnNrG~uZa-bdDu9qY1sjuMBzvAYPTeyu68k3~Y4ubuWjksfeWhWvzwkgEzKcM-vWG6lhs3YevqTrjA2fkbjt1qsJS5ZDO~Ep8TzJ6twuDCR7~AWEovE1pxDIR~ojZPsn6oOuFoT5qivmiVda2cuONClo88iPSGAOfFoAlXyHyif22Q__",
      agentName: "Paula Markvukaj",
      agency: "DATCHA Real Estate",
      building: "Marina Torch",
      location: "Dubai Marina",
      type: "2 Bedroom Apartment",
      price: "AED 45,00,000",
      size: "3,200 Sq ft",
      pricePerSqft: "AED 1125/ Sq ft",
      completion: "Ready Property | Completed in 2023",
      listedDate: "12-05-2023",
      listedAgo: "12 days ago",
      area: "Dubai Marina | Marina 1",
      bedrooms: "2",
      bathrooms: "3",
      parking: "1",
      balcony: "1",
      description:
        "Beautiful 2 bedroom apartment facing Marina. Central A/C apartment with shared swimming pool, Shared...",
      detailLink: "#",
    },
  ];

  return (
    <div className="bg-gray-700 min-h-screen">
      <Header />

      {/* Filter Bar */}
      <div className="bg-white w-full shadow-md px-4 sm:px-6 md:px-12 pb-4 pt-4 overflow-x-auto">
        <div className="flex items-center space-x-3 md:space-x-4 min-w-[650px] sm:min-w-full w-max flex-nowrap">
          <span className="text-pink-500 font-semibold whitespace-nowrap shrink-0">
            Filter By
          </span>
          {filters.map((filter, index) => (
            <div key={index} className="relative shrink-0">
              <button
                onClick={() => toggleDropdown(index)}
                className={`${
                  activeDropdown === index ? "bg-blue-400" : "bg-gray-600"
                } hover:bg-blue-400 hover:text-yellow-300 text-white px-4 py-2 rounded-sm text-sm whitespace-nowrap flex items-center transition-colors`}
              >
                {filter.label}
                {selectedFilters[filter.label]
                  ? `: ${selectedFilters[filter.label]}`
                  : ""}{" "}
                ▼
              </button>
              {activeDropdown === index && (
                <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-300 shadow-lg z-10 rounded-sm">
                  <ul className="py-1">
                    {filter.options.map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className={` px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-semibold text-center ${
                          selectedFilters[filter.label] === option
                            ? "bg-gray-100 font-medium"
                            : ""
                        }`}
                        onClick={() => handleFilterSelect(filter.label, option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:underline whitespace-nowrap shrink-0"
          >
            Clear Filter
          </button>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center text-2xl text-white flex justify-center mt-5">
        <h1>Apartments for sale in Dubai Marina - Ready Properties (524)</h1>
      </div>

      {/* Property Cards */}
      <div className="px-4 sm:px-6 md:px-12 mt-6">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
