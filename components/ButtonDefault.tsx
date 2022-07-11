/** @jsx h */
import {h} from "preact";
import {tw} from "@twind";

export interface ButtonProps {
  children?: any;
  custom?: string;
  color?: string;
  to?: string;
}

export default function ButtonDefault(props: ButtonProps) {
  const buttonColor = props.color ? props.color : 'indigo'
  const button = tw
    `px-5 py-3 text-base font-medium text-center text-white 
    bg-${buttonColor}-700 rounded-lg 
    hover:bg-${buttonColor}-800
    focus:ring-4 focus:outline-none 
    focus:ring-${buttonColor}-300 
    dark:bg-${buttonColor}-600 
    dark:hover:bg-${buttonColor}-700 
    dark:focus:ring-${buttonColor}-800 
    cursor-pointer
    ${props.custom}`;

  return (
    <a class={button} href={props.to ? props.to : '#'} >
      {props.children}
    </a>
  );
}
