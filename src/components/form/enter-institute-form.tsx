"use client";

import { v4 } from "uuid";
import { Button, Input, Textarea } from "@/components/ui";
import { useCancelStack, useFormActive } from "@/hooks";
import { useUpdateData } from "@/services";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { EnterInstituteType } from "@/types/enter";
import { FaPlus } from "react-icons/fa";
import { clearObject } from "@/utils";
import clsx from "clsx";

export const EnterInstituteForm = ({
  data,
}: {
  data: EnterInstituteType[];
}) => {
  const { size, pop, push } = useCancelStack<EnterInstituteType[]>();
  const { onChange, setFormActive, isFormActive } = useFormActive();
  const [deletedList, setDeletedList] = useState<number[]>([]);
  const [showNew, setShowNew] = useState(false);
  const { mutate, mutateAsync, isPending } = useUpdateData();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { register, handleSubmit, reset } = useForm();

  const onCancel = () => {
    mutate({ enterInstitute: pop() });
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
      ?.map((item: EnterInstituteType, index: number) =>
        deletedList.includes(index)
          ? null
          : {
              ...data[index],
              ...(data[index] ? clearObject(item) : { ...item, id: v4() }),
            },
      )
      .filter(Boolean)
      .filter((item: EnterInstituteType) => item.title || item.body);

    await mutateAsync({ enterInstitute: newData });
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
                placeholder={data.title}
                {...register(`list.${index}.title`)}
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
              <Textarea
                className="min-h-[200px] w-full"
                placeholder={data.body}
                {...register(`list.${index}.body`)}
                onChange={onChange}
              />
            )}
          </div>
        );
      })}
      {showNew ? (
        <div className="flex flex-col gap-1">
          <Textarea
            placeholder="Введите заголовок..."
            {...register(`list.${data.length}.title`)}
            className="min-h-[150px] w-full"
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
