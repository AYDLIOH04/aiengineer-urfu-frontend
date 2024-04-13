"use client";

import { Button, Input, Textarea } from "@/components/ui";
import { useCancelStack, useFormActive } from "@/hooks";
import { useUpdateData } from "@/services";
import { ProfessionType } from "@/types/profession";
import { clearObject } from "@/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

export const ProfessionForm = ({ data }: { data: ProfessionType }) => {
  const { size, pop, push } = useCancelStack<ProfessionType>();
  const { onChange, setFormActive, isFormActive } = useFormActive();
  const [deletedList, setDeletedList] = useState<number[]>([]);
  const [showNew, setShowNew] = useState(false);
  const { mutate, mutateAsync, isPending } = useUpdateData();
  const { register, handleSubmit, reset } = useForm();

  const onCancel = () => {
    mutate({ profession: pop() });
    setDeletedList([]);
    setFormActive(false);
  };

  const onDelete = (index: number) => {
    setFormActive(true);
    setDeletedList((current) => [...current, index]);
  };

  const onSubmit = async ({ title, listTitle, list }: any) => {
    push(data);

    const newList = list
      ?.map((item: string, index: number) =>
        deletedList.includes(index) ? "" : item || data?.list[index],
      )
      .filter(Boolean);

    const newData = {
      ...data,
      ...clearObject({ title, listTitle }),
      list: newList || [],
    };

    await mutateAsync({ profession: newData });
    reset();
    setDeletedList([]);
    setShowNew(false);
    setFormActive(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto my-10 flex w-full flex-col gap-5 text-[14px] sm:text-[16px]"
    >
      <p className="font-semibold">Заголовок</p>
      <Input
        type="text"
        placeholder={data.title}
        className="w-full"
        {...register("title")}
        onChange={onChange}
      />
      <p className="font-semibold">Заголовок списка</p>
      <Input
        type="text"
        placeholder={data.listTitle}
        className="w-full"
        {...register("listTitle")}
        onChange={onChange}
      />
      <p className="font-semibold">Список</p>
      {data.list.map((item, index) => {
        if (deletedList.includes(index)) return null;

        return (
          <div key={index} className="flex flex-col gap-2">
            <div className="relative">
              <Textarea
                placeholder={item}
                {...register(`list.${index}`)}
                className="min-h-[150px] w-full"
                onChange={onChange}
              />
              <button
                onClick={() => onDelete(index)}
                type="button"
                className="absolute right-1 top-1 rounded-full bg-gray-300 duration-200 hover:bg-gray-400  dark:text-backgroundAccent"
              >
                <IoIosClose size={30} />
              </button>
            </div>
          </div>
        );
      })}
      {showNew ? (
        <Textarea
          placeholder="Введите описание..."
          {...register(`list.${data.list.length}`)}
          className="min-h-[150px] w-full"
          onChange={onChange}
        />
      ) : (
        <button
          type="button"
          onClick={() => setShowNew(true)}
          className="flex items-center justify-center"
        >
          <div className="flex items-center justify-center gap-2 rounded-md px-4 py-2 text-backgroundAccent duration-200 hover:bg-gray-300 dark:text-white dark:hover:text-backgroundAccent">
            <FaPlus />
            <p>Добавить описание</p>
          </div>
        </button>
      )}

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
