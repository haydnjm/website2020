import React, { Dispatch, SetStateAction, useState, useCallback } from "react";
import { Theme, themes } from ".";

type ThemeHook = [Theme, Dispatch<SetStateAction<Theme>>, () => void];
export const ThemeContext = React.createContext<ThemeHook>([] as any);

type Props = {
  defaultTheme?: Theme;
};
const Provider: React.FC<Props> = ({ children, defaultTheme }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme || "light");

  const nextTheme = useCallback(() => {
    setTheme(
      themes.length === themes.indexOf(theme) + 1
        ? themes[0]
        : themes[themes.indexOf(theme) + 1]
    );
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme, nextTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Provider;
