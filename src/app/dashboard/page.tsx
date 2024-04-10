"use client";

import { Accordion, Loader } from "@/components/ui";
import { HeroForm, AboutForm, ProfessionForm } from "./(sections)";
import { useData } from "@/services";

const Dashboard = () => {
  const { data, isPending, error } = useData();

  if (isPending)
    return (
      <div className="flex h-[calc(100vh-80px)] items-center justify-center">
        <Loader />
      </div>
    );
  if (error) return <h3>Error: {error.message}</h3>;

  return (
    <section>
      <div className="container mb-40">
        <div className="max-w-[500px] mx-auto">
          <Accordion title="Главная секция" size="lg">
            <HeroForm data={data.hero} />
          </Accordion>
          <Accordion title="О программе">
            <AboutForm data={data.about} />
          </Accordion>
          <Accordion title="Перспективная профессия" size="lg">
            <ProfessionForm data={data.profession} />
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
