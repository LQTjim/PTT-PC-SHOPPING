"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function List() {
  const [data, setData] = useState<ResponseData>({
    rows: [],
    nextPage: "",
  });

  /*   useEffect(() => {
    fetch(`http://localhost:3000/api/e-shopping-index`)
      .then((res) => res.json())
      .then((data: ResponseData) => {
        console.log(data);
        setData(data);
      });

    return () => {};
  }, []); */

  return (
    <section className="pt-[100px] bg-dcard-main-dark">
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
        <div className="">
          <span className="">windwithme (風大)</span>
          <span>。5小時前</span>
        </div>
        <div>[開箱] InWin DUBILI模組化組件機殼組裝分享</div>
        <div>本篇InWin DUBILI外觀動態影片請訂閱支持：</div>
        <div className="img-wrapper">
          <img src="https://i.imgur.com/Cwj4VNo.jpg" alt="asd" />
        </div>
        <div>
          <span>推10</span>
          <span>-&gt;10</span>
          <span>噓10</span>
          <span>討論10</span>
        </div>
      </div>
      <div className="w-1/2 m-auto bg-white rounded-md p-10">
        <div className="">
          <span className="">windwithme (風大)</span>
          <span>。5小時前</span>
        </div>
        <div>[開箱] InWin DUBILI模組化組件機殼組裝分享</div>
        <div>本篇InWin DUBILI外觀動態影片請訂閱支持：</div>
        <div className="img-wrapper">
          <img src="https://i.imgur.com/Cwj4VNo.jpg" alt="asd" />
        </div>
        <div>
          <span>推10</span>
          <span>-&gt;10</span>
          <span>噓10</span>
          <span>討論10</span>
        </div>
      </div>
      <div className="h-[2000px] ">123</div>
    </section>
  );
}

export default List;
