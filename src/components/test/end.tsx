import Link from "next/link";
import {
  MdOutlineDoubleArrow,
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
export const EndTest = ({ answers }: { answers: any }) => {
  const result = answers.filter((answer: string) => answer === "Да").length;
  let resultTitle = "";

  if (result >= 8) {
    resultTitle = "Поздравляем, вам подходит эта учебная программа!";
  } else if (result >= 6) {
    resultTitle = "Поздравляем, вам вполне подходит эта учебная программа!";
  } else {
    resultTitle = "Думаем, вас не очень интересует эта программа";
  }

  return (
    <div>
      <h2 className="mb-[30px] text-center text-[22px] font-semibold text-white md:text-[26px] lg:text-[32px] xl:mb-[60px] xl:text-[36px] laptop:text-[40px]">
        {resultTitle}
      </h2>
      {result >= 6 && (
        <>
          <MdOutlineDoubleArrow
            size={60}
            className="mx-auto my-4 rotate-90 animate-pulse"
          />
          <p className="mt-6 text-center text-[20px]">
            <Link
              href="https://priem-rtf.urfu.ru/ru/"
              target="_blank"
              className="relative block after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:mx-auto after:h-0.5 after:w-1/3 after:rounded-md after:bg-white after:duration-300  hover:after:w-3/4 sm:inline"
            >
              Поступить!
            </Link>
          </p>
        </>
      )}
    </div>
  );
};
