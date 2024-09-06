"use client";
import React from "react";

const SoundContext = React.createContext();

function SoundProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  const value = React.useMemo(
    () => ({
      soundEnabled,
      setSoundEnabled,
    }),
    [soundEnabled]
  );

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}

export const useSoundContext = () => {
  return React.useContext(SoundContext);
};

export default SoundProvider;
