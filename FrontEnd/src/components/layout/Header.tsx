import { useState } from 'react';
import HeaderLogo from '../../assets/HeaderLogo.png';

export default function Header() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: '#sobre', label: 'Sobre Nós' },
        { href: '#historia', label: 'História' },
        { href: '#modalidades', label: 'Modalidades' },
        { href: '#equipe', label: 'Equipe' },
        { href: '#unidades', label: 'Unidades' },
    ];

    return (
        <header className="bg-gray-800 border-b border-gray-700 fixed inset-x-0 top-0 z-50">
            <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-12">
                <a href="#" className="flex items-center gap-3 group shrink-0">
                    <img
                        src={HeaderLogo}
                        alt="Logo Dynamic Fit"
                        className="h-24 select-none"
                        draggable={false}
                    />
                    <span className="text-lg sm:text-base font-semibold tracking-wide">
                        <span className="text-white group-hover:text-indigo-200 transition-colors">DYNAMIC </span>
                        <span className="text-indigo-500 group-hover:text-indigo-400 transition-colors">FIT</span>
                    </span>
                </a>

                <nav aria-label="Principal" className="hidden md:block">
                    <ul className="flex items-center gap-8 text-[11px] font-medium tracking-wide text-white uppercase">
                        {links.map(l => (
                            <li key={l.href}><a className="hover:text-indigo-400 transition-colors" href={l.href}>{l.label}</a></li>
                        ))}
                    </ul>
                </nav>

                <button
                    onClick={() => setOpen(o => !o)}
                    className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition"
                    aria-label="Abrir menu"
                    aria-expanded={open}
                >
                    <span className="sr-only">Menu</span>
                    <svg
                        className={`h-6 w-6 transition-transform ${open ? 'scale-0' : 'scale-100'}`}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                    </svg>
                    <svg
                        className={`absolute h-6 w-6 transition-transform ${open ? 'scale-100' : 'scale-0'}`}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div
                className={`md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden bg-gray-800 border-b border-gray-700 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <nav aria-label="Menu Mobile" className="px-4 pb-6 pt-2">
                    <ul className="flex flex-col gap-2 text-sm font-medium tracking-wide text-white uppercase">
                        {links.map(l => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded px-3 py-2 hover:bg-gray-700 hover:text-indigo-400 transition-colors"
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