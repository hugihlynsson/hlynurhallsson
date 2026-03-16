import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Frame from '../../components/frame'
import Nav from '../../components/nav'
import WorksNav from '../../components/works-nav'

const thumbnails = [
  { id: 35, src: '/images/works/35/0.jpg' },
  { id: 34, src: '/images/works/34/0.jpg' },
  { id: 33, src: '/images/works/33/0.jpg' },
  { id: 32, src: '/images/works/32/0.jpg' },
  { id: 31, src: '/images/works/31/0.jpg' },
  { id: 30, src: '/images/works/30/0.jpg' },
  { id: 29, src: '/images/works/29/0.jpg' },
  { id: 28, src: '/images/works/28/0.jpg' },
  { id: 27, src: '/images/works/27/0.jpg' },
  { id: 26, src: '/images/works/26/0.jpg' },
  { id: 25, src: '/images/works/25/0.jpg' },
  { id: 24, src: '/images/works/24/0.jpg' },
  { id: 23, src: '/images/works/23/0.jpg' },
  { id: 22, src: '/images/works/22/0.jpg' },
  { id: 21, src: '/images/works/21/0.jpg' },
  { id: 20, src: '/images/works/20/0.jpg' },
  { id: 19, src: '/images/works/19/0.jpg' },
  { id: 18, src: '/images/works/18/0.jpg' },
  { id: 17, src: '/images/works/17/0.jpg' },
  { id: 16, src: '/images/works/16/0.jpg' },
  { id: 15, src: '/images/works/15/0.gif' },
  { id: 14, src: '/images/works/14/0.jpeg' },
  { id: 13, src: '/images/works/13/0.jpeg' },
  { id: 12, src: '/images/works/12/0.jpeg' },
  { id: 11, src: '/images/works/11/0.jpeg' },
  { id: 10, src: '/images/works/10/0.jpeg' },
  { id: 8, src: '/images/works/8/0.jpeg' },
  { id: 7, src: '/images/works/7/0.jpeg' },
  { id: 5, src: '/images/works/5/0.jpeg' },
  { id: 4, src: '/images/works/4/0.jpeg' },
  { id: 3, src: '/images/works/3/0.jpeg' },
  { id: 1, src: '/images/works/1/0.jpeg' },
]

const Works = () => {
  const router = useRouter()

  return (
    <Frame>
      <Head>
        <title>WORKS // HLYNUR HALLSSON</title>
      </Head>

      <Nav path={router.route} />

      <WorksNav current={0} />

      <div className="thumbnails">
        {thumbnails.map(({ id, src }) => (
          <Link key={id} href={`/works/${id}`}>
            <img src={src} alt="" />
          </Link>
        ))}
      </div>

      <style jsx>{`
        .thumbnails {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .thumbnails img {
          display: block;
          height: 200px;
        }
      `}</style>
    </Frame>
  )
}

export default Works
