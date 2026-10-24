import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

type Theme = 'light' | 'dark';

const getStoredTheme = (): Theme => {
  try {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#100d14' : '#f6ebff');

    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage can be unavailable in private mode; the theme still applies.
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
