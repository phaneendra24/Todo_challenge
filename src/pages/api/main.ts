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
    const { id, task, status } = await req.body;

    try {
      const data = await prisma?.project.update({
        data: {
          todos: {
            create: {
              title: task,
              status: status,
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

  // } else if (req.method === "PUT") {
  //   const { id, name, email } = req.body;
  //   const updatedUser = await prisma.user.update({
  //     where: { id },
  //     data: {
  //       name,
  //       email,
  //     },
  //   });
  //   res.status(200).json(updatedUser);
  // } else if (req.method === "DELETE") {
  //   const { id } = req.body;
  //   await prisma.user.delete({
  //     where: { id },
  //   });
  //   res.status(204).end();
  // } else {
  //   res.status(405).end();
  // }
}

export function man() {
  return "asdf";
}
