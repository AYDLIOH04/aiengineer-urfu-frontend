"use client";

import { useState, FormEvent } from "react";
import { Button, Input, Textarea } from "../ui";
import Link from "next/link";

const formInitial = {
  name: "",
  email: "",
  telephone: "",
  question: "",
};

export const ContactForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState(formInitial);

  const onFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.status === 200) {
        console.log("Форма успешно отправлена");
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error("Произошла ошибка", error);
    } finally {
      setFormData(formInitial);
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={onContactFormSubmit} className="flex flex-col gap-4">
      <Input
        placeholder="Ваше имя"
        type="text"
        name="name"
        required
        value={formData.name}
        onChange={onFormChange}
      />
      <Input
        placeholder="Ваш телефон"
        type="tel"
        name="telephone"
        required
        value={formData.telephone}
        onChange={onFormChange}
      />
      <Input
        placeholder="Ваш E-mail"
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={onFormChange}
      />
      <Textarea
        placeholder="Ваш вопрос"
        name="question"
        required
        value={formData.question}
        onChange={onFormChange}
      />
      <Button
        type="submit"
        isPending={isPending}
        className="w-full self-center sm:self-start lg:w-auto"
        withPending
      >
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
