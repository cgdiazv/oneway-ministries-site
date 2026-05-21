// context/DonateContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface DonateContextType {
  isDonateOpen: boolean;
  openDonateModal: () => void;
  closeDonateModal: () => void;
}

const DonateContext = createContext<DonateContextType | undefined>(undefined);

export function DonateProvider({ children }: { children: ReactNode }) {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const openDonateModal = () => setIsDonateOpen(true);
  const closeDonateModal = () => setIsDonateOpen(false);

  return (
    <DonateContext.Provider value={{ isDonateOpen, openDonateModal, closeDonateModal }}>
      {children}
    </DonateContext.Provider>
  );
}

export function useDonate() {
  const context = useContext(DonateContext);
  if (!context) throw new Error("useDonate must be used within a DonateProvider");
  return context;
}