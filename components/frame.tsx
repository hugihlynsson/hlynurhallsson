import { ReactNode } from 'react'

const Frame = ({ children }: { children: ReactNode }) => (
  <main>
    {children}

    <style jsx>{`
      main {
        padding: 16px;
        max-width: 880px;
      }
    `}</style>
  </main>
)

export default Frame
