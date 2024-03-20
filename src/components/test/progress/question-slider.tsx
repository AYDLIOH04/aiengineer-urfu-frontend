import { TestSwiper } from "@/components/swiper/test";
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
    <TestSwiper onActiveIndexChange={onActiveIndexChange}>
      {questions.map((data: any) => (
        <SwiperSlide key={data.id}>
          <QuestionSlide data={data} onAnswerSet={onAnswerSet} />
        </SwiperSlide>
      ))}
    </TestSwiper>
  );
};