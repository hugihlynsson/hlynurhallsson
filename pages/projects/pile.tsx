import Head from 'next/head'
import { useState } from 'react'
import Frame from '../../components/frame'
import Nav from '../../components/nav'
import ProjectsNav from '../../components/projects-nav'

const tabs = [
  { id: 'opening1', label: 'OPENING 1' },
  { id: 'opening2', label: 'OPENING 2' },
  { id: 'opening3', label: 'OPENING 3' },
  { id: 'opening4', label: 'OPENING 4' },
  { id: 'rolfbiercv', label: 'ROLF BIER CV' },
  { id: 'kollischancv', label: 'KOLLISCHAN CV' },
  { id: 'wagnercv', label: 'WAGNER CV' },
  { id: 'kajnyborgcv', label: 'KEJ NYBORG CV' },
  { id: 'vogelcv', label: 'VOGEL CV' },
  { id: 'horellicv', label: 'HORELLI CV' },
  { id: 'gunnhildurcv', label: 'GUNNHILDUR CV' },
  { id: 'jamescarlcv', label: 'JAMES CARL CV' },
]

const openingImages: Record<
  string,
  { count: number; extensions?: Record<number, string> }
> = {
  opening1: { count: 6, extensions: { 1: 'gif' } },
  opening2: { count: 4 },
  opening3: { count: 7 },
  opening4: { count: 4 },
}

const Pile = () => {
  const [activeTab, setActiveTab] = useState('opening1')

  const renderOpeningImages = (key: string) => {
    const config = openingImages[key]
    if (!config) return null
    return (
      <div className="images">
        {Array.from({ length: config.count }, (_, i) => i + 1).map((n) => {
          const ext = config.extensions?.[n] || 'jpeg'
          return (
            <div key={n} className="image-block">
              <img src={`/images/projects/pile/${key}/${n}.${ext}`} alt="" />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <Frame>
      <Head>
        <title>PILE // HLYNUR HALLSSON</title>
      </Head>

      <Nav path="/projects" />
      <ProjectsNav current="pile" />

      <div className="title-image">
        <img src="/images/projects/pile/0.gif" alt="PILE" />
      </div>

      <h2>BINGUR - HAUFEN - PILE</h2>

      <div className="description">
        <p>
          ist ein Ausstellungsprojekt des isländischen Künstlers Hlynur
          Hallsson, der zurzeit als Stipendiat der Künstlerhäuser Worpswede auf
          dem Barkenhoff arbeitet. Während seines Aufenthaltes hier lädt er
          insgesamt 8 internationale Künstler - jeweils 2 zur gleichen Zeit -
          ein, in seinem Atelier eine Arbeit zu realisieren. Die Arbeiten
          verbleiben dann im Atelier, sodass die folgenden Künstler darauf
          aufbauen bzw. reagieren können. Untereinander kennen sich diese
          Künstler noch nicht, alle arbeiten jedoch konzeptuell in je
          unterschiedlicher Art und Weise. Die Idee des Projektes ist, dass die
          Künstler sowohl mit ihren Arbeiten als auch persönlich einen Dialog
          führen können. bingur – haufen – pile beginnt mit der
          Ausstellungseröffnung am Samstag, den 9.3. um 16.00 Uhr und läuft bis
          Ende Juni.
        </p>
        <p>
          Projekt von Hlynur Hallsson in Zusammenarbeit mit den Künstlerhäusern
          Worpswede
        </p>
      </div>

      <div className="schedule">
        <p>
          <strong>Eröffnung</strong> am Samstag, 9. März um 16 Uhr
          <br />
          Opening on saturday, march 9th. 2002 at 16.00
          <br />
          Rolf Bier (Berlin/Hannover) + Eva Maria Kollischan (Münster)
        </p>
        <p>
          <strong>Eröffnung</strong> am Samstag, 27. April um 16 Uhr
          <br />
          Opening on saturday, april 27th. 2002 at 16.00
          <br />
          Kaj Nyborg (København) + Silke Wagner (Frankfurt a. M.)
        </p>
        <p>
          <strong>Eröffnung</strong> am Samstag, 11. Mai um 16 Uhr
          <br />
          Opening on saturday, may11th. 2002 at 16.00
          <br />
          Laura Horelli (Helsinki/Berlin) + Matten Vogel (Berlin)
        </p>
        <p>
          <strong>Eröffnung</strong> am Samstag, 15. Juni um 16 Uhr
          <br />
          Opening on saturday, june 15th. 2002 at 16.00
          <br />
          James Carl (Toronto) + Gunnhildur Hauksdóttir (Reykjavík)
        </p>
        <p>Geöffnet ist die Ausstellung nach Vereinbarung</p>
        <p>Hlynur Hallsson Tel. 04792 2816 hallsson@gmx.net</p>
        <p>
          Barkenhoff - Atelier 4<br />
          Ostendorfer Str. 10
          <br />
          D-27726 Worpswede
          <br />
          Tel: +49 (0)4792 2816
          <br />
          E-mail: hallsson@gmx.net
        </p>
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
        {activeTab === 'opening1' && renderOpeningImages('opening1')}
        {activeTab === 'opening2' && renderOpeningImages('opening2')}
        {activeTab === 'opening3' && renderOpeningImages('opening3')}
        {activeTab === 'opening4' && renderOpeningImages('opening4')}

        {activeTab === 'rolfbiercv' && (
          <div className="cv-text">
            <h3>ROLF BIER</h3>
            <p>*1960 in Würzburg, lives and works in Hannover and Berlin</p>
            <p>
              Education / study visits
              <br />
              1980-87 Hochschule für Bildende Künste in Braunschweig
              <br />
              1987 Chelsea School of Art London
              <br />
              1994 Cité Internationale des Arts Paris
              <br />
              1995 Villa Massimo Rom
              <br />
              1996 Otto-Dix-Preis Gera
              <br />
              2001 Stipendium des Kunstfonds e.V. Bonn
            </p>
            <p>
              Einzelausstellungen (Auswahl) - Selected Solo Exhibitions
              <br />
              2002 „Die andere Seite", Kunstmuseum Heidenheim
              <br />
              2001 „miracle deposit", Kunstverein Friedrichshafen
              <br />
              2000 „Aufmaß am Netz" Zehntschaune Freden
              <br />
              1999 „nonstop carriers/Budapest replica", Galerie Knoll, Budapest
              <br />
              „Kristallzimmer", Galerie Klaus Fischer und Runge, Berlin
              <br />
              „Relational Panorama", Kunstverein Hannover
              <br />
              1998 „Skulpturen", Junge Kunst e.V., Wolfsburg
              <br />
              „Vier Stücke für eine Wohnung", Kunstraum Wohnraum, Hannover
              <br />
              „nonstop carriers", Skulpturen, Galerie Hans Knoll, Wien
              <br />
              1996 „Spielraum und Siedlung", Galerie Duppel, Stuttgart
              <br />
              Kunstverein Braunschweig
            </p>
            <p>
              Gruppenausstellungen (Auswahl) - Selected Group Exhibitions
              <br />
              2002 „Ding", Galerie Eugen Lendl, Graz
              <br />
              2001 „Fotografierte Bilder", Museum Bochum
              <br />
              „Milano - Europa 2001", Palazzo della Triennale, Milano
              <br />
              2000 „Happy birthday Johannes", Gutenbergpavillion Mainz
              <br />
              1999 „Zusammenhängen", Galerie Klaus Fischer, Berlin
              <br />
              „S/W und Farbe - Fotografien", Museum Bochum
              <br />
              1998 „Skulpturen", Prima Kunst, Kiel
              <br />
              1997 „Was ist" Zeughaus Wismar, Kunsthalle Rostock
              <br />
              1996 „Wiedersehen", Kunstverein Hannover
              <br />
              „Fishing for shapes?", Projektraum, Hannover und Künstlerhaus
              Bethanien, Berlin
            </p>
          </div>
        )}

        {activeTab === 'kollischancv' && (
          <div className="cv-text">
            <h3>EVA-MARIA KOLLISCHAN</h3>
            <p>*1966 in Nürnberg, lives and works in Münster</p>
            <p>
              Education / study visits
              <br />
              1988-89 Kommunikationsdesign, FH-Nürnberg, Diplom
              <br />
              1993-98 Freie Kunst, Kunstakademie München und Kunstakademie
              Münster bei Ulrich Erben
              <br />
              1998 Meisterschüler
              <br />
              1999 Reisestipendium, Stockholm
              <br />
              2000 Arbeitsstipendium der Stiftung Kunst und Kultur NRW
              <br />
              seit 1999 Mitarbeit im Förderverein Aktuelle Kunst, Münster
              <br />
              seit 2001 Lehrauftrag am Institut für Kunstpädagogik,
              Goethe-Universität Frankfurt
            </p>
            <p>
              Einzelausstellungen (Auswahl) - Selected Solo Exhibitions
              <br />
              2001 &quot;Symbolfoto&quot;, Theaterfoyer, Münster
              <br />
              2000 &quot;eine Tür, die sich von alleine öffnet, ab und zu&quot;,
              Münster. Licht-Installation, VIP-Lounge, der DSGV-Finanzgruppe,
              EXPO 2000, Hannover
              <br />
              1999 &quot;New York City&quot;, Cuba-Foyer, Münster
              <br />
              1996 &quot;ICH WEIß WOHL&quot;, Pavillon der Galerie Annelie
              Brusten, Wuppertal
            </p>
            <p>
              Gruppenausstellungen (Auswahl) - Selected Group Exhibitions
              <br />
              2001 &quot;sol over Dejbjerg&quot;, Skjern-Egvad Museum, Dänemark
              <br />
              &quot;believe&quot;, Westfälischer Kunstverein, Münster
              <br />
              &quot;Stille&quot;, Künstlerhaus Dortmund
              <br />
              1995 Galerie Münsterland, Emsdetten (K)
              <br />
              2000 &quot;Schnitt 2000&quot;, Kunstverein Düsseldorf (K)
              <br />
              Kulturserver/home/Einkaufspassage, Hannover
              <br />
              &quot;Puddels&quot;, Tokyo, Aomori, NRW &quot; Austauschprojekt
              mit Japan
              <br />
              1999 &quot;Lichteinfall&quot;, Simultanhalle, Köln
              <br />
              1998 &quot;Meisterschüler in westfälischen Schlössern&quot;,
              Schloss Brake, Lemgo
              <br />
              1997 &quot;Ida-Gerhardi-Preis&quot; &quot;Ausstellung, Städt.
              Galerie Lüdenscheid
              <br />
              &quot;Wasser im Garten und auf dem Balkon&quot;, Prima Kunst, Kiel
              <br />
              &quot;OUTPOST&quot;, Stadtraum Münster (K)
              <br />
              1996 &quot;unterwegs&quot;, Kunstverein Krefeld
              <br />
              &quot;Transparenzen&quot;, Produzentengalerie, Kassel
            </p>
          </div>
        )}

        {activeTab === 'wagnercv' && (
          <div className="cv-text">
            <h3>SILKE WAGNER</h3>
            <p>*1968, works and lives in Frankfurt a. M.</p>
            <p>Selected Solo Exhibitions - Einzelausstellungen (Auswahl)</p>
            <p>
              2001 Meyer Riegger Galerie, Karlsruhe
              <br />
              &quot;Volxhochschule&quot;, mit Meike Schmidt-Gleim und Marius
              Babias, Salzburger Kunstverein, Salzburg
            </p>
            <p>1999 &quot;Drehbücher&quot;, Galerie Meyer Riegger, Karlsruhe</p>
            <p>
              1998 &quot;7 Vorträge, ein Bild, ein Auditorium&quot;,
              Ausstellungsraum der Universitätsbibliothek Frankfurt
            </p>
            <p>Selected Group Exhibitions - Gruppenausstellungen (Auswahl)</p>
            <p>
              2001 &quot;Plug-In. Einheit und Mobilität&quot;, Westfälisches
              Landesmuseum Münster
              <br />
              &quot;Angst&quot;, Kokerei Zollverein Zeitgenössische Kunst und
              Kritik, Essen
              <br />
              &quot;Frankfurter Positionen&quot;, Frankfurt
            </p>
            <p>
              2000 &quot;Flexibilitätsversuche&quot;, Museum Fridericianum,
              Kassel
            </p>
            <p>
              1999 &quot;HOME &amp; AWAY&quot;, Kunstverein Hannover
              <br />
              &quot;German Open&quot;, Kunstmuseum Wolfsburg
            </p>
          </div>
        )}

        {activeTab === 'kajnyborgcv' && (
          <div className="cv-text">
            <h3>KAJ NYBORG</h3>
            <p>*1963 in Aalborg, lives and works in Copenhagen</p>
            <p>
              Education / study visits
              <br />
              1988-90 Kunstakadamie Düsseldorf / Studies by Proff. Gotthard
              Graubner / DAAD- stipendium
              <br />
              1982-87 School of Arts and Crafts, Kolding, Denmark
              <br />
              1995-96 Schloss Ringenberg ATELIERZENTRUM, Hamminkeln, Germany
            </p>
            <p>
              Einzelausstellungen (Auswahl) - Selected Solo Exhibitions
              <br />
              2001 sight / site - skulptural hybrid Nygaardsvej 22, Copenhagen
              <br />
              Museum of Contemporary Art, / installation &quot;CUT&quot;,
              Roskilde (DK)
              <br />
              2000 Galleri Søren Houmann / installation &quot;SAD OWLS GO INTO
              FREEFALL&quot;, Copenhagen
              <br />
              GUK-Exhibition Place / Selfoss (IS), Lejre (DK), Hannover
              <br />
              WINDOW SPACE, Installation &quot;Sleep out - Sleep in&quot;,
              Copenhagen
              <br />
              1999 Galleri Søren Houmann / Installation &quot;Isolat&quot;,
              Copenhagen
              <br />
              1998 North-Udstillingssted / Installation &quot;subterranean
              panorama&quot;, Copenhagen
              <br />
              1997 Stalke Galleri / Installation &quot;U.T.&quot;, Copenhagen
              <br />
              Horsens Kunstmuseum / &quot;WHITE NOISE&quot;, Horsen (DK)
            </p>
            <p>
              Gruppenausstellungen (Auswahl) - Selected Group Exhibitions
              <br />
              2002 STALKE GALLERY, Copenhagen
              <br />
              2001 CAMP, Lejre (DK)
              <br />
              2000 North-Udstillingssted / &quot;Picture this&quot;, fotografi,
              Copenhagen
              <br />
              Galleri Søren Houmann / SCRATCH, Copenhagen
              <br />
              1999 North-Udstillingssted / &quot;Originaler&quot;, Copenhagen
              <br />
              24h deluxe / room veronique hubert - Hotel Scribe, Paris (F)
              <br />
              1998 Stalke Galleri / 1987-1997 - Jacobi, Eliasson, Heinzmann,
              Koch, Strøm, Pernice
              <br />
              1997 OVERGADEN / &quot;PINPOINT&quot; - Franke, Zoderer, Saffer,
              Bernardini, Copenhagen
              <br />
              Nikolaj Kirke / &quot;Tryk til tiden&quot;, arr. Den Danske
              Radeerforening, Copenhagen
              <br />
              1996 Charlottenborgs Efterårsudstilling, Copenhagen
              <br />
              1995 Stalke Galleri / &quot;Status 1&quot;, Copenhagen
            </p>
          </div>
        )}

        {activeTab === 'vogelcv' && (
          <div className="cv-text">
            <h3>MATTEN VOGEL</h3>
            <p>*1965 in Hannover, lives and works in Berlin</p>
            <p>1994 Meisterschüler HdK Berlin</p>
            <p>Einzelausstellungen (Auswahl) - Selected Solo Exhibitions</p>
            <p>2002 „zensiert von...", Kuckei + Kuckei, Berlin</p>
            <p>
              2000 „Matten Vogel", Junge Kunst e.V., Wolfsburg
              <br />
              &quot;Sicherheitskonzept&quot;, Kuckei + Kuckei, Berlin
            </p>
            <p>Gruppenausstellungen (Auswahl) - Selected Group Exhibitions</p>
            <p>2002 „Berlin - neue Kunststadt", Opera Paese, Rom</p>
            <p>
              2001 „dem- nächst. de", paul. Galerie, Bremerhaven
              <br />
              &quot;8 Trienale Kleinplastik&quot;, Fellbach
              <br />
              &quot;Ein Treppenhaus für die Kunst&quot;, Kulturministerium
              Hannover
              <br />
              &quot;Landschaftsmalerei&quot;, Landesmuseum Oldenburg
            </p>
          </div>
        )}

        {activeTab === 'horellicv' && (
          <div className="cv-text">
            <h3>LAURA HORELLI</h3>
            <p>
              *1976 Helsinki, Finland, lives and works in Berlin, Frankfurt and
              Helsinki
            </p>
            <p>
              1995-2000 Academy of Fine Arts Helsinki, Department of Time and
              Space
              <br />
              1997-2002 Städelschule, Frankfurt a.M., Klasse Thomas Bayrle
            </p>
            <p>
              Grants
              <br />
              2001 Finnish Culture Fund, FRAME - Finnish Fund for Art Exchange,
              Finnish Arts Council
              <br />
              2000 Helsinki City Culture and Library Board,
              <br />
              FRAME - Finnish Fund for Art Exchange, AIAV Japan
            </p>
            <p>
              Ausstellungen (Auswahl) - Selectad Exhibitions
              <br />
              2002 Germinations 13, Bialystok, Poland / Site Gallery, Sheffield,
              UK
              <br />
              2001 Galerie Barbara Weiss, Berlin / Neue Welt, Frankfurter
              Kunstverein, Frankfurt a.M.
              <br />
              Plateau of Mankind, La Biennale di Venezia, 49. Esposizione
              Internazionale d&apos;Arte, Venice
              <br />
              Arbeit Essen Angst, Kokerei Zollverein, Essen
              <br />
              Frankfurter Positionen, a project in public spaces, BHF-Stiftung,
              Frankfurt a.M.
              <br />
              Ars01, Kiasma, Helsinki
              <br />
              2000 Artists-in-Residence, AIAV gallery, Yamaguchi, Japan
              <br />
              1999 Cities on the Move, Kiasma, Helsinki
              <br />
              1998 Stuttgart 17.7.1956 - Salem (Wis)
              <br />
              USA 3.3.1977, Portikus, Frankfurt a.M.
            </p>
          </div>
        )}

        {activeTab === 'gunnhildurcv' && (
          <div className="cv-text">
            <h3>GUNNHILDUR HAUKSDÓTTIR</h3>
            <p>*1972 in Reykjavík, lives and works in Reykjavík, Iceland</p>
            <p>
              1998-2001 The Icelandic Academy of the Arts, multimedia
              department. Reykjavik
              <br />
              1994-1998 Fjölbrautarskólinn í Breiðholti. Junior College, art
              line. Reykjavik
            </p>
            <p>
              Einzelausstellungen (Auswahl) - Selected Solo Exhibitions
              <br />
              2002 Westside Reykjavik. Artist on the Corner. &quot;Daughters of
              Earth&quot;, Reykjavik
              <br />
              2001 Gallery Nema Hvað. „Naturechildren", installation. Reykjavik
              <br />
              1999 Gallery Nema Hvað. &quot;Conversation of love&quot;, with
              Ragnar Kjartansson, Reykjavik
            </p>
            <p>
              Gruppenausstellungen (Auswahl) - Selected Group Exhibitions
              <br />
              2001 Skaftfell, Seyðisfjörður, (IS).
              <br />
              2001 Slunkaríki. The Battle of Good and Evil / &quot;The Tiger and
              The Polar bear&quot;. Ísafjörður (IS)
            </p>
            <p>
              Performances and Happenings
              <br />
              2002 Reykjavik Art Museum &quot;Group Performance&quot;, Reykjavik
              <br />
              2001 The Living Art museum. Performance and video: &quot;A dog
              carrying rocks&quot;, Reykjavik
              <br />
              2000 Yellow House, happening; „Indian dance and a bonfire",
              Reykjavik
              <br />
              Yellow House, IETM Conference. Performance, &quot;The Haunted
              House&quot; Reykjavik
            </p>
          </div>
        )}

        {activeTab === 'jamescarlcv' && (
          <div className="cv-text">
            <h3>JAMES CARL</h3>
            <p>*1960 in Montreal, lives in Toronto</p>
            <p>
              1996 MFA, Rutgers University, New Jersey
              <br />
              1995 &amp;1990 Diplomas, Central Academy of Fine Art, Beijing
              <br />
              1992 BA Honors, McGill University, Montreal
              <br />
              1983 BFA, University of Victoria, British Columbia
            </p>
            <p>
              Neuliche Einzelausstellungen - Recent Solo Exhibitions
              <br />
              2002 Pathogen, Contemporary Art Gallery, Vancouver
              <br />
              1999 Work, Galerie Haus Schneider, Karlsruhe, Germany
              <br />
              1998 Galerie Clark, Montréal
              <br />
              Stock, Art Metropole, Toronto
              <br />
              1997 Fountain, Toronto Sculpture Garden, Toronto
              <br />
              1996 Still Life, Paul Petro, Toronto
              <br />
              Out of Service, Civic Square, New Brunswick, NJ
            </p>
            <p>
              Gruppenausstellungen (Auswahl) - Selected Group Exhibitions
              <br />
              2002 Provisional Worlds, Art Gallery of Ontario, Toronto
              <br />
              2001 Promises, Contemporary Art Gallery, Vancouver
              <br />
              Forever, Embassy of Canada, Beijing
              <br />
              First Light, Bellevue Art Museum, WA
              <br />
              2000 Minmal Pop, Traywick Gallery, Berkeley,CA
              <br />
              Minutia, SECCA, North Carolina
              <br />
              Climbing the Walls, Robert Birch Gallery, Toronto
              <br />
              1999 New Urban Sculpture, New York Public Art Fund Commission
              <br />
              Spatial Interest, Workspace, New York
              <br />
              Summit, Galerie 5020, Salzburg
              <br />
              Eitthvað - Etwas - Something, Kunstverein Hannover
              <br />
              I&apos;m the Boss of Myself, Sara Meltzer, New York
              <br />
              1997 Wrong Place, Right Time, Double Pleasure, New York
              <br />
              Face Value, PS 122, New York
              <br />
              Vague Pop Part One, View Room, New York
              <br />
              1996 Limousine, Free Parking, Toronto
              <br />
              MGSA Group Show, 420 West Broadway, New York
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .title-image {
          margin-bottom: 16px;
        }
        .title-image img {
          display: block;
          max-width: 100%;
        }
        h2 {
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 600;
          border-bottom: 3px solid black;
          padding-bottom: 8px;
          margin-bottom: 16px;
        }
        .description p {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 12px;
        }
        .schedule {
          margin-bottom: 24px;
        }
        .schedule p {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 8px;
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
        .cv-text {
          margin-top: 16px;
        }
        .cv-text h3 {
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          border-bottom: 3px solid black;
          padding-bottom: 8px;
          margin: 0 0 12px;
        }
        .cv-text p {
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 8px;
        }
      `}</style>
    </Frame>
  )
}

export default Pile
