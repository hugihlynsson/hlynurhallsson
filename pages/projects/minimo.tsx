import Head from 'next/head'
import Frame from '../../components/frame'
import Nav from '../../components/nav'
import ProjectsNav from '../../components/projects-nav'

const exhibitions = [
  {
    title: 'ER\u00d6FFNUNG - OPENEING - OPNUN',
    artists: 'Douglas Gordon, Hlynur Hallsson, Petra Kaltenmorgen, Silke Schatz',
    date: '17. June -6. July 1997',
  },
  {
    title: 'CINQ FEMMES',
    artists:
      'Gu\u00f0laug Eir\u00edksd\u00f3ttir, Sabine \u00d6llerer, Steinunn Helga Sigur\u00f0ard\u00f3ttir, Annett Wei\u00dfenburger, Christiane Wetzel',
    date: '20. September - 5. October 1997',
  },
  {
    title: 'MANNEQUINS',
    artists:
      'James Carl, Carsten Greife, Piotr Komarnicki, Gunnar Kristinsson, J\u00fcrgen Witte',
    date: '18. October - 2. November 1997',
  },
  {
    title: 'DEPOT F\u00dcR INTELLIGENZ',
    artists: 'Dr. Pesta Sisters',
    date: '23. November - 14. December 1997',
  },
  {
    title: 'A4',
    artists: 'Group Exhibiton',
    date: '18. January - 1. February 1998',
  },
  {
    title: 'PHOTO - BITTE',
    artists:
      'Marco Breuer, J\u00fcrgen Grewe, Helga von H\u00e4fen, Kai Wetzel',
    date: '15.February - 1. March 1998',
  },
  {
    title: 'PERFORM',
    artists:
      'Ulrike Boldt, Carsten Greife, Hlynur Hallsson, Hildur J\u00f3nsd\u00f3ttir, Piotr Komarnicki, \u00d3mar Sm\u00e1ri Kristinsson, Aenne Langhorst, Christiane Oppermann, Daniel Sch\u00fcrer, Eir\u00fan Sigur\u00f0ard\u00f3ttir, Roger Timmermann, Annamirl Weish\u00e4pl, J\u00fcrgen Witte',
    date: '27. June 1998',
  },
  {
    title: 'COMING AND GOING',
    artists: 'Alexander Steig',
    date: '29. June - 12. July 1998',
  },
  {
    title: 'ONE ON ONE',
    artists: 'Andr\u00e9 Alder, Margr\u00e9t Haraldsd\u00f3ttir Bl\u00f6ndal',
    date: '29. August - 13. September 1998',
  },
  {
    title: 'NUR ROT GEHT',
    artists:
      'Rolf Bl\u00e4sing, Tobias Hoffmann, Elke L\u00fcckner, Stefanie Monecke, Sabine \u00d6llerer, Lorenz Preuss',
    date: '6. -22. November 1998',
  },
  {
    title: 'THE IGLOO HAS LANDED',
    artists:
      '\u00c1smundur \u00c1smundsson, Erling Th. V. Klingenberg, Roman Signer, Magn\u00fas Sigur\u00f0arson, Morten Tilltz',
    date: '27. November - 13. December 1998',
  },
  {
    title: 'EVERYWHERE YOU WANT TO BE',
    artists: 'Diana Todt, Michael Zwingmann',
    date: '16. - 25. April 1999',
  },
]

const Minimo = () => {
  return (
    <Frame>
      <Head>
        <title>VILLA MINIMO // HLYNUR HALLSSON</title>
      </Head>

      <Nav path="/projects" />
      <ProjectsNav current="minimo" />

      <h2>VILLA MINIMO</h2>

      <div className="descriptions">
        <p>
          As I got the prize of the Kunstverein Hannover in 1997, a use of a
          studio called "Villa Minimo" in Hanover was included. I
          desided to use the studio as a exhibitionspace for different artists
          projects.
        </p>
        <p>
          Als ich den Preis des Kunstverein Hannover in 1997 bekommen habe war
          ein Teil davon die kostenlose nützung eines Atelierhauses
          "Villa Minimo" in Hannover für zwei Jahre. Ich habe
          mich entschieden dort austellungsprojekte mit verschieden
          Künstlern zu machen.
        </p>
        <p>
          Þegar ég hlaut verðlaun Kunstverein Hannover 1997
          sem fólu meðal annars í sér afnot af
          vinnustofu í "Villa Minimo" í Hannover
          í tvö ár ákvað ég að
          nýta húsnæðið frekar til sýninga
          á hinum ýmsu myndlistarmönnum.
        </p>
        <p className="address">
          Liebigstrasse 32 A, D-30163 Hannover, Germany
        </p>
      </div>

      <div className="exhibitions">
        {exhibitions.map((exhibition, i) => (
          <div key={i} className="exhibition">
            <h3>{exhibition.title}</h3>
            <p className="artists">{exhibition.artists}</p>
            <p className="date">{exhibition.date}</p>
          </div>
        ))}
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
        .descriptions p {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 12px;
        }
        .address {
          font-weight: 600;
          margin-top: 16px;
        }
        .exhibitions {
          margin-top: 24px;
        }
        .exhibition {
          margin-bottom: 24px;
        }
        .exhibition h3 {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          margin: 0 0 4px;
        }
        .exhibition .artists {
          font-size: 14px;
          margin: 0 0 4px;
        }
        .exhibition .date {
          font-size: 14px;
          margin: 0;
          color: #666;
        }
      `}</style>
    </Frame>
  )
}

export default Minimo
