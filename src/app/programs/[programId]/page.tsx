import {
  aboutData,
  heroData,
  professionData,
  educationPlanData,
  employeesData,
} from "@/mocks/program";
import {
  AboutSection,
  EducationPlanSection,
  EmployeesSection,
  FaqSection,
  HeroSection,
  PartnersSection,
  ProfessionSection,
  QuestionSection,
  ReviewsSection,
  EnterInstituteSection,
  TestSection,
  BossSection,
} from "./(sections)";
import { ScrollButton } from "@/components";

const ProgramPage = ({ params }: { params: { programId: string } }) => {
  return (
    <>
      <HeroSection data={heroData} />
      <AboutSection data={aboutData} />
      <ProfessionSection data={professionData} />
      <TestSection />
      <EducationPlanSection data={educationPlanData} />
      <div className="mt-[140px] bg-foreground flex py-[100px] flex-col gap-[140px]">
        <BossSection data={employeesData[0]} />
        <EmployeesSection data={employeesData} />
      </div>
      <PartnersSection />
      <EnterInstituteSection />
      <ReviewsSection />
      <FaqSection />
      <QuestionSection />
      <ScrollButton />
    </>
  );
};

export default ProgramPage;
