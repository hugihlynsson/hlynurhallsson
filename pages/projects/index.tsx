import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Frame from '../../components/frame'
import Nav from '../../components/nav'
import ProjectsNav from '../../components/projects-nav'

const projects = [
  { slug: 'biginjapan', image: '/images/projects/biginjapan/1.jpeg', label: 'BIG IN JAPAN' },
  { slug: 'never', image: '/images/projects/never/0.jpg', label: 'NEVER' },
  { slug: 'kw', image: '/images/projects/kw/0.jpeg', label: 'KUNSTRAUM WOHNRAUM' },
  { slug: 'don', image: '/images/projects/don/0.jpeg', label: 'DON' },
  { slug: 'pile', image: '/images/projects/pile/0.gif', label: 'PILE' },
  { slug: 'minimo', image: '/images/projects/minimo/0.jpg', label: 'MINIMO' },
]

const Projects = () => {
  const router = useRouter()

  return (
    <Frame>
      <Head>
        <title>PROJECTS // HLYNUR HALLSSON</title>
      </Head>

      <Nav path={router.route} />
      <ProjectsNav current="" />

      <div className="grid">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="project-link">
            <img src={project.image} alt={project.label} />
            <span>{project.label}</span>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 16px;
        }
      `}</style>
      <style jsx global>{`
        .project-link {
          display: block;
          text-decoration: none;
          color: black;
          text-transform: uppercase;
        }
        .project-link img {
          display: block;
          max-width: 100%;
        }
        .project-link span {
          display: block;
          font-size: 14px;
          margin-top: 8px;
        }
      `}</style>
    </Frame>
  )
}

export default Projects
