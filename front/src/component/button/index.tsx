"use client";

import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

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
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {buttonText}
    </button>
  );
};

type DeleteButtonProps = {
  onClick: () => void;
  color: "inherit" | "primary" | "secondary" | "success" | "error" | undefined;
};

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, color }) => {
  return (
    <Button
      variant="contained"
      color={color}
      startIcon={<DeleteIcon />}
      onClick={onClick}
    >
      削除
    </Button>
  );
};