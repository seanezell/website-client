import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaDiscord } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-600 dark:text-slate-400 text-sm">
          © {currentYear} Sean Ezell. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/seanezell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/seanezell/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://x.com/duskman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="mailto:seanezell@gmail.com"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://discord.com/users/215215538215845889"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <FaDiscord size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}