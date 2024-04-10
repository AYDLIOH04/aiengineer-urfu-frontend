"use client";

import { SectionTitle } from "@/components";
import { PartnerType } from "@/types/partner";
import Image from "next/image";
import Link from "next/link";

export const PartnersSection = ({ data }: { data: PartnerType[] }) => {
  return (
    <section className="mt-20">
      <div className="container">
        <SectionTitle>Партнёры программы</SectionTitle>
        <div className="grid grid-cols-2 justify-center gap-0.5 bg-foreground lg:grid-cols-4 dark:bg-backgroundAccent">
          {data.map((item: PartnerType) => (
            <Link
              className="flex w-full items-center justify-center bg-background p-4"
              key={item.id}
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
