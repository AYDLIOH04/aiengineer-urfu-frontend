"use client";

import { Accordion, Loader } from "@/components/ui";
import { HeroForm, AboutForm } from "./(sections)";
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
      <div className="container">
        <div className="max-w-[500px] mx-auto">
          <Accordion title="Главная секция">
            <HeroForm data={data.hero} />
          </Accordion>
          <Accordion title="О нас">
            <AboutForm data={data.about} />
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
