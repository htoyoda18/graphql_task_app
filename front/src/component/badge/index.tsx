import React from "react";
import Avatar from "@mui/material/Avatar";

interface ColoredAvatarProps {
  color: "red" | "blue";
  text: string;
}

export const ColoredAvatar: React.FC<ColoredAvatarProps> = ({
  color,
  text,
}) => {
  const bgColor = color === "red" ? "bg-red-500" : "bg-blue-500";

  return (
    <Avatar
      sx={{
        width: "60px",
        height: "30px",
        backgroundColor: color === "red" ? "red" : "blue",
        color: "white",
        fontSize: "16px",
      }}
      variant="square"
      className={bgColor}
    >
      {text}
    </Avatar>
  );
};
