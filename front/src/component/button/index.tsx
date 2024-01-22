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

type CreateButtonProps = {
  buttonText: string;
};

export const CreateButton: React.FC<CreateButtonProps> = ({ buttonText }) => {
  return (
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      {buttonText}
    </button>
  );
}
