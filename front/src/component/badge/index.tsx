"use client";

import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, green } from "@mui/material/colors";

interface ColoredAvatarProps {
  color: "orange" | "green";
  text: string;
}

export const ColoredAvatar: React.FC<ColoredAvatarProps> = ({
  color,
  text,
}) => {
  return (
    <Avatar
      sx={{
        width: "60px",
        height: "30px",
        bgcolor: color === "orange" ? deepOrange[500] : green[500],
        color: "white",
        fontSize: "16px",
      }}
      variant="square"
    >
      {text}
    </Avatar>
  );
};
