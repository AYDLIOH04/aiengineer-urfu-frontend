import { Button } from '@/components/ui';

export const TestSection = () => {
  return (
    <section className="bg-accent h-[450px] mt-[120px]">
      <div className="container flex h-full justify-center items-center">
        <div className="text-center">
          <h2 className="text-secondary font-[600] text-[40px] mb-[60px]">
            Хотите понять подходит ли вам программа?
          </h2>
          <Button className="px-[32px]">Пройти тестирование</Button>
        </div>
      </div>
    </section>
  );
};
