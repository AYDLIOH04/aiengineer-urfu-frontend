import { Button } from "@/components/ui";
import { QuestionSlider } from "./question-slider";
import { useState } from "react";

export const ProgressTest = ({
  questions,
  setAnswers,
  onEndClick,
}: {
  questions: any;
  setAnswers: any;
  onEndClick: any;
}) => {
  const [currentNum, setCurrentNum] = useState(1);

  return (
    <div className="relative flex w-[900px] flex-col items-center">
      <h3 className="text-center text-[22px] font-[600] text-secondary md:text-[26px] lg:text-[32px]">
        Вопрос {currentNum} / {questions.length}
      </h3>
      <QuestionSlider
        questions={questions}
        setCurrentNum={setCurrentNum}
        setAnswers={setAnswers}
      />
      {currentNum === questions.length && (
        <Button
          className="mb-4 sm:px-7 sm:py-2 md:text-[18px]"
          onClick={onEndClick}
        >
          Завершить тестирование
        </Button>
      )}
    </div>
  );
};
