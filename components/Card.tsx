/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface CardProps {
  children: object | string;
  custom: string;
}

export default function Card(props: CardProps) {
  const card = tw
    `p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-white ${props.custom}`;

  return (
    <div class={card}>
      {props.children}
    </div>
  );
}
