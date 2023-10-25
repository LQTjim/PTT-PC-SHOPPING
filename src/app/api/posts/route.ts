import * as cheerio from "cheerio";

import { NextRequest, NextResponse } from "next/server";
/* API function可以有第二個參數context ex:{ params }: { params: { page: string } 可以根據file folder的[slug]擷取參數另外一種用法是[[...slug]]第二種方式可以在打API的時候不加這個參數，但是後面參數會變成陣列形式。最後決定用body傳參。-而fetch fn 在GET的時候無法傳BODY最後只能用POST */
export async function POST(req: NextRequest) {
  const result: ResponseData = { rows: [], nextPage: "" };
  const { page } = await req.json();
  //沒有頁數直接fetch主頁
  let res;
  if (!page) {
    res = await fetch(`https://www.ptt.cc/bbs/PC_Shopping/index.html`, {
      //server端取消快取
      cache: "no-cache",
    });
  } else {
    res = res = await fetch(
      `https://www.ptt.cc/bbs/PC_Shopping/index${page}.html`,
      {
        //server端取消快取
        cache: "no-cache",
      }
    );
  }

  //爬網址轉成text/html
  const IndexHtml = await res.text();
  //cheerio解析整張IndexHtml並用像jquery的方式Traversing DOM
  const $ = cheerio.load(IndexHtml);
  //.title a
  //.meta .author
  const block = $(".r-ent");

  for (let i = 0; i < block.length; i++) {
    const aTitle = block.eq(i).find(".title a").text();
    // 略過被刪文的
    if (!aTitle) {
      continue;
    }
    //排除掉置頂的東西，分界點是 .r-list-sep
    result.rows.push({
      id: crypto.randomUUID(),
      title: aTitle,
      href: "https://www.ptt.cc" + block.eq(i).find(".title a").attr("href"),
    });
    if (block.eq(i).next().attr("class") === "r-list-sep") {
      //直接中斷回圈，往程式碼下方繼續走
      break;
    }
  }
  const nextPage = $(".btn:contains('上頁')");
  //若不是最後一頁(第一頁)，則執行
  if (!nextPage.hasClass("disabled")) {
    result.nextPage = "https://www.ptt.cc" + nextPage.attr("href");
  }
  /* console.log(result);
console.log("down"); */

  return NextResponse.json(result);
}
