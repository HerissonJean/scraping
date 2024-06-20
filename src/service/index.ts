import axios from "axios";
import { load } from "cheerio";
import { IScrapRes } from "../interfaces/scrap";

export const ScrapService = {
  async scrap(): Promise<IScrapRes> {
    try {
      const res = await axios.get("http://bianca.com");
      const $ = load(res.data);

      const title = $("title").text();
      const text = $("h1").text();

      return {
        success: true,
        status: 200,
        data: { title, text, rawHtml: res.data },
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        data: null,
        status: 500,
        message: "Não foi possivel realizar o scrapping",
      };
    }
  },
};
