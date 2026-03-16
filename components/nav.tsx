import Link from 'next/link'

interface Props {
  path: string
}

const Nav = ({ path }: Props) => (
  <nav>
    <ul>
      <li>
        <Link href="/" className={path === '/' ? 'current' : ''}>
          <h1>Hlynur Hallsson</h1>
        </Link>
      </li>

      <li>
        <Link href="/cv" className={path === '/cv' ? 'current' : ''}>
          CV
        </Link>
      </li>

      <li>
        <Link
          href="/blattblad"
          className={path === '/blattblad' ? 'current' : ''}
        >
          Blatt Blað
        </Link>
      </li>

      <li>
        <Link
          href="/projects"
          className={path === '/projects' ? 'current' : ''}
        >
          Projects
        </Link>
      </li>

      <li>
        <Link href="/works" className={path === '/works' ? 'current' : ''}>
          Works
        </Link>
      </li>

      <li>
        <Link
          href="/catalouges"
          className={path === '/catalouges' ? 'current' : ''}
        >
          Catalouges
        </Link>
      </li>

      <li>
        <Link href="/contact" className={path === '/contact' ? 'current' : ''}>
          Contact
        </Link>
      </li>
    </ul>

    <style jsx global>{`
      nav ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        margin-right: -16px;
      }
      nav li {
        font-size: 16px;
        margin-right: 16px;
        margin-bottom: 16px;
      }
      nav h1 {
        font-size: inherit;
        font-weight: inherit;
        margin: 0;
      }
      nav a {
        display: block;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        padding: 6px 10px 6px;
        transition: all 0.2s;
        font-weight: 600;
      }
      nav .current {
        background-color: black;
        color: white;
      }
      nav a:hover {
        background-color: black;
        color: white;
      }

      @media (min-width: 900px) {
        nav a:first-child:not(.current) {
          margin-left: -10px;
        }
      }
    `}</style>
  </nav>
)

export default Nav
