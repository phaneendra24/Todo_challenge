import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { startDate, DeadLine, status, task, id } = await req.body;

    try {
      const data = await prisma?.todo.update({
        where: {
          id: id,
        },
        data: {
          startDate: startDate,
          Deadline: DeadLine,
          status: status,
          title: task,
        },
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}
