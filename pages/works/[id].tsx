import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'

import Frame from '../../components/frame'
import Nav from '../../components/nav'
import WorksNav from '../../components/works-nav'

interface WorkProps {
  id: number
  title: string
  content: WorkContent[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: works.map((w) => ({ params: { id: String(w.id) } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<WorkProps> = async ({ params }) => {
  const id = Number(params?.id)
  const work = works.find((w) => w.id === id)
  if (!work) return { notFound: true }
  return { props: { id, title: work.title, content: work.content } }
}

const WorkPage = ({ id, title, content }: WorkProps) => {
  return (
    <Frame>
      <Head>
        <title>{`${title} // HLYNUR HALLSSON`}</title>
      </Head>

      <Nav path="/works" />

      <WorksNav current={id} />

      <div className="work-content">
        {content.map((item, i) => {
          switch (item.type) {
            case 'image':
              return (
                <figure key={i}>
                  <img src={item.src} alt={item.description ?? ''} />
                  {item.description && (
                    <figcaption>
                      {item.description
                        .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\n)/)
                        .map((part, i) => {
                          if (part === '\n') return <br key={i} />
                          if (part.startsWith('**'))
                            return <strong key={i}>{part.slice(2, -2)}</strong>
                          if (part.startsWith('[')) {
                            const [, label, url] = part.match(
                              /\[([^\]]+)\]\(([^)]+)\)/
                            )!
                            return (
                              <a key={i} href={url}>
                                {label}
                              </a>
                            )
                          }
                          return part
                        })}
                    </figcaption>
                  )}
                </figure>
              )
            case 'title':
              return <h3 key={i}>{item.text}</h3>
            case 'text':
              return (
                <p key={i}>
                  {item.text
                    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\n)/)
                    .map((part, i) => {
                      if (part === '\n') return <br key={i} />
                      if (part.startsWith('**'))
                        return <strong key={i}>{part.slice(2, -2)}</strong>
                      if (part.startsWith('[')) {
                        const [, label, url] = part.match(
                          /\[([^\]]+)\]\(([^)]+)\)/
                        )!
                        return (
                          <a key={i} href={url}>
                            {label}
                          </a>
                        )
                      }
                      return part
                    })}
                </p>
              )
          }
        })}
      </div>

      <style jsx>{`
        .work-content {
          margin-top: 24px;
        }
        figure {
          margin: 0 0 8px;
        }
        img {
          display: block;
          max-width: 100%;
        }
        figcaption {
          font-size: 12px;
          color: #555;
          margin-top: 4px;
        }
        h3 {
          font-size: 18px;
          margin: 0 0 8px;
          text-transform: uppercase;
          padding-bottom: 8px;
          border-bottom: 3px solid black;
        }
        p {
          font-size: 14px;
          line-height: 1.5;
          max-width: 100%;
        }
        a {
          color: black;
        }
      `}</style>
    </Frame>
  )
}

export default WorkPage

export interface Work {
  id: number
  title: string
  content: WorkContent[]
}

export type WorkContent =
  | { type: 'image'; src: string; description?: string }
  | { type: 'title'; text: string }
  | { type: 'text'; text: string }

export const works: Work[] = [
  {
    id: 1,
    title: 'GÚLP',
    content: [
      { type: 'image', src: '/images/works/1/0.jpeg' },
      { type: 'image', src: '/images/works/1/1.jpeg' },
    ],
  },
  {
    id: 2,
    title: 'STREETS',
    content: [
      { type: 'title', text: 'GÖTUR - STRASSEN - STREETS' },
      { type: 'text', text: '03.10. - 18.10.1998' },
      { type: 'text', text: 'Performance/Installation' },
      {
        type: 'text',
        text: 'Hlynur Hallsson benutzt Sprache als Werkmaterial. Als Galerist, Performer und Moderator stellt er Fragen, direkt und indirekt, nach der Wahrnehmung, der Erinnerung, der sozialen Intelligenz, der Interaktion, der Bedeutung von Bildern und Objekten. Daneben arbeitet er auch mit Zeichnung, Fotografie, Video und Installation. Die Arbeit "4 Straßen" zeigt vier verschieden große Platten, deren Oberkanten unregelmäßig geschnitten sind. Jeder Platte ist eine Postkarte mit einer Beschreibung einer bestimmten Straße in Island zugeordnet, die auf Kindheitserinnerungen des Künstlers zurückgehen. In Verbindung mit den Texten erschließen sich auch die Konturen der Platten: sie zeigen die maßstabsgetreue Wiedergabe der Straßenverläufe. "Das Werk von Hlynur Hallsson widmet sich der Frage nach der Ralität von Realität, in der die Kunst und er selber ein Teil davon sind und somit der Frage, wie kann man mit den zur Verfügung stehenden formalen Mitteln Kunst zum "Sprechen" bringen, ohne sie zu banalisieren".',
      },
      { type: 'text', text: 'Eckhard Schneider' },
    ],
  },
  {
    id: 3,
    title: 'QUESTIONS',
    content: [
      { type: 'title', text: 'SPURNINGAR - FRAGEN - QUESTIONS' },
      {
        type: 'text',
        text: 'Zu Hlynur Hallssons Arbeit "Spurningar-Fragen-Questions"',
      },
      {
        type: 'text',
        text: 'Der junge, in Island geborene, Künstler Hlynur Hallsson stellt hier auf der Web-Site des Max-Planck-Instituts eine Reihe von Photo-Text-Arrangements vor. Die irgendwo zwischen Schnappschuss und Dokumentarphoto anzusiedelnden Photos entstammen zum Teil seiner persönlichen Lebenswelt - sein schlafender Sohn Hugi oder seine Tochter Loa im Schnee - oder aus der Welt biologischer Forschung - das Institut selbst oder die fast schon sprichwörtlichen Mäuse im Käfig. Jedes Motiv taucht zweimal auf, scheinbar handelt es sich dabei um identische Aufnahmen, doch auf den zweiten Blick wird deutlich, dass sich im vermeintlich Immergleichen was verändert hat: eine kleine Bewegung, eine kaum merkliche Verschiebung des Kamerastandpunktes.',
      },
      {
        type: 'text',
        text: 'So thematisiert Hlynur Hallsson bereits durch seine Photos zweierlei:',
      },
      {
        type: 'text',
        text: '1.    statt zu kopieren, zu doubeln, wenn man so will zu "klonen", führt er,wenn auch minimale, so doch bedeutungsmachende Differenzen vor.',
      },
      {
        type: 'text',
        text: '2.    der Künstler befragt die Präzision unseres Blickes, unseren Willen überhaupt noch den kleinen Unterschied WAHRzunehmen.',
      },
      {
        type: 'text',
        text: 'Nun werden den Bildern zusätzlich Fragen, die hier im Internet beantwortet werden können, zur Seite gestellt. Die Fragen sind so banaler wie entscheidender Natur: "Warum sind wir hier?" steht z. B. bei dem schlafenden Hugi. Alle Fragen sind in drei Sprachen formuliert: in Isländisch - der Muttersprache des Künstlers also -, in Deutsch und in Englisch. So spricht Hlynur Hallsson hier einerseits im "technologischen Stil der Laborforschung, die an einen internationalen Markt und den Wettbewerb gebunden ist" (Michel de Certeau) und andererseits in den ganz persönlichen Sprachen seiner Familie sowie der seiner derzeitigen "Heimat" BRDeutschland.',
      },
      {
        type: 'text',
        text: 'Der Inhalt dieser Fragen, ihr gleichsam fundamentaler Charakter, lädt nun die von den Photos behauptete Qualität der Differenz, des Nicht-Identischen, endgültig auf mit einer Problematisierung von Identität, von Subjektivität vielleicht. "Identität steht für Immunität", hat der französische Philosoph Jean-Luc Nancy kürzlich formuliert. Immun ist der sich selbst Identische, der, so die griechische Wortbedeutung, "Immergleiche", gegen das Andere, Fremde, gegen jedwede Differenz. Er hat eben seinen eigenen Stil, seinen "own way" gefunden. Man verkennt das dann oftmals als "Persönlichkeit" oder "Charakter".',
      },
      {
        type: 'text',
        text: 'Auch die Biologie strebt ja mit ihrer Erforschung von der Möglichkeit der künstlichen Produktion von "gleichen", eben geklonten Genen, nach der Option, identisches Leben reproduzieren zu können. Bewusst stellt Hallsson die Frage nach Identität also in genau einem der Kontexte, in denen die Frage nach Subjektivität in Zukunft wohl mitbeantwortet wird. Doch Vorsicht: "die Wahrheit des Subjektes besteht .... in seiner unendlichen Aussetzung." schreibt Jean-Luc Nancy wenige Sätze später. In der Aussetzung im Unheimatlichen, Fremden, im Dazwischen- und Verschiedensein ? kurz und gut: In der Differenz und nicht in der Identität erfahren wir uns und die anderen. Bekanntlich war Bertolt Brechts Herr Keuner bestürzt als ihm ein alter Bekannter testatierte, sich überhaupt nicht verändert zu haben.',
      },
      {
        type: 'text',
        text: 'Charakter(e) ist(sind) eben nicht mal was für das Theater. Und Identität wird in erster Linie von Sicherheitskräften geschätzt.',
      },
      { type: 'text', text: 'Raimar Stange, im April 2000' },
      { type: 'image', src: '/images/works/3/0.jpeg' },
    ],
  },
  {
    id: 4,
    title: 'HERE',
    content: [
      { type: 'title', text: 'Hér - Hier - Here' },
      { type: 'text', text: 'Kunstverein Heilbronn, March 31 - May 13, 2001' },
      {
        type: 'text',
        text: 'Hlynur Hallsson was born in 1968 in Akureyri/Island. In his work he investigates different connections between places, different countries and landscapes. The question of structures of communication is a main subject in his works.',
      },
      {
        type: 'text',
        text: "This theme determines also his installation for the Kunstverein Heilbronn. In this Installation Hlynur Hallsson combines pictures from the Heilbronner Stimme (the daily newspaper in Heilbronn) with subtitles from the Akureyri's daily newspaper. All subtitles are also translated in German and English.",
      },
      {
        type: 'text',
        text: 'Most of the pictures are shown in the original size, and some of them enlarged into poster-size. Beyond it Hlynur Hallsson shows a video film. In this film features form CNN and other newcasts are combined with texts which are not belonging to the source. To the exhibition we have published a newspaper which Hlynur Hallsson has conceived and designed.',
      },
      {
        type: 'text',
        text: 'In this exhibition the visitors are confronted with two systems which are not especcially together but with the power of association they build connections. This is a main point in human perception - the ability to build new connections to find a way to deal with the strange and foreign.',
      },
      {
        type: 'text',
        text: 'With this communicative instruments Hlynur Hallsson sharps the perception of the viewer.',
      },
      { type: 'text', text: 'Hlynur Hallsson' },
      {
        type: 'text',
        text: 'Der 1968 in Akureyri/Island geborene Hlynur Hallsson untersucht Zusammenhänge verschiedener Orte, verschiedener Kulturen und Landschaften. Die Frage nach den Strukturen der Kommunikation spielt dabei in allen seinen Arbeiten eine herausragende Rolle. Hlynur Hallssons realisisert seine Arbeiten in verschiedenen Medien, von Fotografie, Zeichnung bis hin zu Videos und Aktionen.',
      },
      {
        type: 'text',
        text: 'Diese Thematik bestimmt auch seine Installation Hér - Hier - Here für den Kunstverein Heilbronn vom (31. März bis 13. Mai 2001). Hier kombiniert Hlynur Hallsson etwa 250 s/w-Fotos aus dem Archiv der "Heilbronner Stimme", der ortsansässigen Tageszeitung, mit Bildunterschriften aus "Dagur" (Der Tag), der Zeitung seiner Heimatstadt Akureyri. Die Untertitel werden jeweils auch ins Englische und Deutsche übersetzt, ein Prinzip, das in vielen seiner Arbeiten Anwendung findet. Diese Praxis weist auf die Form von Mobilität hin, die zu einem wichtigen Anspruch und beinahe auch schon zu einer Gewohnheit in unserer Gesellschaft geworden ist. Die Fotos werden zum Teil in Originalgröße, zum Teil auf Posterformat vergrößert, im Kunstverein Heilbronn gezeigt. Darüber hinaus zeigt Hlynur Hallsson einen Videofilm. In diesem sind Ausschnitte aus verschiedenen Nachrichtensendungen, von CNN bis Eurosport, mit verschiedenen Nachrichtentexten unterlegt. Parallel dazu ist es dem Besucher möglich, sowohl in dem stets aktuellen Exemplar der Heilbronner Stimme oder der isländischen Tageszeitung zu lesen, die während der Ausstellungszeit ausgelegt sind. Darüber hinaus ist eine von Hlynur Hallsson konzipierte und gestaltete Zeitung erschienen.',
      },
      {
        type: 'text',
        text: 'Die Qualität dieser Arbeit liegt in ihrem starken Ortsbezug. Hlynur Hallsson nähert sich dem Thema mit der für ihn typischen diskreten, fragenden wie präzisen Weise und macht damit auf spezifische Faktoren der Stadt Heilbronn aufmerksam. Zugleich transportiert er durch die Verschiebung der Textebene Informationen aus Island, die beim Besucher "Hier" eine Vorstellung der Situation in Island hervorruft.',
      },
      {
        type: 'text',
        text: 'Er schärft mit kommunikativen Werkzeugen die Wahrnehmung des Betrachters, dies gilt für die Installation in Heilbronn als exemplarisches Beispiel genauso wie für die in den letzten Jahren entstandenen Arbeiten.',
      },
      { type: 'text', text: 'Matthia Löbke' },
      { type: 'image', src: '/images/works/4/0.jpeg' },
      { type: 'image', src: '/images/works/4/1.jpeg' },
    ],
  },
  {
    id: 5,
    title: 'THERE',
    content: [
      { type: 'title', text: 'Þar – There – Dort' },
      {
        type: 'text',
        text: 'Opnun: Laugardaginn 15. desember 2001 klukkan 16.Sýningin stóð yfir frá 15. desember til 6. janúar 2002.',
      },
      {
        type: 'text',
        text: 'Á sýningunni gefur að líta um 200 myndir með myndatextum. Myndirnar eru teknar úr dagblaðinu "Heilbronner Stimme" sem er gefið út í borginni Heilbronn í suðurhluta Þýskalands en myndatextarnir koma úr dagblaðinu "Degi" frá Akureyri sem hætti að koma út fyrr á árinu. Textar og myndir eru rifin úr samhengi og passa því ekki saman, þannig að ný tengsl myndast. Áhorfendur geta fundið út nýja þýðingu úr myndatextum sem virðast við fyrstu sýn vera á röngum stað og myndir birtast í nýju ljósi. Það sama gildir um 20 mínútna myndband sem Hlynur hefur sett saman. Þar gefur að líta fréttamyndir frá fréttaútsendingum frá CNN, Sky, BBC World, Stöð 2 og Ríkissjónvarpinu. Tal þulanna passar engan vegin við fréttamyndirnar og þar með er vanalegur máti hlustunar og sjónar áhorfandans raskað og við lesum myndirnar á nýjan hátt og leggjum annan skilning í tal fréttaþulanna. Tónlistarmaðurinn Pétur Eyvindsson gerði tónlist við myndbandið.Í verkum sínum rannsakar Hlynur gjarnan tengsl fólks með ólíkan bakgrunn og skoðar hvað það er sem tengir fólk eða sundrar því. Samskipti af öllum toga koma þar við sögu sem og samskiptaleysi.Sýningin var sett upp fyrr á árinu í "Kunstverein Heilbronn" í Þýskalandi og vakti þá mikla athygli. Hlynur gaf út sérstakt "dagblað" í tilefni sýningarinnar, þar sem einungis gefur að líta myndir og myndatexta en allur megintexti er felldur út. Myndatextarnir eru á þremur tungumálum, íslensku, þýsku og ensku sem liggja eins og rauður þráður í gegnum mörg verka Hlyns. Sýningargestir í Slúnkaríki geta tekið blaðið með sér heim en auk þess fengið sér sæti og flett öðrum blöðum, bæklingum og tímaritum milli þess sem myndir eru lesnar og textar Skoðaðir.\nHlynur Hallsson er fæddur á Akureyri 1968, útskrifaðist frá MHÍ 1993 og stundaði framhaldsnám í myndlist í Þýskalandi. Hann hefur verið búsettur í Hannover í rúm átta ár en býr nú á Akureyri og í Hannover. Hann var tilnefndur menningaverðlana DV fyrir verk sitt "Dagbók/Veg(g)ir" á Kjarvalsstöðum og nýverið hlaut hann verðlaun ungra myndlistarmanna í Neðra Saxlandi sem veitt eru af menntamálaráðuneytinu þar.',
      },
      { type: 'image', src: '/images/works/5/0.jpeg' },
      { type: 'image', src: '/images/works/5/1.jpeg' },
      { type: 'image', src: '/images/works/5/2.jpeg' },
    ],
  },
  {
    id: 6,
    title: 'VOTE',
    content: [{ type: 'title', text: 'Kjósa - Vählen - Vote' }],
  },
  {
    id: 7,
    title: 'FRIENDS',
    content: [
      { type: 'title', text: 'Vinir Lóu - Loas Freunde - Loa´s friends' },
      {
        type: 'text',
        text: 'Þetta er Lóa Aðalheiður Kristínardóttir. Hún verður bráðum fjögra og hálfs. Besti vinur hennar heitir Mika en stundum segjast þau samt alls ekki vera vinir. Hún á marga aðra vini í leikskólanum eins og Alasan, Leonie, Luka og Noru. Lóa segist gjarnan heita Nora og þá má ég ekki kalla hana Lóu. Við Lóa eru líka oftast vinir.',
      },
      {
        type: 'text',
        text: 'Das ist Loa Adalheidur Kristinardottir. Sie wird bald viereinhalb. Ihr bester Freund heisst Mika, aber manchmal behaupten sie, dass sie gar keine Freunde sind.  Sie hat viele andere Freunde im Kinderladen, wie Alasan, Leonie, Luka und Nora. Loa sagt gerne, dass sie Nora heisst und dann darf ich sie nicht Loa nennen. Loa und ich sind auch meistens Freunde.',
      },
      {
        type: 'text',
        text: 'This is Loa Adalheidur Kristinardottir. She will be soon four and half. Her best friend is Mika, but sometimes they say that they are not friends at all. She has many other friends in the kindergarten like Alasan, Leonie, Luka and Nora. Loa likes to say that her name is Nora and than I am not allowed to call her Loa. Most of the time Loa and I are also friends.',
      },
      { type: 'text', text: 'Vinir Lóu - Loas Freunde - Loa´s friends' },
      { type: 'text', text: 'Hlynur Hallsson, 2001' },
      { type: 'text', text: 'Freundschaft, Courtesy Kuckei+Kuckei, Berlin' },
      { type: 'image', src: '/images/works/7/0.jpeg' },
    ],
  },
  {
    id: 8,
    title: 'THE BALCONY',
    content: [
      { type: 'title', text: 'The Balcony' },
      { type: 'text', text: 'The Balcony is pleased to present' },
      { type: 'text', text: 'HLYNUR HALLSSON' },
      { type: 'text', text: '20.12.2001 – 01.02.2002' },
      {
        type: 'text',
        text: 'Hlynur Hallsson warms the dark season with an optimistic and timely homage to the most fundamental of affirmative annunciations: yes\nAssertive and resigned in equal measure, the work lands on the balcony in four languages, three colors, and at least a couple of comparisons.',
      },
      {
        type: 'text',
        text: 'Hlynur Hallsson is an Icelander who divides his time between Akuyeri and Hannover. His work has been shown extensively in major galleries and museums in Europe and Scandanavia. We are honored to be hosting his Canadian debut.',
      },
      {
        type: 'text',
        text: 'The Balcony thanks everyone for their participation in 2001; and sends out a warm welcome to Yoko Ono and her retrospective "Yes" opening February 2002 at the Art Gallery of Ontario, Toronto.',
      },
      {
        type: 'text',
        text: 'The work is on view 24 -7  in Kensington Market, Toronto and at:',
      },
      { type: 'text', text: 'http://www.artmetropole.com' },
      {
        type: 'text',
        text: 'The BALCONY\n183A Augusta Ave \nToronto, Canada\nM5T 2L4\n(01) 416 205 9665\nemail: carls@idirect.com\n[www.artmetropole.com](http://www.artmetropole.com)',
      },
      { type: 'image', src: '/images/works/8/0.jpeg' },
      { type: 'image', src: '/images/works/8/1.jpeg' },
      { type: 'image', src: '/images/works/8/2.jpeg' },
      { type: 'image', src: '/images/works/8/3.jpeg' },
    ],
  },
  {
    id: 9,
    title: 'THANKS',
    content: [
      { type: 'title', text: 'Takk Danke Thanks' },
      {
        type: 'text',
        text: 'Gröpelingen, Bremen 15.03.-24.04.2002 - Horst Griese',
      },
      {
        type: 'text',
        text: '**Das Projekt.**\nIn den bisherigen Projekten dieser Reihe entwickelten die Künstlerinnen und Künstler ihre Werke aus den örtlichen Besonderheiten. Der isländische Künstler Hlynur Hallsson verfährt umgekehrt: er infiltriert den Stadtteil in einer öffentlichen Aktion mit zehn Schnappschüssen aus seinem privaten Fotoalbum. An zehn allgemein zugänglichen Orten in Gröpelingen und Walle wird Hlynur Hallsson Kartenständer plazieren, aus dem sich alle Leute bedienen dürfen. Die Karten im Format A5 sind mit einfachen Texten in zehn Sprachen (darunter auch isländisch, türkisch, kurdisch und nigerianisch) versehen. Für jeden Ort gibt es eine eigene Karte. Alle Standplätze werden auf einem begleitenden Poster veröffentlicht. Die Dauer des Projektes wird durch die Nachfrage des Publikums bestimmt: solange der Vorrat reicht! Die Kartenständer können auch skuptural verstanden werden - als eine Plastik, die sich im Laufe des Projektes auflöst und deren Aktionsraum sich in dem Maße erweitert wie sich ihre einzelnen Bestandteile unter sie Menschen verteilen.\n**Eine Karte von Hlynur.** Im Januar1999 habe ich eine Karte von Hlynur erhalten. Sie zeigt in fröhlich-bunten Farben ein beheiztes, sonnenbeschienenes Thermalfreibad in Island. Menschen vergnügen sich im und um das Wasserbecken. Auf die Rückseite hat Hlynur einen Text auf isländisch geschrieben. Kaum etwas ist dabei, das mir verständlich wäre. Dennoch bereitet es mir Freude, daß Hlynur sich die Mühe macht, mir trotz meines vorhersehbaren Unverständnisses etwas in seiner Sprache mitzuteilen.',
      },
      {
        type: 'text',
        text: 'Bedeutung ist nicht unverrückbar gegeben. Sinnzusammenhänge existieren nicht losgelöst von Ort und Zeit. Sie rekonstruieren sich immer wieder neu in konkreten Akten des Sprechens und des Handelns. An solchen elementaren Lebenserfahrungen und Zusammenhängen setzt Hlynur Hallsson an. Er variiert Elemente der Kommunikation, das meint: Prozesse die Einschlüsse und Aus-schlüsse gleichermaßen produzieren. "Wichtig" heißt eine Postkartenserie, die nach einer Videoarbeit entstand und auf der Menschen in ihrer jeweils eigenen Landessprache (und damit in der Regel auch nur für ihre Landsleute verständlich) ihre brennensten Wünsche mitteilen. "Hier" lautet der Titel einer anderen Arbeit, einer Zeitung die Bilder aus der Heilbronner Stimme mit dreisprachigen Bildunterschriften einer isländischen Tageszeitung kombiniert. Mal klaffen Bild und Text völlig auseinander, mal scheinen sie sich zu ergänzen. Zum "Interview" lud Hallsson Museumsbesucher in Oslo ein, die vor laufender Kamera mit ihm Gespräche führten, die er ausschließlich in isländischer Sprache - und damit für sein Gegenüber zumeist unverständlich - bestritt.\nDer offene Gedankenaustausch kennzeichnet auch das Verhältnis Hlynur Hallssons zu seinen Künstlerkolleginnen und -kollegen. Seinen privaten Wohnraum in Han-nover stellte er ihnen unter dem Label "Kunstraum Wohnraum" schon oft für Aus-stellungen zur Verfügung. "Blatt Blað" heißt das von ihm editierte Kunst- heft im Kleinformat, in dem Künstler unzensiert die Seiten gestalten. "Jeder darf etwas für das Blatt machen" heißt es auf Seite eins. Im Februar erschien die Nr. 38!',
      },
      {
        type: 'text',
        text: '**The project.**\nThe artists in the previous projects of this seeeeeeries developed their works by proceeding from special on-site features. The Icelandic artist Hlynur Hallsson does just the opposite: in a public campaign he will infiltrate a city quarter with ten snapshots from his private album. At ten public locations in the Gröpelingen area of Bremen, Hlynur Hallsson plans on setting up postcard racks which may be accessed by anyone. The A5-sized cards contain simple texts in ten languages (including Icelandic, Turkish, Kurdish and Nigerian). Each location has its own card. All locations are published on an information sheet accompanying the rack. The duration of the project depends on public demand: as long as supplies last! The card racks can also be regarded as sculptures which dissolve in the course of the project and whose radius of action expands to the extent that its individual components are spread among people.\n**A postcard from Hlynur.** In January 1999 I received a card from Hlynur Hallsson. It showed a heated, sun-splashed thermal outdoor pool in Island, bathed in cheerful bright colors. People enjoying themselves in and around the pool. On the back of the card Hlynur has written a message in Icelandic. There is hardly anything in it that I can understand. Nevertheless I am quite happy that Hlynur has gone to the effort telling me something in his language despite my foreseen incomprehension.',
      },
      {
        type: 'text',
        text: 'Meaning is not given as something unalterable. Its context cannot exist outside of time and space. It is constantly in the process of reconstructing itself in concrete forms of speech and action. Such elementary experiences and relationships are the starting point for Hlynur Hallsson’s work. It modifies elements of communication – both in what it includes as well as excludes. "Important" is the title of a postcard series based on a video piece on which people write what matters to them in their own language and understood only by their fellow countrymen. "Here" is the name of another work, a newspaper which combines pictures from the "Heilbronner Stimme” newspaper with photo captions in three languages taken from an Icelandic daily. At times the picture and text clearly diverge, at other times they seem to complement each other. For "Interview" Hallsson invited museum visitors in Oslo to hold conversations with him in front of a running camera, which Hallsson conducted exclusively in Icelandic – and thus incomprehensible to most of his discussion partners.\nThe open exchange of ideas also characterizes Hallsson’s relationship to his fellow artists. He has often provided them with exhibition space in his own living room in Hannover under the label "art room living room”. He also is editor of "Blatt Blað", a small-format art journal whose uncensored layout is left completely to other artists. "Everyone can do something for the paper” is the motto appearing on page one. Last February saw the publication of its 38th issue!',
      },
    ],
  },
  {
    id: 10,
    title: 'USA - EEU',
    content: [
      { type: 'title', text: 'BNA - VSA - USA - EEUU' },
      {
        type: 'text',
        text: 'This work is based on statements that are often heard in discussions and in the press in Europe and America; it speaks about the different ways Europeans and Americans may think about these international issues. The work is intentionally provocative, and my hope is to encourage discussion about these themes. Since Texas ist the home state og President Bush, I thougt it would have particularly strong resonance to make this work here. Although the statements do not necessarily reflect my own opinion, I take full personal responsibility for the work.',
      },
      { type: 'text', text: 'Hlynur Hallsson' },
      {
        type: 'text',
        text: 'The views expressed by Chinaty Foundation´s artist in residence Hlynur Hallsson do not necessarily represent the views of the museum´s board of directors and staff. While the museum does not always share the opinions of its artist in residence, it does encourage and support their free creative and intellectual expession, and is host to artist working in a variety of media and methods that can include social and politicaly motivated work.',
      },
      {
        type: 'text',
        text: 'The artist will be available at the Locker Plant to answer questions and speak about his work at the following times:\nFriday, 23 August at 7PM, Saturday, 24 August at 2PM, Sunday, 25 August at 2PM, Thursday, 29 August at 6PM',
      },
      {
        type: 'text',
        text: 'Board of Directors:\nBrooke Alexander New York City, Douglas Baxter New York City, Andrew Cogan New York City, Timothy Crowley  Marfa, Maxine Frankel Detroit, Rudi Fuchs Amsterdam, Fredericka Hubter  Houston, Tommy Lee Jones  San Saba, William B. Jordan  Dallas, Sissy Kempner  Houston, Michael Klein  Houston, Edmund P. Pillsbury  Fort Worth, Sir Nicholas Serota  London, Marianne Stockebrand Marfa.',
      },
      { type: 'text', text: 'Honorary Directors:' },
      {
        type: 'text',
        text: 'Franz Meyer  Zürich, Annalee Newman (1909-2000), Brydon Smith Ottawa.',
      },
      {
        type: 'text',
        text: 'New York Times “Hoping to Inspire Talk, Artist Ignites Debate”  By JIM YARDLEY:',
      },
      {
        type: 'text',
        text: 'Hlynur Hallsson arrived this summer in Marfa, Tex., with plans, as he put it, to stimulate discussion.',
      },
      {
        type: 'text',
        text: "The first exhibit Mr. Hallsson assembled ” a compilation of other  artists' work “ did not stir much reaction. His second, four graffiti-style sentences scrawled on a wall, created an uproar.",
      },
      {
        type: 'text',
        text: '"The real axis of evil are Israel, USA and the UK," Mr. Hallsson, an artist from Iceland, wrote in English and Spanish. "Ariel Sharon is the top terrorist. George W. Bush is an idiot. And Iceland is banana republic number one."',
      },
      {
        type: 'text',
        text: 'The exhibit, in a converted slaughterhouse in the heart of the West Texas town, inspired angry letters to the newspaper, scores of enraged telephone calls to local officials and a warning that read, "Iceslander go home!!!" The controversy has raised questions about free speech while increasing local friction between the artists and yuppies known as New Marfans and the established, more conservative citizenry.',
      },
      {
        type: 'text',
        text: '"I guess `upset\' would be a mild way of putting it," said Mayor Oscar Martinez, describing callers who complained. Of the exhibit, Mayor Martinez said, "We see better graffiti on the railroad freight trains as they go by."',
      },
      {
        type: 'text',
        text: "In a remote but beautiful stretch of Texas about 175 miles southwest of Midland ? where President Bush grew up ? Marfa, with roughly 2,500 people, has undergone a gradual but radical transition since the minimalist sculptor Donald Judd began buying buildings there in the 1970's.",
      },
      {
        type: 'text',
        text: 'The town, once famous as where the movie "Giant" was filmed, is now an established stop in the art world. Mr. Judd died in 1994, but his Chinati Foundation, named after a nearby mountain range, now draw roughly 10,000 visitors a year and sponsors artists in residence.',
      },
      {
        type: 'text',
        text: 'Mr. Hallsson, 33, a self-described conceptual artist, earned a Chinati grant after a career in Iceland and other parts of Europe, where he once placed a hot tub on a street in Germany and invited pedestrians to take a dip. He arrived in Marfa early last month. Though he already had his "axis of evil" exhibit in mind, the foundation did not know of his plans.',
      },
      {
        type: 'text',
        text: 'He said the first three statements did not reflect his opinions but were taken from comments he had heard in Europe or had seen in the European press. He said the fourth, about Iceland, came from a quotation in an article in The New York Times about plans to build a huge power plant in his home country.',
      },
      {
        type: 'text',
        text: "Mr. Hallsson said that he realized the statements were provocative, but that he hoped they would lead to discussion about how the rest of the world sometimes views the United States. The exhibit's opening, on Aug. 22, was attended by a small gathering of local artists whose response was mostly positive. Outside, pedestrians and drivers peered through the large picture windows and the glass doors. As Mr. Hallsson quickly learned, they were outraged.",
      },
      {
        type: 'text',
        text: '"People in Marfa got really upset," he said in a telephone interview. "And also that I wrote `George W. Bush is an idiot.\' That is something that you say every day here. But I was a foreigner. To write that on a wall was too much."',
      },
      {
        type: 'text',
        text: 'Mayor Martinez said his office telephone began ringing the next day. His home phone rang over the weekend. The Big Bend Sentinel, the local weekly, provided extensive coverage, including long, furious letters. Some people thought the exhibit was particularly inappropriate coming so close to Sept. 11 and feared it would embarrass the town as tourists arrived for the annual Labor Day weekend festival.',
      },
      {
        type: 'text',
        text: 'By Aug. 26, Mr. Martinez had called the Chinati director, Marianne Stockebrand, and asked her to cover the windows of the museum. She consulted with Mr. Hallsson and complied, a move that some local artists have criticized as censorship. "Since the artist had given a green light," Ms. Stockebrand said, "we didn\'t feel it was censorship."',
      },
      {
        type: 'text',
        text: 'Mr. Hallsson said he first resisted the covering but relented unhappily because he did not want to damage the Chinati Foundation. He then proposed a second part of the exhibit, which was unveiled on Aug. 28.',
      },
      {
        type: 'text',
        text: '"The Axis of Evil is North Korea, Iraq and Iran," he wrote this time, painting over the original statements. "Osama bin Laden is the top terrorist. George W. Bush is a good leader. And Iceland is not a banana republic."',
      },
      {
        type: 'text',
        text: 'He said of the change, "I just wrote what people want to read."',
      },
      {
        type: 'text',
        text: 'But Mr. Hallsson said he thought the more palatable message might still lead to discussion of the issues and hoped that the second opening would draw a crowd. Instead, he said he got apologies from the smattering of artists on hand, while few townsfolk showed up.',
      },
      {
        type: 'text',
        text: 'Mayor Martinez said few locals went because they considered the change patronizing; moreover, they regard the Chinati Foundation as an aloof and often arrogant neighbor.',
      },
      {
        type: 'text',
        text: '"People think that maybe the mentality of the Chinati Foundation is that they build walls between themselves and the community," he said.',
      },
      {
        type: 'text',
        text: 'Ms. Stockebrand noted that the foundation had an annual open house and was not a newcomer, having been in Marfa for more than a decade.',
      },
      {
        type: 'text',
        text: 'Mr. Hallsson left on Tuesday to return to Iceland. His departure was planned before the controversy, and he said he wished he could have stayed "for further discussion."',
      },
      {
        type: 'text',
        text: 'He also said he was startled that people were so quick to try to clamp down on controversial speech.',
      },
      {
        type: 'text',
        text: '"I think quite many Americans don\'t have interest in free speech," Mr. Hallsson said. "The majority, I don\'t know. My experience was, quite many people would be happy to give that one away."',
      },
      {
        type: 'image',
        src: '/images/works/10/0.jpeg',
        description:
          'Hlynur Hallsson, BNA - VSA - USA - EEUU  Locker Plant Building, Chinati Foundation, Marfa, Texas\nOpening Friday 23. August,.2002 at 6PM',
      },
      { type: 'image', src: '/images/works/10/1.jpeg' },
      {
        type: 'image',
        src: '/images/works/10/2.jpeg',
        description:
          'Hlynur Hallsson, BNA - VSA - USA - EEUU  (Part Two)  Locker Plant Building, Chinati Foundation, Marfa, Texas\n “Reopening” Thursday 29. August,.2002 at 6PM',
      },
      { type: 'image', src: '/images/works/10/3.jpeg' },
    ],
  },
  {
    id: 11,
    title: 'MOVIES',
    content: [
      { type: 'title', text: 'BÍÓ - KINO - MOVIES' },
      { type: 'image', src: '/images/works/11/0.jpeg' },
      {
        type: 'image',
        src: '/images/works/11/1.jpg',
        description:
          'Mótmæli á 1. maí - 1. Mai Demonstration - May Day demonstration',
      },
      {
        type: 'text',
        text: 'Á 1. maí er ótrúlega gott veður og ég hjóla yfir Leine að Faust til að taka myndir. Þar er fólk ekki beint að mótmæla heldur meira svona að skemmta sér og í sólbaði. Enda gott að liggja í grasinu. Kúrdarnir eru duglegastir að krefjast bættra kjarta á þessum alþjóðlega baráttudegi verkalýðsins, ég slæst í hóp þeirra á Klagesmarkt.',
      },
      {
        type: 'text',
        text: 'Am 1. Mai ist supergutes Wetter und ich fahre Rad über die Leine zum Faust, um Fotos zu machen. Dort sind die Leute nicht gerade am demonstrieren. Sie unterhalten sich eher und liegen in der Sonne. Das ist auch wunderbar, auf dem Rasen zu liegen. Die Kurden sind am fleißigsten zu demonstrieren an diesem internationalen Arbeitertag. Ich gehe mit am Klagesmarkt.',
      },
      {
        type: 'text',
        text: 'On the first of May the weather is very good and I go with my bike over the Leine river to Faust to take some photos. People are not really demonstrating there, they are sunbathing and having fun. It is great just to lie on the grass. The Kurds are more into demonstrating on this international workers day. I join them on Klagesmarkt.',
      },
      {
        type: 'image',
        src: '/images/works/11/2.jpg',
        description:
          'Hugi og Lóa Aðalheiður í Bjarnarflagi - Hugi und Loa Adalheidur in Bjarnarflag - Hugi und Loa Adalheidur in Bjarnarflag',
      },
      {
        type: 'text',
        text: 'Það er haust og frábært veður svo við förum, í Mývatnssveit og böðum okkur í bláa lóninu í Bjarnarflagi. Það er frábært að buslar þarna og Lóa og Hugi byggja sandksatala og stýflu á ströndinni. Það slást nokkrir franskir ferðamenn í hópinn og sennilega líka Hollendingar. Á eftir ætlum við í sund en þá er búið að loka sundlauginni.',
      },
      {
        type: 'text',
        text: 'Es ist Herbst, das Wetter ist gut, und wir fahren an den Myvatn-See und baden in der blauen Lagune in Bjarnarflag. Da kann man toll planschen, Loa und Hugi bauen Sandburgen und Dämme am Strand. Ein paar französische Touristen machen mit und wohl auch ein paar Holländer. Hinterher wollen wir schwimmen gehen, aber da hat das Schwimmbad zugemacht.',
      },
      {
        type: 'text',
        text: 'It is autumn and the weather is great so we go on a trip to lake Myvatn and we take a bath in the blue lagoon at Bjarnarflag. It is perfect to paddle about there and Loa and Hugi build a sandcastle and a dam on the beach. A couple of French tourists join us and also some from the Netherlands I think. Afterwards we want to go to the swimming pool but then it is already closed.',
      },
      {
        type: 'image',
        src: '/images/works/11/3.jpg',
        description:
          'Uppáhaldsstelling Leós Trotskis - Leos Trotskis Lieblingsposition - The favorit position of Leo Trotski',
      },
      {
        type: 'text',
        text: 'Þetta er Leó, hundur Láru og Ingu. Friðrik Haukur er samt sennilaga duglegastur að fara með hann út að ganga og Angelika gengur einnig með hann. Haukur kallar hann reyndar Leó Trotski og uppáhaldsstellingin hans er á bakinu á teppinu í stofunni þegar sólin skín inn um gluggann.',
      },
      {
        type: 'text',
        text: 'Das ist Leo, der Hund von Laura und Inga. Fridrik Haukur ist aber wohl am fleißigsten, mit ihm ´rauszugehen, Angelika macht das auch manchmal. Übrigens nennt Fridrik ihn Trotzki, und seine Lieblingsposition ist, auf dem Rücken im Wohnzimmer zu liegen, wenn dieSonne durchs Fenster scheint.',
      },
      {
        type: 'text',
        text: 'This is Leo, the dog from Lara and Inga. Fridrik Haukur is probably the keenest one taking him out for a walk and Angelika takes him out too. Fridrik calls him in fact Leo Trotzki and the favourite position of the dog is to lie on his back on the carpet in the living room when the sun shines through the window.',
      },
      {
        type: 'image',
        src: '/images/works/11/4.jpg',
        description:
          'Schützenplatz úr loftbelg - Schützenplatz aus einem Heißluftballon - Schützenplatz from a hot air balloon',
      },
      {
        type: 'text',
        text: 'Við gáfum Huga flugferð með loftbelg í 10 ára afmælisgjöf. Kristín er frekar lofthrædd og Lóa Aðalheiður full ung svo ég fer með honum. Það er frábært veður og við fljúgum rólega yfir. Það er gaman að sjá borgina svona að ofan og á Schützenplatz er vorhátíðin í gangi. Mér verður samt augnablik hugsað til bókarinnar “Eilífrar ástar” eftir Ian McEwan um loftbelgsferð sem endar ekki sérlaga vel.',
      },
      {
        type: 'text',
        text: 'Hugi bekam zum 10. Geburtstag eine Fahrt im Heißluftballon geschenkt. Kristin ist nicht schwindelfrei, und Loa Adalheidur ist noch zu jung, also fliege ich mit ihm. Das Wetter ist toll und wir schweben langsam dahin. Es ist schön, die Stadt von oben zu sehen, und auf dem Schützenplatz ist gerade das Schützenfest. Ich denke aber einen Augenblick an das Buch „Liebeswahn” von Ian McEwan, wo es um eine Ballonfahrt geht, die nicht sehr gut endet.',
      },
      {
        type: 'text',
        text: 'We gave Hugi a trip with the balloon on his tenth birthday. Kristin is rather afraid of heights and Loa rather young so i go with him. The weather is perfect and we fly softly away. It is fun to see the city like this from above and on Schuetzenplatz is the springfestival. Allthough I think of the book Enduring love from Ian McEwan about a trip with a balloon that does not end that well at all.',
      },
      {
        type: 'image',
        src: '/images/works/11/5.jpg',
        description:
          'Græna vatnið í Worpswede - Der grüne See im Worpswede - The green lake in Worpswede',
      },
      {
        type: 'text',
        text: 'Um veturinn hugsaði ég mér gott til glóðarinnar því ég hélt að það yrði hægt að synda í þessu vatni um vorið. En þegar fór að vora kom svona græn slíkja yfir vatnið og vonlaust að synda í því. En það var allt í lagi því græni liturinn var svo ótrúlega fallegur að ég stóð bara agndofa og horfði á hann. Það var eins og hann lýsti upp skóginn.',
      },
      {
        type: 'text',
        text: 'Im Winter freute ich mich darauf, im Frühjahr in diesem See zu schwimmen. Aber im Frühling kam grüne Entengrütze auf das Wasser und es war hoffnungslos, darin zu schwimmen. Aber das war ganz in Ordnung; die grüne Farbe war so unglaublich schön, dass ich nur da stand und fasziniert war. Es war, als ob sie den ganzen Wald erleuchtete.',
      },
      {
        type: 'text',
        text: 'In the winter I thought it would be a great idea to take a swim in this water in the springtime. But when the spring came there also came a green algae on the water and there was no way to swim in it. But that was all right because the green colour was unbelievably beautiful and I just stood there and gazed at it. It was like it was lighting up the forest.',
      },
      {
        type: 'image',
        src: '/images/works/11/6.jpg',
        description:
          'Lóa og mínimalistarnir - Loa und die minimalisten - Loa and the minimalists',
      },
      {
        type: 'text',
        text: 'Þetta er Lóa Aðalheiður Kristínardóttir. Hún verður bráðum fimm og hálfs. Henni finnst mínimalismi mjög skemmtilegur. Hér stendur hún einmitt í einu af 15 steinsteipuverkum  eftir Donald Judd við Chinati stofnunina í Marfa í Texas og horfir á nokkur önnur svipuð. Allrabest finnsthenni samt ljósaverkiðverkið hans Dans Flavins, án titils. Það er flott.',
      },
      {
        type: 'text',
        text: 'Das ist Loa Adalheidur Kristinardottir. Sie wird bald fünfeinhalb. Sie findet Minimalismus sehr lustig. Hier steht sie gerade in einer von 15 Betonarbeiten von Doanld Judd bei der Chinati Foundation in Marfa, Texas und sieht sich noch ein Paar ähnliche an. Am allerliebsten mag sie aber die Lichtarbeit, ohne Titel, von Dan Flavin. Die ist echt cool.',
      },
      {
        type: 'text',
        text: 'This is Loa Adalheidur Kristinardottir. She will soon be five and half. She thinks minimalism is very  funny. Here she is standing in one of the 15 concrete works from Donald Judd at the Chinati Foundation in Marfa, Texas and looking at some more. The best of all she says is the untitled light work from Dan Flavin. That is real cool.',
      },
    ],
  },
  {
    id: 12,
    title: 'KETILHÚS',
    content: [
      { type: 'image', src: '/images/works/12/0.jpeg' },
      { type: 'image', src: '/images/works/12/1.jpg' },
      { type: 'image', src: '/images/works/12/2.jpg' },
      { type: 'image', src: '/images/works/12/3.jpg' },
    ],
  },
  {
    id: 13,
    title: 'SWIM',
    content: [
      { type: 'title', text: 'Sund - Swim - Swimmen' },
      {
        type: 'text',
        text: 'Hugi hafði rétt fyrir sér - Hugi hatte recht - Hugi was right',
      },
      {
        type: 'text',
        text: 'Eftir sundferð í Fössebad förum við í heimsókn til Kwan Ho og Michaels. Við borðum ljúffengt salat á svölunum og svo fara Hugi og Lóa ásamt Piu Mariu og Söru á leikvöllinn með stóru rólunum. Eftir smá stund kemur Hugi hlaupandi til baka greinilega handleggsbrotinn. Michael skutlar okkur á næsta sjúkrahús og Hugi bendir mér á að þetta hefði aldrei gerst hefðum við farið í Stadionbad eins og hann vildi.',
      },
      {
        type: 'text',
        text: 'Nach dem Schwimmen in Fössebad besuchen wir Kwan Ho und Michael. Wir essen leckeren Salat auf dem Balkon und dann gehen Hugi und Loa mit Pia Maria und Sara auf den Spielplatz mit den grossen Schaukeln. Nach einer kurzen Zeit kommt Hugi laufend zurück, ganz deutlich mit gebrochenem Arm. Michael bringt uns zum nächsten Krankenhaus und Hugi sagt zu mir, dass das nie passiert wäre, wenn wir zum Stadionbad gegangen wären, wie er wollte.',
      },
      {
        type: 'text',
        text: 'After a swim in Fössebad we visit Kwan Ho and Michael. We have a wounderful salad on the balcony. Then Hugi and Loa go with Pia Maria and Sara to the playground with the huge swings. After a short time Hugi comes running back with a broken arm. Michael brings us to the next hospital and Hugi points out to me that this would never have happened if we had gone to Stadionbad like he wanted.',
      },
      { type: 'image', src: '/images/works/13/0.jpeg' },
      { type: 'image', src: '/images/works/13/1.jpg' },
      { type: 'image', src: '/images/works/13/2.jpg' },
    ],
  },
  {
    id: 14,
    title: 'KARTOGRAFEN',
    content: [
      { type: 'title', text: 'KARTOGRAFEN' },
      { type: 'text', text: 'Die Sehnsucht des Kartografen' },
      { type: 'text', text: 'Kunstverein Hannover' },
      { type: 'text', text: '13. Dezember - 25. Januar 2004' },
      {
        type: 'text',
        text: 'Als übergeordnete Metapher steht die "Kartografie" für jegliche Form von Ordnungssystemen, mit denen wir unser Verhältnis zur Welt sinngebend zu regeln versuchen. Im Mittelpunkt dieser thematischen Präsentatiopn steht die Frage danach, in welcher Form Ordnungsmuster wie Kartografie, Archivstrukturen oder wissenschaftliche Systematik in der heutigen künstlerischen Produktion verwendet werden. Dabei zielt das Projekt auf eben jene Beispiele, in denen die innere Ambivalenz der Ordnung zutage tritt, die zwischen Struktur- und Identitätsbildung und ihrer Auflösung aufscheint und künstlerisch inszeniert wird.',
      },
      {
        type: 'text',
        text: 'Teilnehmende Künstlerinnen und Künstler (Planungsstand Juli 2003): Franz Ackermann, Chantal Akerman, Stefan Altenburger, Atlas Group/Walid Raad, Susanne Brügger, Arnold Dreyblatt, Hlynur Hallsson, Stephan Huber, Alfredo Jaar, Christoph Keller, Hendrikje Kühne/Beate Klein, Hiroyuki Masuyama, Christiane Möbus, Michael Müller, Peter Piller, Alex Roob, Richard Schindler, Christine Schulz, Monica Studer/Christoph van den Berg, Heike Weber.',
      },
      {
        type: 'text',
        text: 'Gäste: Evolutionäre Zellen, Frankfurt am Main, Galerie für Landschaftskunst, Hamburg.',
      },
      { type: 'image', src: '/images/works/14/0.jpeg' },
      { type: 'image', src: '/images/works/14/1.jpg' },
      { type: 'image', src: '/images/works/14/2.jpg' },
      { type: 'image', src: '/images/works/14/3.jpg' },
      { type: 'image', src: '/images/works/14/4.jpg' },
      { type: 'image', src: '/images/works/14/5.gif' },
      { type: 'image', src: '/images/works/14/6.jpg' },
    ],
  },
  {
    id: 15,
    title: 'VON 12',
    content: [
      { type: 'image', src: '/images/works/15/0.gif' },
      { type: 'image', src: '/images/works/15/1.gif' },
      { type: 'image', src: '/images/works/15/2.jpg' },
      { type: 'image', src: '/images/works/15/3.jpg' },
    ],
  },
  {
    id: 16,
    title: 'SET',
    content: [
      { type: 'title', text: 'set' },
      { type: 'text', text: 'SET - A Studio Report' },
      { type: 'text', text: 'June 11 - July 30, 2004' },
      {
        type: 'text',
        text: '"SET - A Studio Report" shows works of artists represented by Kuckei + Kuckei. There are completed works on display as well as more temporary, roughly sketched material. The show focusses ? last but not least by its way of presentation ? on the element of investigation and presents material usually withheld from a public exhibition. The spectrum ranges from drawing, painting and photography via computer animation and colour print to graffiti and wooden object.',
      },
      {
        type: 'text',
        text: 'Participating artists: Ingmar Alge, Oliver van den Berg, Anne Berning, Joseph Biel, Hlynur Hallsson, Jörg Lange, Michael Laube, Lois Renner, Gösta Röver, Matten Vogel, Gerhard Winkler',
      },
      {
        type: 'text',
        text: 'Kuckei + Kuckei\nLinienstraße 158\nD-10115 Berlin\nTel.:   +49 - 30 - 883 43 54\nFax:    +49 - 30 - 886 83 244',
      },
      { type: 'text', text: 'SET - Ein Werkstattbericht' },
      { type: 'text', text: '11. Juni bis 30. Juli 2004' },
      {
        type: 'text',
        text: 'Die Ausstellung "SET - Ein Werkstattbericht" zeigt Arbeiten von Künstlern der Galerie Kuckei + Kuckei. Zu sehen sind sowohl einzelne abgeschlossene Arbeiten, als auch vorläufiges, eher skizzenhaftes Material. Nicht zuletzt durch die Art der Präsentation steht hierbei das untersuchende Element im Vordergrund. Die Ausstellung zeigt manches was einer öffentlichen Ausstellung normalerweise vorenthalten bliebe. Hierbei reicht das Spektrum von der Zeichnung über Collage, Malerei, Fotografie, Computeranimation und Farbausdruck, bis zu Graffiti und Holzobjekt.',
      },
      {
        type: 'text',
        text: 'Beteiligte Künstler: Ingmar Alge, Oliver van den Berg, Anne Berning, Joseph Biel, Hlynur Hallsson, Jörg Lange, Michael Laube, Lois Renner, Gösta Röver, Matten Vogel, Gerhard Winkler',
      },
      {
        type: 'text',
        text: 'Kuckei + Kuckei\nLinienstraße 158\nD-10115 Berlin\nTel.:   +49 - 30 - 883 43 54\nFax:    +49 - 30 - 886 83 244',
      },
      { type: 'image', src: '/images/works/16/0.jpg' },
      { type: 'image', src: '/images/works/16/1.jpg' },
    ],
  },
  {
    id: 17,
    title: 'ART FORUM',
    content: [{ type: 'image', src: '/images/works/17/0.jpg' }],
  },
  {
    id: 18,
    title: 'CHARLOTTENBERG',
    content: [
      { type: 'image', src: '/images/works/18/0.jpg' },
      { type: 'image', src: '/images/works/18/1.jpg' },
      { type: 'image', src: '/images/works/18/2.jpg' },
      { type: 'image', src: '/images/works/18/3.jpg' },
      { type: 'image', src: '/images/works/18/4.jpg' },
      { type: 'image', src: '/images/works/18/5.jpg' },
    ],
  },
  {
    id: 19,
    title: 'JUST',
    content: [
      { type: 'title', text: 'BARA - BLOSS - JUST' },
      {
        type: 'text',
        text: '[Galleri 21 Rådmangatan 5, S-211 56 Malmö](http://www.galleri21.com)',
      },
      {
        type: 'text',
        text: 'Den Isländske konstnären Hlynur Hallsson, numera bosatt i Tyskland, öppnar galleriets säsong 2005. Räkna med något utöver det vanliga där publiken bjuds in till engagemang och delaktighet.',
      },
      {
        type: 'text',
        text: 'Hallson är en mångfacetterad konstnär med kommunikation som ledmärke. Oavsett om han använder sig av vykort, filmade intervjuer eller annat så är det alltid själva utbytet, kommunikationen, som är i centrum.',
      },
      {
        type: 'text',
        text: 'I Hlynur Hallssons konst finns det en öppenhet, kvickhet och en politisk överton - inte sällan är det också underhållande.',
      },
      {
        type: 'text',
        text: 'Låt oss därför ta ett exempel med Hlynur Hallsson i huvudrollen…',
      },
      {
        type: 'text',
        text: 'Marfa är ett litet samhälle i Texas med en population på drygt 2400 invånare. Det vimlar av sådana hillbilly ställen i den amerikanska landsbygden. Vad som eventuellt gör detta samhälle intressantare än andra är det ryktas om två saker, dels att den har fått sitt namn efter Dostojevskijs bröderna Karamazov och dels att Georg Bush Jr har sitt ursprung i trakten. Vad som däremot är en realitet är Chinati Stiftelsen (skapad av Donald Judd) i staden som varje år delar ut vistelsestipendier åt internationella konstnärer.',
      },
      {
        type: 'text',
        text: 'Hallsson mottog stipendiet och åkte ner till Marfa i sommaren 2002. Utställningen som ägde rum I stiftelsens lokaler innefattade fyra meningar i tagliknande stil på väggarna, ”The real axis of evil are Israel, USA and the UK”, ”Ariel Sharon is the top terrorist. George W. Bush is an idiot. And Iceland is the banana republic number one".',
      },
      {
        type: 'text',
        text: 'Det uppstod naturligtvis ett fulländat kaos. Hotfulla brev, ilskna telefonsamtal bombarderade stiftelsen och tumultet nådde även kommunhuset där den chockade borgmästaren Oscar Martinez räddade sitt skinn med att säga att han tyckte bättre om klottret på tågen än Mr Hallsons konst. Schism uppstod också mellan Marfans invånare, de yngre liberala och de konservativa. Trätan och hoten blev så stora att Hallson såg sig nödgad att förtydliga att det inte nödvändigtvis var hans egna åsikter, utan det skulle snarare ses som ett sätt att få igång en diskussion och en respons. Kort därefter tog Hallson ner utställningen och målade över orden med nya och dagen därpå var det vernissage igen där det istället stod:',
      },
      {
        type: 'text',
        text: '”The Axis of Evil is North Korea, Iraq and Iran” och “Osama bin Laden is the top terrorist. George W. Bush is a good leader. And Iceland is not a banana republic”',
      },
      {
        type: 'text',
        text: 'Hallsson förklarade något provokativt över sin förändrade utställning att ”Jag skriver bara det som människor vill läsa”…',
      },
      {
        type: 'text',
        text: 'Det nya verket ledde inte till någon större förändring även om hoten minskade, effekten blev istället en annan, orden betraktades snarare som ett sätt att förlöjliga och göra invånarna pinsamt medvetna om sin enfaldighet.',
      },
      {
        type: 'text',
        text: 'Bortom den uppenbara provokationen är det också ett verkligt undersökande av relationen och processen mellan ord och handling. Ett rakt laborerande med kommunikation. Hallssons konst tenderar också till att skapa en intressant och bräcklig relation mellan bild och text där de båda slits mellan att vara till lags och komplettera varandra för att stunden senare skapa distans. För oss är historien om Marfa också humor på hög nivå…',
      },
      {
        type: 'text',
        text: 'Hallssons slutsatser om det amerikanska folket är nedslående ” I think quite many Americans don’t have interest in free speech, the majority, I don’t know. My experience was, quite many people would be happy to give that one away.”',
      },
      { type: 'text', text: 'Återstår att se hur omdömet om svensken blir…' },
      {
        type: 'text',
        text: 'Hlynur Hallsson har ställt ut på bland andra Kunstverein i Hannover, The Balcony i Toronto, Kuckei + Kuckei i Berlin, Manchester Metropolitan University Gallery, Charlottenborg i Köpenhamn, 02 Gallery i Akureyri, Galleri i8 i Reykjavik, Overgarden i Köpenhamn.',
      },
      { type: 'image', src: '/images/works/19/0.jpg' },
      { type: 'image', src: '/images/works/19/1.jpg' },
      { type: 'image', src: '/images/works/19/2.jpg' },
      { type: 'image', src: '/images/works/19/3.jpg' },
    ],
  },
  {
    id: 20,
    title: 'NOW',
    content: [
      { type: 'title', text: 'NÚNA - JETZT - NOW' },
      {
        type: 'text',
        text: 'Galerie Robert Drees, Weiderdamm 15, D-30167 Hannover  22.01 - 05.03.2005',
      },
      {
        type: 'text',
        text: '[www.galerie-robert-drees.de](http://www.galerie-robert-drees.de)',
      },
      { type: 'image', src: '/images/works/20/0.jpg' },
      { type: 'image', src: '/images/works/20/1.jpg' },
      { type: 'image', src: '/images/works/20/2.jpg' },
      { type: 'image', src: '/images/works/20/3.jpg' },
      { type: 'image', src: '/images/works/20/4.jpg' },
      { type: 'image', src: '/images/works/20/5.jpg' },
      { type: 'image', src: '/images/works/20/6.jpg' },
      { type: 'image', src: '/images/works/20/7.jpg' },
      { type: 'image', src: '/images/works/20/8.jpg' },
      { type: 'image', src: '/images/works/20/9.jpg' },
      { type: 'image', src: '/images/works/20/10.jpg' },
    ],
  },
  {
    id: 21,
    title: 'LA BINNALE',
    content: [
      { type: 'title', text: 'la Biennale di Venezia' },
      {
        type: 'text',
        text: 'Giardini, la Biennale di Venezia 12.06.-06.11.2005 "BUSH+BLAIR"',
      },
      { type: 'image', src: '/images/works/21/0.jpg' },
      { type: 'image', src: '/images/works/21/1.jpg' },
      { type: 'image', src: '/images/works/21/2.jpg' },
      { type: 'image', src: '/images/works/21/3.jpg' },
    ],
  },
  {
    id: 22,
    title: 'SOCKER',
    content: [
      { type: 'title', text: 'Fótbolti-Fussball-Soccer' },
      {
        type: 'text',
        text: 'Giardini, la Biennale di Venezia 12.06.-06.11.2005 "BUSH+BLAIR"',
      },
      { type: 'image', src: '/images/works/22/0.jpg' },
      { type: 'image', src: '/images/works/22/1.jpg' },
      { type: 'image', src: '/images/works/22/2.jpg' },
    ],
  },
  {
    id: 23,
    title: 'ROAD MOVIES',
    content: [
      { type: 'title', text: 'vegamyndir - roadmovies' },
      {
        type: 'text',
        text: 'Gallerí ash, Anna S. Hróðmarsdóttir, Lundur, 560 Varmahlíð',
      },
      { type: 'image', src: '/images/works/23/0.jpg' },
      { type: 'image', src: '/images/works/23/1.jpg' },
      { type: 'image', src: '/images/works/23/2.jpg' },
    ],
  },
  {
    id: 24,
    title: 'YAMABIKO',
    content: [
      { type: 'image', src: '/images/works/24/0.jpg' },
      { type: 'image', src: '/images/works/24/1.jpg' },
      { type: 'image', src: '/images/works/24/2.jpg' },
    ],
  },
  {
    id: 25,
    title: 'SOJO',
    content: [
      { type: 'title', text: 'passages to olymp' },
      { type: 'text', text: 'media art from Europe' },
      {
        type: 'text',
        text: 'Roger Bourke (England)\nTomek Wendland (Poland)\nHarro Schmidt (Germany)\nHlynur Hallsson (Iceland)\nDominik Lejman (Poland)\nYasuyuki Saegusa (Japan)\nAki Morino (Japan)',
      },
      { type: 'text', text: '09.09.-28.09.2005' },
      { type: 'text', text: 'Open every day 10.00-19.00' },
      {
        type: 'text',
        text: 'Sojo Gallery\n10-25 Hanabatacho\nKumamoto city\n860-0806 Japan',
      },
      { type: 'text', text: 'Tel. +81 96 323 1158' },
      { type: 'image', src: '/images/works/25/0.jpg' },
      { type: 'image', src: '/images/works/25/1.jpg' },
      { type: 'image', src: '/images/works/25/2.jpg' },
    ],
  },
  {
    id: 26,
    title: 'COLORS',
    content: [
      { type: 'title', text: 'Litir - Farben - Colors' },
      { type: 'text', text: '08.10.-02.11.2005' },
      { type: 'text', text: 'Preview on Saturday 08.10 október 2005 at 15.00' },
      {
        type: 'text',
        text: 'The University of Akureyri\nSólborg v/ Norðurslóð\nIS - 600 Akureyri\nIceland',
      },
      { type: 'text', text: 'Tel. + 354 4608060' },
      { type: 'text', text: 'Open all weekdays 8-18 and on Saturdays 12-15' },
      {
        type: 'text',
        text: 'Verkið sem Hlynur hefur gert sérstaklega fyrir setustofu bókasafns háskólans samanstendur af fimm lituðum gluggum setustofunnar sem gestir geta horft í gegnum í Norðurátt. Fólk getur upplifað þau áhrif sem litirnir hafa á okkur og velt fyrir sér merkingu litanna.\nSamkvæmt litafræði á hvert okkar sinn lit. Með því að leggja saman fæðingardag, mánuð og fæðingarár og leggja svo saman eintölurnar er hægt að finna tölu hvers og eins. Til dæmis 25.09.1968 2+5+0+9+1+9+6+8=40 og 4+0=4 og liturinn er: grænn.',
      },
      {
        type: 'text',
        text: '1. Rauður. (Red) Jörð, Klofið og niður. Ég er sterkur og fullur af hugrekki og vegna vel í öllu sem ég geri. Átt: Suður\n2. Appelsínugulur. (Orange) Kynhvötin, neðan nafla. Ég losa um gleðin. Ég er lifandi og mér líður vel. Eins og við hugsum erum við.\n3. Gulur. (Yellow) Sólarplexus, okustöðin, taka inn áhrif, neðan við bringubein. Hugmyndaflæði til mín. Mér finnst ég endurnýjaður. Átt: Austur\n4. Grænn. (Green) Hjartastöðin, alltaf á hreyfingu. Bringa og hjarta. Ég er ungur og frjáls, líf mitt er rétt að byrja. Allar áttir\n5. Ljósblár. (Turquoise) Frelsi, tjáning, hálsinn, himinn. Ég er frjáls í friði og innblástur flæðir til mín.\n6. Blár (Indigo). Draumar, innsæið, enni og ofar. Sögumaður. Ég er kennari og kenni dæmi. Átt: vestur\n7. Fjólublátt. (Violet) Miðlun, hvirfill. Ég fórna mínu fyrir hærri hugmyndir. Ég hef kraft og nota hann af visku.\n8. Magenta. Andlegt. Magenta, endarnir koma saman, sést ekki í prisma. Ást - Fórn og guð. Að elska það litla í því daglega. Hlusta betur á sjálfan sig. Hvernig hefur það áhrif á þig og hvað gerir þú með það. Endurnýja orkuflæðið.\n9. Gull. (Gold) Almætti',
      },
      { type: 'image', src: '/images/works/26/0.jpg' },
      { type: 'image', src: '/images/works/26/1.jpg' },
      { type: 'image', src: '/images/works/26/2.jpg' },
      { type: 'image', src: '/images/works/26/3.jpg' },
      { type: 'image', src: '/images/works/26/4.jpg' },
      { type: 'image', src: '/images/works/26/5.jpg' },
      { type: 'image', src: '/images/works/26/6.jpg' },
      { type: 'image', src: '/images/works/26/7.jpg' },
      { type: 'image', src: '/images/works/26/8.jpg' },
      { type: 'image', src: '/images/works/26/9.jpg' },
    ],
  },
  {
    id: 27,
    title: 'AGAIN',
    content: [
      { type: 'title', text: 'AFTUR - WIEDER - AGAIN' },
      { type: 'text', text: '18.02. - 05.03.2006' },
      {
        type: 'text',
        text: 'OPNUN LAUGARDAGINN 18.02.2006 KLUKKAN 16\nOPIÐ LAUGARDAGA OG SUNNUDAGA KLUKKAN 14-17 OG SAMKVÆMT SAMKOMULAGI',
      },
      { type: 'text', text: 'GALLERÍ + 10 ÁRA 1996-2006' },
      {
        type: 'text',
        text: 'JORIS RADEMAKER / GUÐRÚN PÁLÍNA GUÐMUNDSDÓTTIR\nGALLERÍ +\nBREKKUGÖTU 35\nIS - 600 AKUREYRI\nGALLERIPLUS@INTERNET.IS\n+354 462 7818',
      },
      {
        type: 'text',
        text: 'Hlynur Hallsson opnar sýninguna AFTUR - WIEDER - AGAIN í Gallerí + á Akureyri laugardaginn 18. febrúar klukkan 16. Þetta er tíu ára afmælissýning gallerísins sem þá Joris Rademaker og Guðrún Pálína Guðmundsdóttir hafa rekið frá febrúar 1996. Hlynur setti einmitt upp opnunarsýninguna og er nú mættur aftur til að halda uppá afmælið.',
      },
      {
        type: 'text',
        text: 'Hlynur Hallsson var bæjarlistamaður Akureyrar 2005 og þetta er þriðja sýningin af fjórum sem hann setur upp í bænum sem þakklætisvott fyrir útnefninguna.  Sú fjórða og síðasta verður í Jónas Viðar Gallerí í Listagilinu og opnar hún föstudaginn 3. mars 2006 og heitir sú sýning "Myndir - Bilder - Pictures". Hlynur hlaut tveggja ára listamannalaun á þessu ári.',
      },
      { type: 'text', text: 'Make words not war!' },
      {
        type: 'text',
        text: 'Raimar Stange on the Textual Works of Hlynur Hallsson',
      },
      {
        type: 'text',
        text: 'Back in the second half of the 1990s, Hlynur Hallsson would send me post cards from various parts of the world, cards on which he had written sentences in Icelandic – knowing full well that I had no knowledge of that language. In those days incomprehensibility and its aesthetic quality were an integral part of the cultural master plan, very much in the spirit of Johann Heinrich Pestallozi, the Swiss educational reformer who as early as the 18th century had suggested that children be confronted with a language that was foreign to them so that they would recognize that the world cannot be made completely comprehensible.However, the political situation has deteriorated rapidly since then -- brutal neoliberalism and relentless globalization scarcely leave a place for penetrating and perceptive reflections on contemporary aesthetics and an (un-ideological) knowledge of the world. The German author Hermann Hesse expressed views in a like vein when he wrote, “Drowning men sing no arias.” Hlynur Hallsson is also not singing any arias in this new millennium. Although his more recent textual works are often still multilingual – usually English, Icelandic and German – this multilingualism is now less of an isolated occurrence than the expression of a (his) way of life in a globalized internationality.',
      },
      {
        type: 'text',
        text: 'However, and above all, Hlynur Hallsson’s textual works -- which in their form remind us of anonymous graffiti, and that not by sheer coincidence, -- are sometimes of an explicit, yes, aggressive content. For example, during the 2005 Biennale di Venezia the young Icelandic artist wrote in black letters on the walls of various buildings the words:',
      },
      { type: 'text', text: '“Bush + Blair' },
      { type: 'text', text: 'Terror + Fear”' },
      {
        type: 'text',
        text: 'And at an exhibition in Charlottenborg in 2004 he emblazoned the words “War is terrorism with a bigger budget. Fight terrorism with all power” on the walls of the gallery, thereby mutating it into a political arena.In place of vexing ambiguities and incomprehensibilities, Hlynur Hallsson’s work presents a written challenge to post-capitalist imperialism like the (Iraq) war – which, as Antonio Negri and Michael Hardt pointed out in their anti-globalization primer “Empire,” has allegedly become a mere police action no longer requiring UN approval. And that is fine, for even if these days neoformalistic art and introspection- doting painting have in many places permitted this to be forgotten, enthralling art is -- not at the least –inscribed in moral conscience.',
      },
      {
        type: 'text',
        text: '(Translated from German by Lois Feuerle, Portland, Oregon)',
      },
      { type: 'text', text: 'Make words not war!' },
      {
        type: 'text',
        text: 'Raimar Stange über die Textarbeiten von Hlynur Hallsson',
      },
      {
        type: 'text',
        text: 'Einst, in der zweiten Hälfte der 1990er Jahre, hat mir Hlynur Hallsson Postkarten von verschiedenen Orten dieser Welt geschickt, auf denen er isländische Sätze geschrieben hatte – wohl wissend, dass ich dieser Sprache überhaupt nicht mächtig bin. Unverständlickeit und ihre ästhetische Qualität stand damals auf dem ästhetischen Masterplan, ganz im Sinne von Johann Heinrich Pestallozi, dem schweizerischen Bildungsreformer, der im 18. Jahrhundert bereits vorschlug, Kinder mit einer für sie fremden Sprache zu konfrontieren, damit sie erkennen, dass die Welt nicht gänzlich für sie verständlich sein kann. Doch: Die politische Situation hat sich seit damals rapide verschärft, ein brutaler  Neoliberalismus und die gnadenlose Globalisierung lassen kaum noch einen Platz mehr für feinsinnige Reflexionen über zeitgenössische Ästhetik und (unideologische) Welterkenntnis. In diesem Sinne schrieb schon der deutsche Literat Hermann Hesse: „Ertrinkene singen keine Arien“. Auch Hlynur Hallsson singt im neuen Jahrtausend längst keine „Arien“ mehr, seine neueren Textarbeiten sind zwar oftmals immer noch mehrsprachig, meist in englischer, isländischer und deutscher Sprache, aber diese Mehrsprachigkeit ist weniger erratisch, als jetzt der Ausdruck von (s)einer Lebensweise in einer globalisierten Internationalität.',
      },
      {
        type: 'text',
        text: 'Außerdem und vor allem: Hlynur Hallssons Textarbeiten, die formal nicht zufällig an anonyme Graffitis erinnern, sind jetzt mitunter explizit politischen, ja aggressiven Inhalts:',
      },
      { type: 'text', text: '„Bush + Blair' },
      { type: 'text', text: 'Terror + Fear“' },
      {
        type: 'text',
        text: 'z. B. hat der junge Isländer während der la Biennale di Venezia anno 2005 in Venedig in schwarzer Schrift an diverse Häuserwände geschrieben. Und in einer Ausstellung in Charlottenborg 2004 stand klar und deutlich an einer Wand des konsequent zum politischen Zentrums mutierenden Kunstraumes zu lesen: „War is terrorism with a bigger budgetFight terrorism with all power“.Schriftliche Kampfansagen gegen einen postkapitalistischen Imperialismus, dem der (Irak)Krieg, schon Antonio Negri/Michael Hardt weisen in ihrer Antiglobalisierungsfibel „Empire“ daraufhin, vermeintlich zu bloßen Polizeieinsätzen werden, der die UN dann angeblich nicht mehr zuzustimmen braucht, treten so in Hlynur Hallssons Arbeit an die Stelle irritierender Mehr- und Nichtdeutigkeiten. Gut so, denn spannender Kunst ist , auch wenn neoformalistische Kunst und innerlichkeitsverliebte Malerei dies derzeit mancherorts beinahe vergessen lassen, nicht zuletzt ein moralisches Gewissen eingeschrieben!',
      },
      { type: 'image', src: '/images/works/27/0.jpg' },
      { type: 'image', src: '/images/works/27/1.jpg' },
      { type: 'image', src: '/images/works/27/2.jpg' },
      { type: 'image', src: '/images/works/27/3.jpg' },
      { type: 'image', src: '/images/works/27/4.jpg' },
      { type: 'image', src: '/images/works/27/5.jpg' },
      { type: 'image', src: '/images/works/27/6.jpg' },
      { type: 'image', src: '/images/works/27/7.jpg' },
    ],
  },
  {
    id: 28,
    title: 'PICTURES',
    content: [
      { type: 'title', text: 'MYNDIR - BILDER - PICTURES' },
      { type: 'text', text: '04.03. - 25.03.2006' },
      { type: 'text', text: 'OPNUN LAUGARDAGINN 04.03.2006 KLUKKAN 14' },
      {
        type: 'text',
        text: 'OPIÐ FÖSTUDAGA OG LAUGARDAGA KLUKKAN 13-18 OG SAMKVÆMT SAMKOMULAGI\nJÓNAS VIÐAR GALLERY // KAUPANGSSTRÆTI 12 // IS - 600 AKUREYRI // +354 8665021 // jvs@jvs.is // Jónas Viðar Gallery',
      },
      {
        type: 'text',
        text: 'Hlynur Hallsson opnar sýninguna MYNDIR - BILDER - PICTURES í Jónas Viðar Gallery á Akureyri laugardaginn 4. mars klukkan 14.',
      },
      {
        type: 'text',
        text: 'Hlynur sýnir hér 14 textaljósmyndir sem eru nokkurskonar dagbók eða myndaalbúm. Myndirnar eru af hversdagslegum hlutum sem eru ef til vill ekki hversdagslegir og textarnir eru hugleiðingar um hlutina eins og þeir eru ef til vill þá stundina. Hlynur byrjaði a þessari myndröð með sýningu í Nýlistasafninu 2003 og hefur haldið henni áfram síðan og sýnt úr henni í Sojo gallery í Kumamoto í Japan, Galleri 21 í Malmö í Svíþjóð, Galerie Robert Drees í Hannover í Þýskalandi og ash gallerí í Varmahlíð svo einhverjir staðir séu nefndir. Þetta er þó í fyrsta skipti sem flestar þessara mynda eru sýndar á Íslandi.',
      },
      { type: 'title', text: 'Hlynur Hallsson – On the road' },
      {
        type: 'text',
        text: 'Hlynur Hallson ist immer on the road. Der Isländer ist ein Reisender zwischen den Kontinenten und Kulturen, der aus Interesse an den Menschen den Kontakt und das Gespräch mit seinem Gegenüber sucht. Bei diesen Begegnungen entsteht eine Fülle von Momentaufnahmen, die auch für seinen Fotozyklus „Myndir - Bilder - Pictures“ der Jahre 2000 bis 2005 grundlegend sind.',
      },
      {
        type: 'text',
        text: 'Es handelt sich dabei um Fotografien, die mit einem dreisprachigen Text kombiniert sind. In ihrer Gesamtheit ergeben sie ein „Roadmovie“, der sich aus Hallssons Erlebnissen und Erinnerungen zusammensetzt und wie eine Art Tagebuch funktioniert. Losgelöst von einer chronologischen Ordnung werden in diesem Zyklus Familienszenen mit Fotos von Freunden und fremden Menschen, Aufnahmen unterschiedlicher Landschaften und Orte mit Bildern aus dem internationalen Kunstbetrieb aneinandergereiht. Vor diesem Hintergrund ergibt sich ein bunter, mitunter sehr privater Bilderreigen aus Hallssons Leben, der scheinbar belanglos daherkommt, aber in der Verschränkung mit den Texten eine geradezu unglaubliche Wirkung entfaltet.',
      },
      {
        type: 'text',
        text: 'Zu jedem Foto erzählt uns Hallsson in Isländisch, Deutsch und Englisch eine kurze Geschichte. Diese sprachliche Reihenfolge wird auf allen Arbeiten konsequent durchgehalten und verweist zugleich auf den kommunikativen Horizont des Künstlers. Isländisch ist seine Muttersprache, Deutsch die Sprache seiner zweiten Heimat und Englisch eine Weltsprache. Spätestens hier zeigt sich deutlich, welche essentielle Rolle Sprache und Kommunikation im Werk des Isländers spielen.',
      },
      {
        type: 'text',
        text: 'Hallssons Geschichten, die lediglich aus einfachen Haupt- und Nebensätzen bestehen, erreichen uns unmittelbar und wirken sofort. Dieser Effekt hängt vor allem mit der Art, wie sich der Künstler uns mitteilt, zusammen. So beginnt er beispielsweise die Geschichte über eine Ballonfahrt mit seinem Sohn Hugi, der diese Fahrt anläßlich seines 10. Geburtstages geschenkt bekommen hat, vollkommen harmlos. Doch die Erzählung nimmt eine Wendung und verliert an Leichtigkeit, als der Künstler für einen Augenblick an das Buch „Liebeswahn“ von Ian McEwan denken muß, in dem es ebenfalls um eine Ballonfahrt geht, die allerdings nicht gut endet.',
      },
      {
        type: 'text',
        text: 'Die Möglichkeit des Absturzes und das Buch, das den Künstler daran erinnert - es ist gerade diese minimale Verschiebung im Zusammenhang mit der Erzählung, welche die Geschichte aus ihrer Banalität und Alltäglichkeit herausrückt. Einfachheit und Komplexität zeichnet nicht nur diese Geschichte aus. Die Ambiguität zieht sich wie eine Konstante durch den gesamten Zyklus und taucht auch in der Arbeit auf, die den Innenhof des Messegebäudes der Art Basel zeigt. Bei schönem Wetter versammeln sich dort viele Besucher. Es ist ein kommunikativer Ort. Doch wer käme, wenn nicht Hallsson, auf die Idee, die Plauderei der Menschen mit der Geräuschkulisse eines Vogelfelsens zu vergleichen? Für den Künstler scheint dieser Vergleich nahe zu liegen, für uns hingegen offenbart er die Grenzen unserer Wahrnehmung, ermöglicht uns aber gleichzeitig unseren Horizont zu erweitern.',
      },
      {
        type: 'text',
        text: 'Hallssons Geschichten haben etwas Referentielles. Sie sagen uns etwas über ihn als Menschen und seine Sicht auf die Dinge. Vielleicht muß man aus Island kommen, um die Welt so wie er zu sehen.',
      },
      { type: 'text', text: 'Claudia Rahn, Hannover' },
      { type: 'title', text: 'Hlynur Hallsson – On the road' },
      {
        type: 'text',
        text: 'Hlynur Hallsson is always “on the road.” The Icelander is a traveler between continents and cultures who, because of his interest in his fellow man, is always looking for contact and conversation with those around him. These meetings yield a wealth of snapshots that form the basis for his photo cycle “Myndir – Bilder – Pictures” from the years 2000 – 2005.',
      },
      {
        type: 'text',
        text: 'These are photographs integrated with a trilingual text. In their totality they give rise to a “road movie” created from Hallsson’s experiences and memories and which functions as a kind of diary. Released from any chronological order, family scenes are threaded together with photos of friends and strangers, shots of different regions and towns are interspersed with images from the international art world. Before this background emerges a colorful and very private sequence of images from Hallsson’s own life that seems to arise casually, but interwoven with the texts creates a virtually incredible effect.',
      },
      {
        type: 'text',
        text: 'For each photograph Hallsson tells us a brief story in Icelandic, German and English. This linguistic sequence is maintained consistently for all the works and at the same time is a reference to the artist’s communicative horizons. Icelandic is his native language, German the language of his second home, and English a world language. Ultimately this clearly demonstrates what a pivotal role language and communication play in the work of this artist from Iceland.',
      },
      {
        type: 'text',
        text: 'Hallsson’s narratives, created of only simple sentences and subordinate clauses, move us with their immediacy -- the result of how directly the artist has communicated with us. For example, he begins the story of a hot air balloon ride with his son Hugi on the occasion of Hugi’s 10th birthday with utter innocence. But the tale takes a darker twist and loses its idyllic atmosphere when the artist’s thoughts turn for a moment to Ian McEwan’s book “Enduring Love”, which also describes a balloon ride -- but one that does not end well.',
      },
      {
        type: 'text',
        text: 'The possibility of a crash and the book that reminds the artist of this – these are precisely what delivers the slight shift within the narrative that rescues the account from quotidian banality. It is not merely the juxtaposition of simplicity and complexity that distinguishes these stories. Ambiguity is a constant that runs through the entire cycle and also appears in the work showing the courtyard of the Art Basel Conference Center. In nice weather many visitors gather there; it is a communicative place. But who, if not Hallsson, would have come upon the idea of comparing the chatter of humans with the background sounds of a bird cliff? For the artist this comparison seemed obvious; but for us he has opened the limits of our perceptions, and at the same time he has made it possible for us to expand our horizons.',
      },
      {
        type: 'text',
        text: 'Hallsson’s stories have referential qualities. They tell us something about him as a person and his vision of things. Perhaps it is necessary to come from Iceland in order to see the world as he does.',
      },
      { type: 'text', text: 'Claudia Rahn, Hannover' },
      {
        type: 'text',
        text: '(Translated from German by Lois Feuerle, Portland, Oregon)',
      },
      { type: 'image', src: '/images/works/28/0.jpg' },
      { type: 'image', src: '/images/works/28/1.jpg' },
      { type: 'image', src: '/images/works/28/2.jpg' },
      { type: 'image', src: '/images/works/28/3.jpg' },
    ],
  },
  {
    id: 29,
    title: 'NEUE KUNST',
    content: [
      { type: 'title', text: 'NEUE KUNST IN ALTEN GÄRTEN' },
      { type: 'text', text: '27. August – 8. Oktober 2006' },
      {
        type: 'text',
        text: 'Antje Bromma\nSusan Donath\nHlynur Hallsson\nPeter Lundberg\nReiner Maria Matysik\nRita McBride\nUwe Schinn\nSebastian Schrader\nAlexander Steig\nHina Strüver\nMatten Vogel\nJürgen Witte',
      },
      { type: 'text', text: 'Winterstra§e 23, 30989 Gehrden-Lenthe' },
      {
        type: 'text',
        text: 'Öffnungszeiten:\nSamstag und Sonntag 11.00 – 17.00 Uhr\nFührungen:\nSamstag und Sonntag um 15.00 Uhr.\nTelefonische Vereinbarung unter 05108-3489 kontakt@neue-kunst-in-alten-gaerten.de\n[www.neue-kunst-in-alten-gaerten.de](http://www.neue-kunst-in-alten-gaerten.de)',
      },
      {
        type: 'text',
        text: 'Sehr geehrte Damen und Herren, liebe Freunde, die zweite Ausstellung zeigt neue künstlerische Positionen in den Parks der beiden Rittergüter in Lenthe. Hierzu laden wir Sie herzlich ein. Die Vernissage am Sonntag, den 27.August 2006, beginnt um 11.00 Uhr auf dem Untergut. Carsten Ahrens, Direktor Neues Museum Weserburg Bremen, wird in die Ausstellung einführen. Zur Ausstellung erscheint ein Katalog.',
      },
      { type: 'text', text: 'Auflage limitierten Ausweise erhältlich.' },
      { type: 'image', src: '/images/works/29/0.jpg' },
      { type: 'image', src: '/images/works/29/1.jpg' },
    ],
  },
  {
    id: 30,
    title: 'PREVIEW',
    content: [
      { type: 'title', text: 'GLAUBEN UND WISSEN - preview' },
      {
        type: 'text',
        text: 'Florian Balze /Berlin, Beate Engl /München, Hlynur Hallsson /Akureyri(IS), Piotr Komarnicki /Berlin/Szczecin (PL) , Daniel Man /München, Hannes Malte Mahler /Hannover, Daniel Müller-Friedrichsen /Berlin, Michael Schrattenthaler /München, Daniel Schürer /Hildesheim, Wolfgang Stehle /München, Alexander Steig /München, Jürgen Witte /Bremen',
      },
      { type: 'text', text: 'Eröffnung: Donnerstag, 24. August, 20:00 Uhr' },
      {
        type: 'text',
        text: 'Dauer: 24. August bis 1. September 2006\nZeiten: täglich 14:00 bis 19:00 Uhr und nach telefonischer Vereinbarung',
      },
      {
        type: 'text',
        text: 'Kunstverein Via 113\nKleine Venedig 1a\nD-31134 Hildesheim',
      },
      {
        type: 'text',
        text: '0049 (0)5121/9819 91\n0049 (0)163/173 37 15\n0049 (0)172/418 46 59 \n[www.via113.de](http://www.via113.de)',
      },
      { type: 'image', src: '/images/works/30/0.jpg' },
      { type: 'image', src: '/images/works/30/1.jpg' },
      { type: 'image', src: '/images/works/30/2.jpg' },
    ],
  },
  {
    id: 31,
    title: 'GLAUBEN UND WISSEN',
    content: [
      { type: 'title', text: 'GLAUBEN UND WISSEN' },
      {
        type: 'text',
        text: '04. – 26.11.2006\nEin Ausstellungsprojekt unter Mitwirkung von',
      },
      {
        type: 'text',
        text: 'Florian Balze\nBeate Engl\nHlynur Hallsson\nPiotr Komarnicki\nDaniel Man\nHannes Malte Mahler\n Daniel Müller-Friedrichsen\n Michael Schrattenthaler\nDaniel Schürer/Via113\nWolfgang Stehle\nAlexander Steig\nJürgen Witte',
      },
      {
        type: 'text',
        text: 'Eröffnung: Freitag, 03. November 2006, 18 – 21 Uhr\nBegrüßung: Klaus von Gaffron\nEinführung: Dr. Patricia Drück',
      },
      {
        type: 'text',
        text: 'Galerie der Künstler\nBerufsverband Bildender Künstler München u. Oberbayern e. V.   Maximilianstraße 42\n  D-80538 München\nTelefon: 089-220 463\nwww.bbk-bayern.de',
      },
      { type: 'text', text: 'Öffnungszeiten: Di. – So, 11 bis 18 Uhr' },
      {
        type: 'text',
        text: 'In Zusammenarbeit mit dem Kulturreferat der Landeshauptstadt München',
      },
      {
        type: 'text',
        text: 'Unterstützt von: \nErwin und Gisela von Steiner Stiftung\nicelandair\nKunstverein Via113 e. V.',
      },
      {
        type: 'text',
        text: 'Glauben ist mehr als einSynonym für Religion - gerade angesichts der gegenwärtigen Debatten wird uns dies verstärkt vor Augen geführt. Im alltäglichen Sprachgebrauch beschreibt Glauben die im Rahmen von Unsicherheit festgestellten Erwartungen bezüglich Tatsachen oder Zusammenhänge. In solchem Glauben drücken sich Meinungen,Vermutungen, subjektive Wahrnehmungen aus. Wissen hingegen bezeichnetdie Gesamtheit aller organisierten Informationen und ihrer wechselseitigen Zusammenhänge, auf deren Grundlage einvernunftbegabtes System handeln kann. Ist Glauben also irrationaler Gegenpol zum fest an Fakten überprüfbaren Wissen? Und was glaubt der Mensch heute, woran glaubt er? Schein oder Sein, Spekulation oder Gewissheit, mediale Vermittlung oder authentisches Erleben. Glaubt eran das, was er sieht, was dokumentiert wurde, was wissenschaftlich bewiesen scheint oder ist? Die 12 beteiligten Künstler widmen sich dem Begriffspaar GLAUBEN UND WISSEN und realisieren zu diesem Themenkomplex weitgehend neue Arbeiten vor Ort. Allesamt einer jüngeren Generation zugehörig, sind sie bereits überregional,teilweise auch international in Erscheinung getreten. Konzipiert wurdedas Projekt von dem Künstler und Kulturwissenschaftler AlexanderSteig in Zusammenarbeit mit Patricia Drück. Die Künstler bedienensich mit Video- und Rauminstallation über Performance und Happeningbis zu Malerei, Fotografie oder Skulptur der großen Bandbreiteverfügbarer zeitgenössischer Ausdrucksformen und bildnerischerStrategien. Vermutungen und Forschungsansätze, Statements undFragestellungen erfahren eine Äußerung, die sich im Zusammenspielder verschiedenen künstlerischen Positionen immer wieder neudefinieren und behaupten müssen. Damit verweist die Ausstellungimplizit auch auf die Rahmenbedingungen, in denen Kunst wahrgenommenwird, letztlich also auf das Betriebssystem Kunst.',
      },
      { type: 'text', text: 'Dr. PatriciaDrück' },
      { type: 'image', src: '/images/works/31/0.jpg' },
      {
        type: 'text',
        text: 'Hannes Malte Mahler(*1968) lädt in seiner interaktiven Installation “Zeichnen Sieworan Sie glauben" den Besucher ein, auf Papier festzuhalten, wasihm wichtig ist. Einmal Bild geworden, soll die Zeichnung sofortwieder zerstört und durch einen Papiershredder geschickt werden.Nach und nach sammeln sich vor Ort Papierschnitzel von kurzfristigvisualisierten, nur noch imaginär vorhandenen Glaubensbezeichnungen',
      },
      {
        type: 'text',
        text: 'Beate Engl(*1973) hat zwei Rednerpulte installiert, die durch einen roten, sichdurch die Ausstellung ziehenden Teppichläufer verbunden sind. BeimBetreten ertönen Versatzstücke aus verschiedenen Reden undFernsehansprachen. Der Künstlerin gelingen anhand des von ihrmodifizierten Ausgangsmaterials entlarvende Aussagen überMachtstrukturen und globale wirtschaftlicheZusammenhänge.',
      },
      {
        type: 'text',
        text: 'Die “EuropäischeEisorgel" von Jürgen Witte (*1965) besteht aus einem imRaum platzierten Ensemble, bei dem geschmolzenes Eis am Stil in einemKreis angeordnet ist. In dessen Mitte befindet sich ein Klavierhocker- ironische Momente, die sich zu einem poetischen Bild verdichten.Seit Witte noch während seines Studiums der Tiermedizin das derfreien Kunst begann, setzt er erfolgreich naturwissenschaftlicheParameter außer Kraft und erobert die Dimension desAbsurden.',
      },
      {
        type: 'text',
        text: 'Wolfgang Stehle (*1965) beschäftigt sich in seinen Skulpturen,Installationen und Zeichnungen intensiv mit der Beziehung zwischenArchitektur und Dekoration bzw. Ornament und mit dem sich je nachKontext verändernden Verhältnis dieser Bereiche zur bildendenKunst. Untersucht werden die Metamorphosen, denen Darstellungen imWandel historischer und sozio-kultureller Kontexte unterworfen sind.In der Ausstellung zeigt Stehle den raumgreifenden Einbau einerLandschaft, die einheitlich mit einer Tapete überzogen ist und dieverschiedene Ebenen derselben Oberfläche unterwirft.',
      },
      {
        type: 'text',
        text: 'Die Wandarbeiten undInstallationen von Florian Balze (*1969) erinnern hingegen anEinrichtungsgegenstände und Dekorationsobjekte. Als"Kontemplationshilfen" für die Arbeiten der anderenAusstellenden können sie ihre eigene Autonomie aufgeben und imGanzen aufgehen. Inhaltlich hinterfragt der Künstler die Grenzenzwischen Funktion und Ästhetik, letztlich aber auch jene zwischendem Innen und dem Außen des Kunstsystems. Seinecomputermanipulierten Fotografien hingegen spielen auf dieGlaubwürdigkeit an, die wir der Fotografie heutzutage noch schenkenkönnen. Welche Bedeutung haben authentisches Erleben und medialeVermittlung, welchen Glauben schenken wir noch den Informationsmedien,die uns umgeben?',
      },
      {
        type: 'text',
        text: 'Michael Schrattenthaler (*1971) treibt diesen Gedanken mit der Arbeit“Lotto" auf die Spitze, eine rotierende Trommel, die mit diversenZeitschriften gefüllt ist. Die Flut täglicher Masseninformationmischt sich in der Maschine immer wieder neu mit anderen Informationenund entzieht sich so einer eindeutigen Festlegung. Gleichzeitigpotenziert das Geräusch der sich drehende Trommel ironisch das“Rauschen" im Blätterwald.',
      },
      {
        type: 'text',
        text: 'Alexander Steigs (*1968) multimediale Installationen beschäftigen sich mitdem Thema Überwachung und Kontrolle. Inhalt seiner Untersuchung istdie Realität und ihr mediales Erscheinungsbild samt derenRückwirkungen auf den realen Kontext. Ein im Ausstellungsraumeingebauter White Cube und das Closed-Circuit-Verfahren derVideoinstallation erzeugen eine Art selbstreferenzielleBeobachtungssituation, bei der Kontrolle jedoch nur noch vermeintlichausgeübt werden kann. Der irritierende Erkenntniswert liegt vielmehrin der Tatsache, dass jegliche Intimität unterlaufen undschließlich aufgelöst wird.',
      },
      {
        type: 'text',
        text: 'Der Isländer Hlynur Hallsson (*1968) ist ein Reisender zwischen den Kontinentenund Kulturen. Dabei entsteht eine Fülle von Momentaufnahmen, die erfür seine Foto- und Videoarbeiten verwendet. ZeitgenössischeBildwelten bringt er zusammen mit einer einfachen, aber nachhaltigwirkenden Erzählstrategie, die Auskunft gibt über den Zustand dergegenwärtigen Welt. Im Zusammenklang von Bild und Text werden jedochauch die jeweiligen Medien und ihre Funktion in Frage gestellt undermöglichen Einblicke in Gestalt und Form gegenwärtigerKunst.',
      },
      {
        type: 'text',
        text: 'Piotr Komarnicki (*1971) widmet sich in seinen auf konzeptionellen Ideenbasierenden Inszenierungen “Words and Places", die auf Fotos,Video und am jeweiligen Ort angebrachten Texten basieren, derAuthentizität des Erlebens in seinen unterschiedlichenästhetischen Erscheinungs-formen. Form und Konzept werden flexibelgemischt und aus der jeweiligen Situation heraus neudefiniert.',
      },
      {
        type: 'text',
        text: 'Daniel Man(*1969)und Daniel Müller-Friedrichsen (*1975) haben sich miteiner malerischen wie installativen Intervention im letztenAusstellungsraum zu einer Zusammenarbeit entschlossen. EinzelneObjekte werden in der Gesamtinstallation immer wieder neuenBezugssystemen unterworfen. Eine große spiegelnde Flächedupliziert die Malereien und Zeichnungen an den Wänden, die dieklassische Präsentationsform von Malerei bewusst unterläuft. DerDialog beider Künstler versteht sich als Versuchsanordnung, die mehrFragen stellt als Antworten liefert.',
      },
      {
        type: 'text',
        text: 'Daniel Schürer (*1965) schließlich zeigt mit “VereinigteSchiffsbauwerft Schürer & Töchter" eine Außenstelle desKunstvereins Via113. Die Münchner Unternehmung wird nach Weimar,Porto, Hannover u. a. Orten damit Teil des Außenstellennetzes desvon Schürer seit 1992 zwischen Hannover und Braunschweig betriebenenKunstraums. Zentrum ist ein temporäres künstlerisches Labor, dasauch als Kommunikationszentrum für Gäste dient. Im Laufe derAusstellung erfährt die Präsentation eine fortschreitendeVeränderung. Einbezogen werden im Sinne eines erweitertenKunstbegriffes sowohl eigene künstlerische Erzeugnisse als auchunterschiedliche, vor Ort entwickelte diskursive Praktiken undVermittlungsmodelle.',
      },
    ],
  },
  {
    id: 32,
    title: 'NEW',
    content: [
      { type: 'title', text: 'Nýtt - Neu - New' },
      { type: 'text', text: 'Nýtt - Neu - New' },
      {
        type: 'text',
        text: '[Kuckei+Kuckei, Berlin](http://www.kuckei-kuckei.de/)',
      },
      { type: 'text', text: '20.01.– 10.03.2007' },
      { type: 'title', text: 'Hlynur Hallsson – On the road' },
      {
        type: 'text',
        text: 'Hlynur Hallson ist immer on the road. Der Isländer ist ein Reisender zwischen den Kontinenten und Kulturen, der aus Interesse an den Menschen den Kontakt und das Gespräch mit seinem Gegenüber sucht. Bei diesen Begegnungen entsteht eine Fülle von Momentaufnahmen, die auch für seinen Fotozyklus „Myndir - Bilder - Pictures“ der Jahre 2000 bis 2005 grundlegend sind. Es handelt sich dabei um Fotografien, die mit einem dreisprachigen Text kombiniert sind. In ihrer Gesamtheit ergeben sie ein „Roadmovie“, der sich aus Hallssons Erlebnissen und Erinnerungen zusammensetzt und wie eine Art Tagebuch funktioniert. Losgelöst von einer chronologischen Ordnung werden in diesem Zyklus Familienszenen mit Fotos von Freunden und fremden Menschen, Aufnahmen unterschiedlicher Landschaften und Orte mit Bildern aus dem internationalen Kunstbetrieb aneinandergereiht. Vor diesem Hintergrund ergibt sich ein bunter, mitunter sehr privater Bilderreigen aus Hallssons Leben, der scheinbar belanglos daherkommt, aber in der Verschränkung mit den Texten eine geradezu unglaubliche Wirkung entfaltet. Zu jedem Foto erzählt uns Hallsson in Isländisch, Deutsch und Englisch eine kurze Geschichte. Diese sprachliche Reihenfolge wird auf allen Arbeiten konsequent durchgehalten und verweist zugleich auf den kommunikativen Horizont des Künstlers. Isländisch ist seine Muttersprache, Deutsch die Sprache seiner zweiten Heimat und Englisch eine Weltsprache. Spätestens hier zeigt sich deutlich, welche essentielle Rolle Sprache und Kommunikation im Werk des Isländers spielen. Hallssons Geschichten, die lediglich aus einfachen Haupt- und Nebensätzen bestehen, erreichen uns unmittelbar und wirken sofort.',
      },
      {
        type: 'text',
        text: 'Dieser Effekt hängt vor allem mit der Art, wie sich der Künstler uns mitteilt, zusammen. So beginnt er beispielsweise die Geschichte über eine Ballonfahrt mit seinem Sohn Hugi, der diese Fahrt anläßlich seines 10. Geburtstages geschenkt bekommen hat, vollkommen harmlos. Doch die Erzählung nimmt eine Wendung und verliert an Leichtigkeit, als der Künstler für einen Augenblick an das Buch „Liebeswahn“ von Ian McEwan denken muß, in dem es ebenfalls um eine Ballonfahrt geht, die allerdings nicht gut endet. Die Möglichkeit des Absturzes und das Buch, das den Künstler daran erinnert - es ist gerade diese minimale Verschiebung im Zusammenhang mit der Erzählung, welche die Geschichte aus ihrer Banalität und Alltäglichkeit herausrückt. Einfachheit und Komplexität zeichnet nicht nur diese Geschichte aus. Die Ambiguität zieht sich wie eine Konstante durch den gesamten Zyklus und taucht auch in der Arbeit auf, die den Innenhof des Messegebäudes der Art Basel zeigt. Bei schönem Wetter versammeln sich dort viele Besucher. Es ist ein kommunikativer Ort. Doch wer käme, wenn nicht Hallsson, auf die Idee, die Plauderei der Menschen mit der Geräuschkulisse eines Vogelfelsens zu vergleichen? Für den Künstler scheint dieser Vergleich nahe zu liegen, für uns hingegen offenbart er die Grenzen unserer Wahrnehmung, ermöglicht uns aber gleichzeitig unseren Horizont zu erweitern. Hallssons Geschichten haben etwas Referentielles. Sie sagen uns etwas über ihn als Menschen und seine Sicht auf die Dinge. Vielleicht muß man aus Island kommen, um die Welt so wie er zu sehen.',
      },
      { type: 'text', text: 'Claudia Rahn' },
      { type: 'title', text: 'Hlynur Hallsson – On the road' },
      {
        type: 'text',
        text: 'Hlynur Hallsson is always “on the road.” The Icelander is a traveler between continents and cultures who, because of his interest in his fellow man, is always looking for contact and conversation with those around him. These meetings yield a wealth of snapshots that form the basis for his photo cycle “Myndir – Bilder – Pictures” from the years 2000 – 2005. These are photographs integrated with a trilingual text. In their totality they give rise to a “road movie” created from Hallsson’s experiences and memories and which functions as a kind of diary. Released from any chronological order, family scenes are threaded together with photos of friends and strangers, shots of different regions and towns are interspersed with images from the international art world. Before this background emerges a colorful and very private sequence of images from Hallsson’s own life that seems to arise casually, but interwoven with the texts creates a virtually incredible effect. For each photograph Hallsson tells us a brief story in Icelandic, German and English. This linguistic sequence is maintained consistently for all the works and at the same time is a reference to the artist’s communicative horizons. Icelandic is his native language, German the language of his second home, and English a world language. Ultimately this clearly demonstrates what a pivotal role language and communication play in the work of this artist from Iceland. Hallsson’s narratives, created of only simple sentences and subordinate clauses, move us with their immediacy -- the result of how directly the artist has communicated with us.',
      },
      {
        type: 'text',
        text: 'For example, he begins the story of a hot air balloon ride with his son Hugi on the occasion of Hugi’s 10th birthday with utter innocence. But the tale takes a darker twist and loses its idyllic atmosphere when the artist’s thoughts turn for a moment to Ian McEwan’s book “Enduring Love” [“Liebeswahn”], which also describes a balloon ride -- but one that does not end well. The possibility of a crash and the book that reminds the artist of this – these are precisely what delivers the slight shift within the narrative that rescues the account from quotidian banality. It is not merely the juxtaposition of simplicity and complexity that distinguishes these stories. Ambiguity is a constant that runs through the entire cycle and also appears in the work showing the courtyard of the Art Basel Conference Center. In nice weather many visitors gather there; it is a communicative place. But who, if not Hallsson, would have come upon the idea of comparing the chatter of humans with the background sounds of a bird cliff? For the artist this comparison seemed obvious; but for us he has opened the limits of our perceptions, and at the same time he has made it possible for us to expand our horizons. Hallsson’s stories have referential qualities. They tell us something about him as a person and his vision of things. Perhaps it is necessary to come from Iceland in order to see the world as he does.',
      },
      { type: 'text', text: 'Claudia Rahn' },
      { type: 'text', text: 'Translated by Lois Feuerle' },
      { type: 'image', src: '/images/works/32/0.jpg' },
      { type: 'image', src: '/images/works/32/1.jpg' },
      { type: 'image', src: '/images/works/32/2.jpg' },
      { type: 'image', src: '/images/works/32/3.jpg' },
    ],
  },
  {
    id: 33,
    title: "SKILDI' ÉG",
    content: [
      { type: 'title', text: "Skyldi' ég vera þetta sjálfur" },
      {
        type: 'text',
        text: 'Í tilefni af 200 ára fæðingarafmæli Jónasar Hallgrímssonar var opnuð samsýning 21 myndlistarmanns í Ketilhúsinu í Listagilinu á Akureyri laugardaginn 25. ágúst kl. 14.00. Bar hún yfirskriftina "Skyldi\' ég vera þetta sjálfur". Jónas er kveikjan að öllum verkum sýningarinnar og verður fjölbreytt flóra myndlistarmanna sem eiga við hann samtal. Sýningarstjóri er Þórarinn Blöndal. Sýninginn stóð framyfir afhendingu Sjónlistarverðlaunanna 2007 sem fór fram á Akureyri 21. til 23. september.',
      },
      { type: 'text', text: 'Eftirtaldir listamenn tóku þátt í sýningunni:' },
      {
        type: 'text',
        text: 'Aðalheiður S. Eysteinsdóttir\nArna Valsdóttir\nÁslaug Thorlacius\nBirgir Snæbjörn Birgisson\nFinnur Arnar\nHanna Hlíf Bjarnadóttir\nHelgi Þórsson\nHlynur Hallsson\nHulda Hákonardóttir\nIlmur Stefánsdóttir\nJón Garðar Henrysson\nJón Laxdal\nJón Sæmundur Auðarson\nJóna Hlíf Halldórsdóttir\nJónas Viðar\nJoris Rademaker\nMegas\nMargrét Blöndal\nPálína Guðmundsdóttir\nRagnar Kjartansson\nÞorvaldur Þorsteinsson',
      },
      { type: 'image', src: '/images/works/33/0.jpg' },
      {
        type: 'image',
        src: '/images/works/33/1.jpg',
        description: 'Mynd: Þórarinn Blöldal',
      },
    ],
  },
  {
    id: 34,
    title: 'THIS',
    content: [
      { type: 'title', text: 'ÞETTA - DAS - THIS' },
      {
        type: 'text',
        text: '21.09. - 11.10.2007\nDaLí Gallery\nBrekkugata 9\n600 Akureyri\n[daligallery.blogspot.com](http://daligallery.blogspot.com)',
      },
      {
        type: 'text',
        text: 'Sýningin samanstendur af spreyji á vegg, myndbandi, stórri ljósmynd með texta, litakúlum og minni textamyndum sem gestir geta tekið með sér.',
      },
      {
        type: 'text',
        text: 'Litakúlurnar koma frá sýningu sem Hlynur setti upp á Bókasafni Háskólans á Akureyri 2005 en myndbandið er frá þvi í sumar og hægt að sjá það nú þegar á netinu á[Youtube](http://youtube.com/watch?v=Hr7dcL6mp3U). Hlynur hefur verið að vinna með textamyndirnar síðustu ár og nú er væntanleg bók með öllum myndunum. Á sýningunni í DaLí Gallery þekur ein myndin heilan vegg en tvær aðrar eru í stöflum á gólfinu og geta gestir tekið með sér eintak. Hlynur var bæjarlistamaður Akureyrar árið 2005 og gefur nú Akureyringum og öðrum sýningargestum myndir sem hægt er að hengja upp í  til dæmis í eldhúsinu eða svefnherberginu.',
      },
      {
        type: 'text',
        text: 'Textinn sem Hlynur spreyjar á vegginn í sýningarrýminu er splúnkunýr.\nSýningin í DaLí Gallery stendur til 11. október 2007.',
      },
      {
        type: 'title',
        text: 'Make words not war! Raimar Stange fjallar um textaverk Hlyns Hallssonar',
      },
      {
        type: 'text',
        text: 'Það var á seinni hluta tíunda áratugarins sem Hlynur Hallsson sendi mér póstkort frá ýmsum heimshornum. Þar skrifaði hann á íslensku þótt hann vissi mætavel að ég hef alls engan skilning á því tungumáli, en á þeim tíma var skilningsleysið - það að skilja eitthvað ekki – og fagurfræðileg gæði þess aðalmálið í hinni fagurfræðilegu heildarsýn. Slíkt er jú alveg í anda Jóhanns Heinrich Pestallozi, svissneska menntafrömuðarins.  Pestallozi kom einmitt með þá hugmynd að börn ættu að umgangast framandi tungumál til þess að þeim yrði ljóst að maður getur ekki skilið allt, að skilningur manns er takmarkaður. En pólitískar aðstæður hafa undið enn meira upp á sig. Hrottaleg nýfrjálshyggja og miskunnarlaus alþjóðahyggja skilja varla eftir nokkurt rými hvorki fyrir næma íhugun um fagurfræði samtímans né heldur (hugmyndafræðilausa) heimssýn. Þýski rithöfundurinn Hermann Hesse orðaði þetta svona: "Drukknandi syngja engar aríur". Á nýju árþúsundi syngur Hlynur Hallsson heldur engar aríur lengur, nýju textaverkin hans eru að vísu oft enn á mörgum tungumálum, en í því fjöltyngi er minni ráðgáta en lífsmáti hans í alþjóðavæddri fjölþjóðahyggju, sem Hlynur tjáir nú í verkum sínum. Auk þess, en þó reyndar fyrst og fremst, eru textaverk Hlyns Hallssonar með auðþekkjanlegu pólitísku, já, ef ekki árásargjörnu innihaldi. Það er ekki tilviljun að þau minna á nafnlaust veggjarkrot, eins og  þetta hér til dæmis: "BUSH+BLAIRTERROR+FEAR"slagorð sem hinn ungi Íslendingur skrifaði á húsveggi Feneyja á meðan Feneyjartvíæringnum 2005 stóð. Og sýningarrýmið í Charlottenburg í Kaupmannahöfn breyttist árið 2004 beinlínis í pólitískan vettvang með orðunum:',
      },
      {
        type: 'text',
        text: '"WAR IS TERRORISM WITH A BIGGER BUDGET FIGHT TERRORISM WITH ALL POWER"',
      },
      {
        type: 'text',
        text: 'Slagorð gegn nýlendustefnunni sem fylgdi í kjölfar auðvaldsstefnunnar og eins slagorð gegn (Íraks-)stríði eru orðin að lögreglufyrirskipunum sem Sameinuðu þjóðirnar þurfa ekki einu sinni að samþykkja. En Antonio Negri og Michael Hardt benda einmitt á þetta í Empire eða Heimsveldi, áróðursverki sínu gegn alþjóðavæðingunni. Í verkum Hlyns virka slík slagorð egnandi, geta þýtt allt og ekkert. Það er ekkert nema gott um það að segja, því þeim mun spennandi verður myndlistin, einnig þótt slíkt gleymist auðveldlega á tímum nýformalisma í myndlist og innileiksmiðjaðrar málaralistar, svo ekki sé minnst á innprentun mórals og samvisku.',
      },
      {
        type: 'title',
        text: 'Make words not war!Raimar Stange über die Textarbeiten von Hlynur Hallsson',
      },
      {
        type: 'text',
        text: 'Einst, in der zweiten Hälfte der 1990er Jahre, hat mir Hlynur Hallsson Postkarten von verschiedenen Orten dieser Welt geschickt, auf denen er isländische Sätze geschrieben hatte – wohl wissend, dass ich dieser Sprache überhaupt nicht mächtig bin. Unverständlichkeit und ihre ästhetische Qualität stand damals auf dem ästhetischen Masterplan, ganz im Sinne von Johann Heinrich Pestallozi, dem schweizerischen Bildungsreformer, der im 18. Jahrhundert bereits vorschlug, Kinder mit einer für sie fremden Sprache zu konfrontieren, damit sie erkennen, dass die Welt nicht gänzlich für sie verständlich sein kann. Doch: Die politische Situation hat sich seit damals rapide verschärft, ein brutaler  Neoliberalismus und die gnadenlose Globalisierung lassen kaum noch einen Platz mehr für feinsinnige Reflexionen über zeitgenössische Ästhetik und (unideologische) Welterkenntnis. In diesem Sinne schrieb schon der deutsche Literat Hermann Hesse: „Ertrinkene singen keine Arien“. Auch Hlynur Hallsson singt im neuen Jahrtausend längst keine „Arien“ mehr, seine neueren Textarbeiten sind zwar oftmals immer noch mehrsprachig, meist in englischer, isländischer und deutscher Sprache, aber diese Mehrsprachigkeit ist weniger erratisch, als jetzt der Ausdruck von (s)einer Lebensweise in einer globalisierten Internationalität. Außerdem und vor allem: Hlynur Hallssons Textarbeiten, die formal nicht zufällig an anonyme Graffitis erinnern, sind jetzt mitunter explizit politischen, ja aggressiven Inhalts:',
      },
      { type: 'text', text: '"BUSH+BLAIRTERROR+FEAR"' },
      {
        type: 'text',
        text: 'z. B. hat der junge Isländer während der la Biennale di Venezia anno 2005 in Venedig in schwarzer Schrift an diverse Häuserwände geschrieben. Und in einer Ausstellung in Charlottenborg 2004 stand klar und deutlich an einer Wand des konsequent zum politischen Zentrums mutierenden Kunstraumes zu lesen: "WAR IS TERRORISM WITH A BIGGER BUDGET FIGHT TERRORISM WITH ALL POWER".Schriftliche Kampfansagen gegen einen postkapitalistischen Imperialismus, dem der (Irak)Krieg, schon Antonio Negri/Michael Hardt weisen in ihrer Antiglobalisierungsfibel „Empire“ daraufhin, vermeintlich zu bloßen Polizeieinsätzen werden, der die UN dann angeblich nicht mehr zuzustimmen braucht, treten so in Hlynur Hallssons Arbeit an die Stelle irritierender Mehr- und Nichtdeutigkeiten. Gut so, denn spannender Kunst ist , auch wenn neoformalistische Kunst und innerlichkeitsverliebte Malerei dies derzeit mancherorts beinahe vergessen lassen, nicht zuletzt ein moralisches Gewissen eingeschrieben!',
      },
      {
        type: 'title',
        text: 'Make words not war!Raimar Stange on the Textual Works of Hlynur Hallsson',
      },
      {
        type: 'text',
        text: 'Back in the second half of the 1990s, Hlynur Hallsson would send me post cards from various parts of the world, cards on which he had written sentences in Icelandic – knowing full well that I had no knowledge of that language. In those days incomprehensibility and its aesthetic quality were an integral part of the cultural master plan, very much in the spirit of Johann Heinrich Pestallozi, the Swiss educational reformer who as early as the 18th century had suggested that children be confronted with a language that was foreign to them so that they would recognize that the world cannot be made completely comprehensible.However, the political situation has deteriorated rapidly since then -- brutal neoliberalism and relentless globalization scarcely leave a place for penetrating and perceptive reflections on contemporary aesthetics and an (un-ideological) knowledge of the world. The German author Hermann Hesse expressed views in a like vein when he wrote, “Drowning men sing no arias.” Hlynur Hallsson is also not singing any arias in this new millennium. Although his more recent textual works are often still multilingual – usually English, Icelandic and German – this multilingualism is now less of an isolated occurrence than the expression of a (his) way of life in a globalized internationality. However, and above all, Hlynur Hallsson’s textual works -- which in their form remind us of anonymous graffiti, and that not by sheer coincidence, -- are sometimes of an explicit, yes, aggressive content. For example, during the 2005 Biennale di Venezia the young Icelandic artist wrote in black letters on the walls of various buildings the words:',
      },
      { type: 'text', text: '"BUSH+BLAIRTERROR+FEAR"' },
      {
        type: 'text',
        text: 'And at an exhibition in Charlottenborg in 2004 he emblazoned the words " WAR IS TERRORISM WITH A BIGGER BUDGET FIGHT TERRORISM WITH ALL POWER" on the walls of the gallery, thereby mutating it into a political arena.In place of vexing ambiguities and incomprehensibilities, Hlynur Hallsson’s work presents a written challenge to post-capitalist imperialism like the (Iraq) war – which, as Antonio Negri and Michael Hardt pointed out in their anti-globalization primer “Empire,” has allegedly become a mere police action no longer requiring UN approval. And that is fine, for even if these days neoformalistic art and introspection-doting painting have in many places permitted this to be forgotten, enthralling art is -- not at the least –inscribed in moral conscience.(Translated from German by Lois Feuerle)',
      },
      { type: 'image', src: '/images/works/34/0.jpg' },
      { type: 'image', src: '/images/works/34/1.jpg' },
      { type: 'image', src: '/images/works/34/2.jpg' },
      { type: 'image', src: '/images/works/34/3.jpg' },
      { type: 'image', src: '/images/works/34/4.jpg' },
      { type: 'image', src: '/images/works/34/5.jpg' },
    ],
  },
  {
    id: 35,
    title: 'ATTITUDE',
    content: [
      { type: 'title', text: 'European Attitude' },
      {
        type: 'text',
        text: '23.02. 2008 - 16.03 2008\n"European Attitude", Zendai Museum of Modern Art, Shanghai, RC',
      },
      {
        type: 'text',
        text: 'Exhibition: European Attitude Presented by: Shanghai Zendai Museum of Modern Art',
      },
      { type: 'text', text: 'Dates: 23 February – 16 March 2008' },
      {
        type: 'text',
        text: 'Venue: Shanghai Zendai Museum of Modern Art (No.28, Lane 199 Fangdian Road, 200135 Shanghai, China)',
      },
      { type: 'text', text: 'www.zendaiart.com' },
      {
        type: 'text',
        text: 'Opening Reception: 23 February, 2008 (Saturday), 4pm',
      },
      { type: 'text', text: 'Artistic Director: Shen Qibin' },
      { type: 'text', text: 'Academic Director: Binghui Huangfu' },
      { type: 'text', text: 'Curators: Harro Schmidt & Tomek Wendland' },
      { type: 'text', text: 'Project Manager: Chen Shuxia' },
      {
        type: 'text',
        text: 'Special thanks to the co-curators Richard Birkett, Janos Stursz and Georg Elben',
      },
      {
        type: 'text',
        text: 'Artists:Roger Bourke (GB)\nElodie Boutry (F)\nNoam Braslawsky (IL/D)\nKatja Davar (GB/D)\nClemens Fuertler (A)\nMasha Godovannaya (RUS)\nHlynur Hallsson (IS)\nAnna Klimczak (PL)\nNina Kovacheva & Valentin Stefanoff (F/BG)\nIngo Lie (D)\nNadia Verena Marcin (D)\nAgata Michowska (PL)\nUrsula Neugebauer (D)\nMateusz Pek (PL)\nAndrzej Peplonski (PL)\nVolker Schreiner (D)\nAlexander Steig (D)\nEva Stenram (S/GB)\nJaan Toomik (EST)\nIskender Yediler (TR)\nMartin Zet (CZ)',
      },
      {
        type: 'text',
        text: 'Europe is an expanding entity both constitutionally and attitudinally. The common public perception is that the European "project", should, both economically and socially, be based along lines of commonality and is therefore a means to overcome difference. Europe is unified by common capitalistic desires and market forces, and yet divided by blindness to the complexities of regional history and resulting financial and social poverty.\nWithin this hugely prejudicial framework that sets conforming criteria for countries wishing to enter the European Union, cultural production plays an important role in its exploration of heterogeneity and through a localised response to differing experiences of modernism. The forms and processes of 20th Century avant-gardism still play an important role in anactive desire to understand the utopian or totalitarian forces that have shaped both the physical and mental fabrics of our societies. Abstraction and simple geometries are loaded with a historical idealism now warped by political appropriation, commercial design and pseudo-spirituality. \nThe artist increasingly plays the role of the instigator and narrator of social relationships and encounters, assessing the ways in which we live and work, and the circumstances around us that impact on this. It is a paradox that the often provincial nature of such interaction provides telling insight into the wider human condition. Therefore we present the artistic practice of 21 artists from 12 different European countries to initiate the discussion on identity of artists within the global political circumstances.',
      },
      { type: 'image', src: '/images/works/35/0.jpg' },
    ],
  },
  {
    id: 36,
    title: 'WM',
    content: [
      { type: 'title', text: 'HM FYRIR ALLA – WM FÜR ALLE - WC FOR ALL' },
      { type: 'text', text: '07.07.2006' },
      {
        type: 'text',
        text: 'Aufruf zur »HM FYRIR ALLA – WM FÜR ALLE - WC FOR ALL«\nHlynur Hallsson\nFreitag 7.7.2006 \nEinlass ab 16.00 Uhr inklusive Bier- und Würstchenverkauf \nAnpfiff 17.30 Uhr (Spielzeit: 2 x 30 min.) \nAlle Hannoveraner und Gäste der Stadt sind eingeladen, an der von Hlynur Hallsson (IS) initiierten und von ART IG in Kooperation mit dem Kulturbüro Hannover und Hannover 96 veranstalteten »HM FYRIR ALLA – WM FÜR ALLE - WM FOR ALL«teilzunehmen.',
      },
      {
        type: 'text',
        text: 'Ob Barfuß im Regen oder bei schweißtreibender Sonne, dieses Spiel ist ein echtes Seitenwechsel – Highlight!',
      },
      {
        type: 'text',
        text: 'Einzige Voraussetzung für die Teilnahme ist eine temporäre Mitgliedschaft, die man ab 10,- € Spendeneinsatz zur Refinanzierung der Projektkosten des gesamten „Seitenwechsel“ bei ART IG oder im Kubus Hannover am Theodor-Lessing-Platz 2 erwerben kann. Die Vorlage des Mitgliedsausweises gewährt am 07.07.2006 ab 16:00 Uhr freien Einlass in die AWD-Arena. Aber auch vor Ort sind die dann noch verbliebenen Restbestände der auf 2000er.',
      },
      { type: 'text', text: 'Auflage limitierten Ausweise erhältlich.' },
      {
        type: 'text',
        text: 'Spielregeln?\nJe nachdem, was der Kleiderschrank zu bieten hat, dürfen die Spieler/innen in roten oder blauen T-Shirts aufs Feld – und zwar A L L E !!!',
      },
      {
        type: 'text',
        text: 'Da bis zu 2000 Spieler auf dem Feld der Ehre um Tore kämpfen, wird der Schiedsrichter auf erhöhtem Posten vom Anstoßpunkt aus die Fouls pfeifen und per Megaphon seine Entscheidungen verkünden!',
      },
      {
        type: 'text',
        text: 'Es wird zwar mit den „ganz normalen Regeln“ gespielt, wie aber z.B. eine „Abseitsfalle“ aussehen oder wie der Schiedsrichter überhaupt alle seine Schäfchen im Auge behalten will, ist nicht klar. Was letztendlich dabei heraus kommt ist eine riesige Performance und ein Lustgewinn der ganz besonderen Art!',
      },
      {
        type: 'text',
        text: 'Mit diesem Seitenwechsel werden alle, die mitmachen, zu „echten“ WM– Spielern, denn die „realen“ Endspiele stehen am 07.07. (ansonsten ein spielfreier WM-Tag) noch aus.',
      },
      {
        type: 'text',
        text: 'Wer sich selbst als Tribünenhocker sieht oder als Linienrichter fungieren möchte, dem sei dies gewährt, denn auch hinter der Linie gibt es viel zu tun und die Tribüne wird geöffnet. Jedes temporäre Mitglied(zukünftige/r Spieler/in) darf gern Freunde und Familie mitbringen. Für Support und Logistik sorgt Herr Schnitzmeier, Stadionmanager Hannover 96!',
      },
      {
        type: 'text',
        text: '[www.seitenwechsel-hannover.de](http://www.seitenwechsel-hannover.d)',
      },
      { type: 'image', src: '/images/works/36/0.jpg' },
      { type: 'image', src: '/images/works/36/1.jpg' },
      { type: 'image', src: '/images/works/36/2.jpg' },
      { type: 'image', src: '/images/works/36/3.jpg' },
      { type: 'image', src: '/images/works/36/4.jpg' },
      { type: 'image', src: '/images/works/36/5.jpg' },
      { type: 'image', src: '/images/works/36/6.jpg' },
      { type: 'image', src: '/images/works/36/7.jpg' },
      { type: 'image', src: '/images/works/36/8.jpg' },
      { type: 'image', src: '/images/works/36/9.jpg' },
      { type: 'image', src: '/images/works/36/10.jpg' },
    ],
  },
]
