import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineSlash } from "react-icons/hi2";

import { FaGithub } from "react-icons/fa6";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ============================================
  // SCROLL DETECTION
  // ============================================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ============================================
  // ACTIVE SECTION
  // ============================================
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-500
          ease-out
          ${scrolled ? "px-4 pt-4 sm:px-6" : "px-0 pt-0"}
        `}
      >
        <motion.div
          initial={false}
          animate={{
            maxWidth: scrolled ? 1080 : 1536,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto w-full"
        >
          {/* =================================================
              NAVBAR CONTAINER
          ================================================= */}
          <motion.div
            initial={false}
            animate={{
              height: scrolled ? 60 : 72,

              borderRadius: scrolled ? 18 : 0,

              backgroundColor: scrolled
                ? "rgba(255, 255, 255, 0.90)"
                : "rgba(255, 255, 255, 0.72)",

              borderColor: scrolled
                ? "rgba(233, 229, 239, 1)"
                : "rgba(233, 229, 239, 0)",

              boxShadow: scrolled
                ? "0 10px 35px rgba(88, 28, 135, 0.10)"
                : "0 0 0 rgba(0, 0, 0, 0)",
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              items-center
              justify-between
              border
              px-4
              sm:px-6
              backdrop-blur-xl
            "
          >
            {/* =================================================
                LEFT
            ================================================= */}
            <div className="flex items-center gap-6">
              <Logo />
              {/* Divider */}
              <HiOutlineSlash
                size={20}
                className="hidden lg:block text-font-muted"
              />
              <NavLinks activeSection={activeSection} />
            </div>

            {/* =================================================
                RIGHT
            ================================================= */}
            <div className="flex items-center gap-2">
              {/* Github */}
              <a
                href="https://github.com/VickyNarvare"
                target="_blank"
                rel="noopener noreferrer"
                className="

                  hidden
                  h-9
                  items-center
                  rounded-lg
                  border
                  border-border
                  bg-background-card
                  px-3
                  text-sm
                  font-medium
                  text-font-muted
                  transition-all
                  duration-200
                  hover:border-border-primary
                  hover:bg-purple-light
                  hover:text-font
                  md:flex
                  gap-1
                "
              >
                <FaGithub size={17} />
                GitHub
              </a>
              {/* Theme */}
              <ThemeToggle />
              {/* Let's Talk */}
              <a
                href="#contact"
                className="
                  hidden
                  h-9
                  items-center
                  rounded-lg
                  bg-primary
                  px-4
                  text-sm
                  font-medium
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-primary-dark
                  hover:shadow-md
                  sm:flex
                "
              >
                Let&apos;s Talk
              </a>

              {/* Mobile */}
              <button
                onClick={() => setMobileOpen((previous) => !previous)}
                aria-label="Toggle menu"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-border
                  text-font-muted
                  transition-colors
                  hover:bg-purple-light
                  hover:text-font
                  lg:hidden
                "
              >
                <HiOutlineMenu size={18} />
              </button>
            </div>
          </motion.div>

          {/* Mobile menu */}
          <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </motion.div>
      </header>
    </>
  );
};

export default Navbar;
