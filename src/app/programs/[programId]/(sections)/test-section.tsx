import { Test } from "@/components";

export const TestSection = ({data} : {data: any}) => {
  return (
    <section className="mt-[120px] h-[500px] bg-backgroundAccent">
      <div className="container flex h-full items-center justify-center overflow-hidden">
        <Test questions={data} />
      </div>
    </section>
  );
};
