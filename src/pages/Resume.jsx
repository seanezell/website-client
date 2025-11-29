import React from "react";
import { FaBriefcase, FaDownload, FaCalendar, FaBuilding, FaCode } from 'react-icons/fa';

const experiences = [
    {
        period: "2022 - Present",
        title: "Senior Software Engineer",
        company: "Oregon Mutual / MGT Insurance",
        bullets: [
            "Lead developer designing modern cloud-based software",
            "Architected AWS serverless solutions & CI/CD pipelines",
            "Modernized legacy systems and mentored engineers",
        ]
    },
    {
        period: "2019 - 2022",
        title: "Software Engineer",
        company: "Oregon Mutual",
        bullets: [
            "Full-stack development with JavaScript/Node.js & .NET",
            "Collaborated with data engineering for DynamoDB systems",
        ]
    },
    {
        period: "2018 - 2019",
        title: "Associate Software Engineer",
        company: "Oregon Mutual",
        bullets: [
            "Supported C#/ASP.NET and legacy systems",
            "Resolved long-standing functional and technical issues",
        ]
    },
    {
        period: "2014 - 2018",
        title: "Web Application Admin/Developer",
        company: "Linfield College",
        bullets: [
            "Built custom C#/ASP.NET and PHP/MySQL apps",
            "Improved site security & migrated legacy Java systems",
        ]
    },
    {
        period: "2008 - 2014",
        title: "Web Programmer",
        company: "Linfield College",
        bullets: [
            "Built new applications to replace paper workflows",
            "Implemented address validation and site improvements",
        ]
    },
    {
        period: "2006 - 2007",
        title: "Network Administrator",
        company: "Evergreen Aviation",
        bullets: [
            "Managed AD/Exchange and created automation scripts",
        ]
    },
];

const skills = [
    "JavaScript / TypeScript",
    "Node.js",
    "React.js",
    "C# / ASP.NET",
    "PHP",
    "SQL (SQL Server, MySQL)",
    "AWS Serverless (Lambda, API Gateway, DynamoDB, Step Functions)",
    "Terraform",
    "Azure DevOps",
    "CI/CD Pipelines",
    "Git / GitHub / Azure DevOps",
    "JSON Schema",
    "PowerShell",
    "Jira / Confluence",
];

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
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-600 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
