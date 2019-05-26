import { StatelessComponent } from 'react'

const Frame: StatelessComponent<{}> = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        padding: 16px;
        max-width: 880px;
        margin: 0 auto;
      }
    `}</style>
  </div>
)

export default Frame
