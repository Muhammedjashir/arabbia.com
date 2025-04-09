import property_listing_1 from "../assets/images/property-list-1.png";
import property_listing_2 from "../assets/images/property-list-2.png";
import property_listing_3 from "../assets/images/property-list-3.png";
import property_listing_4 from "../assets/images/property-list-4.png";
import property_listing_5 from "../assets/images/property-list-5.png";
import property_listing_6 from "../assets/images/property-list-6.png";
import property_listing_7 from "../assets/images/property-list-7.png";
import shower_dark_icon from "../assets/icons/shower-dark-icon.svg";
import car_dark_icon from "../assets/icons/car-dark-icon.svg";
import bed_dark_icon from "../assets/icons/bed-dark-icon.svg";
import balcony_dark_icon from "../assets/icons/balcony-dark-icon.svg";
import broker from "../assets/images/broker.png";
import arrow_group from "../assets/icons/arrow-group.svg"
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Developers() {
  return (
    <>
    <Header/>
      <div className="bg-[#FFFFFF] h-[70px] flex flex-row justify-center items-center pt-[25px] pb-[25px] px-[10px] py-[25px] gap-[2.5rem] property-list-header-bg-container">
        <div className="text-[24px] font-[400] tracking-[1px] text-[#1E1E1E] text-center align-middle property-list-contact-name">
          Contact Broker - Mr.Rajesh Jain
        </div>
        <div className="flex gap-[14px] property-list-buttons ">
          <div className="bg-[#00B0F0] text-[#FFFFFF] rounded-[5px] w-[139px] h-[42px]  text-[18px] flex items-center justify-center whitespace-nowrap property-list-call cursor-pointer">
            Call
          </div>
          <div className="bg-[#00237c] text-[#FFFFFF] rounded-[5px] w-[190px] h-[42px] text-[18px] flex items-center justify-center whitespace-nowrap property-list-request cursor-pointer">
            Request Call Back
          </div>
          <div className="bg-[#ff5399] text-[#FFFFFF] rounded-[5px] w-[137px] h-[42px] text-[18px] flex items-center justify-center whitespace-nowrap property-list-email cursor-pointer">
            Email
          </div>
        </div>
      </div>

      <section className="w-full h-auto flex flex-col items-center justify-start px-[3%] property-listing ">
        <h1 className="text-[24px] font-[300] tracking-[0.5px] text-center text-[var(--primary-white)] my-[1.5rem] property_list_heading">
          Property Listing No:15986 | 2 Bedroom Apartment for Sale in Signature
          Residence, Dubai Marina
        </h1>
        <div className="w-full bg-[var(--primary-white)] flex flex-col items-center justify-start gap-[3.5rem] py-[2rem] px-[2%] property_list_container">
          <h1 className="text-[22px] font-[300] tracking-[0.5px] text-[#1e1e1e] text-center property_sub_list_heading">
            Property Listing No:15986 | 2 Bedroom Apartment for Sale in
            Signature Residence, Dubai Marina
          </h1>

          <div className="flex justify-between property_list_card">
            <div className="flex flex-col items-start justify-start gap-[1.5px] property_list_images">
              <img
                src={property_listing_1}
                alt=""
                loading="lazy"
                className="w-full h-[21.585rem] aspect-video object-cover property_list_image"
              />
              <img
                src={property_listing_2}
                alt=""
                loading="lazy"
                className="w-full h-[21.585rem] aspect-video object-cover property_list_image"
              />
              <img
                src={property_listing_3}
                alt=""
                loading="lazy"
                className="w-full h-[21.585rem] aspect-video object-cover property_list_image"
              />
              <img
                src={property_listing_4}
                alt=""
                loading="lazy"
                className="w-full h-[21.585rem] aspect-video object-cover property_list_image"
              />
              <img
                src={property_listing_5}
                alt=""
                loading="lazy"
                className="w-full h-[21.585rem] aspect-video object-cover property_list_image"
              />
              <img
                src={property_listing_6}
                alt=""
                loading="lazy"
                className="w-full h-[21.585rem] aspect-video object-cover property_list_image"
              />
              <img
                src={property_listing_7}
                alt=""
                loading="lazy"
                className="w-full h-[21.585rem] aspect-video object-cover property_list_image"
              />
              <div className="w-full min-h-[2.5rem] grid place-items-center text-[16px] font-[500] text-center text-[var(--bright-pink)] cursor-pointer property_list_more_photos_text">
                <p>More Photos</p>
              </div>
            </div>

            <div className="flex flex-col items-start flex-wrap property_list_detils">
              <h2 className="w-full text-[24px] font-[500] text-[var(--primary-black)] bg-[#f2f2f2] p-[5px] text-center grid place-items-center min-h-[5.5rem] property_list_card_title">
                Property Listing No - 15986
              </h2>
              <ul className="w-full list-none flex flex-col items-start property_details_card_second_section_sub_details_container">
                <li className="w-full flex items-center justify-between text-[16px] font-[500] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Signature Residence
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Dubai Marina
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[500] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    AED 36,00,000
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    2 Bedroom Apartment
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    3,200 Sq ft
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    AED 1,125/ Sq ft.
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Ready Property
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Completed in 2023
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Listed on 12-05-2024
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    12 days ago
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Freehold Area
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Dubai Marina | Marina 1
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Bedroom-2
                    <img
                      src={bed_dark_icon}
                      alt="bed"
                      className="max-w-[35px] max-h-[30px] property_details_card_second_section_sub_details_container_li_p_img"
                    />
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    <img
                      src={shower_dark_icon}
                      alt="bed"
                      className="max-w-[35px] max-h-[30px] property_details_card_second_section_sub_details_container_li_p_img"
                    />
                    Bathrooms-3
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Parking-1
                    <img
                      src={car_dark_icon}
                      alt="bed"
                      className="max-w-[35px] max-h-[30px] property_details_card_second_section_sub_details_container_li_p_img"
                    />
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    <img
                      src={balcony_dark_icon}
                      alt="bed"
                      className="max-w-[35px] max-h-[30px] property_details_card_second_section_sub_details_container_li_p_img"
                    />
                    Balcony-1
                  </p>
                </li>
                <li className="max-w-[38rem] px-[30px] py-[10px] list-none text-[var(--primary-black)] font-[300] text-[16px] property_details_sub_details">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Beautiful 2 bedroom apartment facing Marina. Central A/C
                    apartment with shared swimming pool, Shared gym, Sauna,
                    Tennis, Court, Cycling.....
                  </p>
                </li>
              </ul>

              <h2 className="w-full text-left min-h-[3rem] flex items-center text-[18px] font-[500] text-[var(--primary-black)] bg-[#f2f2f2] pt-[5px] pr-[1rem] pb-[5px] pl-[2rem] property_list_card_sub_title">
                Distance from key locations
              </h2>
              <ul className="w-full list-none flex flex-col items-start property_details_card_second_section_sub_details_container">
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Creek Harbour- 5 Minutes
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Burj Khalifa- 5 Minutes
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Dubai Mall- 10 Minutes
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    City Centre- 10 Minutes
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Dubai Int. Airport- 2 Minutes
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Downtown- 2 Minutes
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Dubai Marina- 15 Minutes
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Metro Station- 3 Minutes
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Atlantis Hotel- 20 Minutes
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Madinat Jumeirah- 20 Minutes
                  </p>
                </li>
              </ul>

              <h2 className="w-full text-left min-h-[3rem] flex items-center text-[18px] font-[500] text-[var(--primary-black)] bg-[#f2f2f2] pt-[5px] pr-[1rem] pb-[5px] pl-[2rem] property_list_card_sub_title_important_amenities">
                Important Amenities
              </h2>
              <ul className="w-full list-none flex flex-col items-start property_details_card_second_section_sub_details_container">
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Shared Gym
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Security
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Shared Pool
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Central A/C
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Walk in Closet
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Children’s Pool
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Jogging Track
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Shared Spa
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Laundry
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Barbecue Area
                  </p>
                </li>
              </ul>

              <div className="w-full text-left min-h-[3rem] flex items-center justify-between gap-[0.5rem] px-[2rem] py-[5px] text-[18px] font-[500] text-[var(--primary-black)] bg-[#f2f2f2] property_list_card_sub_title amenities-row">
                <p className="">Broker</p>
                <p className="">Rakesh Jain, Sales Manager</p>
              </div>
              <ul className="w-full list-none flex flex-col items-start property_details_card_second_section_sub_details_container">
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Nationality
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    India
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Speaks
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    English, Hindi, Arabia
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    RERA Broker Reg No
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    858
                  </p>
                </li>
              </ul>

              <div className="mt-[2.5rem] w-full flex flex-col items-center property_list_card_broker_detils_container">
                <div className="w-full max-w-[240px] h-[254px] overflow-hidden property_list_card_broker_pic_wrapper">
                  <img
                    src={broker}
                    alt="broker"
                    className="w-full h-full object-cover property_list_card_broker_pic_wrapper_img"
                  />
                </div>
                <p className="mt-[2rem] text-[16px] font-[400] leading-[15px] text-center text-[var(--medium-blue)] property_list_card_broker_label_text">
                  More properties from Rakesh Jain (53)
                </p>
                <div className="flex gap-[14px] property-list-buttons mt-[1rem] mb-[2rem] property_list_card_broker_buttons">
                  <div className="bg-[#00B0F0] text-[#FFFFFF] rounded-[5px] w-[139px] h-[42px]  text-[18px] flex items-center justify-center whitespace-nowrap property-list-call">
                    Call
                  </div>
                  <div className="bg-[#00237c] text-[#FFFFFF] rounded-[5px] w-[190px] h-[42px] text-[18px] flex items-center justify-center whitespace-nowrap property-list-request">
                    Request Call Back
                  </div>
                  <div className="bg-[#ff5399] text-[#FFFFFF] rounded-[5px] w-[137px] h-[42px] text-[18px] flex items-center justify-center whitespace-nowrap property-list-email">
                    Email
                  </div>
                </div>
              </div>

              <div className="w-full text-left min-h-[3rem] flex items-center justify-between gap-[0.5rem] px-[2rem] py-[5px] text-[18px] font-[500] text-[var(--primary-black)] bg-[#f2f2f2] property_list_card_sub_title amenities-row">
                <p className="">Agency</p>
                <p className="">FAM Properties</p>
              </div>

              <ul className="w-full list-none flex flex-col items-start property_details_card_second_section_sub_details_container">
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Address
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Signature Bldg, Karama, Dubai
                  </p>
                </li>
                <li className="w-full flex items-center justify-between text-[16px] font-[300] text-[var(--primary-black)] border-b-[0.5px] border-b-[#b9b9b9] min-h-[40px] px-[2rem] py-[5px] property_details_card_second_section_sub_details_container_li">
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    Agency Reg No
                  </p>
                  <p className="w-full flex items-center gap-[2rem] property_details_card_second_section_sub_details_container_li_p">
                    568
                  </p>
                </li>
              </ul>

              <div className="mt-[2rem] mb-[2rem] w-full flex flex-col items-center justify-center property_list_card_more_items_container">
                <div className="w-full max-w-[18rem] h-[4rem] bg-[#efefef] rounded-[10px] property_list_card_more_items_box"></div>
                <p className="mt-[2rem] text-[16px] font-[400] leading-[15px] text-center text-[var(--medium-blue)] property_list_card_broker_label_text">
                  More properties from Rakesh Jain (53)
                </p>
              </div>

              <div className="w-full text-left min-h-[3rem] flex items-center justify-between gap-[0.5rem] px-[2rem] py-[5px] text-[18px] font-[500] text-[var(--primary-black)] bg-[#f2f2f2] property_list_card_sub_title amenities-row">
                <p className="">DLD (Trakeeshi) Permit Number</p>
                <p className="">56565624</p>
              </div>

              <div className="mt-[2rem] mb-[2rem] w-full flex flex-col items-center justify-center property_list_card_more_items_container">
                <div className="w-full max-w-[8rem] h-[8rem] bg-[#efefef] rounded-[10px] property_list_card_more_items_box_box_2"></div>
              </div>

              <div className="w-full text-left min-h-[3rem] flex items-center justify-between gap-[0.5rem] px-[2rem] py-[5px] text-[18px] font-[500] text-[var(--primary-black)] bg-[#f2f2f2] property_list_card_sub_title amenities-row">
                <p className="">Location</p>
              </div>

              <div className="mt-[2rem] mb-[2rem] w-full flex flex-col items-center justify-center property_list_card_more_items_container">
                <div className="w-full max-w-[20rem] h-[11rem] bg-[#efefef] rounded-[10px] property_list_card_more_items_box_box_3"></div>
              </div>

              <div className="w-full text-left min-h-[3rem] flex items-center justify-between gap-[0.5rem] px-[2rem] py-[5px] text-[18px] font-[500] text-[var(--primary-black)] bg-[#f2f2f2] property_list_card_sub_title amenities-row">
                <p className="">Sale type</p>
                <p className="">Distress Sale</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-[22px] font-[300] text-center text-[#646464] px-[5%] py-[1rem] bg-[#f2f2f2] property_list_bottom_container">
          <p>
            Property Listing No:15986 | 2 Bedroom Apartment for Sale in Dubai
            Marina 1, Dubai Marina
          </p>
        </div>
      </section>

      <div className="w-full px-[5%] py-[1.5rem] grid place-items-center property_list_bottom_button_container">
        <button className="bg-[#0b66ef] border border-white flex items-center justify-center gap-[0.5rem] cursor-pointer text-[16px] font-400 text-center text-[var(--primary-white)] shadow-[1px_1px_7px_0px_#00000033] px-10 py-2 property_list_bottom_button_container_button">
          <img src={arrow_group} alt="" /> Back to multiple
          listing page
        </button>
      </div>
      <Footer/>
    </>
  );
}

export default Developers;
