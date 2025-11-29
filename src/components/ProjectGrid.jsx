import React from 'react';
import ProjectCard from './ProjectCard';
import PlaceholderProjectCard from './PlaceholderProjectCard';

const ProjectGrid = ({ projects }) => {
    // Show placeholder if we have projects but the grid isn't full (not a multiple of 3)
    const showPlaceholder = projects.length > 0 && projects.length % 3 !== 0;

    return (
        <section className="pb-16">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
                    {/* Optional: Add filter controls here */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    {showPlaceholder && <PlaceholderProjectCard />}
                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;
