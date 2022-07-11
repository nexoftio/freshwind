/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import ElementDarkModeSwitcher from "../../islands/ElementDarkModeSwitcher.tsx";
import { BaseProps } from "../../interfaces/BaseProps.ts";
import { Head } from "$fresh/runtime.ts";

export default function BaseLayout(props: BaseProps) {
  return (
    <div class={tw`dark:bg-gray-900 min-h-screen ${props.custom}`}>
      <Head>
        <title>OrganiseYou</title>
      </Head>
      <ElementDarkModeSwitcher />
      {props.children}
    </div>
  );
}
