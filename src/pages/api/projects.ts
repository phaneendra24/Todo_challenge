import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { projectName } = req.body;

    try {
      const data = await prisma.project.create({
        data: {
          name: projectName,
        },
      });
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json("error");
    }
  }
}
