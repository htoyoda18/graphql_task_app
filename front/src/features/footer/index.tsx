"use client";

import React, { useState, useEffect } from "react";
import { TextButton } from "../../component/button";
import { useRouter, usePathname } from 'next/navigation';

export const Footer = () => {
  const pathname = usePathname();

  const [isAllDisabled, setIsAllDisabled] = useState(false);
  const [isPlanDisabled, setIsPlanDisabled] = useState(false);

  useEffect(() => {
    setIsAllDisabled(pathname === '/');
    setIsPlanDisabled(pathname === '/plan');
  }, [pathname]);

  const router = useRouter();

  const handleAllClick = () => {
    setIsAllDisabled(true);
    setIsPlanDisabled(false);
    router.push('/');
  };

  const handlePlanClick = () => {
    setIsAllDisabled(false);
    setIsPlanDisabled(true);
    router.push('/plan');
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
