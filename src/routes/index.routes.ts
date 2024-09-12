/** @format */

import { Request, Response, Router } from "express";

const indexRoutes = Router();

indexRoutes.get("/", (_req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello World Again" });
});

export default indexRoutes;
