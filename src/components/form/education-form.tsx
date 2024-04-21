"use client";

import { EducationPlanType } from "@/types/education";
import { Button, Input, Textarea } from "../ui";
import { useCancelStack, useFormActive } from "@/hooks";
import { useUpdateData } from "@/services";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import clsx from "clsx";
import { FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";

export const EducationForm = ({ data }: { data: EducationPlanType[] }) => {
  const { size, pop, push } = useCancelStack<EducationPlanType[]>();
  const { onChange, setFormActive, isFormActive } = useFormActive();
  const { mutate, mutateAsync, isPending } = useUpdateData();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showNew, setShowNew] = useState(false);
  const [deletedList, setDeletedList] = useState<number[][]>([[], [], [], []]);
  const { register, handleSubmit, reset } = useForm();

  const onCancel = () => {
    mutate({ educationPlan: pop() });
    setDeletedList([[], [], [], []]);
    setFormActive(false);
  };

  const onSelect = (index: number) => {
    if (index === selectedIndex) {
      return setSelectedIndex(-1);
    }

    return setSelectedIndex(index);
  };

  const onDelete = (index: number, itemIndex: number) => {
    setFormActive(true);
    const copiedList = [...deletedList];
    copiedList[index].push(itemIndex);
    setDeletedList(copiedList);
  };

  const onSubmit = async ({ sems }: any) => {
    push(data);

    const newData = data.map((prevData, index) => ({
      ...prevData,
      list: sems[index]
        ? sems[index]?.list
            ?.map((item: string, itemIndex: number) =>
              deletedList[index].includes(itemIndex)
                ? ""
                : item || prevData.list[itemIndex],
            )
            .filter(Boolean)
        : prevData.list,
    }));

    await mutateAsync({ educationPlan: newData });
    reset();
    setDeletedList([[], [], [], []]);
    setShowNew(false);
    setFormActive(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto my-10 flex w-full flex-col gap-5 text-[14px] sm:text-[16px]"
    >
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Button
            onClick={() => onSelect(index)}
            type="button"
            className={clsx(
              "flex w-full flex-row items-center justify-between px-4 sm:px-8 sm:py-2",
              { "rounded-b-none": index === selectedIndex },
            )}
          >
            <p>{item.title}</p>
            <MdEdit size={20} />
          </Button>
          {index === selectedIndex && (
            <ul className="flex flex-col gap-1">
              {item.list.map((item, listIndex) => {
                if (deletedList[index].includes(listIndex)) return null;

                return (
                  <li key={listIndex} className="relative">
                    <Input
                      placeholder={item}
                      className="w-full"
                      {...register(`sems.${index}.list.${listIndex}`)}
                      onChange={onChange}
                    />
                    <button
                      onClick={() => onDelete(index, listIndex)}
                      type="button"
                      className="absolute right-2 top-2.5 rounded-full bg-gray-300 duration-200 hover:bg-gray-400  dark:text-backgroundAccent"
                    >
                      <IoIosClose size={30} />
                    </button>
                  </li>
                );
              })}
              {showNew ? (
                <Textarea
                  placeholder="Введите описание..."
                  {...register(`sems.${index}.list.${item.list.length}`)}
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
            </ul>
          )}
        </div>
      ))}

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
