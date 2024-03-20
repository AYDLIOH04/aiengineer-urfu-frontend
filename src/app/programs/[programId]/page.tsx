import {
  aboutData,
  heroData,
  professionData,
  educationPlanData,
  employeesData,
  partnersData,
  enterInstituteData,
  questionsData,
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
      <TestSection data={questionsData} />
      <EducationPlanSection data={educationPlanData} />
      <div className="mt-[140px] flex flex-col bg-foreground">
        <BossSection data={employeesData[0]} />
        <EmployeesSection data={employeesData} />
      </div>
      <PartnersSection data={partnersData} />
      <EnterInstituteSection data={enterInstituteData} />
      <ReviewsSection />
      <FaqSection />
      <QuestionSection />
      <ScrollButton />
    </>
  );
};

export default ProgramPage;
