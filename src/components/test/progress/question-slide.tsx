import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export const QuestionSlide = ({
  data,
  onAnswerSet,
}: {
  data: any;
  onAnswerSet: any;
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const onAnswerChange = (answer: string) => {
    setSelectedAnswer(answer);
    onAnswerSet(data.id - 1, answer);
  };

  return (
    <div className="mx-auto my-8 sm:w-[350px] w-[300px] px-5 md:w-[400px] lg:w-[650px]">
      <h4 className="mb-8 text-center text-[20px] font-semibold md:text-[24px]">
        {data.question}
      </h4>
      <ul className="mx-auto">
        {data.answers.map((answer: string, answerIndex: number) => (
          <li key={answerIndex}>
            <label className="flex flex-row items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="question"
                checked={answer === selectedAnswer}
                onChange={() => onAnswerChange(answer)}
                className="hidden"
              />
              <span className="relative h-5 w-5 rounded-md border border-gray-400">
                <span
                  className={`${answer === selectedAnswer ? "block" : "hidden"} flex items-center justify-center`}
                >
                  <FaCheck className="text-green-500" />
                </span>
              </span>
              <p className="text-[18px]">{answer}</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};