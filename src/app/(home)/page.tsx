"use client";

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
import { Footer, ScrollButton } from "@/components";

import { Loader } from "@/components/ui";
import { useData } from "@/services";

const ProgramPage = () => {
  const { data, isPending, error } = useData();

  if (isPending)
    return (
      <div className="flex h-[calc(100vh-80px)] items-center justify-center">
        <Loader />
      </div>
    );
  if (error) return <h3>Error: {error.message}</h3>;

  return (
    <main>
      <HeroSection data={data.hero} />
      <AboutSection data={data.about} />
      <ProfessionSection data={data.profession} />
      <TestSection data={data.questions} />
      <EducationPlanSection data={data.educationPlan} />
      <div className="mt-[140px] flex flex-col bg-foreground">
        <BossSection data={data.employees[0]} />
        <EmployeesSection data={data.employees} />
      </div>
      <PartnersSection data={data.partners} />
      <EnterInstituteSection data={data.enterInstitute} />
      <ReviewsSection data={data.reviews} />
      <FaqSection data={data.faq} />
      <QuestionSection data={data.contacts} />
      <Footer data={data.footer} />
      <ScrollButton />
    </main>
  );
};

export default ProgramPage;
