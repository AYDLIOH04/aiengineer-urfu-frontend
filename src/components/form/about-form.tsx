"use client";

import { Button, Input, Textarea } from "@/components/ui";
import { useCancelStack, useFormActive } from "@/hooks";
import { useUpdateData } from "@/services";
import { AboutType } from "@/types/about";
import { clearObject } from "@/utils";
import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { v4 } from "uuid";

export const AboutForm = ({ data }: { data: AboutType[] }) => {
  const { size, pop, push } = useCancelStack<AboutType[]>();
  const { onChange, setFormActive, isFormActive } = useFormActive();
  const { mutateAsync, mutate, isPending } = useUpdateData();
  const [showNew, setShowNew] = useState(false);
  const [deletedList, setDeletedList] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const { register, handleSubmit, reset } = useForm();

  const onCancel = () => {
    mutate({ about: pop() });
    setDeletedList([]);
    setFormActive(false);
  };

  const onDelete = (index: number) => {
    setFormActive(true);
    setDeletedList((current) => [...current, index]);
  };

  const onSelect = (index: number) => {
    if (index === selectedIndex) {
      return setSelectedIndex(-1);
    }

    return setSelectedIndex(index);
  };

  const onSubmit = async ({ list }: any) => {
    push(data);

    const newData = list
      ?.map((item: AboutType, index: number) =>
        deletedList.includes(index)
          ? null
          : {
              ...data[index],
              ...(data[index] ? clearObject(item) : { ...item, id: v4() }),
            },
      )
      .filter(Boolean)
      .filter((item: AboutType) => item.title || item.body);

    await mutateAsync({ about: newData });
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
      {data.map((item, index) => {
        if (deletedList.includes(index)) return null;

        return (
          <div key={item.id} className="flex flex-col gap-2">
            <div className="flex flex-row">
              <button
                onClick={() => onDelete(index)}
                type="button"
                className={clsx(
                  "flex cursor-pointer items-center justify-center rounded-md rounded-r-none bg-orange px-1 py-0 text-[16px] font-semibold text-white duration-200 hover:opacity-80 disabled:opacity-50 dark:text-backgroundAccent sm:px-1 sm:py-0 md:text-[22px]",
                  {
                    "rounded-b-none": index === selectedIndex,
                  },
                )}
              >
                <IoIosClose size={40} />
              </button>
              <Input
                placeholder={item.title}
                {...register(`list.${index}.title`)}
                className="w-full"
                onChange={onChange}
              />
              <button
                onClick={() => onSelect(index)}
                type="button"
                className={clsx(
                  "flex cursor-pointer items-center justify-center rounded-md rounded-l-none bg-orange px-4 py-0 text-[16px] font-semibold text-white duration-200 hover:opacity-80 disabled:opacity-50 dark:text-backgroundAccent sm:px-4 sm:py-0 md:text-[22px]",
                  {
                    "rounded-b-none": index === selectedIndex,
                  },
                )}
              >
                <MdEdit size={20} />
              </button>
            </div>
            {index === selectedIndex && (
              <Textarea
                className="min-h-[200px] w-full"
                placeholder={item.body}
                {...register(`list.${index}.body`)}
                onChange={onChange}
              />
            )}
          </div>
        );
      })}
      {showNew ? (
        <div className="flex flex-col gap-1">
          <Input
            placeholder="Введите заголовок..."
            {...register(`list.${data.length}.title`)}
            className="w-full"
            onChange={onChange}
          />
          <Textarea
            placeholder="Введите описание..."
            {...register(`list.${data.length}.body`)}
            className="min-h-[150px] w-full"
            onChange={onChange}
          />
        </div>
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
