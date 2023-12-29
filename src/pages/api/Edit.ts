import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { startDate, DeadLine, status, task, id } = await req.body;

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
  }
}
