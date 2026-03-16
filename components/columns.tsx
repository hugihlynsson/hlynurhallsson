import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Columns = ({ children }: Props) => (
  <div className="columns">
    {children}

    <style jsx global>{`
      .columns {
        display: block;
      }
      @media (min-width: 900px) {
        .columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
      }
    `}</style>
  </div>
)

export default Columns
