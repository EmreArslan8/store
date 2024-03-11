import axios from "axios";
import React from "react";

const Page = async ({ params }: any) => {
  let id = params.id;
  console.log(id);
  let data = await axios.get(
    `http://localhost:1337/api/blogs/${id}?populate=*`
  );
  let response = data.data.data;
  let description = response.attributes.description;
  console.log(description);

  return (
    <div className="container mx-auto xl:max-w-[1100px] pt-[15px] rounded-xl">
      <div className="mainımage h-[550px] w-[75%] ml-20 rounded-xl relative">
        <img
          src={`http://localhost:1337${response.attributes.image.data.attributes.url}`}
          alt=""
          className="w-full h-full object-contain rounded-3xl"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />

      </div>
      <div className="text-3xl font-bold">
        {response.attributes.title}
      </div>
      <div className="text-black pt-[20px] pb-[40px]" dangerouslySetInnerHTML={{ __html: `${description}` }}></div>
    </div>
  );
};

export default Page;
