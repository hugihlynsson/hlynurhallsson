import { StatelessComponent } from 'react'

const Index: StatelessComponent = () => (
  <nav>
    <ul>
      <li>
        <a href="/" className="current">
          <h1>Hlynur Hallsson</h1>
        </a>
      </li>

      <li>
        <a href="/">CV</a>
      </li>

      <li>
        <a href="/">Blatt Blað</a>
      </li>

      <li>
        <a href="/">Projects</a>
      </li>

      <li>
        <a href="/">Works</a>
      </li>

      <li>
        <a href="/">Catalouges</a>
      </li>

      <li>
        <a href="/">Contact</a>
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
