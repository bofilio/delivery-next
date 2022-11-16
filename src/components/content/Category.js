import React from "react";
import Link from "next/link";
import Image from "next/image";
{/* <Link
  href={{
    pathname: '/to-your-other-page',
    query: data // the data
  }}
>
  <a>Some text</a>   
</Link> */}
{/* <Link href={`/explore/category/${id}`}> */}
const Category = ({id, icon, color, title, options_number }) => {
  const data ={
    id:id,
    title:title
  }

  return (
    <Link href={{
      pathname: `/explore/category/${data.id}`,
      query:data 
    }}>
      <div className="flex flex-col items-center w-36 flex-shrink-0 p-6 bg-light rounded-xl mb-8 cursor-pointer">
        <div
          className={` w-12 h-12 p-3 text-text-light rounded-xl`}
          style={{ color: "red", backgroundColor: color }}
        >
          <Image width={24} height={24} src={icon} className="w-6 h-6" />
        </div>
        <h1 className="text-base text-center text-dark font-bold mt-4">
          {title}
        </h1>
        <h6 className="text-gray-normal text-center">
          {options_number}+ options
        </h6>
      </div>
    </Link>
  );
};
export default Category;
