import { Link, useParams } from "react-router";
import { Badge } from "../../../shared/components/Badge";
import { Button } from "../../../shared/components/Button";
import { Container } from "../../../shared/components/Container";
import { Mask } from "../../../shared/components/Mask";
import { contact } from "../../../shared/data/site";
import { ProjectPreview } from "../components/ProjectPreview";
import { projects } from "../data/projects";

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  const p = projects[i];

  if (!p) {
    return (
      <Container className="pt-40">
        <h1 className="text-5xl font-extrabold tracking-tighter">Project not found.</h1>
        <Link to="/#projects" className="mt-6 inline-block text-primary">All work</Link>
      </Container>
    );
  }
  const next = projects[(i + 1) % projects.length];

  return (
    <Container className="pt-32">
      <article>
        <p className="font-mono text-xs text-font-light">{p.category}</p>
        <h1 className="mt-4 text-[13vw] font-extrabold leading-[0.9] tracking-tighter md:text-[9vw]"><Mask>{p.name}</Mask></h1>
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8"><ProjectPreview project={p} /></div>
          <div className="flex flex-col gap-6 md:col-span-4">
            <p className="text-xl">{p.description}</p>
            <ul className="flex flex-wrap gap-2">{p.tech.map((t) => <li key={t}><Badge>{t}</Badge></li>)}</ul>
            <div className="flex flex-wrap gap-3">
              {p.live && <Button href={p.live} variant="solid">View Live</Button>}
              {p.github && <Button href={p.github}>GitHub</Button>}
              {!p.live && <Button href={`mailto:${contact.email}?subject=${encodeURIComponent(p.name)}`}>Ask about this project</Button>}
            </div>
          </div>
        </div>
        <Link to={`/projects/${next.slug}`} className="group mt-24 block border-t border-border py-10">
          <span className="font-mono text-xs text-font-light">Next project</span>
          <span className="block text-5xl font-extrabold tracking-tighter transition-transform duration-500 group-hover:translate-x-4 md:text-8xl">{next.name}</span>
        </Link>
      </article>
    </Container>
  );
};
