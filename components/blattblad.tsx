import { ReactNode } from 'react'

interface Props {
  imageUrl?: string
  version: string
  time?: string
  contributors: ReactNode[]
}

const BlattBlad = ({ imageUrl, version, time, contributors }: Props) => (
  <article>
    <img src={imageUrl} alt={`BlattBlað ${version}`} />

    <header>
      <h1>
        {!imageUrl && 'Blatt Blað '}
        {version} {time}
      </h1>
    </header>

    <ul>
      {contributors.map((contributor, index) => (
        <li key={index}>{contributor}</li>
      ))}
    </ul>

    <style jsx>{`
      img {
        max-width: 100%;
        height: auto;
        border: 1px solid black;
      }

      h1 {
        font-size: 1em;
        text-transform: uppercase;
      }

      ul {
        padding: 0;
      }
      li {
        display: block;
        margin-right: 1em;
      }

      @media (min-width: 500px) {
        li {
          display: inline-block;
        }
      }
    `}</style>
  </article>
)

export default BlattBlad
