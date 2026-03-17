import Head from 'next/head'
import { useState } from 'react'
import Columns from '../../components/columns'
import Frame from '../../components/frame'
import Nav from '../../components/nav'
import ProjectsNav from '../../components/projects-nav'

const tabs = [
  { id: 'never', label: 'NEVER' },
  { id: 'berning', label: 'BERNING' },
  { id: 'eckstein', label: 'ECKSTEIN' },
  { id: 'jonahlif', label: 'J\u00d3NA HL\u00cdF' },
  { id: 'jonlaxdal', label: 'J\u00d3N LAXDAL' },
  { id: 'schoeller', label: 'SCHOELLER' },
  { id: 'vogel', label: 'VOGEL' },
  { id: 'asmundur', label: '\u00c1SMUNDUR' },
  { id: 'bier', label: 'BIER' },
  { id: 'margret', label: 'MARGR\u00c9T' },
  { id: 'radhildur', label: 'R\u00c1\u00d0HILDUR' },
  { id: 'haraldur', label: 'HARALDUR' },
  { id: 'steig', label: 'STEIG' },
  { id: 'vdberg', label: 'V. D. BERG' },
  { id: 'toroddur', label: '\u00de\u00d3RODDUR' },
  { id: 'ragnar', label: 'RAGNAR' },
  { id: 'gunnar', label: 'GUNNAR' },
  { id: 'tumi', label: 'TUMI' },
  { id: 'magnus', label: 'MAGN\u00daS' },
]

const Never = () => {
  const [activeTab, setActiveTab] = useState('never')

  return (
    <Frame>
      <Head>
        <title>NEVER // HLYNUR HALLSSON</title>
      </Head>

      <Nav path="/projects" />
      <ProjectsNav current="never" />

      <Columns>
        <div>
          <p className="column-heading">ALDREI - NIE - NEVER</p>
          <p>
            er ein sýning á þremur stöðum með 18 listamönnum. Hlynur Hallsson
            valdi listamennina sem að hans mati eru framúrskarandi og vinna á
            ólíkan hátt með hugmyndir og efni. Útkoman er ein samsýning sem fer
            fram á þremur stöðum: í Reykjavík, í Berlín og á Akureyri.
            Listamönnunum er blandað saman og sýna sex á hverjum stað.
          </p>
        </div>
        <div>
          <p className="column-heading">ALDREI - NIE - NEVER</p>
          <p>
            ist eine Ausstellung an drei Orten von 18 Künstlern. Hlynur Hallsson
            wählte nach seiner Schätzung bedeutende Künstler, die jeweils nach
            ihrer persönlichen Arbeitsmethode Ideen und Material verarbeiteten.
            Das Resultat ist eine Kollektiv-Ausstellung, die an drei Orten
            stattfindet, und zwar in Reykjavík, Berlin und Akureyri.
          </p>
        </div>
        <div>
          <p className="column-heading">ALDREI - NIE - NEVER</p>
          <p>
            is an exhibition at three different locations featuring the works of
            18 artists. Hlynur Hallsson selected the artists who, according to
            his appraisal, are outstanding and work independently and in
            different ways with their ideas and subjects. The outcome is a group
            exhibition to be held at three locations: Reykjavík, Berlin and
            Akureyri.
          </p>
        </div>
      </Columns>

      <div className="venues">
        <div className="venue">
          <p>
            <strong>Nýlistasafnið, The Living Art Museum:</strong> 14. ágúst -
            12. september 2004
          </p>
          <p>Laugavegur 26, IS-101 Reykjavík, tel. +354 5514350 www.nylo.is</p>
          <p>Opening saturday 14.08. at 16:00. Open wed.-sun. 14-18</p>
          <p className="artist-list">
            Anne Berning, www.anneberning.de *1958 Weil, #Berlin
            <br />
            Knut Eckstein *1958 Treysa, #Berlin
            <br />
            Jóna Hlíf Halldórsdóttir *1976 Reykjavík, #Akureyri
            <br />
            Jón Laxdal Halldórsson *1950 Akureyri, #Akureyri
            <br />
            Ulrike Schoeller *1967 Hannover, #Hannover
            <br />
            Matten Vogel *1968 Hannover, #Berlin
          </p>
        </div>

        <div className="venue">
          <p>
            <strong>Kuckei+Kuckei:</strong> 25.09. - 6.11. 2004
          </p>
          <p>
            Linienstrasse 158, D-10115 Berlin, tel. +49 (0)30 8834354
            www.kuckei-kuckei.de
          </p>
          <p>
            Opening friday 24.09. at 19:00. Open tue.-fr. 11-18 & sat. 11-17
          </p>
          <p className="artist-list">
            Ásmundur Ásmundsson www.this.is/ausgot *1971 Akureyri, #Amsterdam
            <br />
            Rolf Bier www.kultureflash.net/archive/76/priview.html *1960
            Würzburg, #New York & Hannover
            <br />
            Margrét H. Blöndal www.this.is/fyll/artists/maggab *1970, #Reykjavík
            <br />
            Ráðhildur Ingadóttir www.this.is/fyll/artists/radhildur *1959
            Reykjavík, #Reykjavík
            <br />
            Haraldur Jónsson www.this.is/comet *1961 Helsinki, #Reykjavík
            <br />
            Alexander Steig www.alexandersteig.de *1968, #München & Hannover
          </p>
        </div>

        <div className="venue">
          <p>
            <strong>Gallerí +:</strong> 13.11.- 5.12. 2004
          </p>
          <p>Brekkugata 35, IS-600 Akureyri, tel. +354 4627818</p>
          <p>
            Opening saturday 13.11. at 16:00. Open sat.-sun. 14-17 and on
            appointment
          </p>
          <p className="artist-list">
            Oliver van den Berg *1967 Essen, #Berlin
            <br />
            Þóroddur Bjarnason www.thoroddur.com *1970 Reykjavík, #Reykjavík
            <br />
            Ragnar Kjartansson www.this.is/rassi *1976 Reykjavík, #Reykjavík
            <br />
            Gunnar Kristinsson *1966 Akureyri, #Berlin
            <br />
            Tumi Magnússon www.tumimagnusson.com *1957 Reykjavík, #Reykjavík
            <br />
            Magnús Sigurðarson www.this.is/fyll/artists/maggi *1966 Reykjavík,
            #Reykjavík & Miami
          </p>
        </div>
      </div>

      <div className="tab-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 'never' && (
          <div className="images">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="image-block">
                <img src={`/images/projects/never/${n}.jpeg`} alt="" />
                {n === 3 && (
                  <p className="caption">
                    Opening, Gallerí +, Akureyri 13.10.2004
                  </p>
                )}
                {n === 5 && (
                  <p className="caption">
                    Opening, Kuckei + Kuckei, Berlin 24.09.2004
                  </p>
                )}
                {n === 7 && (
                  <p className="caption">
                    Opening, The Living Art Museum, Reykjavík 14.08.2004
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab !== 'never' && (
          <div className="images">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="image-block">
                <img
                  src={`/images/projects/never/${activeTab}/${n}.jpeg`}
                  alt=""
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        h2 {
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .column-heading {
          font-size: 14px;
          padding-bottom: 8px;
          border-bottom: 3px solid black;
          margin-bottom: 16px;
        }
        .columns p {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 12px;
        }
        .venues {
          margin-top: 24px;
          margin-bottom: 24px;
        }
        .venue {
          margin-bottom: 24px;
        }
        .venue p {
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 4px;
        }
        .artist-list {
          margin-top: 8px;
        }
        .tab-nav {
          margin-bottom: 24px;
        }
        .tab-nav button {
          display: inline-block;
          text-transform: uppercase;
          font-size: 14px;
          padding: 4px 8px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
        }
        .tab-nav button:hover,
        .tab-nav button.active {
          background-color: black;
          color: white;
        }
        .images {
          margin-top: 16px;
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

export default Never
