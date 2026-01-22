import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { techStack } from '../data/techStack';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200 dark:border-slate-700 flex flex-col h-full group">
            {project.image && (
                <div className="relative overflow-hidden aspect-video">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full text-slate-900 hover:text-primary-600 transition-colors"
                            title="View Code"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full text-slate-900 hover:text-primary-600 transition-colors"
                            title="View Demo"
                        >
                            <FaExternalLinkAlt size={18} />
                        </a>
                    </div>
                </div>
            )}

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                    <Link to={`/projects/${project.id}`}>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors hover:text-primary-600 dark:hover:text-primary-400">
                            {project.title}
                        </h3>
                    </Link>
                    {project.status && (
                        <span className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                            {project.status}
                        </span>
                    )}
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techIds?.map((techId) => {
                        const tech = techStack.find(t => t.id === techId);
                        if (!tech) return null;
                        return (
                            <span
                                key={tech.id}
                                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full"
                            >
                                {tech.icon}
                                <span>{tech.name}</span>
                            </span>
                        );
                    })}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        title="View Code"
                    >
                        <FaGithub size={16} />
                        Code
                    </a>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        title="View Demo"
                    >
                        <FaExternalLinkAlt size={14} />
                        Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
