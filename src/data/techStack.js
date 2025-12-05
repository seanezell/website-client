import { FaReact, FaNodeJs, FaGitAlt, FaAws, FaDatabase, FaRobot } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTerraform, SiJavascript, SiPython, SiAmazondynamodb, SiMysql, SiGithubactions, SiPhp, SiOpenai } from 'react-icons/si';
import { TbBrandCSharp, TbSparkles } from 'react-icons/tb';
import { VscAzureDevops, VscTerminalPowershell } from "react-icons/vsc";

export const techStack = [
    // Featured in Hero
    { id: 'react', name: 'React', icon: <FaReact size={24} />, category: 'frontend', proficiency: 'expert', isFeatured: true },
    { id: 'node', name: 'Node.js', icon: <FaNodeJs size={24} />, category: 'backend', proficiency: 'expert', isFeatured: true },
    { id: 'aws', name: 'AWS', icon: <FaAws size={24} />, category: 'cloud', proficiency: 'expert', isFeatured: true },
    { id: 'terraform', name: 'Terraform', icon: <SiTerraform size={24} />, category: 'devops', proficiency: 'expert', isFeatured: true },
    { id: 'azuredevops', name: 'Azure DevOps', icon: <VscAzureDevops size={24} />, category: 'devops', proficiency: 'expert', isFeatured: false },

    //More good stuff
    { id: 'javascript', name: 'JavaScript', icon: <SiJavascript size={24} />, category: 'frontend', proficiency: 'expert', isFeatured: false },
    { id: 'sql', name: 'SQL Server', icon: <FaDatabase size={24} />, category: 'database', proficiency: 'expert', isFeatured: false },
    { id: 'dynamodb', name: 'DynamoDB', icon: <SiAmazondynamodb size={24} />, category: 'database', proficiency: 'expert', isFeatured: false },
    { id: 'mysql', name: 'MySQL', icon: <SiMysql size={24} />, category: 'database', proficiency: 'advanced', isFeatured: false },

    //Stuff I know, but less well
    { id: 'githubactions', name: 'GitHub Actions', icon: <SiGithubactions size={24} />, category: 'devops', proficiency: 'advanced', isFeatured: false },
    { id: 'git', name: 'Git', icon: <FaGitAlt size={24} />, category: 'devops', proficiency: 'advanced', isFeatured: false },
    { id: 'powershell', name: 'PowerShell', icon: <VscTerminalPowershell size={24} />, category: 'devops', proficiency: 'familiar', isFeatured: false },

    //Stuff I'm working on learning
    { id: 'typescript', name: 'TypeScript', icon: <SiTypescript size={24} />, category: 'frontend', proficiency: 'familiar', isFeatured: false, isLearning: true },
    { id: 'nextjs', name: 'Next.js', icon: <SiNextdotjs size={24} />, category: 'frontend', proficiency: 'familiar', isFeatured: false, isLearning: true },

    // Old Legacy stuff I haven't touched in a while
    { id: 'python', name: 'Python', icon: <SiPython size={24} />, category: 'backend', proficiency: 'familiar', isFeatured: false },
    { id: 'csharp', name: 'C# / .NET', icon: <TbBrandCSharp size={24} />, category: 'backend', proficiency: 'familiar', isFeatured: false },
    { id: 'php', name: 'PHP', icon: <SiPhp size={24} />, category: 'backend', proficiency: 'familiar', isFeatured: false },

    // AI-Assisted Development
    { id: 'ai-tools', name: 'AI-Assisted Development', icon: <TbSparkles size={24} />, category: 'ai', proficiency: 'expert', isFeatured: true },
    { id: 'github-copilot', name: 'GitHub Copilot', icon: <FaRobot size={24} />, category: 'ai', proficiency: 'expert', isFeatured: false },
    { id: 'chatgpt', name: 'ChatGPT', icon: <SiOpenai size={24} />, category: 'ai', proficiency: 'expert', isFeatured: false },
    { id: 'amazon-q', name: 'Amazon Q', icon: <FaAws size={24} />, category: 'ai', proficiency: 'expert', isFeatured: false },
];