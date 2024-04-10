import { Input } from "@/components/ui";
import { useUpdateData } from "@/services";
import { AboutType } from "@/types/about";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const AboutForm = ({ data }: { data: AboutType[] }) => {
  const { mutate, isPending } = useUpdateData();
  const [cancelData, setCancelData] = useState<AboutType[][]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm();

  const onCancel = () => {
    mutate({ hero: cancelData[cancelData.length - 1] });
    setCancelData((current) => current.slice(0, current.length - 1));
  };

  const onSubmit = (updateData: any) => {
    setCancelData((current) => [...current, data]);

    reset();
    const newData = {
      ...data,
    };
    mutate({ hero: newData });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto my-20 flex w-full flex-col gap-5"
    >
      {data.map(({ title, body, id }) => (
        <Input key={id} className="w-full" />
      ))}
    </form>
  );
};
