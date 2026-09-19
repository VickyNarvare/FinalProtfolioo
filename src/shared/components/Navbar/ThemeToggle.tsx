import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !dark;

    setDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background-card text-font-muted transition-all duration-200 hover:border-border-primary hover:bg-purple-light hover:text-primary"
    >
      {dark ? <MdOutlineWbSunny size={16} /> : <IoMoonOutline size={16} />}
    </button>
  );
};

export default ThemeToggle;
