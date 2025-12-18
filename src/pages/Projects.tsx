
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Project } from '@/types/workspace';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Github, Youtube, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [projects] = useLocalStorage<Project[]>('projects', [
    {
      id: '1',
      name: 'Task Management App',
      techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      overview:
        'This is a collaborative task management application built for teams. Users can create tasks, assign them to team members, track progress, and collaborate efficiently in real time.',
      flow:
        'Users sign in and create teams. Tasks are created and stored in PostgreSQL using Prisma ORM. Role-based access ensures only authorized users can modify tasks.',
      features:
        'Team collaboration, task assignment, role-based access control, real-time updates, clean UI.',
      githubUrl: 'https://github.com/username/taskapp',
      createdAt: new Date().toISOString(),
    },
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>

      {/* ===== PROJECT LEVEL ACCORDION ===== */}
      <Accordion type="single" collapsible className="space-y-4">
        {projects.map((project) => (
          <AccordionItem
            key={project.id}
            value={project.id}
            className="border rounded-xl px-4"
          >
            {/* PROJECT TITLE */}
            <AccordionTrigger className="flex flex-col items-start gap-2 py-4">
              <span className="text-lg font-semibold">{project.name}</span>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-4 space-y-4">
              {/* ===== Q&A ACCORDION ===== */}
              <Accordion type="multiple" className="space-y-2">

                {/* OVERVIEW */}
                <AccordionItem value="overview">
                  <AccordionTrigger className="text-sm font-medium">
                    What is this project about?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {project.overview}
                  </AccordionContent>
                </AccordionItem>

                {/* FLOW */}
                <AccordionItem value="flow">
                  <AccordionTrigger className="text-sm font-medium">
                    How does the application work internally?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {project.flow}
                  </AccordionContent>
                </AccordionItem>

                {/* FEATURES */}
                <AccordionItem value="features">
                  <AccordionTrigger className="text-sm font-medium">
                    What are the key features?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {project.features}
                  </AccordionContent>
                </AccordionItem>

              </Accordion>

              {/* LINKS */}
              <div className="flex gap-4 pt-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}

                {project.youtubeUrl && (
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    <Youtube size={16} /> Demo
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
