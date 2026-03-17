import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import Frame from '../components/frame'
import Nav from '../components/nav'

type CVEntry = {
  year: string
  items: (string | ReactNode)[]
}

const biography: CVEntry[] = [
  { year: '', items: ['fæddur á / geboren in / born in Akureyri (IS)'] },
  { year: '1989-90', items: ['Akureyri School of Visual Arts'] },
  {
    year: '1990-93',
    items: ['Icelandic College of Arts and Crafts, Reykjavík'],
  },
  {
    year: '1992',
    items: ['Kunstakademiet i Trondheim (Guest student), Trondheim (NO)'],
  },
  {
    year: '1993-96',
    items: ['FH Hannover, HfbK Hamburg, Kunstakademie Düsseldorf'],
  },
  {
    year: '1997',
    items: [
      'Meisterschüler hjá / bei / master class of Professor Ulrich Eller, FH Hannover',
    ],
  },
  {
    year: '1997-',
    items: [
      'Sjálfstætt starfandi myndlistarmaður / Freischaffender Künstler / Visual Artist',
    ],
  },
  {
    year: '1999-2015',
    items: [
      'Gestakennari við / Lehrauftrag an / Lectureship at Akureyri School of Visual Arts',
    ],
  },
  {
    year: '2001-2014',
    items: [
      'Gestakennari við / Lehrauftrag an / Lectureship at Iceland Academy of the Arts',
    ],
  },
  {
    year: '2014-2024',
    items: [
      'Safnstjóri Listasafnsins á Akureyri / Director at the Akureyri Art Museum',
    ],
  },
  {
    year: '2015',
    items: [
      'Kennsla við Háskólann á Akureyri / Teacher at the University of Akureyri',
    ],
  },
  { year: '2021-', items: ['Board member of The Museum Council of Iceland'] },
]

const prizes: CVEntry[] = [
  {
    year: '2026',
    items: ['Listamannalaun / Arbeitstipendium / working scholarship (IS)'],
  },
  { year: '2025', items: ['Myndlistarráð, útgáfustyrkur / Publishing Grant'] },
  { year: '2017', items: ['Myndstef, sýningarstyrkur / Exhibition Grant'] },
  {
    year: '2013',
    items: ['Listamannalaun / Arbeitstipendium / working scholarship (IS)'],
  },
  {
    year: '2011',
    items: ['Listamannalaun / Arbeitstipendium / working scholarship (IS)'],
  },
  {
    year: '2010',
    items: [
      'Muggur dvalarstyrkur / Atelierstipendium / artist in residence (D)',
    ],
  },
  {
    year: '2006-08',
    items: ['Listamannalaun/Arbeitstipendium/working scholarship (IS)'],
  },
  {
    year: '2005',
    items: [
      'Spardabankpreis-Hannover stiftung',
      'Myndstef, útgáfustyrkur',
      'Bæjarlistamaður Akureyrar',
    ],
  },
  {
    year: '2004',
    items: ['Listamannalaun/Arbeitstipendium/working scholarship (IS)'],
  },
  {
    year: '2003',
    items: ['Listamannalaun/Arbeitstipendium/working scholarship (IS)'],
  },
  {
    year: '2002',
    items: [
      'Vinnustofa/Atelierstipendium/artist in residence Chinati Foundation, Marfa, Texas',
      'Ferðastyrkur/Reisestipendium/travel scholarship, Menntamálaráðuneytið (USA)',
      'Vinnustofa/Barkenhoffstipendium/artist in residence, Worpswede',
    ],
  },
  {
    year: '2001',
    items: [
      'Niedersächsischer Förderpreis',
      'Útnefning til menningarverðlauna DV/Nominiereung für DV Kunstpreis/nominated for the DV award (IS)',
      'Útnefning til/Nominiereung für/nominated for the Max-Pechstein-Förderpreis',
    ],
  },
  {
    year: '2000',
    items: ['Penninn viðurkenning/Award', 'Niedersächsischer Jahresstipendium'],
  },
  {
    year: '1998',
    items: ['Sleipnir, ferðastyrkur/Reisestipendium/travel scholarship (DK)'],
  },
  { year: '1997-99', items: ['Preis des Kunstverein Hannover'] },
  {
    year: '1997',
    items: [
      'Listamannalaun/Arbeitstipendium/working scholarship (IS)',
      'Sleipnir, ferðastyrkur/Reisestipendium/travel scholarship (N)',
    ],
  },
  { year: '1993-94', items: ['Erasmus styrkur/Stipendium/scholarship (D)'] },
  { year: '1992', items: ['Nordplus styrkur/Stipendium/scholarship (N)'] },
]

const soloExhibitions: CVEntry[] = [
  {
    year: '2026',
    items: [
      '„Enn og aftur - Schon wieder - Once again", Listasafn Árnesinga, Hveragerði',
    ],
  },
  {
    year: '2025',
    items: ['„Elska þig - Liebe dich - Love you", Mjólkurbúðin, Akureyri'],
  },
  {
    year: '2024',
    items: [
      '„Herbergi með útsýni / A Room with a View", Gallery Port, Reykjavík',
    ],
  },
  {
    year: '2023',
    items: [
      '„Rendur og stjörnur - Streifen und Sterne - Stripes and Stars", Listamenn Gallerí, Reykjavík',
    ],
  },
  {
    year: '2021',
    items: [
      '„abandoned stories", ásamt / mit / with Jenny Michel, (c. Michael Göbel) Kasseler Kunstverein, Kassel (DE) +',
    ],
  },
  { year: '2020', items: ['„Now or never", Muur, Höfn (IS)'] },
  {
    year: '2018',
    items: [
      '„alltsaman - das ganze - all of it", (c. Alexander Steig) Kunstraum München, München',
    ],
  },
  {
    year: '2015',
    items: [
      '„þetta er það - das ist es - this is it", Kuckei + Kuckei, Berlin',
    ],
  },
  {
    year: '2014',
    items: [
      '„Salt", ásamt / mit / with Heklu Björt Helgadóttur, Geimdósin, Akureyri',
      '„Alþýðusýning í Alþýðuhúsinu", Kompan, Alþýðuhúsinu, Siglufirði',
    ],
  },
  {
    year: '2013',
    items: [
      '„Sýning - Ausstellung - Exhibition", Kartöflugeymslan, Akureyri',
      '„Rennandi vatn og fleiri ný verk", Populus tremula, Akureyri',
    ],
  },
  {
    year: '2011',
    items: [
      '„BYLTINGIN VAR GAGNSLAUS!!!", ásamt / mit / with Jónu Hlíf Halldórsdóttur, GalleríBOX, Akureyri',
      '„Textað - Untertitel - Subtitles", (c. Oliver Zybok), Malkasten, Düsseldorf',
    ],
  },
  {
    year: '2010',
    items: [
      '„Tungur - Zungen - Tongues", (c. Christoph Kivelitz), Kunstverein Bochumer Kulturrat, Bochum +',
      '„Áfram með smjörlíkið – Byltingin er rétt að byrja", ásamt / mit / with Jónu Hlíf Halldórsdóttur, 111, Berlin +',
      '„Áfram með smjörlíkið – …og tilbiður guð sinn sem deyr", ásamt / mit / with Jónu Hlíf Halldórsdóttur, Verksmiðjan Djúpavík +',
      '„Áfram með smjörlíkið – Innantóm slagorð", ásamt / mit / with Jónu Hlíf Halldórsdóttur, Listasafn ASÍ, Reykjavík +',
      '„Útsýni - Aussicht - View", (c. Volker Troche), Kunst im Wohnraum, Essen',
    ],
  },
  {
    year: '2009',
    items: [
      '„Var hér - War hier - Was here - Var her", (c. Gitte Nielsen) Big Wheel Studios, Vordingborg, (DK)',
      '„Landnám - Ansiedlung – Settlement", Gallerí Víð8tta601, Akureyri',
    ],
  },
  {
    year: '2008',
    items: [
      '„út/inn - raus/rein - out/in", Listasafn Reykjavíkur, Reykjavik Art Museum',
      '„tillit - rücksicht - regard", Nýlistasafnið, Living Art Museum, Reykjavík',
    ],
  },
  {
    year: '2007',
    items: [
      '„Þetta - Das - This", DaLí Gallerí, Akureyri',
      '„Drulla - Scheisse - Mud", Veggverk, Akureyri',
      '„Ljós - Licht - Light", GalleríBOX, Akureyri',
      '„Safn - Sammlung - Collection", Gráa svæðið, Þelamörk',
      '„Nýtt - Neu - New", Kuckei+Kuckei, Berlin',
    ],
  },
  {
    year: '2006',
    items: [
      '„Myndir - Bilder - Pictures", Jónas Viðar Gallery, Akureyri',
      '„Aftur - Wieder - Again", Gallerí +, Akureyri',
    ],
  },
  {
    year: '2005',
    items: [
      '„Línur - Streifen - Stipes", Populus Tremula, Akureyri',
      '„Litir - Farben - Colors", Akureyri University Library',
      '„vegamyndir - roadmovies" Gallerí ash, Varmahlíð',
      '„BUSH+BLAIR", Paradiso, Giardini, la Biennale di Venezia',
      '„núna-jetzt-now", Galerie Robert Drees, Hannover',
      '„bara-bloss-just", Galleri 21, Malmö (S)',
    ],
  },
  { year: '2004', items: ['„New Frontiers", 02 Gallery, Akureyri'] },
  {
    year: '2003',
    items: [
      '„New Frontiers", Vonarstræti 12, Reykjavík',
      '„sund - schwimm - swim", Gallerí i8, Reykjavík',
      '„bíó - kino - movies", Ketilhúsið, Akureyri',
      '„bíó - kino - movies", The Living Art Museum, Reykjavík (S/K/C)',
    ],
  },
  {
    year: '2002',
    items: [
      '„BNA-VSA-USA-EEUU" Chinati Foundation, Locker Plant, Marfa, Texas',
      '„út - raus - out - ud", Overgaden, København',
      '„allt - alles - all", Kuckei + Kuckei, Berlin',
      '„in 0.8 sec.", Alte Grammophonfabrik, Hannover',
      '„Takk - Danke - Thanks", Lichthaus Plus Neue Kunst, Bremen',
    ],
  },
  {
    year: '2001',
    items: [
      '„Þar - Dort -There", Slunkaríki, Ísafjörður (IS)',
      '„yes", The Balcony, Toronto (CAN)',
      '„Hér - Hier - Here", Kunstverein Heilbronn',
      '„af hverju - warum - why", Galerie 13, Hannover',
    ],
  },
  {
    year: '2000',
    items: [
      '„17.7.-13.8.2000", ash gallery, Varmahlíð (IS)',
      '„Retrospektive", Vitrine, Braunschweig',
      '„Spurningar-Fragen-Questions", Max-Planck-Institut, Hannover',
      '„af hverju - warum - why", Kuckei + Kuckei, Berlin',
      '„Bláljós - Blaulicht - Bluelight - Blålys", Window Space, København',
      '„Veg(g)ir, Dagbók", Kjarvalsstaðir-Reykjavík Art Museum, Reykjavík (S/K/C)',
    ],
  },
  {
    year: '1999',
    items: [
      '„Hlynur Hallsson", Akureyri Artmuseum (& Makado Aida) (S/K/C)',
      '„Verk - Werke - Works", Kunstverein Hannover (S/K/C)',
      '„opna dyr – türen öffnen – open doors", Künstlerhaus Göttingen (S/K/C)',
      '„10 Fragen und 100 Antworten", Kuckei + Kuckei, Berlin',
      '„Hlynur vs Hlynur", Gallerí Sævars Karls, Reykjavík (& Hlynur Helgason)',
      '„Misheppnaðar myndir", Ljósmyndakompan, Akureyri',
    ],
  },
  {
    year: '1998',
    items: [
      '„Flaggen für Gehrden", Kunstverein Gehrden (S/K/C)',
      '„Umfrage und Straßen", Schnitt Ausstellungsraum, Köln (& Ralf Werner)',
      '„Klósett", almenningssalernið, Akureyri',
      '„Grenzen – Borders", Galerie Gruppe Grün, Bremen',
    ],
  },
  {
    year: '1997',
    items: [
      '„Retrospective", Galleri Otto Plonk, Bergen (N)',
      '„ég hef ekkert gert", Gallerí Huldu Ágústsdóttur, Reykjavík',
    ],
  },
  {
    year: '1996',
    items: [
      '„Tré", Gallery Tree, New Brunswick, New Jersey',
      '„War hier", galerie hallsson, Köln',
      '„Átta götumyndir frá Akureyri", The Living Art Museum, Reykjavík',
      '„Innsetning fyrir kaffihús II", Mokka, Reykjavík',
      '„Þrjú herbergi", Gallerí +, Akureyri',
    ],
  },
  {
    year: '1995',
    items: [
      '„Hlynur Hallsson", Gerðuberg, Reykjavík',
      '„5 Performences", Kunstraum Wohnraum, Hannover',
    ],
  },
  {
    year: '1994',
    items: ['„Innsetning fyrir kaffihús", Café Karólína, Akureyri'],
  },
]

const groupExhibitions: CVEntry[] = [
  {
    year: '2025',
    items: [
      '„Já já", Gallerí Havnará, Tórshavn (FO)',
      '„Já já", Mjólkurbúðin, Akureyri',
      '„Mitt rými - My Space", (c. Katrín Björg Gunnarsdóttir) Listasafnið á Akureyri, Akureyri / Akureyri Art Museum, Akureyri +',
      '„Heimalingar 25", Fífilbrekka, Eyjafjarðarsveit',
    ],
  },
  { year: '2024', items: ['„Remidía", Mjólkurbúðin, Akureyri'] },
  {
    year: '2023',
    items: [
      '„Ben", Kuckei + Kuckei, Berlin',
      '„Hildigunnur Birgisdóttir og verk úr safneign", (c. JBK Ransu) Listasafnið á Akureyri, Akureyri / Akureyri Art Museum, Akureyri',
      '„Kviksjá: Íslensk myndlist á 21. öld / Kaleidoscope: Icelandic 21st Century Art", (c. Markús Þór Andrésson) Listasafn Reykjavíkur, Hafnarhús / Reykjavík Art Museum',
    ],
  },
  {
    year: '2022',
    items: [
      '„Sviðsett augnablik / Staged Moments", (c. Vigdís Rún Jónsdóttir), Listasafn Íslands / National Gallery of Iceland, Reykjavík',
    ],
  },
  {
    year: '2019',
    items: [
      '„Today Is Our Tomorrow", (c. Paul O\'Neill, Eliisa Suvanto) PUBLICS, Helsinki',
      '„osloBIENNALEN, First Edition 2019–2024", (c. Eva González-Sancho Bodero, Per Gunnar Eeg-Tverbakk) Oslo City, Norway +',
    ],
  },
  {
    year: '2018',
    items: [
      '„The Fountain Mémoire", (c. Rolf Bier) Deutscher Künstlerbund, Berlin',
    ],
  },
  {
    year: '2017',
    items: [
      '„The Fountain Mémoire", (c. Rolf Bier) Projektraum Akku, Stuttgart',
      '„The Fountain Mémoire", (c. Rolf Bier) Atelierhaus e.V., Hannover',
      '„Hrina / Bout", (c. Yean Fee Quay) Listasafn Reykjavíkur, Hafnarhús / Reykjavík Art Museum',
    ],
  },
  {
    year: '2016',
    items: [
      '„Inglan Is a Bitch", Spor Klübü, Berlin',
      '„Stingur í augun 2", Verksmiðjan á Hjalteyri, Hjalteyri (IS)',
      '„Dulkápan", Núllið, Bankastræti, Reykjavík',
    ],
  },
  {
    year: '2015',
    items: [
      '„100 kápur á Frakkastíg", (c. Rakel Steinarsdóttir), portið við Frakkastíg 7, Listahátíð í Reykjavík, Reykjavik Art Festival',
      '„Sjónarhorn / Points of view", (c. Markús Þór Andrésson), Safnahúsið / Culture House, Reykjavík',
      '„MENN/MEN", (c. Ólöf Sigurðardóttir) Hafnarborg, Hafnarfjörður',
    ],
  },
  {
    year: '2013',
    items: [
      '„Correlation", (c. Alexander Steig) Halle50, München',
      '„First things first", (c. Alexander Steig) Firstlines gallery, München',
    ],
  },
  {
    year: '2012',
    items: [
      '„art (PARK)ing day", (c. Harpa Dögg Kjartansdóttir/Berglind Helgadóttir) Óðinstorg/Artíma Gallerí, Reykjavík',
      '„Lókal-Glóbal", (c. Hlynur Helgason) Listasafnið á Akureyri / Akureyri Art Museum, Akureyri',
      '„Sköpun bernskunnar", (c. Pálína Guðmundsdóttir) GalleriBOX/Salur Myndlistarfélagsins, Akureyri',
      '„Sjálfstætt fólk / (I)ndependent people", ásamt / mit / with Jóna Hlíf Halldórsdóttir (c. Jonatan Engqvist) Reykjavík Art Museum',
      '„Núningur / Friction", (c. Ólafur S. Gíslason, Einar Garibaldi, Kristinn Hrafnsson) Listasafn ASÍ, Reykjavík +',
    ],
  },
  {
    year: '2011',
    items: [
      '„TEXT", (c. Hlynur Hallsson) Kuckei + Kuckei, Berlin',
      '„Rencontre Platonique", (c. Sophie Roube) Musée Denys-Puech, Rodez (F)',
      '„Haustsýning", (c. Birgir Sigurðsson) 002 Gallery, Hafnarfjörður',
      '„Læsi - Literacy", (c. JBK Ransu) The Living Art Museum, Reykjavík',
      '„Beyond Frontiers", with Guy Tillim and Michael Subotzky, Kuckei + Kuckei, Berlin',
      '„Koddu. The Icelandic Case", (c. Ásmundur Ásmundsson, Tinna Grétarsdóttir, H. Lárusson) The Living Art Museum, Reykjavík +',
    ],
  },
  {
    year: '2010',
    items: [
      '„Fyrsta sýning", (c. Birgir Sigurðsson) 002 Gallery, Hafnarfjörður',
      '„Leinen los!", (c. Ute Stuffer) Kunstverein Hannover +',
      '„OMBRE - SHADOW - SCHATTEN" (c. Alexander Steig), Konschthaus beim Engel, Luxemburg (L)',
      '„Reality Check", (c. Æsa Sigurjónsdóttir) Listahátíð í Reykjavík',
      '„VIRIDUM VIDEO", (c. Eckhard Westermeier) Hermannshof, Springe-Völksen (D)',
    ],
  },
  {
    year: '2009',
    items: [
      '„Lífróður/In Deep Water", (c. Markús Þór Andrésson / Dorothee Kirch) Hafnarborg, Hafnarfjörður (IS)',
      '„Kvörn", Verksmiðjan á Hjalteyri, Hjalteyri (IS)',
      '„Freyjumyndir", (c. Guðrún Pálina Guðmundsdóttir) Flustöðin á Akureyri / Akureyri Airport +',
    ],
  },
  {
    year: '2008',
    items: [
      '„Eguivalence", (c. JBK Ransu) Lazareti – Galerija OTOK, Dubrovnik, Croatia',
      '„Überblick", Kunstverein Hannover',
      '„Hlass", (c. Jóna Hlíf Halldórsdóttir) Hlaðan Halastjörnunni, Öxnadal (IS)',
      '„Fugl", (c. George Hollanders) Gallerí Víð8tta, Eyjafjarðarsveit',
      '„strip - Bilder in Folge / images in line", Kunstmuseum Stuttgart',
      '„Bæ, bæ, Ísland", Listasafnið á Akureyri, Akureyri Art Museum +',
      '„European Attitude", Zendai Museum of Modern Art, Shanghai, RC',
    ],
  },
  {
    year: '2007',
    items: [
      '„Skyldi\' ég vera þetta sjálfur", Ketilhúsið, Akureyri',
      '„Asia-Europe Mediations", Museum Inner Spaces, Poznan, Poland',
      '„Að mynda orð", Hoffmannsgallerí, ReykjavíkurAkademían, Reykjavík',
    ],
  },
  {
    year: '2006',
    items: [
      '„GLAUBEN UND WISSEN", Galerie der Künstler, München',
      '„Guðs útvalda þjóð - Gods chosen people", Kling & Bang, Reykjavík',
      '„Preview", Via 113, Hildesheim',
      '„Neue Kunst in Alten Gärten", Gehrden-Lenthe',
      '„Seitenwechsel", ArtIG, Hannover',
    ],
  },
  {
    year: '2005',
    items: [
      '„Strip - Images in a line", Kunstverein Hannover. Deutscher Kuenstlerbund (Curated by Rolf Bier)',
      '„zug um zug", Kunstpreis der Sparda Bank, Hannover',
      '„Passages to Olymp", Sojo Gallery, Kumamoto, Japan',
      '„Media art", Yamabiko Museum, Mishima, Japan',
      '„Intasllationen im Hohlkörper", Deutzer Brücke, Köln',
    ],
  },
  {
    year: '2004',
    items: [
      '„Charlottenborgs Efterårsudstilling", Charlottenborg, København +',
      '„ARTForum Berlin 2004"',
      '„María mey", Safnaðarheimili Akureyrarkirkju, Akureyri',
      '„Umhverfi og náttúra - Enviroment and nature", National Gallery of Iceland, Reykjavík',
      '„María mey", Bragginn á Melrakkasléttu, Kópasker (IS)',
      '„Set", Kuckei + Kuckei, Berlin',
    ],
  },
  {
    year: '2003',
    items: [
      '„Die Sehnsucht des Kartografen", Kunstverein Hannover (S/K/C)',
      '„Ferðafuða", Hafnarhúsið, Reykjavík Art Museum',
    ],
  },
  {
    year: '2002',
    items: [
      '„SEA SAW", Manchester Metropolitan University-Gallery, Manchester (GB)',
      '„Perspektiven", Kunstverein Hannover (S/K/C)',
      '„Ferðafuða", Akureyri & Seyðisfjörður (IS)',
      '„Akureyri í myndlist II", Akureyri Art Museum (S/K/C)',
    ],
  },
  {
    year: '2001',
    items: [
      '„Max-Pechstein-Förderpreis", Städtisches Museum Zwickau (S/K/C)',
      '„Freundschaft", Kuckei + Kuckei, Berlin',
      '„rolex_nord", Atelierhaus Voltmerstraße, Hannover',
      '„Camp, Lejre", Lejre, (DK) (S/K/C)',
      '„Bahnhof-Lichtspiele", Video-Projekt, Hauptbahnhof Hannover (S/K/C)',
      '„Lebt und arbeitet in Hannover", Galerie Drees, Hannover',
    ],
  },
  {
    year: '2000',
    items: [
      '„Rýmið í rýminu", Ketilhúsið, Akureyri',
      '„Ein Treppenhaus für die Kunst, V", Ministerium für Wissenschaft und Kultur, Hannover (S/K/C)',
      '„Balance 2000", Kunsthalle Faust, Eilenriede, Innenstadt, Hannover (S/K/C)',
      '„Utopische Bürger?", workweb_art, Köln',
    ],
  },
  {
    year: '1999',
    items: [
      '„Hot spot", Kultur Bahnhof Eller, Düsseldorf',
      '„Transplants 2", arsenal Galeria Miejska, Poznan (PL)',
      '„Parasiten", Galerie 13, Hannover',
      '„Sommer", Kuckei + Kuckei, Berlin',
      '„Das Lachen des Ovid...", Voges + Deisen, Frankfurt a. M',
    ],
  },
  {
    year: '1998',
    items: [
      '„Gebrauchsanweisungen", Galerie 13, Hannover',
      '„Transplants", Kubus Hannover (S/K/C)',
      '„-30/60+", Kjarvalsstaðir-Reykjavík Art Museum, Reykjavík (S/K/C)',
      '„NU", North Udstillningssted, København',
      '„Junge Kunst in der Allbank", Allbank Hannover (S/K/C)',
      '„Non Painters Painting Exhibition", BerlinTokyo, Berlin (S/K/C)',
      '„Visions du nord - Nuit blanches", Musée d\'art moderne de la Ville de Paris (S/K/C)',
    ],
  },
  {
    year: '1997',
    items: [
      '„Die Meisterschüler", Bürocenter Weidetor, Hannover (S/K/C)',
      '„Wandlungen", Kunstprojekt Litfaßsäule, Hannover',
      '„ON Iceland", The Living Art Museum, Reykjavík (S/K/C)',
      '„Eröffnung – Opening – Opnun", Villa Minimo, Hannover',
      '„StadtNatur", Projekt im Steintorviertel, Hannover',
      '„Neue Kunst aus Hannover", Künstlerhaus Hamburg',
    ],
  },
  {
    year: '1996',
    items: [
      '„Wiedersehen", 79. Herbstausstellung, Kunstverein Hannover (S/K/C)',
      '„Nomadsland", Künstlerhaus, Dortmund',
      '„POOL II", TCH, ARTig, Hannover (S/K/C)',
      '„Sýnir og veruleiki", Gallerí Gúlp, Reykjavík & Akureyri',
      '„Mahlzeit", Foro Artistico Eisfabrik, Hannover',
      '„Ást", Listasafnið á Akureyri',
    ],
  },
  {
    year: '1995',
    items: [
      '„One Night Stand", Kunstnerens Hus, Oslo (S/K/C)',
      '„Skúlptúr", Art Festival, Akureyri',
      '„Gullkistan", Laugarvatni (IS) (S/K/C)',
      '„Visual Resonances II", QUARTAIR, Contemporary Art Initiative, Den Haag',
      '„Stunde Null", Medien-Kunst Projekt, Innenstadt Hannover (S/K/C)',
      '„17 ár", The Living Art Museum, Reykjavík',
    ],
  },
  { year: '1994', items: ['„Gebärde", Kunstraum Düsseldorf'] },
  {
    year: '1993',
    items: ['„16 dagar", The Living Art Museum, Reykjavík (S/K/C)'],
  },
]

const performances: CVEntry[] = [
  { year: '2018', items: ['„já / nei", Kunstraum München, München'] },
  {
    year: '2011',
    items: ['„Hérna", 111 - ein zeitgenössischer Ort für Kunst, Berlin'],
  },
  { year: '2010', items: ['„Sund (áætlun)", Verksmiðjan á Hjalteyri'] },
  {
    year: '2008',
    items: ['„Sund", Lazareti – Galerija OTOK, Dubrovnik, Croatia'],
  },
  {
    year: '2006',
    items: [
      '„HM fyrir all - WM für alle - WC for all ", AWD Arena, Hannover',
      '„Gyðjan" Skeið, Svarfaðardal (IS)',
    ],
  },
  {
    year: '2005',
    items: [
      '„Afsakið - Entschuldigung - Sorry" Yamabikomuseum, Mishima, Japan',
    ],
  },
  {
    year: '2003',
    items: [
      '„Þingseta - Parlamentsitz - Parlament" Alþingi, Reykjavík',
      '„Kosningabarátta - Wahlkampf - Electioncampaign" (IS)',
    ],
  },
  {
    year: '2001',
    items: [
      '„Bakpoki - Rucksack - Bag" Schloss Ringenberg, Hamminkeln',
      '„Skrímsli - Ungeheuer - Monster" Ausstellungs- und Atelierhaus, Münster',
      '„Hér - Hier - Here" (Dagsstimme), Kunstverein Heilbronn',
    ],
  },
  {
    year: '2000',
    items: [
      '„Loftræsting", Sprengel Museum, Hannover',
      '„Opið-Offen-Open", Oberwelt, Stuttgart',
      '„Gluggar-Fenster-Windows", Der Garten, Fürstenberg/Weser',
    ],
  },
  {
    year: '1999',
    items: [
      '„Slá grasið" (Rasen mähen/Maw the Lawn), Stadtpark Hannover',
      '„Sex gjörningar" (Sechs Performances/Six Performances), Künstverein Hannover',
      '„Opna dyr" (Türen öffnen/Open doors), Künstlerhaus Göttingen',
    ],
  },
  {
    year: '1998',
    items: [
      '„Að opna glugga" (Fenster zu öffnen/To open a window), Galerie 13, Hannover',
      '„Einn, tveir, þrír..." (Eins, zwei, drei.../One, two, three...), Künstlerhaus, Dortmund',
    ],
  },
  {
    year: '1997',
    items: [
      '„Áttirnar" (Die Richtungen/The Directions), Kunstprojekt Litfaßsäule, Hannover',
      '„Taktu þér miða" (Bitte, nimm Dir einen Zettel/Please, Take a card), The Living Art Museum, Reykjavík',
      '„Ávarp" (Begrüßung/Welcoming), Villa Minimo, Hannover',
      '„5 Götur" (5 Straßen/5 Streets), Künstlerhaus, Hamburg',
      '„Svið" (Bühne/Stage), Tacheles, Berlin',
    ],
  },
  {
    year: '1996',
    items: [
      '„Heimurinn" (Die Welt/The World), Künstlerhaus, Dortmund',
      '„Götur" (Straßen/Streets), Eisfabrik, Hannover',
      '„Mljet", Multi Media Centrum, Zagreb, Kroatien',
      '„Íslenska – Þýska" (Isländisch – Deutsch/Icelandic – German), Ausgang Dressel, Via 113, Hildesheim',
    ],
  },
  {
    year: '1995',
    items: [
      '„Velkomin" (Wilkommen/Wellcome) und „Viðtal" (Interview), Kunstnerens Hus, Oslo',
      '„Tíminn og vatnið" (Die Zeit und das Wasser/The time and the water), QUARTAIR, Den Haag',
      '„Laga til" (Aufraumen/Cleaning Up), „Gera hreint" (Saubermachen/Cleansing) und „Ganga frá" (Weggehen/Leaving), Kunstraum Wohnraum, Hannover',
      '„Fara að sofa" (Ins Bett gehen/Go to Sleep), Kunstakademie Düsseldorf',
    ],
  },
  {
    year: '1994',
    items: [
      '„Island", Kunstraum Düsseldorf',
      '„The Art trio", Deiglan, Akureyri',
      '„Sand(ur)", FH Hannover',
    ],
  },
  {
    year: '1993',
    items: [
      '„Að nefna hlutina réttum nöfnum" (Die Dinge beim richtigen Namen nennen/To call a Spade a Spade), FH Hannover',
      '„Vatn, vatn, vatn, anda" (Wasser, Wasser, Wasser, atmen/Water, Water, Water, Breath), The Living Art Museum',
    ],
  },
  {
    year: '1992',
    items: [
      '„Já, harmónika–Nei, harmónika" (Ja, Akkordeon–Nein, Akkordeon/Yes, Accordion–No, Accordion), MÍR, Reykjavík',
    ],
  },
]

const exhibitionProjects: CVEntry[] = [
  {
    year: '2024-2025',
    items: [
      '„Is this North?" Listasafnið á Akureyri og Norræna húsið, Reykjavík / Akureyri Art Museum and Nordic House, Reykjavík',
    ],
  },
  {
    year: '2014-2024',
    items: [
      'Sýningarstjóri rúmlega 50 sýninga í Listasafninu á Akureyri / Curator of over 50 Exhibitions at Akureyri Art Museum',
    ],
  },
  {
    year: '2014',
    items: [
      '„Þarf það að vera skriflegt?" Málarasalurinn, LHÍ, Reykjavik ásamt / mit / with Jóna Hlíf Halldórsdóttir',
    ],
  },
  {
    year: '2013',
    items: ['„Fjórtán sinnum fjölfeldi" Populus Tremula, Akureyri'],
  },
  {
    year: '2012',
    items: [
      '„Collaboration_5" Verksmiðjan á Hjalteyri ásamt/mit/with Alexander Steg, Beate Engl, Thomas Tiede',
    ],
  },
  {
    year: '2011-',
    items: ['Flóra, Akureyri ásamt/mit/with Kristín Þóra Kjartansdóttir'],
  },
  { year: '2011', items: ['„TEXT", Kuckei + Kuckei, Berlin'] },
  { year: '2008-2014', items: ['Verksmiðjan á Hjalteyri'] },
  {
    year: '2005',
    items: ['„Big in Japan" Sojo Gallery, Kumamoto, Japan'],
  },
  {
    year: '2004',
    items: [
      '„aldrei-nie-never" Living Art Museum, Reykjavik, Gallerí +, Akureyri, Kuckei + Kuckei, Berlin +',
    ],
  },
  {
    year: '2002',
    items: [
      '„don" Chinati Foundation, Locker Plant, Marfa, Texas',
      '„bingur-haufen-pile" Barkenhof, Atelier 4, Worpswede +',
    ],
  },
  {
    year: '2000',
    items: ['DEKP, Hannover ásamt/mit/with Carsten Greife, Daniel Schürer'],
  },
  {
    year: '1999',
    items: ['„Eitthvað- Etwas - Something", Kunstverein Hannover'],
  },
  {
    year: '1999-',
    items: [
      'GUK+ Exhibition place, Selfoss (IS), Lejre (DK), Hannover (D) + laptop ásamt/mit/with Alda Sigurðardóttir, Steinunn Helga Sigurðardóttir, Carsten Greife, Jürgen Witte',
    ],
  },
  { year: '1997-1999', items: ['Villa Minimo, Hannover'] },
  { year: '1997', items: ['„A 4", Galleri Otto Plonk, Bergen (N)'] },
  {
    year: '1996',
    items: ['„Sýnir og veruleiki", Gallerí Gúlp, Reykjavík & Akureyri'],
  },
  { year: '1996-', items: ['gallery hallsson'] },
  { year: '1994-', items: ['Kunstraum Wohnraum, Hannover & Akureyri'] },
]

const publications: CVEntry[] = [
  {
    year: '2024',
    items: [
      '„Þúsund dagar - Dagur eitthundraðþrjátíuogníu til tvöhundruðfjörtíuogþrjú" (bók / Buch / book)',
    ],
  },
  {
    year: '2017',
    items: [
      '„Þúsund dagar - Dagur eitt til eitthundraðþrjátíuogátta" Pastel 05 (bók / Buch / book)',
    ],
  },
  {
    year: '2013',
    items: [
      '„Stafrófið - Das Alphabet (IS) - The Alphabet (IS)" (bók/Buch/book)',
    ],
  },
  {
    year: '2011',
    items: ['„Myndir - Bilder - Pictures" (bók/Buch/book)'],
  },
  {
    year: '2001',
    items: ['„Hér - Hier - Here" (dagblað/Zeitung/newspaper)'],
  },
  {
    year: '1999',
    items: ['„Listamannalíf" (& Hlynur Helgason), (myndband/Video)'],
  },
  {
    year: '1998',
    items: [
      '„Landamæri – Landesgrenzen – Borderlines" (bókverk/Buchobjekt/book object)',
      '„Grenzen – Borders" (myndband/Video)',
    ],
  },
  { year: '1997', items: ['„Der Pool", (myndband/Video/)'] },
  {
    year: '1996',
    items: [
      '„Hlynur Hallsson" (bókverk/Buchobjekt/book object)',
      '„Átta götumyndir frá Akureyri" (bókverk/Buchobjekt/book object)',
    ],
  },
  {
    year: '1994-',
    items: ['„BLATT BLAÐ" (tímarit/Zeitschriften/Magazines)'],
  },
  {
    year: '1993',
    items: ['„Portrett af Listasögunni" (bókverk/Buchobjekt/book object)'],
  },
  {
    year: '1992',
    items: [
      '„Út frá Ásabyggð" (bókverk/Buchobjekt)',
      '„H-Sagnorð" (myndband/Video)',
    ],
  },
  {
    year: '1990',
    items: ['„Ljóð Myndir Pappírsflugvélar" (bók/Buch/book)'],
  },
]

const bibliography: CVEntry[] = [
  {
    year: '2026',
    items: [
      '„Enn og aftur - Schon wieder - Once again", Listasafn Árnesinga, Hveragerði (Craniv Boyd)',
    ],
  },
  {
    year: '2025',
    items: [
      '„Mitt rými - My Space", Listasafnið á Akureyri / Akureyri Art Museum (Katrín Björg Gunnarsdóttir)',
    ],
  },
  {
    year: '2024',
    items: [
      '„Þúsund dagar - Dagur eitthundraðþrjátíuogníu til tvöhundruðfjörtíuogþrjú", flóra',
    ],
  },
  {
    year: '2021',
    items: [
      '„Wissen, Worte, Welt / Knowledge, Words, World", (Gila Kolb / Jelena Toopeekoff), Abandoned Stories, Kasseler Kunstverein',
    ],
  },
  {
    year: '2019',
    items: [
      '„October 2019", osloBIENNALEN, First Edition 2019–2024 (Markús Þór Andrésson, Æsa Sigurjónsdóttir, Alexander Steig, Einar Bjarki Malmquist, Jill Maurah Leciejewski, Kristin Kjartansdóttir, Kari Ósk Grétudóttir Ege)',
    ],
  },
  {
    year: '2018',
    items: [
      '„Text und Wirkung", Barbara Teichelmann, in münchen, Nr. 6/2018, s. 37',
    ],
  },
  {
    year: '2017',
    items: ['„Þúsund dagar - Dagur eitt til eitthundraðþrjátíuogátta", flóra'],
  },
  {
    year: '2015',
    items: [
      '„Gullkistan 20 ár/years" Listasafn Árnesinga, s. 3-8, 29 (Ben Valentine)',
      '„Staða karlsins rannsökuð" Davíð Már Stefánsson, Morgunblaðið s. 56, 29.03.2015',
      '„Sýn manna á manninn" Hannes Friðbjarnarson, Fréttatíminn s. 64, 27.-29.03.2015',
    ],
  },
  {
    year: '2013',
    items: [
      '„Allt sem ég geri er pólitískt" Símon Birgisson, DV s. 23, 05.06.2013',
      '„Collaboration_", Collaboration_Team, „Að síðari..." (Hlynur Hallsson)',
      '„Mjög heimilisleg verk" Friðrika Benónísdóttir, Fréttablaðið s. 22, 06.03.2013',
    ],
  },
  {
    year: '2012',
    items: [
      '„GEORGE BUSH ER FÁVITI!" Björn Þorláksson, Akureyri Vikublað s. 12-13, 14.12.2012',
      '„Listgildi samtímans, handbók um samtímalist á Íslandi" Jón B. K. Ransu, s. 34',
    ],
  },
  {
    year: '2011',
    items: [
      '„Sameiginlegur karakter" Árni Matthíasson, Morgunblaðið s. 58, 01.09.2011',
      '„Íslensk listasaga V", „Myndlistin sem samskiptasvið" s. 250, 251 (Eva Heisler)',
      '„Myndir - Bilder - Pictures" forlag höfundanna, Claudia Rahn, Raimar Stange Friðrik H. Hallsson, Kristín Kjartansdóttir',
      '„Það litla í lífinu skiptir líka máli" Díana Rós A. Rivera, Morgunblaðið s. 28, 06.07.2011',
    ],
  },
  {
    year: '2010',
    items: [
      '„GrenzGebietRuhr" Christoph Kivelitz, S. 32-41, Red. Bernd Finkeldey',
      '„Zum Verhältnis von Kunst und Demokratie" Oliver Zybok, Kunstforum, S. 42-45, Bd. 205 November-Dezember 2010',
      '„Eine Sprache, viele Zungen" Eckermann, Ruhr Nachrichten, 27.09.2010',
      '„Im Land der Sprache(n) Grenzen überschreiten" Jürgen Boebers-Süßmann, S. WBO6 Westdeutsche Allgemeine, 15.09.2010',
      '„Bochum aus sehs verschieden Blickwinkeln" S. BOL02, Ruhr Nachrichten, 15.09.2010',
      '„Pólitískari myndlist" Ásgerður Júlíusdóttir, Sunnudags Mogginn, Lesbók, 18.07.2010',
      '"…og tilbiður guð sinn sem deyr", gun, Fréttablaðið, 17.07.2010',
      '„Seitenwechsel!", ART IG, „Hlynur Hallsson" (Theo Jaeger) Ed. Anna Grunemann, Christane Oppermann',
      '„Leinen Los!", Kunstverein Hannover, „Hlynur Hallsson" (Raimar Stange) Red. Ute Stuffer',
    ],
  },
  {
    year: '2009',
    items: [
      '„Icelandic art today", Hatje Cantz, „Hlynur Hallsson" (Æsa Sigurjónsdóttir) Ed. Christian Schön, Halldór Björn Runólfsson',
      '„Litir í glerkrukku" Einar Falur Ingólfsson, Morgunblaðið, 06.01.2009',
    ],
  },
  {
    year: '2008',
    items: [
      '„Snúið við" Sigurjón M. Egilsson, Mannlíf s. 76, Desember 2008',
      '„Jón og séra Jón" Þóra Þórisdóttir, Morgunblaðið, 22.11.2008',
      '„Hlynur Hallsson – Walter Benjamin 1-4", Sjónauki #3, 2008',
      '„Hlynur Hallsson og þátttökulist" Gunnar J. Árnason, Skírnir, haust 2008',
      '„Turning things around" Haukur S. Magnússon, The Reykjavík Grapevine #17, 2008',
      '„Önnur sýn og í nýju samhengi" Ingveldur Geirsdóttir, Morgunblaðið s. 38, 11.06.2008',
      '„Milljónaverk á Subway" Eiríkur Jónsson, Séð og heyrt, #46, 06.-12. 11.2008',
      '„Listamaður mánaðarins" Markús Þór Andrésson, Læknablaðið, 09.2008',
      '„List með hlutverk" Ragna Sigurðardóttir, Morgunblaðið, 28.08.2008',
      '„Alltaf átt heima á Nýló" Gunnhildur Finnsdóttir, Morgunblaðið, 15.08.2008',
      '„Lífsmark í manngerðu landslagi" Sigtryggur, DV, 08.08.2008',
      '„Art at Home" Steinunn Jakobsdóttir, The Reykjavik Grapevine, 02.2008',
      '„Myndlistin er tæki til að velta við hlutum" Einar Falur Ingólfsson, Morgunblaðið, 21.01.2008',
    ],
  },
  {
    year: '2007',
    items: [
      '„Bannað að spreyja" Hildur Edda Einarsdóttir, Blaðið, 25.08.2007',
      '„Hlynur Hallsson - on the road", ART IG, „ASIA - EUROPE mediations" (Harro Schmidt)',
      '„Fotos, die sich sich zum Tagebuch fügen" Ingeborg Ruthe, Berliner Zeitung, 01.02.2007',
    ],
  },
  {
    year: '2006',
    items: [
      '„Grüner wird\'s nicht" Alexandra Glanz, Hannovershe Allgemeine Zeitung, 25.08.2006',
      '„Voll das ganz normale Leben" Alexandra Glanz, Hannovershe Allgemeine Zeitung, 22.08.2006',
      '„Myndlist snýst um samskipti" Hjálmar S. Brynjólfsson, Morgunblaðið, 14.08.2006',
      '„Tvö hundruð manna bolti" Kristrún Heiða Hauksdóttir, Fréttablaðið, 15.07.2006',
      '„400 Beine kämpfen um einen Ball" Fabian Mast, Neue Presse, 08.07.2006',
      '„Allir í boltanum" Kristrín Heiða Hauksdóttir, Fréttablaðið, 05.07.2006',
      '„Hluti af stærri heild" Ragna Sigurðardóttir, Morgunblaðið, 14.03.2006',
      '„Aftur Hlynur og orkulindir Ásdísar" Margrét Þóra Þórsdóttir, Morgunblaðið, 19.02.2006',
    ],
  },
  {
    year: '2005',
    items: [
      '„Nú þú" Ragna Sigurðardóttir, Morgunblaðið, 14.11.2005',
      '„Kunstpreis der Sparda-Bank für Hlynur Hallsson" Alexandra Glanz, Hannovershe Allgemeine Zeitung, 04.11.2005',
      '„zug am zug", ART IG, „Kunstpreis der Sparda-Bank Hannover- Stiftung" (Thomas Wulffen)',
      '„Was ist George W. Bush?" Kristina Tieke, Hannoverische Allgemeine Zeitung 01.02.2005',
      '„Vill provocera och väcka" Britte Montigny Skånska dagbladet 19.01.2005',
    ],
  },
  {
    year: '2004',
    items: [
      '„Landamæri Hlyns" Skapti Hallgrímsson, Morgunblaðið, 30.04.2004',
      '„Die Sehnsucht des Kartografen" Michale Stoeber, Kunstforum, Bd. 169 März-April 2004',
      '„Herr Ikarus ist ganz Kavalies" Jochen Stöckmann, Frankfurter Allgemeine Zeitung, 19.01.2004',
      '„Der Globus der Seele" Till Briegleb, Süddeutsche Zeitung, 12.01.2004',
      '„Lichthaus Plus Neue Kunst, Projekte 2001-2004", LPNK/Revolver, „Die Grenze als Fantasma" (Stephan Berg)',
    ],
  },
  {
    year: '2003',
    items: [
      '„Die Sehnsucht des Kartografen" Kunstverein Hannover (Stephan Berg, Martin Engler)',
      '„Þegar einn plús einn verða þrír" Ragna Sigurðardóttir, Morgunblaðið, 07.08.2003',
      '„Blákaldur veruleikinn" Þóroddur Bjarnasson, Lesbók Morgunblaðsins, 01.02.2003',
      '„Hver er ég - Hvað vil ég?" Súsanna Svavarsdóttir, Lesbók Morgunblaðsins, 25.01.2003',
      '„Hlynur Hallsson, Bíó - Kino - Movies" Living Art Museum (Horst Griese, Paul T. Werner, James Wagner)',
    ],
  },
  {
    year: '2002',
    items: [
      '„Hoping to inspire talk, an artist ignites a firestorm" Jim Yardley, International Herald Tribune, 14-15.09.2002',
      '„Myndlistin er pólitísk", Skapti Hallgrímsson, Morgunblaðið, 08.09.2002',
      '„Hoping to Inspire Talk, Artist Ignites Debate" Jim Yardley, The New York Times, 05.09.2002',
      "„'Part two' of controversial art exhibition opens today\" Dan Keane, The Big Bend Sentinel, 29.08.2002",
      '„Hlynur Hallsson stýrir sýningu í Marfa", Morgunblaðið, 10.08.2002',
      '„Nordlichter" Peter Herbstreut, Der Tagesspiegel, 18.05.2002',
      '„Hlynur Hallsson sagt Takk" Inken Steen, Weser Kurier, 29.04.2002',
      '„Performace Hähnchengrill" Klaus Irler, taz Bremen, 28.03.2002',
      '„Seine Skulpturen lösen sich auf" Donata Holz, Wümme-Zeitung, 08.03.2002',
    ],
  },
  {
    year: '2001',
    items: [
      '„Hlynur Hallsson - or what we understand when we talk to each other" Städtisches Museum Zwickau (Stephan Berg)',
      '„Wenn beim Weinfest auch Berglämmer zugelassen sind" Andreas Sommer, Heilbronner Stime, 30.03.2001',
      '„Fenster zum Hof" Ludwig Zerull, Hannovershe Allgemeine Zeitung, 30.03.2001',
      '„Schräges Multikulti", Frame 06, März/April 2001',
    ],
  },
  {
    year: '2000',
    items: [
      '„Die Stimme bringt Bilder an den Tag" Andreas Sommer, Heilbronner Stimme, 30.12.2000',
      '„Berlino, capitale dell\'effimero?" Elena Zanichelli, Juliet, n. 99 Oct.-Nov. 2000',
      '„Balance 2000, Arttrail" Kunsthalle Faust/Kulturamt Hannover (Michael Stoeber)',
      '„Hlynur Hallsson, Stigagangur-Treppenhaus-Stairwell" Nds. Ministerium für Wissenschaft und Kultur (Astrid Wege)',
      '„Eine Liege für den Minister" Alexandra Glanz, Hannovershe Allgemeine Zeitung, 28.06.2000',
      '„Ein Fahrstuhl der immer voll ist, Kunst im Treppenhaus des Ministers", Neue Presse, 28.06.2000',
      '„Tvær alveg eins eða hvað?", Morgunblaðið, 08.06.2000',
      '„Schrittfest", Tipp Berlin, Juni 2000',
      "„Über die Arbeit 'Spurningar-Fragen-Questions' von Hlynur Hallsson\", www.endo.mpg.de/artproject (Raimar Stange)",
      '„Dagbókin um veg(g)inn" Halldór Björn Runólfsson, Morgunblaðið, 05.02.2000',
      '„Stærsta dagbók á Íslandi!" Þóroddur Bjarnasson, Morgunblaðið, 28.01.2000',
      '„Færir dagbók á vegginn" Margrét E. Ólafsdóttir, Fókus, 14.01.2000',
    ],
  },
  {
    year: '1999',
    items: [
      '„Cartoon trifft auf blaue Poesie" Ulrike Merten, Neue Rhein Zeitung, 20.11.1999',
      '„Ólíkir heimar" Áslaug Thorlacius, DV, 4.10.1999',
      '„Andstæður" Halldór Björn Runólfsson, Morgunblaðið, 14.09.1999',
      '„Skógarferð og sundferð fá nýja merkingu" Þórður Ingimarsson, Vikudagur, 9.09.1999',
      '„Makoto Aida-Hlynur Hallsson", Akureyri Art Museum (Jón Proppe, Hannes Sigurðsson, Michael Stoeber)',
      '„Mörkin sett" Valdís Eyja Pálsdóttir, Dagur, 13.08.1999',
      '„Hlynur Hallsson", Flash Art International, Summer 1999',
      '„Bilder des Lebens, Bilder des Lichts" Alexandra Glanz, Hannovershe Allgemeine Zeitung, 20.05.1999',
      '„Hlynur Hallsson im Kunstverein Hannover" Raimar Stange, Kunst-Bulletin, 6/1999',
      '„Hlynur Hallsson, Verk - Werke - Works" Kunstverein Hannover (Rolf Bier, Silke Boerma, Ólafur Gíslason, Douglas Gordon, Friðrik Haukur Hallsson, Hans Ulrich Obrist, Sabine Öllerer, Halldór Björn Runólfsson, Raimar Stange, Michael Stephan, Thomas Wulffen)',
      '„Reingehen, rausgehen" Julia Otto, Göttinger Tageblatt, Magazin, 18.05.1999',
      '„Saubere Sache" Kristina Tieke, Schädelspalter, 5/1999',
      '„Heike Helfert über Hlynur Hallsson" Artist, Kunstmagazin, H. 39. 2/1999',
      '„Transplants" Kubus Hannover (Gabriele Sand)',
      '„Hversdagslíf á klofnum skjá" Anna G. Ólafsdóttir, Morgunblaðið, 22.01.1999',
    ],
  },
  {
    year: '1998',
    items: [
      '„Hlynur Hallsson" Kunstverein Gehrden (Oskar Negt, Angelika Sallfeld, Raimar Stange, Hlynur Hallsson)',
      '„-30/60+" Kjarvalsstaðir, Reykjavík Municipal Museum.',
      '„Nuit Blanche" Musée d\'art moderne de la Ville de Paris (Gunnar Kvaran)',
    ],
  },
  {
    year: '1997',
    items: [
      '„Die Meisterschüler" FH Hannover (Eckhard Schneider)',
      '„Að upplifa augnablikið" Þórarinn Stefánsson, Morgunblaðið, 30.05.1997',
      '„Bort fra objektet" Øysten Hauge, Bergens tidende, 11.03.1997',
    ],
  },
  { year: '1996', items: ['„Pool 2" ARTig, Hannover'] },
  { year: '1995', items: ['„Stunde Null" FH Hannover'] },
]

const CVList = ({ entries, note }: { entries: CVEntry[]; note?: string }) => (
  <div className="cv-list">
    {note && <p className="cv-note">{note}</p>}
    {entries.map(({ year, items }, i) => (
      <div key={i} className="cv-row">
        <div className="cv-year">{year}</div>
        <div className="cv-items">
          {items.map((item, j) => (
            <p key={j} className="cv-item">
              {item}
            </p>
          ))}
        </div>
      </div>
    ))}
    <style jsx>{`
      .cv-list {
        margin-top: 8px;
      }
      .cv-note {
        margin: 0 0 8px;
        font-style: italic;
      }
      .cv-row {
        display: flex;
        gap: 16px;
        padding: 4px 0;
      }
      .cv-year {
        flex-shrink: 0;
        width: 106px;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .cv-items {
        flex: 1;
        min-width: 0;
      }
      .cv-item {
        margin: 0;
      }
      .cv-item + .cv-item {
        margin-top: 2px;
      }
      @media (max-width: 560px) {
        .cv-row {
          flex-direction: column;
          gap: 2px;
          padding: 8px 0;
        }
        .cv-year {
          width: auto;
        }
      }
    `}</style>
  </div>
)

const CV = () => {
  const router = useRouter()

  return (
    <Frame>
      <Head>
        <title>CV // HLYNUR HALLSSON</title>
      </Head>

      <Nav path={router.route} />

      <section>
        <h1>Æviferill – Biographie – Biography</h1>
        <CVList entries={biography} />
      </section>

      <section>
        <h1>Verðlaun og styrkir – Preise und Stipendien – Prizes and Grants</h1>
        <CVList entries={prizes} />
      </section>

      <section>
        <h1>Einkasýningar - Einzelausstellungen - Selected Solo Exhibitions</h1>
        <CVList
          entries={soloExhibitions}
          note="(S/K/C) = Sýningarskrá/Katalog/Catalogue"
        />
      </section>

      <section>
        <h1>
          Samsýningar (úrval) – Gruppenausstellungen (Auswahl) – Selected Group
          Exhibitions
        </h1>
        <CVList entries={groupExhibitions} />
      </section>

      <section>
        <h1>Gjörningar – Performances – Performances</h1>
        <CVList entries={performances} />
      </section>

      <section>
        <h1>Sýningarverk – Austellungsprojekte – Exhibition projects</h1>
        <CVList entries={exhibitionProjects} />
      </section>

      <section>
        <h1>Útgefin verk – Eigene Publikationen – Own Publications</h1>
        <CVList entries={publications} />
      </section>

      <section>
        <h1>
          Birtingar (úrval) – Bibliografie (Auswahl) – Selected Bibliography
        </h1>
        <CVList entries={bibliography} />
      </section>

      <section>
        <h1>Slóðir - Links - Links</h1>
        <p>
          <a href="http://hlynur.is/" target="_blank" rel="noreferrer">
            hlynur.is
          </a>
          <br />
          <a href="http://www.hallsson.de/" target="_blank" rel="noreferrer">
            hallsson.de
          </a>
          <br />
          <a
            href="http://www.kuckei-kuckei.de/"
            target="_blank"
            rel="noreferrer"
          >
            kuckei-kuckei.de
          </a>
        </p>
      </section>

      <style jsx>{`
        section {
          margin-bottom: 32px;
        }

        h1 {
          font-size: 16px;
          font-weight: 600;
          padding-bottom: 8px;
          border-bottom: 3px solid black;
        }
      `}</style>
    </Frame>
  )
}

export default CV
