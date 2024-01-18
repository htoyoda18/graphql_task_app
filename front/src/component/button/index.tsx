"use client";

import React from "react";
import Button from "@mui/material/Button";

interface TextButtonProps {
  text: string;
  disabled: boolean;
}

export const TextButton: React.FC<TextButtonProps> = ({ text, disabled }) => {
  return (
    <>
      <Button style={{ fontSize: "1.25rem" }} disabled={disabled}>
        {text}
      </Button>
    </>
  );
};
