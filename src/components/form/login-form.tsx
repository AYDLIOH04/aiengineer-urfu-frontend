"use client";

import { Button, Input } from "@/components/ui";
import { useLogin } from "@/redux/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CiUnlock, CiLock } from "react-icons/ci";

const formSchema = z.object({
  login: z.string().nonempty("Введите логин"),
  password: z.string().nonempty("Введите пароль"),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  const login = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginError, setShowLoginError] = useState(false);

  const onSubmit = (data: any) => {
    if (
      data.login === process.env.NEXT_PUBLIC_ADMIN_LOGIN &&
      data.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      login();
      reset();
      return;
    }

    if (!showLoginError) {
      setShowLoginError(true);
      setTimeout(() => {
        setShowLoginError(false);
      }, 5000);
    }
  };

  const onPasswordShow = () => {
    setShowPassword((current) => !current);
  };

  const PasswordIcon = showPassword ? CiUnlock : CiLock;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-8"
    >
      <h1 className="text-center text-3xl font-semibold">
        Вход в админ панель
      </h1>
      <div className="relative">
        <Input
          {...register("login")}
          placeholder="Логин"
          type="text"
          name="login"
          className="w-full"
        />
        <span className="absolute -bottom-7 left-0 text-[14px] text-rose-400">
          {errors.login?.message?.toString()}
        </span>
      </div>
      <div className="relative">
        <Input
          {...register("password")}
          placeholder="Пароль"
          type={showPassword ? "text" : "password"}
          name="password"
          className="w-full"
        />
        <span className="absolute -bottom-7 left-0 text-[14px] text-rose-400">
          {errors.password?.message?.toString()}
        </span>
        <button type="button" className="absolute right-2 top-1.5 hover:bg-foreground p-1 rounded-md" onClick={onPasswordShow}>
          <PasswordIcon size={30} />
        </button>
      </div>
      <div className="relative">
        <Button type="submit" className="w-full">
          Вход
        </Button>
        <span className="absolute -bottom-10 left-0 right-0 text-center text-[18px] text-rose-400">
          {showLoginError && "Неверный логин или пароль"}
        </span>
      </div>
    </form>
  );
};
