import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'

import Frame from '../../components/frame'
import Nav from '../../components/nav'
import WorksNav from '../../components/works-nav'

interface ContentBlock {
  html: string
}

interface WorkProps {
  id: number
  title: string
  blocks: ContentBlock[]
}

function extractContent(html: string): ContentBlock[] {
  const blocks: ContentBlock[] = []

  // Find content after the two navbox sections
  // Each navbox is inside a <td><div id="navbox">...</div></td>
  let searchPos = 0
  for (let i = 0; i < 2; i++) {
    const navboxIdx = html.indexOf('id="navbox"', searchPos)
    if (navboxIdx === -1) break
    const closeTd = html.indexOf('</td>', navboxIdx)
    if (closeTd === -1) break
    searchPos = closeTd + 5
  }

  // Find the closing </tr> to bound our search
  const trEnd = html.indexOf('</tr>', searchPos)
  if (trEnd === -1) return blocks

  const content = html.substring(searchPos, trEnd)

  // Extract each <td>...</td> as a content block
  const tdRegex = /<td>([\s\S]*?)<\/td>/g
  let match
  while ((match = tdRegex.exec(content)) !== null) {
    let cellHtml = match[1].trim()
    if (!cellHtml) continue

    // Fix relative image paths to absolute
    cellHtml = cellHtml.replace(/src="\.\.\/images\//g, 'src="/images/')

    // Fix relative link paths
    cellHtml = cellHtml.replace(/href="\.\.\/([^"]+)"/g, (_, p) => {
      const name = p.replace('.html', '')
      return `href="/${name}"`
    })

    // Remove empty h3 spacers
    if (cellHtml === '<h3>&nbsp;</h3>') continue
    cellHtml = cellHtml.replace(/<h3>&nbsp;<\/h3>\s*/g, '')

    blocks.push({ html: cellHtml })
  }

  return blocks
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = []
  for (let i = 1; i <= 36; i++) {
    paths.push({ params: { id: String(i) } })
  }
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<WorkProps> = async ({ params }) => {
  const id = Number(params?.id)
  const filePath = path.join(process.cwd(), 'works', `${id}.html`)
  const html = fs.readFileSync(filePath, 'utf8')

  // Extract title
  const titleMatch = html.match(/<title>(.*?) \/\/ HLYNUR HALLSSON<\/title>/)
  const title = titleMatch ? titleMatch[1] : `Work ${id}`

  const blocks = extractContent(html)

  return { props: { id, title, blocks } }
}

const WorkPage = ({ id, title, blocks }: WorkProps) => {
  return (
    <Frame>
      <Head>
        <title>{`${title} // HLYNUR HALLSSON`}</title>
      </Head>

      <Nav path="/works" />

      <WorksNav current={id} />

      <div className="work-content">
        {blocks.map((block, i) => (
          <div
            key={i}
            className="work-block"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        ))}
      </div>

      <style jsx>{`
        .work-content {
          margin-top: 24px;
        }
        .work-block {
          margin-bottom: 24px;
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
}

export default WorkPage
