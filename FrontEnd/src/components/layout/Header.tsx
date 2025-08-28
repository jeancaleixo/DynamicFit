import { useState } from "react";
import HeaderLogo from "../../assets/HeaderLogo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#fundador", label: "Fundador" },
    { href: "#equipe", label: "Equipe" },
    { href: "#modalidades", label: "Modalidades" },
    { href: "#unidades", label: "Unidades" },
  ];

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-12">
        <a href="#" className="flex items-center gap-3 group md:shrink-0">
          <img
            src={HeaderLogo}
            alt="Logo Dynamic Fit"
            className="h-8 sm:h-10 md:h-16 select-none"
            draggable={false}
          />
          <span className="text-lg sm:text-base font-semibold tracking-wide">
            <span className="text-white group-hover:text-indigo-200 transition-colors">
              DYNAMIC{" "}
            </span>
            <span className="text-indigo-500 group-hover:text-indigo-400 transition-colors">
              FIT
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[14px] font-medium tracking-wide text-white uppercase">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  className="hover:text-indigo-400 transition-colors"
                  href={l.href}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden relative flex items-center justify-center h-12 w-12 rounded-xl shadow-lg border-2 transition-all duration-200
                        ${
                          open
                            ? "border-indigo-500 bg-gray-800"
                            : "border-gray-700 bg-gray-700 hover:bg-gray-600"
                        }
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800`}
          aria-label="Abrir menu"
          aria-expanded={open}
          style={{
            boxShadow: open
              ? "0 0 0 3px #6366f1"
              : "0 2px 8px rgba(0,0,0,0.18)",
          }}
        >
          <span className="sr-only">Menu</span>
          <svg
            className={`h-7 w-7 absolute transition-all duration-200 ${
              open ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
          <svg
            className={`h-7 w-7 absolute transition-all duration-200 ${
              open ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`md:hidden fixed top-0 left-0 w-full z-40 transition-[max-height,opacity] duration-300 ease-out overflow-hidden
                ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                bg-gray-900/95 backdrop-blur border-b border-indigo-500 shadow-2xl`}
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}
      >
        <nav
          aria-label="Menu Mobile"
          className="px-4 pb-6 pt-20"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col gap-3 text-base font-semibold tracking-wide text-white uppercase">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 hover:bg-indigo-600 hover:text-white transition-colors text-center"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
