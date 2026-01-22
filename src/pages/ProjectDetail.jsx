import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { projects } from '../data/projects';
import { techStack } from '../data/techStack';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="text-center py-16">
                <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                <Link to="/projects" className="text-primary-600 hover:text-primary-700">
                    ← Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8"
            >
                <FaArrowLeft size={16} />
                Back to Projects
            </Link>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                        {project.status && (
                            <span className="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                                {project.status}
                            </span>
                        )}
                    </div>
                    <div className="flex gap-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                        >
                            <FaGithub size={18} />
                            Code
                        </a>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                        >
                            <FaExternalLinkAlt size={16} />
                            Demo
                        </a>
                    </div>
                </div>

                <div className="prose dark:prose-invert max-w-none mb-8">
                    <p className="text-lg text-slate-600 dark:text-slate-400 whitespace-pre-line">
                        {project.longDescription}
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    {project.techIds?.map((techId) => {
                        const tech = techStack.find(t => t.id === techId);
                        if (!tech) return null;
                        return (
                            <span
                                key={tech.id}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg"
                            >
                                {tech.icon}
                                <span className="font-medium">{tech.name}</span>
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;