import React from 'react';
import { techStack } from '../data/techStack';

const Hero = () => {
    const featuredTech = techStack.filter(p => p.isFeatured).slice(0, 6);
    return (
        <section className="pt-12 md:pt-20 pb-8 md:pb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-5xl mx-auto">
                {/* Text content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
                        Sean Ezell
                    </h1>

                    <h2 className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-medium mb-6">
                        Senior Software Engineer
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 leading-relaxed">
                        I'm a full-stack Senior Software Engineer with over 15 years of experience building web applications, modernizing legacy systems, and designing cloud-native solutions in AWS.
                        I love learning new tech, collaborating with great teams, and creating software that is stable, scalable, and enjoyable to work with.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mb-8">
                        {featuredTech.map((tech) => (
                            <div
                                key={tech.name}
                                className="relative flex flex-col items-center gap-2 text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors duration-300 group"
                            >
                                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                    {tech.icon}
                                </div>
                                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-6 whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Profile picture - floats right */}
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 shadow-lg flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
