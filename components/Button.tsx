/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { BaseProps } from "../../interfaces/BaseProps.ts";

export default function Button(props: BaseProps) {
  const button = tw
    `text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none 
    focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg px-3 py-2 font-medium ${props.custom}`;

  return (
    <button class={button} id="theme-toggle" type="button">
      {props.children}
    </button>
  );
}
