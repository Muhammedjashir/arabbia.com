import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Properties() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-700 min-h-screen">
        <Header />

        {/* Top Section with Buttons */}
        <div className="bg-white h-[70px] flex justify-between items-center px-6 sm:px-12 shadow-md">
          {/* Left Button */}
          <button className="bg-pink-500 text-white px-4 py-2 text-sm sm:text-base md:text-lg font-bold h-[40px]">
            All Areas-List View
          </button>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border border-gray-700 px-4 py-2  text-gray-700 cursor-pointer"
            >
              Property, Area and Bedroom ▼
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 shadow-lg ">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Apartments
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Villas
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Townhouses
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Commercial Properties
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="text-center text-2xl text-white flex justify-center mt-5 ">
          <h1>Appartments for sale in Dubai Marina-Ready Properties</h1>
        </div>
        <div className="bg-gray-700 min-h-screen flex flex-col items-center px-4">
          {/* Header Section */}
          <div className="bg-white max-w-7xl w-full shadow-lg p-6 sm:p-12 mt-6">
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
              {/* Text Content */}
              <div className="text-center md:text-right w-full md:w-1/2">
                <h3 className="text-3xl font-semibold mb-2">
                  Apartments for Sale in <br className="hidden md:block" />{" "}
                  Dubai Marina
                </h3>
                <p className="text-sky-500 text-md font-medium mb-5">
                  Ready~ 650 Nos
                </p>
                <p className="text-gray-700">
                  Studio Apartments – 50 Nos (Ready)
                </p>
                <p className="text-gray-700">
                  1 Bedroom Apartments – 87 Nos (Ready)
                </p>
                <p className="text-blue-500 cursor-pointer hover:underline">
                  2 Bedroom Apartments – 56 Nos (Ready)
                </p>
                <p className="text-gray-700">
                  3 Bedroom Apartments – 45 Nos (Ready)
                </p>
                <p className="text-gray-700">
                  4+ Bedroom Apartments – 32 Nos (Ready)
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <img
                  src="https://img.freepik.com/free-photo/dubai-marina_158595-2000.jpg?t=st=1743495094~exp=1743498694~hmac=e486e58a374a79140e7c51341e8d2d9e07ff02352b0c236219a3c4a72c8d8d0c&w=996"
                  alt="Dubai Marina"
                  className="w-full max-w-[400px] h-auto shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Building List */}
          <div className="bg-white max-w-7xl w-full  pb-10 my-6 text-center ">
            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 bg-gray-200 p-4 sm:p-6 text-center">
              <span className="text-pink-500 cursor-pointer hover:underline">
                Building List
              </span>{" "}
              –
              <span className="text-gray-800">
                {" "}
                Ready Apartments for Sale in Dubai Marina – 650 Nos
              </span>
            </h3>

            {/* Table Section */}
            <div className="overflow-x-auto flex items-center justify-center">
              <table className="w-[1000px] border-separate border-spacing-x-0.5 border-spacing-y-0.5">
                <tbody>
                  <tr className="bg-gray-300">
                    <td className="p-2">Marina A - 25</td>
                    <td className="bg-gray-200 p-2">Marina View - 56</td>
                    <td className="p-2">Marina A - 25</td>
                    <td className="bg-gray-200 p-2">Marina R - 36</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-200 p-2">Marina B - 36</td>
                    <td className="bg-gray-300 p-2">Marina Corner - 35</td>
                    <td className="bg-gray-200 p-2">Marina B - 36</td>
                    <td className="bg-gray-300 p-2">Marina X - 42</td>
                  </tr>
                  <tr className="bg-gray-300">
                    <td className="p-2">Marina C - 42</td>
                    <td className="bg-gray-200 p-2">Marina Terrace - 52</td>
                    <td className="p-2">Marina C - 42</td>
                    <td className="bg-gray-200 p-2">Marina M - 25</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-200 p-2">Marina D - 25</td>
                    <td className="bg-gray-300 p-2">Marina Torch - 22</td>
                    <td className="bg-gray-200 p-2">Marina D - 25</td>
                    <td className="bg-gray-300 p-2">Marina Bay - 52</td>
                  </tr>
                  <tr className="bg-gray-300">
                    <td className="p-2">Marina Bay - 52</td>
                    <td className="bg-gray-200 p-2">Marina Terrace - 15</td>
                    <td className="p-2">Marina Bay - 52</td>
                    <td className="bg-gray-200 p-2">Marina H - 25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Agencies & Brokers */}
          <div className="bg-white max-w-7xl w-full shadow-lg  pb-10 mb-6 text-center ">
            <h3 className="text-2xl  text-black mb-15 bg-gray-200 p-6 ">
              <span className="text-pink-500">Leading Agencies</span> &{" "}
              <span className="text-blue-500">Leading Brokers </span>– Ready
              Apartments for Sale in Dubai Marina
            </h3>
            <div className="flex flex-col items-center mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 sm:px-0">
                {[
                  {
                    name: "FAM Properties",
                    image:
                      "https://s3-alpha-sig.figma.com/img/d33c/bfdd/d84aa1f42394336c0b102afc921f7169?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ENHWGt4ltMrnQiPPEih9JYYMUxAEINnins2xVGjXHhPZKxMGmvxUno~l0ePsEdqKMYDg3tchDslDOgz4osNR4yFRUWZJ8JiE9Ika88Mhe6BrkZp6S7arffnQRJStFYKphuwBcBsLQjhrBIDsbW6Pg58C4-Fjqo1~mJLC8QJy3uiQ6uYurP82eChjUDzLpjzu0mBQLNZCwU39HVqBGfscBcaXJSZgUqtfo~cxsP88BN0GgfYSGNtZ4UHSbw6NYRZcNgX6m9yOUPR8vOrC8AgeWeP3JmU2ognsNBvOrq-kC5D1dk1L8goKvdWmc4WZEX9eghXC4nt0yqxoUBykBK92rQ__",
                    link: "View our Listing in Dubai Marina-125 Nos",
                  },
                  {
                    name: "Rakesh Jain",
                    image:
                      "https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=casOt91DHCNWXSylqnNKCX6pX6OABdr1-IjGguHCh~f4YzAxuSi7FnfXYraYqldpSoyxydKjWPfRxO2Frkh3MvO5~OGXfPe5uBUFdgOygBVPnlpluHJu83yRBlaTHOIgRthfJ3A9z-YWeWiwHNKxUOV1vhmrHEkpBPNRl~amWceAoDs6jwCTAr5uXcqnKEEkZ4uiN-7Evzna~oue1bH471sCXby5DJGe1yB-MOjBVw8JimfOippYpNhee5B00AKStTAK4lPEWrK6nGzAJ7N6zLyV9j0eX2~ch~umHvjDJTVkv4kFVg5mfqJ63nOcJ9A7yTZ1-hCu1AYqvDsOZTJ1Qw__",
                    link: "View our Listing in Dubai Marina-125 Nos",
                  },
                  {
                    name: "YAS Properties",
                    image:
                      "https://s3-alpha-sig.figma.com/img/bdbf/8815/919ee67bf88e10a250a5c3ea9b8bc29d?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XOOY8cII5oRPcy3mXHDp9ArRYObHJ1mVdw0i8rCL5TSNSFLzKL15CljkkluedbXT15Y41kviA2EleO5l0WyRdl-2BMgSJ0~sKBUCiE9oIhf8wgFD-IkJSntfQdw0f3xMlyF9DP-oOOomnFXau0y9f1k6H2lqgSwKSgtfLAM-i6JnfNv-QVwfgjhtARCitG8VbILpSoRe5a9ouzwUO4NqGVL0I0e1aFnbzmT5DO511x8Nkz8EHlLxuXgfFkd4-2EfTlJ2lT2WM-wLG8PCyLQi5dxI6aKUM6ilwJpBEc67FjugV4Vrs60UUTrN83~6opVCSM-FHRhd9XDE-y-sTgedHg__",
                    link: "View our Listing in Dubai Marina-22 Nos",
                  },
                  {
                    name: "Mariana Valmocena",
                    image:
                      "https://s3-alpha-sig.figma.com/img/7ce9/f5f0/727e1ca544fe2435f797c34a264ba6ab?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LzssdfTLvZT7HxcUwVYEgrlC~cJYsLGpMGzDFowvYxjL8uDKzBxvRr1Mzd6-aZzdUrUeCI4e8bLU~T1P8xUjG6PAxKrAIxtekAH6ib2pxD6yqgDZrd38pbiQg8YtlHDbPnP7IZNlM8r6vZHMskiA5ylasIEAL3l~DHvDrAy0u12cZeMem7olMBcVwqSSTi0DiUAvkSvkSM~aV78gUSsMcpGlWY3KV~50QvpCVgmWmuLCcOTOWJ2l~sWXy~LUoqtILDFF19Nl9Z~If-HSr2~U6RyB-P1TRZbtWRvCtwPiaehwChPq2GzMO4~K0Fg2DHhOzo1KkPYMFabNhrf4JRIC7Q__",
                    link: "View our Listing in Dubai Marina-20 Nos",
                  },
                  {
                    name: "Banke International Properties",
                    image:
                      "https://s3-alpha-sig.figma.com/img/3ef5/0251/29540eb91a95ca0f233da2826330b063?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kPHUb9tPvbvp6JApUBGm8b8J-LknaCj7NEEXYBeJEeimp6QR4e7dMzih-8jOOD2irCgQDH1LYxbu0Y51Fj26jY1qkxMDnDZ7-4Q5ASPXVdVd7YBvsLwGKos-WmAfe5qmthL3LfsNCVlwyxmzswdk2iKjVQcEbcTLvBMxo4lWwMl8QWL3e68TV~jE92cR-G7-gboR~jmMVUTcosRTbDi~-10KU5heTq4LkX8YFPM0yMsU4tCxPSDuXytYhdGSHAFoxE7I4XRjfaacr-pnxb2gYwKKJ1nzH7T3ntw9yG0AMths9V-4bo5Rw2lXRGz2XWGdTbi-rb7NAZsFVEL7uQUNCw__",
                    link: "View our Listing in Dubai Marina-88 Nos",
                  },
                  {
                    name: "Sina Algabut",
                    image:
                      "https://s3-alpha-sig.figma.com/img/5757/6100/113cda33681365945a634b5cdd83d3d8?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NGjPowaA1V5noTCs59uSwyGWy5G2fBEIEFglShgpnpR6lr0RBt9mYDjKSktjBM3ZA-IpVRTEBTTamRigy~AWYBcT28ATcjl1teVBctpGf9VkWpYRrWKzmHF9Dp8iBe13PU9ttn2cS45hGtkhyESYjZY~r1bv3rLugloT~RznvV7jbTQjywEaxoacO8Juus5LJ1Vv1u00yH65q5b2qP1Qz~Uhf71MVDI4RUM7799B11OhLwERMS7EHjFKRR~~TtuQMOmMT0AxjGpu5F9N0ehSHO7m8O4Z2n48J6uEcBL8YeqzNKpmjwGo-mz-aoOWal2Kx0~vyAUys9uQAFFujqWWww__",
                    link: "View our Listing in Dubai Marina-19 Nos",
                  },
                  {
                    name: "3G Proprties",
                    image:
                      "https://s3-alpha-sig.figma.com/img/5757/6100/113cda33681365945a634b5cdd83d3d8?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NGjPowaA1V5noTCs59uSwyGWy5G2fBEIEFglShgpnpR6lr0RBt9mYDjKSktjBM3ZA-IpVRTEBTTamRigy~AWYBcT28ATcjl1teVBctpGf9VkWpYRrWKzmHF9Dp8iBe13PU9ttn2cS45hGtkhyESYjZY~r1bv3rLugloT~RznvV7jbTQjywEaxoacO8Juus5LJ1Vv1u00yH65q5b2qP1Qz~Uhf71MVDI4RUM7799B11OhLwERMS7EHjFKRR~~TtuQMOmMT0AxjGpu5F9N0ehSHO7m8O4Z2n48J6uEcBL8YeqzNKpmjwGo-mz-aoOWal2Kx0~vyAUys9uQAFFujqWWww__",
                    link: "View our Listing in Dubai Marina-17 Nos",
                  },
                  {
                    name: "Dayana Maria",
                    image:
                      "https://s3-alpha-sig.figma.com/img/3cb5/b709/a714b255bc01e9255503df3811d5e997?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R-gvwI2zWvlxXPvhSzf~eyAK64YvXqADmp9E7l6cu97vxgU07qlA6g-6nXpaVwVpQKHttA8TeVa-LlJhadXrw7PAM-m0HOsrPhW36AW-GM-WJnpSjcNFmOW1L4RQ-SpeRAja0ymOPuG0RbaPv8kW-D8POTSZXJ21DjyzopkoB0DuByf43evIY5P-EYVLlphrhFolr1cb4IewAxtHOjreHxDzUBj4i1BjY6zWNyMxpBm8y14KU8cMoPhKD0bvz47mRAYVHkTIbgYuGKuntlA8sPxZQL34nOLZEb2F67BBhFW~F-wxDCX7mFxg6T3wtd0zcxUk7PCghblk8PvQ5TC0~A__",
                    link: "View our Listing in Dubai Marina-19 Nos",
                  },
                  {
                    name: "4C Homes",
                    image:
                      "https://s3-alpha-sig.figma.com/img/dd06/9f33/397be905554ef111fa9353aeca316dcf?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZIZ62eFEhNj5jCxJ72KxL4H07wgGjOApMdVZNQaBwNLoDZwfsMrAAeGBf2KasrEydhJzNtRYN1xNqPMc7Oi91dhtMQwfMurv3gesJciO~4EtDydgP-jESOiQj3HHWoX4YSGoiNaSDlHZSAVUcUDflKKdByUiN57e11GOA7s4EdfXwyV2Gp~Rh0vcK3lNziDzDr-jxdz2qbpMNtCB0cPdXL6SHmuHU~95JKP0GTU-ynsQc3xucBLUo6HoxeHbrkvTfHgu5jRZRGu0BFvJYbhkJEZQcYiHmobSUXH~ckf~Tdp2~KdRS-oYjKh~UnX8dxMuFbf-J5yDwpY4cyiKbCfqzw__",
                    link: "View our Listing in Dubai Marina-72 Nos",
                  },
                  {
                    name: "John Brittas",
                    image:
                      "https://s3-alpha-sig.figma.com/img/7f31/76d1/5ddef01d39f33b711ad7da10be137285?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LUHh9kHSt7VTjjjDilzd7y29guMkZWOkn3WELF~-WBcKy0Vao260U3XAoAI1z92kuekiBDrt1Idlr9OPHj-se40vTFKZ2upPRuNUC8-o~c-1OJzfiq5aZDNfUNNz-Ob~~qa9f9l1xKncAuIWzprF8cAWq-FY~md8KwlWvs4Lmc9fvC~n-m6Uzonx~SBOQmvuE7OPpa~Uhj6yx0sZwPb5QR90Ep9TpfB5heCwCKU8fiaj9iDKqgAZRc7bwXeil-vBPiSxAXUjdn1uCkafL2up~t3stqbCn1riwjVl4SJOjNmSVVltOeAh8gZuesrRx2fpu~tW5zA0QAVj-Urs2bpwFw__",
                    link: "View our Listing in Dubai Marina-14 Nos",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-full max-w-[497px] h-[185px] shadow-md bg-gray-200 "
                  >
                    <p className=" bg-gray-500 text-white h-[40px]">
                      {item.name}
                    </p>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-70 h-25 mx-auto  mt-3 mb-3 object-contain "
                    />
                    <p className="text-blue-500 cursor-pointer hover:underline bg-white p-2">
                      {item.link}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white max-w-7xl w-full shadow-lg  mb-6 text-center">
            <h3 className="text-2xl  text-pink-500 mb-2 bg-gray-200 p-3">
              <span className="text-blue-500">About</span> Dubai Marina
            </h3>
            <div className="flex justify-center mb-10 mt-5">
              <p className="text-gray-700 max-w-180 text-xl">
                Dubai Marina is an affluent residential neighborhood known for
                The Beach at JBR, a leisure complex with al fresco dining and
                sandy strtches to relax on. Smart cafes and pop-up craft markets
                line waterside promenade Dubai Marina Walk, While Dubai Marina
                Mall is packed with chain and luxury fashion brands. Upscalre
                yachts cruise through the large man-made marin, where activities
                range from jet-sking to skydiving.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Properties;
