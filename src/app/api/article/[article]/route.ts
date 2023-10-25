import * as cheerio from "cheerio";
import { NextRequest, NextResponse } from "next/server";

/* https://www.ptt.cc/bbs/PC_Shopping/M.1697604981.A.01F.html */

export async function GET(
  req: NextRequest,
  { params }: { params: { article: string } }
) {
  const result = { str: "work" };
  console.log(params);

  /* const res = await fetch(`https://www.ptt.cc/bbs/PC_Shopping/index.html`, {
    //server端取消快取
    cache: "no-cache",
  }); */

  return NextResponse.json(result);
}
