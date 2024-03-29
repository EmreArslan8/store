"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Header = () => {
  const [data, setData] = useState<any>(null);

    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "http://localhost:1337/api/banners?populate=*"
      );
      let response = data.data.data;
      setData(response);
      console.log(response);
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="header">
      <div className="overflow-hidden max-h-[545px] max-w-[1400px] container mx-auto w-full ">
        <Slider {...settings}>
          {data?.map((item: any, index: number) => {
            return (
              <>
                <div>
                  <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt="" />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Header;