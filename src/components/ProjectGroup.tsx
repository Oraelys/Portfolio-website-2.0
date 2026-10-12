import { ExternalLink, Github, Layers, Monitor, Smartphone } from 'lucide-react';
import AppMockup from './AppMockup';
import type { ProjectGroupData } from '../data/projects';

interface ProjectGroupProps {
  group: ProjectGroupData;
  isVisible: boolean;
}

const ProjectGroup = ({ group, isVisible }: ProjectGroupProps) => {
  return (
    <article
      className={`rounded-3xl border p-6 sm:p-10 ${isVisible ? 'animate-fadeInUp' : ''}`}
      style={{
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border-light)',
        boxShadow: `0 20px 50px -25px ${group.accent}66`,
      }}
    >
      {/* Group header */}
      <header className="mb-10 max-w-3xl">
        <span
          className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
          style={{ background: `${group.accent}1f`, color: group.accent }}
        >
          <Layers size={14} className="mr-2" />
          Project group · {group.apps.length} apps
        </span>
        <h4 className="mb-2 text-3xl font-extrabold text-text-primary">{group.name}</h4>
        <p className="mb-4 text-lg font-medium" style={{ color: group.accent }}>
          {group.tagline}
        </p>
        <p className="mb-5 leading-relaxed text-text-secondary">{group.description}</p>
        <div className="flex flex-wrap gap-2">
          {group.sharedStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-3 py-1 text-sm font-medium text-text-secondary"
              style={{ borderColor: 'var(--color-border)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Apps */}
      <div className="grid gap-6 lg:grid-cols-2">
        {group.apps.map((app) => {
          const PlatformIcon = app.platform === 'Desktop' ? Monitor : Smartphone;
          return (
            <div
              key={app.id}
              className="flex flex-col overflow-hidden rounded-2xl border"
              style={{ borderColor: 'var(--color-border-light)', background: 'var(--color-surface-secondary)' }}
            >
              {/* Visual */}
              <div
                className="flex items-center justify-center px-6 py-8"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${group.accent}33, transparent 70%)`,
                }}
              >
                <AppMockup variant={app.mockup} accent={group.accent} />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h5 className="text-xl font-bold text-text-primary">{app.name}</h5>
                  <span
                    className="inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-semibold"
                    style={{ background: `${group.accent}1f`, color: group.accent }}
                  >
                    <PlatformIcon size={12} className="mr-1.5" />
                    {app.platform}
                  </span>
                </div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-text-muted">
                  {app.audience}
                </p>
                <p className="mb-4 leading-relaxed text-text-secondary">{app.description}</p>

                <ul className="mb-5 space-y-2">
                  {app.highlights.map((item) => (
                    <li key={item} className="flex items-start text-sm text-text-secondary">
                      <span
                        className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: group.accent }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {app.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md px-2 py-1 text-xs font-medium text-text-secondary"
                        style={{ background: 'var(--color-border-light)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(app.liveUrl || app.githubUrl) && (
                    <div className="flex items-center gap-4">
                      {app.liveUrl && (
                        <a
                          href={app.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-medium"
                          style={{ color: group.accent }}
                        >
                          <ExternalLink size={16} className="mr-1.5" />
                          Live
                        </a>
                      )}
                      {app.githubUrl && (
                        <a
                          href={app.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-medium text-text-secondary hover:text-text-primary"
                        >
                          <Github size={16} className="mr-1.5" />
                          Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default ProjectGroup;
