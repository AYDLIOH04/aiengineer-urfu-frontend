import { DataType } from "@/types";

export const getData = async (): Promise<DataType> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/data`);
  return res.json();
};

export const postData = async (data: any) => {
  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/data`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
