import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "О нас", href: "#about" },
  { label: "Маршруты", href: "#routes" },
  { label: "Галерея", href: "#gallery" },
  { label: "Цены", href: "#prices" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

interface NavBarProps {
  scrollTo: (href: string) => void;
}

export default function NavBar({ scrollTo }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    scrollTo(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className={`font-cormorant text-2xl font-bold tracking-wide transition-colors ${
            scrolled ? "text-sea-700" : "text-white"
          }`}
        >
          АкваТур
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNav(item.href)}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-sea-500 ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav("#booking")}
          className="hidden md:block bg-sea-500 hover:bg-sea-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-sea-200"
        >
          Забронировать
        </button>

        <button
          className={`md:hidden transition-colors ${scrolled ? "text-slate-700" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-left text-slate-700 font-medium py-1"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#booking")}
            className="mt-2 bg-sea-500 text-white py-3 rounded-full font-medium"
          >
            Забронировать
          </button>
        </div>
      )}
    </nav>
  );
}
