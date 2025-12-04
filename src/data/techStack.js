import { SiTerraform } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { FaReact, FaNodeJs, FaDatabase, FaAws, FaJs, FaCloud, FaGit } from 'react-icons/fa';

export const techStack = [
    {
        id: 'react',
        icon: <FaReact size={24} />,
        name: 'React',
        category: 'frontend',
        proficiency: 'expert',
        isFeatured: true
    },
    {
        id: 'node',
        icon: <FaNodeJs size={24} />,
        name: 'Node.js',
        category: 'backend',
        proficiency: 'expert',
        isFeatured: true
    },
    {
        id: 'sql',
        icon: <FaDatabase size={24} />,
        name: 'SQL/NoSQL',
        category: 'database',
        proficiency: 'advanced',
        isFeatured: true
    },
    {
        id: 'aws',
        icon: <FaAws size={24} />,
        name: 'AWS',
        category: 'infrastructure',
        proficiency: 'expert',
        isFeatured: true
    },
    {
        id: 'terraform',
        icon: <SiTerraform size={24} />,
        name: 'Terraform',
        category: 'infrastructure',
        proficiency: 'expert',
        isFeatured: true
    },
    {
        id: 'javascript',
        icon: <FaJs size={24} />,
        name: 'JavaScript',
        category: 'frontend',
        proficiency: 'expert',
        isFeatured: false
    },
    {
        id: 'csharp',
        icon: <TbBrandCSharp size={24} />,
        name: 'C#',
        category: 'backend',
        proficiency: 'familiar',
        isFeatured: false
    },
    {
        id: 'cloud',
        icon: <FaCloud size={24} />,
        name: 'Cloud',
        category: 'infrastructure',
        proficiency: 'expert',
        isFeatured: false
    },
    {
        id: 'git',
        icon: <FaGit size={24} />,
        name: 'Git',
        category: 'infrastructure',
        proficiency: 'expert',
        isFeatured: false
    },
];