"use client";

import React from "react";
import Button from "@mui/material/Button";

interface TextButtonProps {
  text: string;
  disabled: boolean;
  onClick: () => void; // onClickプロパティの型定義を追加
}

export const TextButton: React.FC<TextButtonProps> = ({
  text,
  disabled,
  onClick,
}) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {text}
    </Button>
  );
};
