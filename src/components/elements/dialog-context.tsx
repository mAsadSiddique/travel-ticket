"use client";

import * as React from "react";

const DialogPopupContainerContext = React.createContext<HTMLElement | null>(null);

export function DialogPopupContainerProvider({
  container,
  children,
}: {
  container: HTMLElement | null;
  children: React.ReactNode;
}) {
  return (
    <DialogPopupContainerContext.Provider value={container}>
      {children}
    </DialogPopupContainerContext.Provider>
  );
}

export function useDialogPopupContainer() {
  return React.useContext(DialogPopupContainerContext);
}
