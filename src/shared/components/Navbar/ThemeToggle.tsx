import { IoMoonOutline } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';
import { useTheme } from '../../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background-card text-font-muted transition-all duration-200 hover:border-border-primary hover:bg-background-secondary hover:text-primary"
    >
      {dark ? <MdOutlineWbSunny size={16} /> : <IoMoonOutline size={16} />}
    </button>
  );
};

export default ThemeToggle;
