"use client";

import React, { useState } from "react";
import { TextButton } from "../../component/button";

export const Footer = () => {
  const [isAllDisabled, setIsAllDisabled] = useState(true);
  const [isPlanDisabled, setIsPlanDisabled] = useState(false);

  const handleAllClick = () => {
    setIsAllDisabled(true);
    setIsPlanDisabled(false);
  };

  const handlePlanClick = () => {
    setIsAllDisabled(false);
    setIsPlanDisabled(true);
  };

  return (
    <footer className="fixed bottom-1/5 w-full flex justify-center items-center p-4 space-x-10">
      <TextButton
        text="All"
        disabled={isAllDisabled}
        onClick={handleAllClick}
      />
      <TextButton
        text="Plan"
        disabled={isPlanDisabled}
        onClick={handlePlanClick}
      />
    </footer>
  );
};
