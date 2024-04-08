import { Button } from "../ui";

export const StartTest = ({ onStartClick }: { onStartClick: () => void }) => {
  return (
    <div className="text-center">
      <h2 className="mb-[30px] text-[22px] font-semibold text-white md:text-[26px] lg:text-[32px] xl:mb-[60px] xl:text-[36px] laptop:text-[40px]">
        Хотите понять подходит ли вам программа?
      </h2>
      <div className="flex justify-center items-center">
        <Button className="px-[32px]" onClick={onStartClick}>
          Пройти тестирование
        </Button>
      </div>
    </div>
  );
};
