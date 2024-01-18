import { TextButton } from "../../component/button";

export const Footer = () => {
  return (
    <footer className="fixed bottom-1/5 w-full flex justify-center items-center p-4 space-x-10">
      <TextButton text="All" disabled={false} />
      <TextButton text="Plan" disabled={false} />
    </footer>
  );
};
