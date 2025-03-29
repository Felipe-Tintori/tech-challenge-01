"use client";
import { CustomButton } from "./styled";

export interface ButtonComponentProps {
  text: string;
  type: "ORANGE" | "GREEN" | "BLACK" | "NEUTRAL";
  outlined?: boolean;
}

export default function ButtonComponent({
  text,
  type,
  outlined,
}: ButtonComponentProps) {
  return (
    <CustomButton
      green={type === "GREEN" ? "true" : undefined}
      orange={type === "ORANGE" ? "true" : undefined}
      black={type === "BLACK" ? "true" : undefined}
      neutral={type === "NEUTRAL" ? "true" : undefined}
      outlined={outlined ? "true" : undefined}
    >
      {text}
    </CustomButton>
  );
}
