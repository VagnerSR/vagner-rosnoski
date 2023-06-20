import React from "react";

type Props = {
  text: string;
};

export default function SpinButton({ text }: Props) {
  return (
    <button className="relative  p-[2px] overflow-hidden rounded-full w-full group flex justify-center items-center">
      <div className="bg-light dark:bg-dark w-full group-hover:w-[97%] h-full pt-1 pb-2 pl-2 pr-2 rounded-full
        z-20">
        <span className="text-lg">
          {text}
          </span>
      </div>

      <div className="absolute -top-10 -left-20 z-10 w-52 h-52 animate-spin
       bg-gradient-to-r from-violet-400 via-indigo-400 to-pink-400
       group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 "
      ></div>
    </button>
  );
}
