import type { Project } from '@/components/ProjectCard';

export const projects: Project[] = [
  {
    title: 'Meeting-Summarizer',
    description: 'A web app that summarizes meeting notes and action items.',
    tech: ['Next.js', 'TypeScript','Whisper-API','Ollama','Gradio','Python'],
    link: 'https://example.com',
    repo: 'https://github.com/diyap24/meeting-summarizer.git'
  },
  {
    title: 'Text-to-Image Generator using Diffusion Models',
    description: 'A web app that generates images from text prompts using diffusion models.',
    tech: ['Next.js', 'TypeScript', 'Python', 'Machine Learning','LLMs'],
    link: 'https://example.com',
    repo: 'https://github.com/diyap24/txttoimg.git'
  }
  
];

