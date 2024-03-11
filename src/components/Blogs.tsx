"use client";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";


const Blogs = ({blogs}: any) => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(3);


  
-
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `http://localhost:1337/api/blogs?populate=*&pagination[start]=0&pagination[limit]=${limit}`
      );
      let response = data.data.data;
      console.log(response);
      setData(response);
    };
    fetchData();
  }, [limit]);

  const handleLimit = () => {
    setLimit(limit + 3);
  };
  

  console.log(data);
  return (
    <div className="container mx-auto xl:max-w-[1180px] pt-[40px] text-white pb-[40px] ">
      <div className=" mt-[20px] grid grid-cols-3 gap-[20px]  ">
        {data?.map((item: any, index: number) => (
          <Link href={`${item.id}`}>
           <div className=" w-full border rounded-xl p-2 flex flex-col h-[500px">
              <div className="h-[320px] w-full overflow-hidden rounded-lg">
                <img
                  src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                  alt=""
                  className="w-full h-[100%] object-cover hover:scale-[109%] transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="">
                <h2 className="bg-[#4B6BFB]/[5%] inline-block text-[#6e717e] py-[2px] px-[4px] mb-[15px]">
                  {item.attributes.category}
                </h2> 
                 <p className="text-[18px] text-black ">{item.attributes.title}</p>
                <div className="flex items-center gap-[25px] pt-[10px] text-[#97989F] mb-0 mt-aut">
                <p className="font-bold text-[24px] text-black ">{item.attributes.price.toLocaleString()} TL</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center pt-[40px]">
        <button
          onClick={handleLimit}
          className="h-[50px] w-[150px] border border-[#2f3241] text-[#97989F] hover:text-white"
        >
          View All Posts
        </button>
      </div>
    </div>
  );
};

export default Blogs;