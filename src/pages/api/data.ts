import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    // end point for getting todos
    const { id } = req.body;
    try {
      const data = await prisma?.todo.findMany({
        where: {
          projectId: parseInt(id),
        },
      });

      const projectname = await prisma.project.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      console.log(projectname?.name);

      res.status(200).json({
        data: data,
        projectname: projectname?.name,
      });
    } catch (error) {
      console.log(error);

      res.status(404).json(error);
    }
  }
}
