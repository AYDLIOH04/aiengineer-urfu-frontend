import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export const GET = async () => {
  try {
    const filePath = path.join(process.cwd(), "db.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    return Response.json(data);
  } catch (error) {
    console.error("Ошибка при чтении файла:", error);
    return Response.json({ error: "Ошибка сервера", status: 500 });
  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const filePath = path.join(process.cwd(), "db.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const prevData = JSON.parse(jsonData);
    const body = await req.json();

    const newData = { ...prevData, ...body };

    await fs.writeFile(filePath, JSON.stringify(newData, null, 2), "utf-8");
    return Response.json(body);
  } catch (error) {
    console.error("Ошибка при обновлении данных:", error);
    return Response.json({ error: "Ошибка сервера" });
  }
};
