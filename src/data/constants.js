import { FaReact, FaNodeJs, FaDatabase, FaAws, FaJs, FaCloud, FaGit, FaCode, FaUsers, FaLightbulb, FaHeart } from 'react-icons/fa';
import { SiTerraform } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

export const techStack = [
    { icon: <FaReact size={24} />, name: 'React', isFeatured: true },
    { icon: <FaNodeJs size={24} />, name: 'Node.js', isFeatured: true },
    { icon: <FaDatabase size={24} />, name: 'SQL/NoSQL', isFeatured: true },
    { icon: <FaAws size={24} />, name: 'AWS', isFeatured: true },
    { icon: <SiTerraform size={24} />, name: 'Terraform', isFeatured: true },
    { icon: <FaJs size={24} />, name: 'JavaScript', isFeatured: false },
    { icon: <TbBrandCSharp size={24} />, name: 'C#', isFeatured: false },
    { icon: <FaCloud size={24} />, name: 'Cloud', isFeatured: false },
    { icon: <FaGit size={24} />, name: 'Git', isFeatured: false },
];

export const highlights = [
    {
        icon: <FaCode size={24} />,
        title: "15+ Years Experience",
        description: "Building scalable web applications and cloud-native solutions"
    },
    {
        icon: <FaUsers size={24} />,
        title: "Team Player",
        description: "Mentoring teammates and improving processes"
    },
    {
        icon: <FaLightbulb size={24} />,
        title: "Problem Solver",
        description: "From legacy modernization to greenfield projects"
    },
    {
        icon: <FaHeart size={24} />,
        title: "Passionate Builder",
        description: "Creating software that's stable, scalable, and enjoyable"
    }
];

export const experiences = [
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