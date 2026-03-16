import SubNav from './sub-nav'

const items = [
  { href: '/projects/biginjapan', label: 'BIG IN JAPAN' },
  { href: '/projects/never', label: 'NEVER' },
  { href: '/projects/kw', label: 'KW' },
  { href: '/projects/don', label: 'DON' },
  { href: '/projects/pile', label: 'PILE' },
  { href: '/projects/minimo', label: 'MINIMO' },
]

interface Props {
  current: string
}

const ProjectsNav = ({ current }: Props) => (
  <SubNav items={items} current={`/projects/${current}`} />
)

export default ProjectsNav
