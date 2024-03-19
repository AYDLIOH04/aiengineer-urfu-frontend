import { Test } from "@/components";
import { questionsData } from "@/mocks/program";

export const TestSection = () => {
  return (
    <section className="mt-[120px] h-[500px] bg-accent">
      <div className="container flex h-full items-center justify-center overflow-hidden">
        <Test questions={questionsData} />
      </div>
    </section>
  );
};
