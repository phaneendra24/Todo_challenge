import { NextApiRequest, NextApiResponse } from "next";

import prisma from "./libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await prisma?.project.findMany();

    res.status(200).json(users);
  } else if (req.method === "POST") {
    const { id, task, status, startDate, deadLine } = await req.body;

    try {
      const data = await prisma?.project.update({
        data: {
          todos: {
            create: {
              title: task,
              status: status,
              startDate: startDate,
              Deadline: deadLine,
            },
          },
        },
        where: {
          id: parseInt(id),
        },
      });
      res.status(200).json("created");
    } catch (error) {
      console.log(error);

      res.status(404).json("failed");
    }
  }
}
