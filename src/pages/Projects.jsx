import React from 'react';
import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../data/projects';
import { FaCode } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                    My Projects
                </h1>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                    A collection of my work, ranging from web applications to cloud-native solutions.
                    Each project represents a unique challenge and an opportunity to learn something new.
                </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                        {projects.length}
                    </div>
                    <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                        Projects
                    </div>
                </div>

                <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                        15+
                    </div>
                    <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                        Years Exp
                    </div>
                </div>

                <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                        <FaCode size={24} className="inline" />
                    </div>
                    <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                        Full Stack
                    </div>
                </div>

                <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                        AWS
                    </div>
                    <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                        Cloud Native
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="pt-8">
                <ProjectGrid projects={projects} />
            </div>
        </div>
    );
};

export default Projects;
