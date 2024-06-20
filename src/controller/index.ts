import { Request, Response } from "express";
import { ScrapService } from "../service";

export const ScrapController = {
  async scrap(req: Request, res: Response) {
    try {
      const { data, status, success } = await ScrapService.scrap();
      res.status(status).send({ success, data });
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },
};
