import { NextPage } from 'next'
import Head from 'next/head'
import { withRouter, SingletonRouter } from 'next/router'

import Frame from '../components/frame'
import Nav from '../components/nav'
import BlattBladSingle from '../components/blattblad'

interface Props {
  router: SingletonRouter
}

const Catalouges: NextPage<Props> = ({ router }) => (
  <Frame>
    <Head>
      <title>BLATT BLAÐ // HLYNUR HALLSSON</title>
    </Head>

    <Nav path={router.route} />

    <section>
      <h1>Blatt Blað</h1>
      <p>
        was founded in 1994. It is made in the way that "Magazin for everything"
        by Dieter Roth published for years. Everyone can publish in the paper.
        Each author gets one example for his contribution. The work for the next
        issue, should be one or two Din A5 pages. In the table of contests comes
        the name of the author, place and year of birth and place of living and
        some short text (not more than 3 lines). Each time 100 numbered examples
        are published. Contributions, letters, orders and subscriptions should
        be send to:
        <br />
        <br />
        BLATT BLAÐ
        <br />
        c/o Hlynur Hallsson
        <br />
        E-mail:{' '}
        <a href="mailto:hlynurhallsson@gmail.com">hlynurhallsson@gmail.com</a>
        <br />
        <br />
        Older issues are available in limited number and cost 4 $ the issue.
        Some numbers are already sold out.
        <br />
        ISSN 1431-3537
      </p>
    </section>

    <section lang="de">
      <h1>Blatt Blað</h1>
      <p>
        wurde im Jahr 1994 gegründet als der kleine nachfolger von "Zeitschrift
        für alles" das Dieter Roth herausgegeben hat. Jeder darf etwas für das
        Blatt machen. Jede(r) Autor/in bekommt ein Exemplar für seinen Beitrag.
        Für die nächste Ausgabe, sollten die Beiträge das Format Din A5 nicht
        überschreiten. Im Inhaltsverzeichnis erscheinen der Name des Autors,
        Geburtsort und Jahr und Wohnort und eine kurze Anmerkung (höchstens 3
        Zeilen). Jedes Mal gibt es 100 numerierte Examplare. Beiträge, Briefe,
        Bestellungen und Abos sollten an diese Adresse geschicktwerden:
        <br />
        <br />
        BLATT BLAÐ
        <br />
        c/o Hlynur Hallsson
        <br />
        E-mail:{' '}
        <a href="mailto:hlynurhallsson@gmail.com">hlynurhallsson@gmail.com</a>
        <br />
        <br />
        Ältere Ausgaben gibt es in limitierter Zahl und kosten 4 Euro pro stück,
        einige Augaben sind aber schon ausverkauft.
        <br />
        ISSN 1431-3537
      </p>
    </section>

    <section lang="is">
      <h1>Blatt Blað</h1>
      <p>
        var stofnað árið 1994 sem í anda "Tímarits fyrir allt" sem Dieter Roth
        gaf út um árabil. Allir geta birt efni í blaðinu. Hver höfundur fær eitt
        eintak fyrir framlag sitt. Efni í næsta tölublað, á að vera ein eða tvær
        A5 síður. Í efnisyfirlitinu birtist nafn höfundar, fæðingarstaður og ár
        og hvar höfundurinn býr en auk þess er pláss fyrir stuttan texta (hámark
        3 línur). Upplagið hverju sinni er 100 númeruð eintök. Efni, bréf,
        pantanir og áskriftarbeiðnir á að senda til:
        <br />
        <br />
        BLATT BLAÐ
        <br />
        c/o Hlynur Hallsson
        <br />
        Sími: <a href="tel:+3546594744">+354 659 4744</a>
        <br />
        E-mail:{' '}
        <a href="mailto:hlynurhallsson@gmail.com">hlynurhallsson@gmail.com</a>
        <br />
        <br />
        Eldri eintök eru til í takmörkuðu upplagi og kosta 400 krónur eintakið,
        nokkur tölublöð eru uppseld.
        <br />
        ISSN 1431-3537
      </p>
    </section>

    <div className="issues">
      <BlattBladSingle
        imageUrl="/images/blattblad/60.jpg"
        version="60"
        time="May 2012"
        contributors={[
          'Adri Galindo Rami',
          'Aðalheiður S. Eysteinsdóttir',
          'Aðalsteinn Þórsson',
          'Alex Gross',
          'Alexander Steig ',
          'Andreas Jari',
          'Juhani Toriseva',
          'Arnar Ómarsson ',
          'Ásmundur Ásmundsson',
          'Benoit Blein',
          'Claus Kienle',
          'Dodda Maggý',
          'Edda Þórey Kristfinnsdóttir',
          'Egill Logi Jónasson',
          'Elín Anna Þórisdóttir',
          'Elísabet Brynhildardóttir',
          'Elisabet Olka',
          'Emmet Kierans',
          'Erica Eyres',
          'Eugene Jho',
          'Frauke Hänke',
          'Freya Steadman',
          'Gabriel Jones ',
          'Gauthier Hubert',
          'Guðjón Sigurður Tryggvason',
          'Guðný Rósa Ingimarsdóttir',
          'Guðný Rúnarsdóttir',
          'Gunnar Helgi Guðjónsson',
          'Gunnar Kristinsson',
          'Gunnar Már Pétursson',
          'Gunnhildur Þórðardóttir',
          'Habby Osk',
          'Halldór Úlfarsson',
          'Hannah Kasper',
          'Hannes Malte Mahler ',
          'Haraldur Jónsson',
          'Helena Aðalsteinsdóttir',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/59.jpg"
        version="59"
        time="Oktober 2011"
        contributors={[
          <span key="BENOÎT BLEIN">
            BENOÎT BLEIN <em>cover</em>
          </span>,
          'DOMINIK DREXEL',
          'KNUT ECKSTEIN',
          <span key="HLYNUR HALLSSON">
            HLYNUR HALLSSON <em>supplement</em>
          </span>,
          'EDDA ÞÓREY KRISTFINNSDÓTTIR',
          'ÓMAR SMÁRI KRISTINSSON',
          'ALEXANDER STEIG',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/58.jpg"
        version="58"
        time="October 2010"
        contributors={[
          'ANDRÉ ALDER',
          <span key="cover">
            HUGINN ÞÓR ARASON <em>cover</em>
          </span>,
          'JÓNA HLÍF HALLDÓRSDÓTTIR',
          'HLYNUR HALLSSON',
          'ÓMAR SMÁRI KRISTINSSON',
          'ALEXANDER STEIG',
          'VOLKER TROCHE',
          'AÐALSTEINN ÞÓRSSON',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/58.jpg"
        version="58"
        time="Januar - August 2008"
        contributors={[
          'MICHAEL GÖBEL',
          'HLYNUR HALLSSON ',
          'ÓMAR SMÁRI KRISTINSSON ',
          'CALIN KRUSE',
          'ALEXANDER STEIG',
          <span key="supplement">
            VOLKER TROCHE <em>supplement</em>
          </span>,
          <span key="cover">
            MATTEN VOGEL <em>cover</em>
          </span>,
          'RAINER WEIFFENBACH',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/56-57.jpg"
        version="55"
        time="JANUAR - AUGUST 2008"
        contributors={[
          'MICHAEL GÖBEL',
          'HLYNUR HALLSSON',
          'ÓMAR SMÁRI KRISTINSSON',
          'CALIN KRUSE',
          'ALEXANDER STEIG',
          'VOLKER TROCHE supplement',
          <span key="cover">
            MATTEN VOGEL <em>cover</em>
          </span>,
          'RAINER WEIFFENBACH',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/55.jpg"
        version="55"
        time="SEPTEMBER - DECEMBER 2007"
        contributors={[
          'BRANDSTIFTER',
          <span key="supplement">
            JÓNA HLÍF HALLDÓRSDÓTTIR <em>supplement</em>
          </span>,
          'HLYNUR HALLSSON',
          'GUNNAR KRISTINSSON',
          'ÓMAR SMÁRI KRISTINSSON',
          'SOPHIE ROUBE',
          <span key="cover">
            ALEXANDER STEIG <em>cover</em>
          </span>,
          'VOLKER TROCHE',
          'YST - INGUNN ST. SVAVARSDÓTTIR',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/53.jpeg"
        version="53-54"
        time="JANUAR - AUGUST 2007"
        contributors={[
          'ÁSMUNDUR ÁSMUNDSSON',
          'ROLF BIER',
          'KRISTÍN EIRÍKSDÓTTIR',
          <span key="cover">
            JÓNA HLÍF HALLDÓRSDÓTTIR <em>cover</em>
          </span>,
          <span key="suppliment">
            HLYNUR HALLSSON <em>suppliment</em>
          </span>,
          'ÓMAR SMÁRI KRISTINSSON',
          'SABINE ÖLLERER',
          'ÞÓRA SIGURÐARDÓTTIR',
          'RÜDIGER STANKO',
          'ALEXANDER STEIG',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/51.jpeg"
        version="51-52"
        time="MAI - DEZEMBER 2006"
        contributors={[
          'ÁSMUNDUR ÁSMUNDSSON',
          'DANIEL BEHRENDT cover',
          <span key="suppliment">
            JÓNA HLÍF HALLDÓRSDÓTTIR <em>suppliment</em>
          </span>,
          'HLYNUR HALLSSON',
          'ÓMAR SMÁRI KRISTINSSON',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/50.jpeg"
        version="50"
        time="JANUAR - APRIL 2006"
        contributors={[
          'ÁSMUNDUR ÁSMUNDSSON',
          'ROLF BIER',
          'BRANDSTIFTER',
          'GERALD',
          'JÓNA HLÍF HALLDÓRSDÓTTIR',
          'HLYNUR HALLSSON',
          'GUNNHILDUR HAUKSDÓTTIR',
          'ÓMAR SMÁRI KRISTINSSON cover',
          'JÜRGEN O. OLBRICH suppliment',
          'ALEXANDER STEIG',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/49.jpeg"
        version="49"
        time="SEPTEMBER-DEZEMBER 2005"
        contributors={[
          'ROLF BIER suppliment',
          'JÓNA HLÍF HALLDÓRSDÓTTIR',
          'HLYNUR HALLSSON cover',
          'IfSPT',
          'ÓMAR SMÁRI KRISTINSSON',
          'JÜRGEN O. OLBRICH ',
          'RÜDIGER STANKO',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/48.jpeg"
        version="48"
        time="MAI-AUGUST 2005"
        contributors={[
          'DANIEL BEHRENDT suppliment',
          'ROLF BIER',
          'IfSPT ',
          'ÓMAR SMÁRI KRISTINSSON',
          'JÜRGEN O. OLBRICH',
          'SOPHIE ROUBE cover',
          'JULIA SCHMID',
          'ULRIKE SCHOELLER',
          'RÜDIGER STANKO',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/47.jpeg"
        version="47"
        time="JANUAR-APRIL 2005"
        contributors={[
          'ROLF BIER',
          'HLYNUR HALLSSON',
          'IfSPT',
          'GUNNAR KRISTINSSON cover',
          'ÓMAR SMÁRI KRISTINSSON',
          'JÜRGEN O. OLBRICH',
          'RÜDIGER STANKO',
        ]}
      />
      <BlattBladSingle
        version="46"
        time="SEPTEMBER - DEZEMBER 2004"
        contributors={[
          'BRANDSTIFTER',
          'HLYNUR HALLSSON',
          'JBK RANSU cover',
          'ULRIKE SCHOELLER',
          'ALEXANDER STEIG',
          'STEPHAN WEIßFLOG',
        ]}
      />
      <BlattBladSingle
        version="45"
        contributors={[
          'DANIEL BEHRENT',
          'ROLF BIER',
          'BRANDSTIFTER',
          'BJÖRG EIRÍKSDÓTTIR',
          'T. GANZENMÜLLER',
          'HLYNUR HALLSSON',
          'IfSPT',
          'SUSANNE MAAß',
          'TUMI MAGNÚSSON',
          'SABINE ÖLLERER',
          'ULRIKE SCHOELLER',
          'STEPHAN WEIßFLOG',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'RÜDIGER STANKO',
          'JÜRGEN WITTE',
        ]}
      />
      <BlattBladSingle
        imageUrl="/images/blattblad/44.jpeg"
        version="44"
        time="JANUAR-APRIL 2004"
        contributors={[
          'GÖTZ BERGMANN',
          'ROLF BIER',
          'KNUT ECKSTEIN',
          'HLYNUR HALLSSON',
          'SUSANNE MAAß',
          'JULIA SCHMID',
          'ULRIKE SCHOELLER',
          'RÜDIGER STANKO',
        ]}
      />
      <BlattBladSingle
        imageUrl="/images/blattblad/43.jpeg"
        version="43"
        time="SEPTEMBER-DEZEMBER 2003"
        contributors={[
          'DANIEL BEHRENDT',
          'ROLF BIER',
          'HLYNUR HALLSSON',
          'IfSPT',
          'EDDA ÞÓREY KRISTINSDÓTTIR',
          'ÓMAR SMÁRI KRISTINSSON',
          'HANNES MALTE MAHLER',
          'LADY NUTELLA',
          'SABINE ÖLLERER',
          'JULIA SCHMID',
          'RÜDIGER STANKO',
        ]}
      />
      <BlattBladSingle
        imageUrl="/images/blattblad/42.jpeg"
        version="42"
        time="MAY-AUGUST 2003"
        contributors={[
          'ROLF BIER',
          'ROLF BIER / PATRICK M. FITZGERALD',
          'HLYNUR HALLSSON',
          'IfSPT',
          'SABINE ÖLLERER',
          'JULIA SCHMID',
          'ULRIKE SCHOELLER',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'RUDIGER STANKO',
          'ALEXANDER STEIG Cover',
          'JÜRGEN WITTE Supplement',
        ]}
      />
      <BlattBladSingle
        imageUrl="/images/blattblad/41.jpeg"
        version="41"
        time="JANUARY-APRIL 2003"
        contributors={[
          'BRANDSTIFTER',
          'JAMES CARL',
          'JÓNA HLÍF HALLDÓRSDÓTTIR',
          'HLYNUR HALLSSON',
          'IfSPT',
          'ANJA KREISING',
          'EDDA ÞÓREY KRISTFINNSDÓTTIR',
          'SABINE ÖLLERER',
          'SOPHIE ROUBE Supplement',
          'DAGRÚN GUÐNÝ SÆVARSDÓTTIR Cover',
          'EDDA SÓLEY ÞORSTEINSDÓTTIR',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/40.jpeg"
        version="40"
        time=" SEPTEMBER-DECEMBER 2002"
        contributors={[
          'ROLF BIER',
          'BRANDSTIFTER',
          'JAMES CARL',
          'HLYNUR HALLSSON Cover',
          'IfSPT',
          'KAJ NYBORG / ROLF BIER',
          'SABINE ÖLLERER',
          'JULIA SCHMI',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/39.jpeg"
        version="39"
        time="MAI-AUGUST 2002"
        contributors={[
          'ROLF BIER',
          'BRANDSTIFTER',
          'STEFAN DEMARY',
          'HLYNUR HALLSSON',
          'IfSPT',
          'ANJA KREYSING',
          'KAJ NYBORG / ROLF BIER',
          'SABINE ÖLLERER',
          'SOPHIE ROUBE',
          'JULIA SCHMID',
          'JÜRGEN WITTE cover',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/38.jpeg"
        version="38"
        time="JANUAR-APRIL 2002"
        contributors={[
          'ROLF BIER',
          'BRANDSTIFTER',
          'HLYNUR HALLSSON',
          'IfSPT',
          'PASCALE KOMARNICKI',
          'ANJA KREYSING',
          'SABINE ÖLLERER',
          'WERNER REITERER',
          'MICHA RINGLAND',
          'ROLEX_NORD',
          'ALEXANDER ROOB',
          'SOPHIE ROUBE',
          'cover STEINUNN HELGA SIGURÐARDÓTTIR',
          'RÜDIGER STANKO',
          'ALEXANDER STEIG',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/37.jpeg"
        version="37"
        time="OCTOBER-DECEMBER 2001
        "
        contributors={[
          'ROLF BIER',
          'KNUT ECKSTEIN cover',
          'HLYNUR HALLSSON',
          'IfSPT',
          'PASCALE KOMARNICKI',
          'RUPPE KOSELLECK',
          'ALEXANDER ROOB',
          'SOPHIE ROUBE',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'RAIMAR STANGE',
          'RÜDIGER STANKO',
          'CLAUDIA THÜMLER',
          'CHRISTIAN WILKE',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/36.jpeg"
        version="36"
        time="MAY-SEPTEMBER 2001"
        contributors={[
          'ROLF BIER',
          'HLYNUR HALLSSON',
          'IfSPT',
          'WERNER REITERER',
          'ALEXANDER ROOB',
          'SUSANNE MAAß cover',
          'JULIA SCHMID',
          'ROLEX_NORD',
          'RÜDIGER STANKO',
          'ALEXANDER STEIG',
          'WaltTrashXeroxHett supplement',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/35.jpeg"
        version="35"
        time="JANUAR-APRIL 2001"
        contributors={[
          'ROLF BIER',
          'BURKARD BLÜMLEIN',
          'BRANDSTIFTER',
          'STEFAN DEMARY',
          'MORITZ EGGERT',
          'HLYNUR HALLSSON',
          'IfSPT',
          'OLAF PROBST',
          'WERNER REITERER',
          'ALEXANDER ROOB',
          'JULIA SCHMID',
          'JOHANNES LOTHAR SCHRÖDER',
          'WALTHER SCHWIETE',
          'cover RÜDIGER STANKO',
          'supplement PIET TRANTEL',
          'BERNHARD VOLK',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/34.jpeg"
        version="34"
        time="SEPTEMBER-DECEMBER 2000"
        contributors={[
          'ANOTHERPORTRAIT@GMX.NET',
          'SIEGRUN APPELT',
          'FRANK BIER',
          'ROLF BIER cover',
          'HARTMUT BÖHM',
          'HARALD BRAUN',
          'STAFAN DEMARY',
          'HLYNUR HALLSSON',
          'RALPH KÜNZLER',
          'PASCALE KOMARNICKI',
          'supplement SUSANNE MAAß',
          'ALEXANDER ROOB',
          'ADRIAN ROVATKAY',
          'JULIA SCHMID',
          'MARKUS SCHMITT',
          'RÜDIGER STANKO',
          'ALEXANDER STEIG',
          'GEROLD TAGWERKER',
          'VOLKER THIES',
          'PIET TRANTEL',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/33.jpeg"
        version="33"
        time="MAY-AUGUST 2000"
        contributors={[
          'SIEGRUN APPELT',
          'BERT BIER',
          'ROLF BIER',
          'MARION BOCK',
          'AENNE LANGHORST',
          'ALEXANDER ROOB',
          'JULIA SCHMID',
          'STEINUNN HELGA SIGURÐARDÓTTIR supplement',
          'ALEXANDER STEIG',
          'GEROLD TAGWERKER',
          'VOLKER THIES',
          'PIET TRANTEL',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/32.jpeg"
        version="32"
        time="JANUAR-APRIL 2000"
        contributors={[
          'ROLF BIER',
          'CARSTEN GREIFE supplement',
          'JÖRG GRUNEBERG',
          'JÓN LAXDAL HALLDÓRSSON',
          'HLYNUR HALLSSON',
          'SABINE ÖLLERER',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'ALEXANDER STEIG',
          'PIET TRANTEL',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/31.jpeg"
        version="31"
        time=" SEPTEMBER-DECEMBER 1999"
        contributors={[
          'ROLF BIER',
          'MARGRÉT HARALDSDÓTTIR BLÖNDAL',
          'JAN FEHLIS',
          'HLÍN GYLFADÓTTIR',
          'HLYNUR HALLSSON',
          'PASCALE KOMARNICKI',
          'SABINE ÖLLERER',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'PIET TRANTEL',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/30.jpeg"
        version="30"
        time="MAY-AUGUST 1999"
        contributors={[
          'ROLF BIER',
          'CARSTEN GREIFE',
          'PAPLO GRUNEMANN',
          'ÓMAR SMÁRI KRISTINSSON supplement',
          'SABINE ÖLLERER',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'ALEXANDER STEIG',
          'DIANA TODT',
          'PIET TRANTEL',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/29.jpeg"
        version="29"
        time="JANUAR-APRIL 1999"
        contributors={[
          'ROLF BIER supplement',
          'THOMAS ERNST',
          'ANNA GRUNEMANN',
          'HLYNUR HALLSSON',
          'NINA IVANOVA',
          'PIOTR KOMARNICKI',
          'RUPPE KOSELLECK',
          'ÓMAR SMÁRI KRISTINSSON',
          'PETER POMMERER',
          'SABINE ÖLLERER',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'RAIMAR STANGE',
          'DIANA TODT',
          'PIET TRANTEL',
          'JÜRGEN WITTE',
          'MICHAEL ZWINGMANN',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/28.jpeg"
        version="28"
        time="NOVEMBER-DECEMBER 1998"
        contributors={[
          'ROLF BIER',
          'ERLING TH. V. KLINGENBERG',
          'ÓMAR SMÁRI KRISTINSSON & NINA IVANOVA',
          'THOMAS MISÍK',
          'SABINE ÖLLERER',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'MAGNÚS SIGURÐARSON',
          'ALEXANDER STEIG & JÜRGEN WITTE supplement',
          'PIET TRANTEL',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/27.jpeg"
        version="27"
        time="SEPTEMBER-OCTOBER 1998"
        contributors={[
          'ROLF BIER',
          'HLYNUR HALLSSON',
          'SUSANNE MAAß',
          'THOMAS MISÍK',
          'JULIA SCHMID',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'ALEXANDER STEIG',
          'PIET TRANTEL supplement',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/26.jpeg"
        version="26"
        time="JULY-AUGUST 1998"
        contributors={[
          'PASCALE KOMARNICKI',
          'SUSANNE MAAß',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'ALEXANDER STEIG',
          'MICHAEL STEPHAN',
          'PIET TRANTEL',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/25.jpeg"
        version="25"
        time="MARCH-JUNE 1998"
        contributors={[
          'ULRIKE BOLDT',
          'HLYNUR HALLSSON',
          'PASCALE KOMARNICKI',
          'PIOTR KOMARNICKI',
          'THOMAS MISÍK',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'ALEXANDER STEIG supplement',
          'PIET TRANTEL',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/24.jpeg"
        version="24"
        time="JANUAR-FEBRUAR 1998"
        contributors={[
          'GODDUR',
          'HLYNUR HALLSSON',
          'BRIGITTE RAABE supplement',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'RAIMAR STANGE',
          'VOLKER TROCHE',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/23.jpeg"
        version="23"
        time="NOVEMBER-DECEMBER 1997"
        contributors={[
          'ROLF BIER',
          'HLYNUR HALLSSON',
          'NINA IVANOVA ',
          'PIOTR KOMARNICKI',
          'ÓMAR SMÁRI KRISTINSSON',
          'THOMAS MISÍK',
          'DR. PESTA SISTERS',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'JULIA SCHMID',
          'ALEXANDER STEIG',
          'PIET TRANTEL',
          'VOLKER TROCHE',
          'STEFAN WEIßFLOG',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/22.jpeg"
        version="22"
        time="SEPTEMBER-OCTOBER 1997"
        contributors={[
          'MICHAEL BOCZOR',
          'PIOTR KOMARNICKI',
          'CHRISTIAN MATTICZK',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'JULIA SCHMID',
          'ALEXANDER STEIG',
          'PIET TRANTEL',
          'VOLKER TROCHE',
          'ANNAMIRL WEISHÄUPL',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/21.jpeg"
        version="21"
        time="JULY-AUGUST 1997"
        contributors={[
          'CHRISTIANE BROHL & PIET TRANTEL supplement',
          'PÉTUR EYVINDSSON',
          'LENNART FRANK',
          'HLYNUR HALLSSON',
          'NINA IVANOVA',
          'ÓMAR SMÁRI KRISTINSSON',
          'AENNE LANGHORST',
          'RÚNAR MAGNÚSSON & AUÐUR JÓNSDÓTTIR',
          'PETER POMMERER',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'MICHAEL STEPHAN',
          'PIET TRANTEL',
          'STEFAN WEIßFLOG',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/20.jpeg"
        version="20"
        time="MAY-JUNE 1997"
        contributors={[
          'MARGÉT H. BLÖNDAL',
          'DOROTHÉE H. FREHRKING',
          'GUNNAR PÁLL GUNNARSSON',
          'ALEX GUTBROT',
          'HLYNUR HALLSSON supplement',
          'OLIVER HECK',
          'HEIKE HELFERT',
          'GUNDOLF HOLFERT',
          'PIOTR KOMARNICKI',
          'NANA KÖNIG',
          'GUNNAR KRISTINSSON',
          'ÓMAR SMÁRI KRISTINSSON',
          'AENNE LANGHORST',
          'PETER POMMERER',
          'GABRIELE SAND',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'RAIMAR STANGE',
          'ALEXANDER STEIG',
          'PIET TRANTEL',
          'VOLKER TROCHE',
          'ANNAMIRL WEISHÄUPL',
          'DR. HARALD WELZER',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/19.jpeg"
        version="19"
        time="MARCH-APRIL 1997"
        contributors={[
          'MARTINA BECKER',
          'ROLF BIER',
          'CATRACK',
          'CARSTEN GREIFE',
          'GUNNAR PÁLL GUNNARSSON',
          'HLYNUR HALLSSON',
          'PIOTR KOMARNICKI',
          'RÚNAR ÞÓR MAGNÚSSON',
          'PETER POMMERER',
          'RAABE /STEPHAN',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'JOHANNES STÜTTGEN',
          'PIET TRANTEL',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/18.jpeg"
        version="18"
        time="JANUAR-FEBRUAR 1997"
        contributors={[
          'BIRGIR ANDRÉSSON',
          'SNORRI ÁSMUNDSSON',
          'ROLF BIER',
          'ULRIKE BOLDT',
          'CARSTEN GREIFE',
          'GUNNAR PÁLL GUNNARSSON',
          'HLYNUR HALLSSON',
          'HUGI HLYNSSON',
          'ÓMAR SMÁRI KRISTINSSON',
          'AENNE LANGHORST',
          'PETER POMMERER',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'ALEXANDER STEIG supplement',
          'PIET TRANTEL',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/17.jpeg"
        version="17"
        time="NOVEMBER-DECEMBER 1996"
        contributors={[
          'ROLF BIER',
          'JAN FEHLIS',
          'ALEXANDER GUTBROT',
          'EDMOND HALL',
          'HLYNUR HALLSSON',
          'NINA IVANOVA',
          'ÓMAR SMÁRI KRISTINSSON',
          'AENNE LANGHORST',
          'BARBARA LÜTJEN supplement',
          'PETER POMMERER',
          'RAIMAR STANGE',
          'PIET TRANTEL',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/16.jpeg"
        version="16"
        time="SEPTEMBER-OCTOBER 1996"
        contributors={[
          'ROLF BIER',
          'JAN FEHLIS',
          'HLYNUR HALLSSON',
          'KATRIN KLEINAU',
          'LIESETTE STALENHOEPF',
          'PIET TRANTEL',
          'ANNAMIRL WEISHÄUPL',
          'CHRISTIANE WETZEL',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/15.jpeg"
        version="15"
        time="JULY-AUGUST 1996"
        contributors={[
          'ROLF BIER',
          'FRANZOBEL',
          'CARSTEN GREIFE',
          'EDMOND HALL',
          'HLYNUR HALLSSON',
          'KATRIN KLEINAU',
          'ALEXANDER STEIG',
          'PIET TRANTEL',
          'ANNAMIRL WEISHÄUPL',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/14.jpeg"
        version="14"
        time="MAY-JUNE 1996"
        contributors={[
          'ÁSMUNDUR ÁSMUNDSSON',
          'JUSTIN BLAUSTEIN',
          'ULRIKE BOLDT',
          'JAN FEHLIS supplement',
          'HLYNUR HALLSSON ',
          'NINA IVANOVA',
          'ÓMAR SMÁRI KRISTINSSON',
          'JEONG EUN LEE',
          'RAGNHEIÐUR RAGNARSDÓTTIR',
          'ALEXANDER STEIG',
          'PIET TRANTEL',
          'ANNAMIRL WEISHÄUPL',
          'STEFAN WEIßFLOG',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/13.jpeg"
        version="13"
        time=" MARCH-APRIL 1996"
        contributors={[
          'ROLF BIER',
          'JAN FEHLIS',
          'THOMAS GANZENMÜLLER',
          'HLYNUR HALLSSON',
          'MANNFRED HOLTFRERICH',
          'SANDRA KAPPELMANN supplement',
          'AENNE LANGHORST',
          'ALDA SIGURÐARDÓTTIR',
          'MILE SMITRAN',
          'RÜDIGER STANKO',
          'ALEXANDER STEIG',
          'PIET TRANTEL',
          'CHRISTIANE WETZEL',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/12.jpeg"
        version="12"
        time="JANUAR-FEBRUAR 1996"
        contributors={[
          'ROLF BIER',
          'ULRIKE BOLDT',
          'JAN FEHLIS',
          'THOMAS GANZENMÜLLER',
          'HLYNUR HALLSSON',
          'ÓMAR SMÁRI KRISTINSSON',
          'OLAV RASCHKE',
          'PIET TRANTEL',
          'JÜRGEN WITTE',
          'ELLEN WOLF',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/11.jpeg"
        version="11"
        time="NOVEMBER-DECEMBER 1995"
        contributors={[
          'JAN FEHLIS',
          'DOROTHEE H. FREHRKING',
          'CARSTEN GREIFE',
          'GABRIELE REGIERT',
          'JOHANNES LOTHAR SCHRÖDER',
          'RAIMAR STANGE',
          'PIET TRANTEL',
          'ANNAMIRL WEISHÄUPL',
          'CHRISTIANE WETZEL',
          'JÜRGEN WITTE',
          'ELLEN WOLF',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/10.jpeg"
        version="10"
        time="SEPTEMBER-OCTOBER 1995"
        contributors={[
          'ANDRÉ ALDER',
          'ÞÓRODDUR BJARNASON',
          'PÉTUR EYVINDSSON',
          'JAN FEHLIS',
          'HLYNUR HALLSSON',
          'MARIE-THERES HUBER',
          'HANS-GEORG INHESTERN',
          'NINA IVANOVA',
          'ROBERT KNOKE',
          'ÓMAR SMÁRI KRISTINSSON',
          'AENNE LANGHORST',
          'PETER POMMERER',
          'GABRIELE REGIERT',
          'WERNER REITERER',
          'HINRICH SACHS',
          'JOHANNES LOTHAR SCHRÖDER',
          'RAIMAR STANGE',
          'RÜDIGER STANKO',
          'GEROLD TAGWERKER',
          'PIET TRANTEL',
          'BERNHARD VOLK',
          'ANNAMIRL WEISHÄUPL',
          'JÜRGEN WITTE',
          'ELLEN WOLF',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/9.jpeg"
        version="9"
        time="july-august 1995"
        contributors={[
          'JÓHANN ÁSMUNDSSON',
          'BNERNHARD BÜTTNER',
          'CATHARINA COSIN',
          'DIETMAR ELGER',
          'WOLFGANG HELLWIG',
          'HLYNUR HALLSSON',
          'STEFAN KALMÁR',
          'ADAM LANGE',
          'ÓMAR SMÁRI KRISTINSSON',
          'PETER POMMERER',
          'OLAV RASCHKE',
          'GABRIELE REGIERT',
          'EIRÚN SIGURÐARDÓTTIR',
          'MILE SMITRAN',
          'RAIMAR STANGE',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/8.jpeg"
        version="8"
        time="MAY-JUNE 1995"
        contributors={[
          'AÐALSTEINN ÞÓRSSON',
          'ANDRÉ ALDER',
          'ULRIKE BOLDT',
          'JAN FEHLIS',
          'HLYNUR HALLSSON',
          'HUGI HLYNSSON',
          'NINA IVANOVA',
          'GABRIELE REGIERT',
          'ANGELIKA SCHIRMER',
          'RAIMAR STANGE',
          'ALEXANDER STEIG',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/7.jpeg"
        version="7"
        time="MARCH-APRIL 1995"
        contributors={[
          'ANDRÉ ALDER',
          'ÁSMUNDUR ÁSMUNDSSON',
          'PERDIE BLUMM',
          'THOMAS BÜNING',
          'DR. C. F. E.',
          'CATHARINA COSIN',
          'THOMAS DUFFY',
          'JAN FEHLIS',
          'MAX FRAZEE',
          'GUÐRÚN HJARTARDÓTTIR',
          'HARALDUR KARLSSON',
          'HLYNUR HALLSSON',
          'HUGI HLYNSSON',
          'JÓN BERGMANN KJARTANSSON',
          'ROBERT KNOKE',
          'ÓMAR SMÁRI KRISTINSSON',
          'PIT JOHANNES PRZYGODDA',
          'GABRIELE REGIERT',
          'ANGELIKA SCHIRMER',
          'RAIMAR STANGE',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/6.jpeg"
        version="6"
        time="JANUAR-FEBRUAR 1995"
        contributors={[
          'PERDIE BLUMM',
          'JAN FEHLIS',
          'THOMAS GANZENMÜLLER',
          'HLYNUR HALLSSON',
          'HARALDUR KARLSSON',
          'ROBERT KNOKE',
          'ÓMAR SMÁRI KRISTINSSON',
          'MILE SMITRAN',
          'RAIMAR STANGE',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/5.jpeg"
        version="5"
        time="NOVEMBER-DECEMBER 1994"
        contributors={[
          'ANDRÉ ALDER',
          'PERDIE BLUMM',
          'JAN FEHLIS',
          'HLYNUR HALLSSON',
          'HUGI HLYNSSON',
          'ÓMAR SMÁRI KRISTINSSON',
          'BARBARA LÜTJEN',
          'UWE MÜßEL',
          'INGO SCHWAN',
          'ARNDT SCHWICHTENBERG',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'ALEXANDER STEIG',
          'ANNAMIRL WEISHÄUPL',
          'STEPAHN WEIßFLOG',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/4.jpeg"
        version="4"
        time="SEPTEMBER-OKTOBER 1994"
        contributors={[
          'ANDRÉ ALDER',
          'JAN FEHLIS',
          'THOMAS GANZENMÜLLER',
          'HLYNUR HALLSSON',
          'KATRIN KLEINAU',
          'ÓMAR SMÁRI KRISTINSSON',
          'T. SCHLOPSNIES',
          'ARNDT SCHWICHTENBERG',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'GUNVOR VIBE-PETERSEN',
          'JÜRGEN WITTE',
          'M. B. ZOR',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/3.jpeg"
        version="3"
        time="JULY-AUGUST 1994"
        contributors={[
          'MARIT AANESTAD',
          'ANDRÉ ALDER',
          'GUNNAR M. BERNSKÖTTER',
          'JAN FEHLIS',
          'THOMAS GANZENMÜLLER',
          'HLYNUR HALLSSON',
          'JON-HJALTI',
          'KATRIN KLEINAU',
          'URSULA KRÄMER',
          'BARBARA LÜTJEN',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
          'STEFAN WEIßFLOG',
          'JÜRGEN WITTE',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/2.jpeg"
        version="2"
        time="MAY-JUNE 1994"
        contributors={[
          'ANDRÉ ALDER',
          'AUGUST',
          'MARCHEL LE BLANC',
          'JAN FEHLIS',
          'THOMAS GANZENMÜLLER',
          'GUNNI TUNNI OG DÓRA STÓRA',
          'HLYNUR HALLSSON',
          'HUGI HLYNSSON',
          'ANDRÉ KELLER',
          'KATRIN KLEINAU',
          'AENNE LANGHORST',
          'UWE MÜßEL',
          'ÓMAR SMÁRI KRISTINSSON',
          'T. SCHLOPSNIES',
          'NANNA K. SKÚLADÓTTIR',
          'SPESSI',
          'ANNAMIRL WEISHÄUPL',
          'STEPAHN WEIßFLOG',
          'STEINUNN HELGA SIGURÐARDÓTTIR',
        ]}
      />

      <BlattBladSingle
        imageUrl="/images/blattblad/1.jpeg"
        version="1"
        time="MARCH-APRIL 1994"
        contributors={[
          'ANDRÉ ALDER',
          'ÁSMUNDUR ÁSMUNDSSON',
          'ULRIKE BOLDT',
          'JAN FEHLIS',
          'THOMAS GANZENMÜLLER',
          'HARALDUR KARLSSON',
          'HLYNUR HALLSSON',
          'AENNE LANGHORST',
          'T. SCHLOPSNIES',
          'LEA TESSMANN',
          'STEFAN WEIßFLOG',
          'CHRISTIANE WETZEL',
        ]}
      />
    </div>

    <style jsx>{`
      section:not(:first-child) {
        margin-bottom: 48px;
      }

      h1 {
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        padding-bottom: 8px;
        border-bottom: 3px solid black;
      }

      a {
        color: inherit;
      }

      .issues {
        width: 100%;
        display: grid;
        grid-gap: 32px;
      }

      @media (min-width: 900px) {
        section {
          width: 33%;
          padding-right: 16px;
          float: left;
        }
      }
    `}</style>
  </Frame>
)

export default withRouter(Catalouges)
