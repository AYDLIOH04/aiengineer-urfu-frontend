import { Test } from "@/components";
import { QuestionType } from "@/types/question";

export const TestSection = ({ data }: { data: QuestionType[] }) => {
  return (
    <section className="mt-[120px] h-[500px] bg-backgroundAccent">
      <div className="container flex h-full items-center justify-center overflow-hidden">
        <Test questions={data} />
      </div>
    </section>
  );
};
