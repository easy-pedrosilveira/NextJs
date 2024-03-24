import { ElementType, ReactNode } from "react";

export interface ButtonProps extends HTMLButtonElement {
  props: ReactNode;
}

export function Button({ props }: ButtonProps) {
  <button></button>;
}
