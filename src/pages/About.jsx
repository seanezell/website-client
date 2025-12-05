import React from 'react';
import { highlights } from '../data/constants';
import { techStack } from '../data/techStack';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
    const expertTechs = techStack.filter(t => t.proficiency === 'expert');
    const advancedTechs = techStack.filter(t => t.proficiency === 'advanced');
    const familiarTechs = techStack.filter(t => t.proficiency === 'familiar');

    return (
        <div className="max-w-4xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                    About Me
                </h1>
                <p className="text-xl text-primary-600 dark:text-primary-400">
                    Senior Software Engineer • Problem Solver • Lifelong Learner
                </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-md"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
                <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="text-lg">
                        I'm a Senior Software Engineer with more than 15 years of experience building software that solves real problems.
                        My career has taken me through a wide range of roles - from supporting networks and building internal tools,
                        to designing full-stack web applications and leading modernization efforts in cloud-based environments.
                        Along the way, I've become comfortable wearing many hats: architect, builder, mentor, collaborator,
                        and sometimes even detective tracking down decade-old bugs.
                    </p>

                    <div className="border-l-4 border-primary-400 dark:border-primary-600 pl-6 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">
                        <p className="text-slate-700 dark:text-slate-300 italic">
                            "I'm passionate about creating software that is clear, maintainable, and resilient."
                        </p>
                    </div>

                    <p>
                        I enjoy the full process - from understanding the "why" behind a project, to shaping the design, to building and refining the final solution.
                        I gravitate toward technologies like JavaScript/Node.js, AWS serverless, .NET, and SQL,
                        but I'm always excited to learn something new when the problem calls for it.
                    </p>

                    <p>
                        Outside of writing code, I genuinely enjoy helping teammates grow, improving team processes, and bringing structure to complex systems.
                        I've found that the best software comes from people who communicate well and care about the craft, so I try to embody both.
                    </p>

                    <p>
                        When I'm not building software, I'm usually spending time with my family, tinkering with side projects,
                        playing games with my daughter, or diving into something new to learn.
                        I love the balance between creativity and logic that engineering brings,
                        and I'm always looking for the next challenge that lets me make something better than it was yesterday.
                    </p>
                </div>
            </div>

            {/* Tech Stack Section */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                    Technologies I Work With
                </h2>
                
                {/* Expert Level */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                            Expert
                        </h3>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                            • My core strengths
                        </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {expertTechs.map((tech) => (
                            <div
                                key={tech.id}
                                className="relative p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-md group"
                            >
                                <div className="flex flex-col items-center gap-2 text-center">
                                    <div className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                                        {tech.icon}
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Advanced Level */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                            Advanced
                        </h3>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                            • Solid working knowledge
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {advancedTechs.map((tech) => (
                            <div
                                key={tech.id}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-600 transition-colors"
                            >
                                <span className="text-slate-600 dark:text-slate-400">
                                    {tech.icon}
                                </span>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Familiar / Learning Level */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                            Familiar
                        </h3>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                            • Experience with these technologies
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {familiarTechs.map((tech) => (
                            <div
                                key={tech.id}
                                className="relative inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-600 transition-colors"
                            >
                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                    {tech.icon}
                                </span>
                                <span className="text-sm text-slate-700 dark:text-slate-300">
                                    {tech.name}
                                </span>
                                {tech.isLearning && (
                                    <span className="inline-flex items-center gap-1 ml-1 px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded text-xs font-medium">
                                        <FaGraduationCap size={10} />
                                        Learning
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
