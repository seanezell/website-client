import React from "react";
import { FaBriefcase, FaDownload, FaCalendar, FaBuilding, FaCode } from 'react-icons/fa';
import { experiences } from '../data/constants';
import { techStack } from '../data/techStack';

export default function Resume() {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                    Resume
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
                    15+ years of experience building scalable software solutions
                </p>
            </div>

            {/* Download Button */}
            <div className="flex justify-center">
                <a
                    href="/Sean-Ezell-Resume-2025-WEB.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-sm hover:shadow-md font-medium"
                    download
                >
                    <FaDownload size={18} />
                    Download Resume (PDF)
                </a>
            </div>

            {/* Experience Section */}
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                        <FaBriefcase size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Experience
                    </h2>
                </div>

                <div className="space-y-6">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300"
                        >
                            {/* Period Badge */}
                            <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 mb-3">
                                <FaCalendar size={14} />
                                <span className="font-medium">{exp.period}</span>
                            </div>

                            {/* Title and Company */}
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                                {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4">
                                <FaBuilding size={14} />
                                <span className="font-medium">{exp.company}</span>
                            </div>

                            {/* Bullets - using items-center for better vertical alignment */}
                            <ul className="space-y-2">
                                {exp.bullets.map((bullet, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 leading-relaxed"
                                    >
                                        <span className="text-primary-600 dark:text-primary-400 flex-shrink-0 text-lg leading-none">•</span>
                                        <span className="flex-1">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                        <FaCode size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Technical Skills
                    </h2>
                </div>

                {/* Core Competencies - Expert Level */}
                <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                        Core Competencies
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {techStack.filter(t => t.proficiency === 'expert').map(tech => (
                            <div
                                key={tech.id}
                                className="flex flex-col items-center gap-2 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300"
                            >
                                <div className="text-primary-600 dark:text-primary-400">
                                    {tech.icon}
                                </div>
                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Skills - Compact */}
                <div>
                    <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                        Additional Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.filter(t => t.proficiency !== 'expert').map(tech => (
                            <span
                                key={tech.id}
                                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-sm border border-slate-200 dark:border-slate-700"
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
