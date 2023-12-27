import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;
  try {
    const data = await prisma?.todo.findMany({
      where: {
        projectId: parseInt(id),
      },
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);

    res.status(404).json(error);
  }
}
