export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  imageHint?: string;
  githubLink: string;
  demoLink?: string;
}
