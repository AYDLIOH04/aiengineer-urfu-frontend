import { DefaultSwiper } from "@/components/swiper";
import { SwiperSlide } from "swiper/react";
import { QuestionSlide } from "./question-slide";

export const QuestionSlider = ({
  questions,
  setCurrentNum,
  setAnswers,
}: {
  questions: any;
  setCurrentNum: any;
  setAnswers: any;
}) => {
  const onActiveIndexChange = (swiper: any) => {
    setCurrentNum(swiper.realIndex + 1);
  };

  const onAnswerSet = (index: number, answer: string) => {
    setAnswers((prevAnswers: any) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = answer;
      return updatedAnswers;
    });
  };

  return (
    <DefaultSwiper onActiveIndexChange={onActiveIndexChange}>
      {questions.map((data: any) => (
        <SwiperSlide key={data.id}>
          <QuestionSlide data={data} onAnswerSet={onAnswerSet} />
        </SwiperSlide>
      ))}
    </DefaultSwiper>
  );
};