"use client";

import { Collapse } from "@mui/material";
import React, { ReactNode, createContext, useContext, useState } from "react";


interface SubMenuContextType {
  isOpen: boolean;
  toggleSubmenu: () => void;
}

const SubMenuContext = createContext<SubMenuContextType | null>(null);

const useSubMenu = () => {
  const context = useContext(SubMenuContext);
  if (!context) {
    throw new Error("useSubMenu must be used within a SubMenuWrapper");
  }
  return context;
};


interface SubMenuWrapperProps {
  children: ReactNode;
}

export const SubMenuWrapper: React.FC<SubMenuWrapperProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSubmenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SubMenuContext.Provider value={{ isOpen, toggleSubmenu }}>
      <>{children}</>
    </SubMenuContext.Provider>
  );
};

// SubMenuTrigger Component
interface SubMenuTriggerProps {
  children: (isOpen: boolean, toggle: () => void) => ReactNode;
}

export const SubMenuTrigger: React.FC<SubMenuTriggerProps> = ({ children }) => {
  const { isOpen, toggleSubmenu } = useSubMenu();
  return <div onClick={toggleSubmenu}>{children(isOpen, toggleSubmenu)}</div>;
};

// SubMenuContent Component
interface SubMenuContentProps {
  children: ReactNode;
}

export const SubMenuContent: React.FC<SubMenuContentProps> = ({ children }) => {
  const { isOpen } = useSubMenu();
  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <>{children}</>
    </Collapse>
  );
};
