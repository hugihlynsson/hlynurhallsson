import { StatelessComponent } from 'react'

const Frame: StatelessComponent<{}> = ({ children }) => (
  <main>
    {children}

    <style jsx>{`
      main {
        padding: 16px;
        max-width: 880px;
        margin: 0 auto;
      }
    `}</style>
  </main>
)

export default Frame
