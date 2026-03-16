import Head from 'next/head'
import { useRouter } from 'next/router'

import Frame from '../components/frame'
import Nav from '../components/nav'

const Contact = () => {
  const router = useRouter()

  return (
    <Frame>
      <Head>
        <title>CONTACT // HLYNUR HALLSSON</title>
      </Head>

      <Nav path={router.route} />

      <img src="/images/cv/2.jpg" alt="" />

      <h1>Hlynur Hallsson</h1>

      <p>
        Prenzlauer Allee 49, 10405 Berlin, Germany
        <br />
        Aðalstræti 16, IS-600 Akureyri
        <br />
        E-Mail:{' '}
        <a href="mailto:hlynurhallsson@gmail.com">hlynurhallsson@gmail.com</a>
        <br />
        TEL: <a href="tel:+3546594744">+354 659 4744</a>
      </p>

      <style jsx>{`
        img {
          display: block;
          max-width: 100%;
          margin-bottom: 32px;
        }

        h1 {
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
        }

        a {
          color: inherit;
        }
      `}</style>
    </Frame>
  )
}

export default Contact
