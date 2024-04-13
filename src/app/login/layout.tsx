"use client";

import { useAuth } from "@/redux/auth";
import { redirect } from "next/navigation";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  const isAuth = useAuth();

  if (isAuth) {
    redirect('/dashboard');
  }

  return <>{children}</>;
};

export default LoginLayout;
