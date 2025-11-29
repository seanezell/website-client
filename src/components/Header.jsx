import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaGamepad, FaCode } from 'react-icons/fa';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [mode, setMode] = useState('portfolio');

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setDarkMode(true);
        }
    };

    const toggleMode = () => {
        setMode(prev => prev === 'portfolio' ? 'gaming' : 'portfolio');
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <nav className="flex items-center gap-6">
                    <Link
                        to="/"
                        className="group flex items-center gap-0.5 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-mono text-sm"
                    >
                        <span className="text-primary-600 dark:text-primary-400">&lt;</span>
                        <span className="group-hover:underline">Home</span>
                        <span className="text-primary-600 dark:text-primary-400">/&gt;</span>
                    </Link>

                    <Link
                        to="/about"
                        className="group flex items-center gap-0.5 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-mono text-sm"
                    >
                        <span className="text-primary-600 dark:text-primary-400">&lt;</span>
                        <span className="group-hover:underline">About</span>
                        <span className="text-primary-600 dark:text-primary-400">/&gt;</span>
                    </Link>

                    <Link
                        to="/projects"
                        className="group flex items-center gap-0.5 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-mono text-sm"
                    >
                        <span className="text-primary-600 dark:text-primary-400">&lt;</span>
                        <span className="group-hover:underline">Projects</span>
                        <span className="text-primary-600 dark:text-primary-400">/&gt;</span>
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    {/* <button
                        onClick={toggleMode}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
                        title={mode === 'portfolio' ? 'Switch to Gaming Mode' : 'Switch to Portfolio Mode'}
                    >
                        {mode === 'portfolio' ? <FaGamepad size={20} /> : <FaCode size={20} />}
                    </button> */}

                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
                        title="Toggle Dark Mode"
                    >
                        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
