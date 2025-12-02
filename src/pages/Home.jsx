import React from 'react';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../data/projects';

const Home = () => {
    const featuredProjects = projects.filter(p => p.isFeatured);

    return (
        <div className="space-y-4">
            <Hero />
            <ProjectGrid projects={featuredProjects} />
        </div>
    );
};

export default Home;
