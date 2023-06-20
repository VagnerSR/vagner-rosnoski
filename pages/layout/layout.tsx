import Header from "@/components/Header/Header";
import React from "react";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <div
      className="bg-light text-primary dark:bg-dark dark:text-primaryDark 
      overflow-x-hidden"
    >
      <Header />
      {children}
    </div>
  );
}
