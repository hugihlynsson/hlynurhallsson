import { NextFunctionComponent } from 'next'
import Head from 'next/head'
import { withRouter, SingletonRouter } from 'next/router'

import Frame from '../components/frame'
import Nav from '../components/nav'

interface Props {
  router: SingletonRouter
}

const Catalouges: NextFunctionComponent<Props> = ({ router }) => (
  <Frame>
    <Head>
      <title>CATALOUGES // HLYNUR HALLSSON</title>
    </Head>

    <Nav path={router.route} />

    <img src="/static/images/catalouges/18.jpg" alt="" />
    <img src="/static/images/catalouges/17.jpeg" alt="" />
    <img src="/static/images/catalouges/16.jpeg" alt="" />
    <img src="/static/images/catalouges/15.jpeg" alt="" />
    <img src="/static/images/catalouges/14.jpeg" alt="" />
    <img src="/static/images/catalouges/13.jpeg" alt="" />
    <img src="/static/images/catalouges/12.jpeg" alt="" />
    <img src="/static/images/catalouges/11.jpeg" alt="" />
    <img src="/static/images/catalouges/10.jpeg" alt="" />
    <img src="/static/images/catalouges/9.jpeg" alt="" />
    <img src="/static/images/catalouges/8.jpeg" alt="" />
    <img src="/static/images/catalouges/7.jpeg" alt="" />
    <img src="/static/images/catalouges/6.jpeg" alt="" />
    <img src="/static/images/catalouges/5.jpeg" alt="" />
    <img src="/static/images/catalouges/4.jpeg" alt="" />
    <img src="/static/images/catalouges/3.jpeg" alt="" />
    <img src="/static/images/catalouges/2.jpeg" alt="" />
    <img src="/static/images/catalouges/1.jpeg" alt="" />

    <style jsx>{`
      img {
        display: block;
        max-width: 100%;
        margin-bottom: 32px;
      }
    `}</style>
  </Frame>
)

export default withRouter(Catalouges)
