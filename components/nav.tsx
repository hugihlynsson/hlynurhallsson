import { StatelessComponent } from 'react'
import Link from 'next/link'

interface Props {
  path: string
}

const Index: StatelessComponent<Props> = ({ path }) => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a className={path === '/' ? 'current' : ''}>
            <h1>Hlynur Hallsson</h1>
          </a>
        </Link>
      </li>

      <li>
        <Link href="/cv">
          <a className={path === '/cv' ? 'current' : ''}>CV</a>
        </Link>
      </li>

      <li>
        <Link href="/blattblad">
          <a className={path === '/blattblad' ? 'current' : ''}>Blatt Blað</a>
        </Link>
      </li>

      <li>
        <Link href="/projects">
          <a className={path === '/cv' ? 'current' : ''}>Projects</a>
        </Link>
      </li>

      <li>
        <Link href="/works">
          <a className={path === '/works' ? 'current' : ''}>Works</a>
        </Link>
      </li>

      <li>
        <Link href="/catalouges">
          <a className={path === '/catalouges' ? 'current' : ''}>Catalouges</a>
        </Link>
      </li>

      <li>
        <Link href="/contact">
          <a className={path === '/contact' ? 'current' : ''}>Contact</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        margin-right: -16px;
      }
      li {
        font-size: 16px;
        margin-right: 16px;
        margin-bottom: 16px;
      }
      h1 {
        font-size: inherit;
        font-weight: inherit;
        margin: 0;
      }
      a {
        display: block;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        padding: 6px 10px 6px;
        transition: all 0.2s;
        font-weight: 600;
      }
      .current {
        background-color: black;
        color: white;
      }
      a:hover {
        background-color: black;
        color: white;
      }
    `}</style>
  </nav>
)

export default Index
