import Head from 'next/head'
import Frame from '../../components/frame'
import Nav from '../../components/nav'
import ProjectsNav from '../../components/projects-nav'

const BigInJapan = () => {
  return (
    <Frame>
      <Head>
        <title>BIG IN JAPAN // HLYNUR HALLSSON</title>
      </Head>

      <Nav path="/projects" />
      <ProjectsNav current="biginjapan" />

      <h2>BIG IN JAPAN</h2>

      <p className="description">
        I asked six artist who had already been in Japan to do a small work that
        I could exhibit in the Sojo Gallery in Kumamoto. These were all
        exhibiting or studying in Japan but this was my first time here. The
        exhibition BIG IN JAPAN is a part of my contribution for the exhibition
        PASSAGAES TO OLYMP. The artists taking part in this work are from
        Germany, Korea and Iceland: Daniel Behrendt, Thóroddur Bjarnason, Eva
        Maria Kollischan, Ulrike Schoeller, Kwanho Yuh and Michael Zwingmann.
      </p>

      <p className="curated">Curated by Hlynur Hallsson</p>

      <div className="artists">
        <p>Daniel Behrendt "Liebe" (Love), 2005</p>
        <p>Thoroddur Bjarnason "Enron On Kawara" 2004</p>
        <p>Eva-Maria Kollischan o.T., 2005</p>
        <p>Ulrike Schoeller "Kuppel Nr. 16" (Dome Nr. 16), 2005</p>
        <p>Kwanho Yuh o.T., 2005</p>
        <p>Michael Zwingmann "Yama", 2005</p>
      </div>

      <div className="images">
        <div className="image-block">
          <img src="/images/projects/biginjapan/1.jpeg" alt="" />
        </div>
        <div className="image-block">
          <img src="/images/projects/biginjapan/2.jpeg" alt="" />
          <p className="caption">Kwanho Yuh o.T., 2005</p>
        </div>
        <div className="image-block">
          <img src="/images/projects/biginjapan/3.jpeg" alt="" />
          <p className="caption">
            Ulrike Schoeller "Kuppel Nr. 16" (Dome Nr. 16), 2005
          </p>
        </div>
        <div className="image-block">
          <img src="/images/projects/biginjapan/4.jpeg" alt="" />
          <p className="caption">Michael Zwingmann "Yama", 2005</p>
        </div>
        <div className="image-block">
          <img src="/images/projects/biginjapan/5.jpeg" alt="" />
          <p className="caption">Thoroddur Bjarnason "Enron On Kawara" 2004</p>
        </div>
        <div className="image-block">
          <img src="/images/projects/biginjapan/6.jpeg" alt="" />
          <p className="caption">Daniel Behrendt "Liebe" (Love), 2005</p>
        </div>
        <div className="image-block">
          <img src="/images/projects/biginjapan/7.jpeg" alt="" />
          <p className="caption">Eva-Maria Kollischan o.T., 2005</p>
        </div>
        <div className="image-block">
          <img src="/images/projects/biginjapan/8.jpeg" alt="" />
        </div>
      </div>

      <style jsx>{`
        h2 {
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 600;
          border-bottom: 3px solid black;
          padding-bottom: 8px;
          margin-bottom: 16px;
        }
        .description {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .curated {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .artists p {
          font-size: 14px;
          margin: 4px 0;
        }
        .images {
          margin-top: 24px;
        }
        .image-block {
          margin-bottom: 24px;
        }
        .image-block img {
          display: block;
          max-width: 100%;
        }
        .caption {
          font-size: 14px;
          margin-top: 8px;
        }
      `}</style>
    </Frame>
  )
}

export default BigInJapan
