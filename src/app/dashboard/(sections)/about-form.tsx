import { Button, Input, Textarea } from "@/components/ui";
import { useUpdateData } from "@/services";
import { AboutType } from "@/types/about";
import { clearObject } from "@/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";

export const AboutForm = ({ data }: { data: AboutType[] }) => {
  const { mutate, isPending } = useUpdateData();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [cancelData, setCancelData] = useState<AboutType[][]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm();

  const onCancel = () => {
    mutate({ about: cancelData[cancelData.length - 1] });
    setCancelData((current) => current.slice(0, current.length - 1));
  };

  const onSelect = (index: number) => {
    if (index === selectedIndex) {
      return setSelectedIndex(-1);
    }

    return setSelectedIndex(index);
  };

  const onSubmit = ({ list }: any) => {
    const newData = data.map((item, index) => ({
      ...item,
      ...clearObject(list[index]),
    }));

    setCancelData((current) => [...current, data]);
    reset();
    mutate({ about: newData });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto my-10 flex w-full flex-col gap-5 text-[14px] sm:text-[16px]"
    >
      {data.map((data, index) => (
        <div key={data.id} className="flex flex-col gap-2">
          <div className="flex flex-row">
            <Input
              placeholder={data.title}
              {...register(`list.${index}.title`)}
              className="w-full"
            />
            <Button
              onClick={() => onSelect(index)}
              type="button"
              className="rounded-l-none px-4 sm:px-4"
            >
              <MdEdit size={20} />
            </Button>
          </div>
          {index === selectedIndex && (
            <Textarea
              className="min-h-[200px] w-full"
              placeholder={data.body}
              {...register(`list.${index}.body`)}
            />
          )}
        </div>
      ))}
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
