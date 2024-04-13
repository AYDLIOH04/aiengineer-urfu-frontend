"use client";

import { Button, Input } from "@/components/ui";
import { useCancelStack, useFormActive } from "@/hooks";
import { useUpdateData } from "@/services";
import { HeroType } from "@/types/hero";
import { clearObject } from "@/utils";
import { useForm } from "react-hook-form";

export const HeroForm = ({ data }: { data: HeroType }) => {
  const { size, pop, push } = useCancelStack<HeroType>();
  const { onChange, setFormActive, isFormActive } = useFormActive();
  const { mutate, isPending } = useUpdateData();
  const { register, handleSubmit, reset } = useForm();

  const onCancel = () => {
    mutate({ hero: pop() });
    setFormActive(false);
  };

  const onSubmit = (updateData: any) => {
    push(data);
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
    setFormActive(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto my-10 flex w-full flex-col gap-5 text-[14px] sm:text-[16px]"
    >
      <p className="font-semibold">Информация</p>
      <Input
        type="text"
        placeholder={data.title}
        className="w-full"
        {...register("title")}
        onChange={onChange}
      />
      <Input
        type="text"
        placeholder={data.mags}
        className="w-full"
        {...register("mags")}
        onChange={onChange}
      />
      <Input
        type="text"
        placeholder={data.learn}
        className="w-full"
        {...register("learn")}
        onChange={onChange}
      />
      <p className="font-semibold">Направление</p>
      <Input
        type="text"
        placeholder={data.direction.id}
        className="w-full"
        {...register("direction.id")}
        onChange={onChange}
      />
      <Input
        type="text"
        placeholder={data.direction.desc}
        className="w-full"
        {...register("direction.desc")}
        onChange={onChange}
      />
      <Input
        type="text"
        placeholder={data.places.title}
        className="w-full"
        {...register("places.title")}
        onChange={onChange}
      />
      <div className="flex justify-center gap-2">
        <Button
          className="w-1/2 bg-green-500 dark:text-white"
          type="submit"
          isPending={isPending}
          disabled={!isFormActive}
        >
          Сохранить
        </Button>
        <Button
          className="w-1/2 bg-rose-500 dark:text-white"
          type="button"
          disabled={!size}
          onClick={onCancel}
        >
          Отмена
        </Button>
      </div>
    </form>
  );
};
