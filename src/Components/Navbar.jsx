import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 2 : 0}
      sx={{
        backgroundColor: scrolled ? "#C9A24D" : "transparent",
        color: scrolled ? "#ffffff" : "#1f2937",
        transition: "all 0.3s ease",
        backdropFilter: scrolled ? "none" : "blur(6px)",
      }}
    >
      <Toolbar className="flex justify-between px-10 py-4">
        <div
          className={`text-2xl font-serif tracking-wide transition ${
            scrolled ? "text-white" : "text-[#8B6B2E]"
          }`}
        >
          Aurevia Grand
        </div>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          {[
            ["Destinations", "/"],
            ["Hotels", "/hotel"],
            ["Experiences", "/experiences"],
            ["Offers", "/offers"],
            ["Memberships", "/membership"],
            ["Contact Us", "/contact"],
          ].map(([label, path]) => (
            <Link
              key={label}
              to={path}
              className={`transition ${
                scrolled
                  ? "text-white hover:text-black"
                  : "text-gray-700 hover:text-[#C9A24D]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
          <Button
            variant="text"
            sx={{
              color: scrolled ? "#ffffff" : "#6b7280",
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            Login / Join
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: scrolled ? "#ffffff" : "#C9A24D",
              color: scrolled ? "#ffffff" : "#8B6B2E",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: scrolled ? "#ffffff" : "#C9A24D",
                color: scrolled ? "#8B6B2E" : "#ffffff",
              },
            }}
          >
            Book a Stay
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
