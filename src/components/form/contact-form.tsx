"use client";

import { useState, FormEvent } from "react";
import { Button, Input, Textarea } from "../ui";
import Link from "next/link";

export const ContactForm = () => {
  const [pending, setPending] = useState(true);

  const onContactFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      console.error(formData.get("name"));
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={onContactFormSubmit} className="flex flex-col gap-4">
      <Input placeholder="Ваше имя" type="text" name="name" required />
      <Input
        placeholder="Ваш телефон"
        type="tel"
        name="telephone"
        required
      />
      <Input placeholder="Ваш E-mail" type="email" name="email" required />
      <Textarea placeholder="Ваш вопрос" name="question" required />
      <Button type="submit" disabled={pending} className="lg:w-auto w-full self-center sm:self-start">
        Отправить
      </Button>
      <p className="text-[14px]">
        Отправляя форму, вы соглашаетесь с{" "}
        <Link
          href="https://ozi.urfu.ru/fileadmin/user_upload/site_15891/ZI/UrFU_Polozhenie_o_personalnykh_dannykh.pdf"
          target="_blank"
          className="font-semibold text-accent hover:underline"
        >
          политикой обработки персональных данных УрФУ
        </Link>
      </p>
    </form>
  );
};
