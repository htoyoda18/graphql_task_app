import Button from "@mui/material/Button";

export const TextButton = (text: string, disabled: boolean) => {
  return <Button disabled={disabled}>{text}</Button>;
};
