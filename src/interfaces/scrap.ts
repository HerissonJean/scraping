export interface IScrapRes {
  data: null | { title: string; text: string; rawHtml: string };
  success: boolean;
  status: number;
  message?: string;
}
