import { Button, Input } from "@/components/ui";
import { useUpdateData } from "@/services";
import { HeroType } from "@/types/hero";
import { clearObject } from "@/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const HeroForm = ({ data }: { data: HeroType }) => {
  const { mutate, isPending } = useUpdateData();
  const [cancelData, setCancelData] = useState<HeroType[]>([]);
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
    const direction = {
      id: updateData.direction.id || data.direction.id,
      desc: updateData.direction.desc || data.direction.desc,
    };

    const places = {
      title: updateData.places.title || data.places.title,
      desc: data.places.desc,
    };

    const newData = {
      ...data,
      ...clearObject(updateData),
      direction,
      places,
    };
    
    reset();
    mutate({ hero: newData });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto my-10 flex w-full flex-col gap-5 sm:text-[16px] text-[14px]"
    >
      <p className="font-semibold">Информация</p>
      <Input
        type="text"
        placeholder={data.title}
        className="w-full"
        {...register("title")}
      />
      <Input
        type="text"
        placeholder={data.mags}
        className="w-full"
        {...register("mags")}
      />
      <Input
        type="text"
        placeholder={data.learn}
        className="w-full"
        {...register("learn")}
      />
      <p className="font-semibold">Направление</p>
      <Input
        type="text"
        placeholder={data.direction.id}
        className="w-full"
        {...register("direction.id")}
      />
      <Input
        type="text"
        placeholder={data.direction.desc}
        className="w-full"
        {...register("direction.desc")}
      />
      <Input
        type="text"
        placeholder={data.places.title}
        className="w-full"
        {...register("places.title")}
      />
      <div className="flex justify-center gap-2">
        <Button
          className="w-1/2 bg-green-500 dark:text-white"
          type="submit"
          isPending={isPending}
          disabled={!isDirty || !isValid}
        >
          Сохранить
        </Button>
        <Button
          className="w-1/2 bg-rose-500 dark:text-white"
          type="button"
          disabled={!cancelData.length}
          onClick={onCancel}
        >
          Отмена
        </Button>
      </div>
    </form>
  );
};
