import Link from "next/link";

export const EndTest = ({ answers }: { answers: any }) => {
  return (
    <div>
      <h2 className="mb-[30px] text-center text-[22px] font-semibold text-secondary md:text-[26px] lg:text-[32px] xl:mb-[60px] xl:text-[36px] laptop:text-[40px]">
        Ваш результат
      </h2>
      {answers.length ? (
        answers.map((answer: string, answerIndex: number) => (
          <li key={answerIndex} className="text-[20px]">
            {answer}
          </li>
        ))
      ) : (
        <p className="text-center">Тут пусто???</p>
      )}
      <p className="mt-6 text-center text-[20px]">
        Желаете посмотреть{" "}
        <span>
          <Link
            href="/"
            className="relative sm:inline block after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:mx-auto after:h-0.5 after:w-1/3 after:rounded-md after:bg-secondary  after:duration-300 hover:after:w-3/4"
          >
            рекомендуемые программы?
          </Link>
        </span>
      </p>
    </div>
  );
};
