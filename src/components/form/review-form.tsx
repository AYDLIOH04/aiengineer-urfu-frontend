"use client";

import { useCancelStack, useFormActive } from "@/hooks";
import { useUpdateData } from "@/services";
import { ReviewType } from "@/types/review";
import { clearObject } from "@/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import { Button, Input, Textarea } from "../ui";
import { FaPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import clsx from "clsx";

export const ReviewForm = ({ data }: { data: ReviewType[] }) => {
  const { size, pop, push } = useCancelStack<ReviewType[]>();
  const { onChange, setFormActive, isFormActive } = useFormActive();
  const [deletedList, setDeletedList] = useState<number[]>([]);
  const [showNew, setShowNew] = useState(false);
  const { mutate, mutateAsync, isPending } = useUpdateData();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { register, handleSubmit, reset } = useForm();

  const onCancel = () => {
    mutate({ reviews: pop() });
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
      ?.map((item: ReviewType, index: number) =>
        deletedList.includes(index)
          ? null
          : {
              ...data[index],
              ...(data[index] ? clearObject(item) : { ...item, id: v4() }),
            },
      )
      .filter(Boolean)
      .filter((item: ReviewType) => item.author || item.message || item.role);

    await mutateAsync({ reviews: newData });
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
      {data.map((data, index) => {
        if (deletedList.includes(index)) return null;

        return (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex flex-row">
              <Button
                onClick={() => onDelete(index)}
                type="button"
                className={clsx("rounded-r-none px-1 py-0 sm:px-1 sm:py-0", {
                  "rounded-b-none": index === selectedIndex,
                })}
              >
                <IoIosClose size={40} />
              </Button>
              <Input
                placeholder={data.author}
                {...register(`list.${index}.author`)}
                className="w-full"
                onChange={onChange}
              />
              <Button
                onClick={() => onSelect(index)}
                type="button"
                className={clsx("rounded-l-none px-4 sm:px-4", {
                  "rounded-b-none": index === selectedIndex,
                })}
              >
                <MdEdit size={20} />
              </Button>
            </div>
            {index === selectedIndex && (
              <div className="flex flex-col gap-1">
                <Input
                  placeholder={data.role}
                  {...register(`list.${index}.role`)}
                  className="w-full"
                  onChange={onChange}
                />
                <Textarea
                  className="min-h-[200px] w-full"
                  placeholder={data.message}
                  {...register(`list.${index}.message`)}
                  onChange={onChange}
                />
              </div>
            )}
          </div>
        );
      })}
      {showNew ? (
        <div className="flex flex-col gap-1">
          <Input
            placeholder="Введите имя..."
            {...register(`list.${data.length}.author`)}
            className="w-full"
            onChange={onChange}
          />
          <Input
            placeholder="Введите профессию..."
            {...register(`list.${data.length}.role`)}
            className="w-full"
            onChange={onChange}
          />
          <Textarea
            placeholder="Введите отзыв..."
            {...register(`list.${data.length}.message`)}
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
            <p>Добавить отзыв</p>
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
