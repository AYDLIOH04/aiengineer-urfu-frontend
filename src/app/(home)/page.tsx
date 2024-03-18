import { Button } from '@/components/ui';
import Link from 'next/link';

const HomePage = () => {
  return (
    <section>
      <div className="flex justify-center items-center full-screen">
        <Link href="/programs/1">
          <Button>Демо страница программы</Button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
