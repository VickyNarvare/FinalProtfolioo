import { useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton = ({ onClick }: SearchButtonProps) => {
  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onClick();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [onClick]);

  return (
    <button
      onClick={onClick}
      aria-label="Open search"
      className="hidden h-9 items-center gap-2 rounded-lg border border-border bg-background-card px-3 text-font-muted transition-all duration-200 hover:border-border-primary hover:bg-purple-light hover:text-font md:flex"
    >
      <IoSearchSharp size={15} />

      <span className="text-xs">Search</span>

      <kbd className="rounded border border-border-light bg-background-secondary px-1.5 py-0.5 text-[10px] font-medium text-font-light">
        ⌘ K
      </kbd>
    </button>
  );
};

export default SearchButton;
