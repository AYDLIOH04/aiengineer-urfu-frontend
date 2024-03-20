"use client";

import { SectionTitle } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const PartnersSection = ({ data }: { data: any }) => {
  return (
    <section className="mt-20">
      <div className="container">
        <SectionTitle>Партнёры программы</SectionTitle>
        <div className="grid justify-center gap-0.5 bg-foreground grid-cols-2 lg:grid-cols-4">
          {data.map((item: any, itemIndex: number) => (
            <Link
              className="flex w-full items-center justify-center bg-white p-4"
              key={itemIndex}
              href={item.link}
              target="_blank"
            >
              <Image
                width={300}
                height={300}
                src={item.image}
                alt={item.link}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
