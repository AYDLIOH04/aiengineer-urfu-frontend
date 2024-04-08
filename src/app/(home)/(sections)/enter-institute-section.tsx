import { SectionTitle, VerticalLine } from "@/components";
import { EnterInstituteType } from "@/types/enter";

export const EnterInstituteSection = ({ data }: { data: EnterInstituteType[] }) => {
  return (
    <section id="enter-institute" className="mt-48">
      <div className="container">
        <SectionTitle className="mb-20">
          Как стать студентом программы
        </SectionTitle>
        <VerticalLine list={data} />
      </div>
    </section>
  );
};
