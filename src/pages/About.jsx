import React from 'react';
import { techStack, highlights } from '../data/constants';

const About = () => {
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
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                    Technologies I Work With
                </h2>
                <div className="flex flex-wrap gap-3">
                    {techStack.map((tech) => (
                        <span
                            key={tech.name}
                            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-600 transition-colors"
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
