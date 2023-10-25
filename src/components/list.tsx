"use client";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { BiSolidUserCircle, BiComment } from "react-icons/bi";
import {
  AiOutlineArrowUp,
  AiOutlineArrowRight,
  AiOutlineArrowDown,
} from "react-icons/ai";
import Loader from "@/components/loader";
import { fetchPage } from "@/lib/fetchPage";
import { fetchContent } from "@/lib/fetchContent";
function List() {
  const [data, setData] = useState<ResponseData>({
    rows: [],
    nextPage: "",
  });
  const page = useMemo(() => {
    const regex = /index(\d+)\.html/;
    const mathes = data.nextPage.match(regex);
    if (mathes && mathes.length) {
      return mathes[1];
    }
    return "";
  }, [data]);
  /* 
  初次載入，fetch 第一頁，對最末項加上intersection observer=>
  */
  useEffect(() => {
    fetchPage(page)
      .then((data: ResponseData) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);
  const handleClick = () => {
    console.log(page);
    fetchPage(page)
      .then((data: ResponseData) => {
        setData((prev) => {
          return {
            rows: [...prev.rows, ...data.rows],
            nextPage: data.nextPage,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="pt-[100px]">
      {/* {data.rows.map((v) => {
        return (
          <div
            key={v.id}
            suppressHydrationWarning={true}
            className="item-wrapper text-yellow-50"
          >
            {v.id}
            {v.title}
            {v.href}
          </div>
        );
      })} */}

      <div className="w-1/2 m-auto bg-white rounded-md p-10">
        <button onClick={handleClick}>1284</button>
        <button
          onClick={() => {
            fetchContent("M.1697604981.A.01F.html");
          }}
        >
          121212
        </button>
        {new Array(5).fill(1).map((v, i) => (
          <div key={i} className="border-b-2 mb-5 flex gap-5 flex-col">
            <div className="mb-2 flex items-center text-[14px] ">
              <BiSolidUserCircle size={16} className="mr-2" />

              <div className="flex  ">
                <div>windwithme</div>
                <div>(風大)。</div>
                <div>電蝦。5小時前</div>
              </div>
            </div>
            <h2 className="text-[18px] font-[700]">
              [開箱] InWin DUBILI模組化組件機殼組裝分享
            </h2>

            <div className="text-[14px]">
              本篇InWin DUBILI外觀動態影片請訂閱支持：
            </div>
            <div className="w-2/3 mx-auto relative hidden">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                src="https://i.imgur.com/Cwj4VNo.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-3 mb-5">
              <div className="flex items-center">
                <AiOutlineArrowUp size={16} color="#0f7636" />
                <span>10</span>
              </div>
              <div className="flex items-center">
                <AiOutlineArrowRight size={16} />
                <span>10</span>
              </div>
              <div className="flex items-center">
                <AiOutlineArrowDown size={16} color="#ff0000" />
                <span>10</span>
              </div>
              <div className="flex items-center">
                <BiComment size={16} />
                <span>10</span>
              </div>
            </div>
          </div>
        ))}
        <Loader />
      </div>

      {/*  <div className="h-[2000px] ">123</div> */}
    </section>
  );
}

export default List;
