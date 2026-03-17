import { ReactNode } from 'react'
import Head from 'next/head'

import Frame from './frame'
import Nav from './nav'
import WorksNav from './works-nav'

interface Props {
  id: number
  title: string
  children: ReactNode
}

const WorkLayout = ({ id, title, children }: Props) => (
  <Frame>
    <Head>
      <title>{`${title} // HLYNUR HALLSSON`}</title>
    </Head>

    <Nav path="/works" />

    <WorksNav current={id} />

    <div className="work-content">{children}</div>

    <style jsx>{`
      .work-content {
        margin-top: 24px;
      }
    `}</style>
    <style jsx global>{`
      .work-content img {
        display: block;
        max-width: 100%;
        margin-bottom: 8px;
      }
      .work-content h3 {
        font-size: 18px;
        margin: 0 0 8px;
        text-transform: uppercase;
        padding-bottom: 8px;
        border-bottom: 3px solid black;
      }
      .work-content p {
        font-size: 14px;
        line-height: 1.5;
        max-width: 100%;
        width: auto !important;
        min-width: 0 !important;
      }
      .work-content a {
        color: black;
      }
    `}</style>
  </Frame>
)

export default WorkLayout
