import { Header, Footer } from "@/components";

const ProgramsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mt-[60px] overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default ProgramsLayout;
