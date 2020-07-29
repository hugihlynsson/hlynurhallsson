import { NextPage } from 'next'
import Head from 'next/head'
import { withRouter, SingletonRouter } from 'next/router'

import Frame from '../components/frame'
import Nav from '../components/nav'

interface Props {
  router: SingletonRouter
}

const CV: NextPage<Props> = ({ router }) => (
  <Frame>
    <Head>
      <title>CV // HLYNUR HALLSSON</title>
    </Head>

    <Nav path={router.route} />

    <section>
      <h1>Æviferill – Biographie – Biography</h1>

      <p>
        1968*Akureyri (IS)
        <br />
        1989-90 Akureyri School of Visual Arts
        <br />
        1990-93 Icelandic College of Arts and Crafts, Reykjavík
        <br />
        1993-96 FH Hannover, HfbK Hamburg, Kunstakademie Düsseldorf
        <br />
        1997 Meisterschüler hjá/bei/master class of Professor Ulrich Eller, FH
        Hannover
        <br />
        1999-2015 Gestakennari við / Lehrauftrag an / Lectureship in Akureyri
        School of Visual Arts
        <br />
        2001-2014 Gestakennari við / Lehrauftrag an / /Lectureship in Iceland
        Academy of the Arts
        <br />
        2014- Safnstjóri Listasafnsins á Akureyri / Director at the Akureyri Art
        Museum
        <br />
        2015 Kennsla við Háskólann á Akureyri / Teacher at the University of
        Akureyri
        <br />
        býr og starfar á / lebt und arbeietet in / lives and works in Akureyri
        og / und / and in Berlin
      </p>
    </section>

    <section>
      <h1>Verðlaun og styrkir – Preise und Stipendien – Prizes and Grants</h1>

      <p>
        2017 Myndstef, sýningarstyrkur
        <br />
        2013 Listamannalaun / Arbeitstipendium / working scholarship (IS)
        <br />
        2011 Listamannalaun / Arbeitstipendium / working scholarship (IS)
        <br />
        2010 Muggur dvalarstyrkur / Atelierstipendium / artist in residence (D)
        <br />
        2006-08 Listamannalaun/Arbeitstipendium/working scholarship (IS)
        <br />
        2005 Spardabankpreis-Hannover stiftung
        <br />
        2005 Myndstef, útgáfustyrkur
        <br />
        2005 Bæjarlistamaður Akureyrar
        <br />
        2004 Listamannalaun/Arbeitstipendium/working scholarship (IS)
        <br />
        2003 Listamannalaun/Arbeitstipendium/working scholarship (IS)
        <br />
        2002 Vinnustofa/Atelierstipendium/artist in residence Chinati
        Foundation, Marfa, Texas
        <br />
        2002 Ferðastyrkur/Reisestipendium/travel scholarship,
        Menntamálaráðuneytið (USA)
        <br />
        2002 Vinnustofa/Barkenhoffstipendium/artist in residence, Worpswede
        <br />
        2001 Niedersächsischer Förderpreis
        <br />
        2001 Útnefning til menningarverðlauna DV/Nominiereung für DV
        Kunstpreis/nominated for the DV award (IS)
        <br />
        2001 Útnefning til/Nominiereung für/nominated for the
        Max-Pechstein-Förderpreis
        <br />
        2000 Penninn viðurkenning/Award
        <br />
        2000 Niedersächsischer Jahresstipendium
        <br />
        1998 Sleipnir, ferðastyrkur/Reisestipendium/travel scholarship (DK)
        <br />
        1997-99 Preis des Kunstverein Hannover
        <br />
        1997 Listamannalaun/Arbeitstipendium/working scholarship (IS)
        <br />
        1997 Sleipnir, ferðastyrkur/Reisestipendium/travel scholarship (N)
        <br />
        1993-94 Erasmus styrkur/Stipendium/scholarship (D)
        <br />
        1992 Nordplus styrkur/Stipendium/scholarship (N)
      </p>
    </section>

    <section>
      <h1>Einkasýningar - Einzelausstellungen - Selected Solo Exhibitions</h1>

      <p>
        (S/K/C) = Sýningarskrá/Katalog/Catalogue
        <br/><br/>
							2018 // „alltsaman - das ganze - all of it“, Kunstraum München, München<br/><br/>
2015 // „þetta er það - das ist es - this is it“, Kuckei + Kuckei, Berlin<br/><br/>
2014 // „Salt", ásamt / mit / with Heklu Björt Helgadóttur, Geimdósin, Akureyri<br/>
„Alþýðusýning í Alþýðuhúsinu", Kompan, Alþýðuhúsinu, Siglufirði<br/><br/>
2013 // „Sýning - Ausstellung - Exhibition", Kartöflugeymslan, Akureyri<br/>
		„Rennandi vatn og fleiri ný verk", Populus tremula, Akureyri<br/><br/>
							2011 // „BYLTINGIN VAR GAGNSLAUS!!!", ásamt / mit / with Jónu Hlíf Halldórsdóttur, GalleríBOX, Akureyri<br/>
		„Textað - Untertitel - Subtitles", (c. Oliver Zybok), Malkasten, Düsseldorf<br/><br/>


	
	2010 // „Tungur - Zungen - Tongues", (c. Christoph Kivelitz), Kunstverein Bochumer Kulturrat, Bochum +<br/>
			„Áfram með smjörlíkið – Byltingin er rétt að byrja", ásamt / mit / with Jónu Hlíf Halldórsdóttur, 111, Berlin +<br/>
			„Áfram með smjörlíkið – …og tilbiður guð sinn sem deyr", ásamt / mit / with Jónu Hlíf Halldórsdóttur, Verksmiðjan Djúpavík +<br/>
			„Áfram með smjörlíkið – Innantóm slagorð", ásamt / mit / with Jónu Hlíf Halldórsdóttur, Listasafn ASÍ, Reykjavík +<br/>
			„Útsýni - Aussicht - View", (c. Volker Troche), Kunst im Wohnraum, Essen<br/><br/>
	2009 // „Var hér - War hier - Was here - Var her", (c. Gitte Nielsen)  Big Wheel Studios, Vordingborg, (DK)<br/>
			„Landnám - Ansiedlung – Settlement”, Gallerí Víð8tta601, Akureyri<br/><br/>2008 // „út/inn - raus/rein - out/in", Listasafn Reykjavíkur, Reykjavik Art Museum<br/>„tillit - rücksicht - regard", Nýlistasafnið, Living Art Museum, Reykjavík<br/><br/>2007 // „Þetta - Das - This", DaLí Gallerí, Akureyri<br/>„Drulla - Scheisse - Mud", Veggverk, Akureyri<br/>„Ljós - Licht - Light", GalleríBOX, Akureyri<br/>„Safn - Sammlung - Collection", Gráa svæðið, Þelamörk<br/>„Nýtt - Neu - New", , Kuckei+Kuckei, Berlin<br/><br/>2006 // „Myndir - Bilder - Pictures", Jónas Viðar Gallery, Akureyri<br/>„Aftur - Wieder - Again",  Gallerí +, Akureyri

      <br/><br/>2005 // „Línur - Streifen - Stipes", Populus Tremula, Akureyri<br/>„Litir - Farben - Colors", Akureyri University Library<br/>„vegamyndir - roadmovies" Gallerí ash, Varmahlíð<br/>„BUSH+BLAIR", Paradiso, Giardini, la Biennale di Venezia<br/>„núna-jetzt-now", Galerie Robert Drees, Hannover<br/>„bara-bloss-just", Galleri 21, Malmö (S)<br/><br/>2004 // „New Frontiers", 02 Gallery, Akureyri<br/><br/>2003 // „New Frontiers", Vonarstræti 12, Reykjavík „sund - schwimm - swim",  Gallerí i8, Reykjavík<br/>„bíó - kino - movies", Ketilhúsið, Akureyri<br/>„bíó - kino - movies", The Living Art Museum, Reykjavík (S/K/C)<br/><br/>2002 // „BNA-VSA-USA-EEUU" Chinati Foundation, Locker Plant, Marfa, Texas<br/>„út - raus - out - ud", Overgaden, København<br/>„allt - alles - all", Kuckei + Kuckei, Berlin<br/>„in 0.8 sec.", Alte Grammophonfabrik, Hannover<br/>„Takk - Danke - Thanks", Lichthaus Plus Neue Kunst, Bremen2001 // „Þar - Dort -There", Slunkaríki, Ísafjörður (IS)<br/>„yes", The Balcony, Toronto (CAN)<br/>„Hér - Hier - Here", Kunstverein Heilbronn<br/>„af hverju - warum - why", Galerie 13, Hannover<br/>2000 // „17.7.-13.8.2000", ash gallery, Varmahlíð (IS)<br/>„Retrospektive", Vitrine, Braunschweig<br/>„Spurningar-Fragen-Questions", Max-Planck-Institut, Hannover<br/>„af hverju - warum - why", Kuckei + Kuckei, Berlin<br/>„Bláljós - Blaulicht - Bluelight - Blålys", Window Space, København<br/>„Veg(g)ir, Dagbók", Kjarvalsstaðir-Reykjavík Art Museum, Reykjavík (S/K/C)

      <br/><br/>1999 // „Hlynur Hallsson", Akureyri Artmuseum (&amp; Makado Aida) (S/K/C)<br/>„Verk - Werke - Works", Kunstverein Hannover (S/K/C)<br/>„opna dyr – türen öffnen – open doors", Künstlerhaus Göttingen (S/K/C)<br/>„10 Fragen und 100 Antworten", Kuckei + Kuckei, Berlin<br/>„Hlynur vs Hlynur", Gallerí Sævars Karls, Reykjavík (&amp; Hlynur Helgason)<br/>„Misheppnaðar myndir", Ljósmyndakompan, Akureyri<br/><br/>1998 // „Flaggen für Gehrden", Kunstverein Gehrden (S/K/C)<br/>„Umfrage und Straßen", Schnitt Ausstellungsraum, Köln (&amp; Ralf Werner) <br/>„Klósett", almenningssalernið, Akureyri<br/>„Grenzen – Borders", Galerie Gruppe Grün, Bremen<br/><br/>1997 // „Retrospective", Galleri Otto Plonk, Bergen (N)<br/>„ég hef ekkert gert", Gallerí Huldu Ágústsdóttur, Reykjavík<br/><br/>1996 // „Tré", Gallery Tree, New Brunswick, New Jersey<br/>„War hier", galerie hallsson, Köln<br/>„Átta götumyndir frá Akureyri", The Living Art Museum, Reykjavík<br/>„Innsetning fyrir kaffihús II", Mokka, Reykjavík<br/>„Þrjú herbergi", Gallerí +, Akureyri<br/><br/>1995 // „Hlynur Hallsson", Gerðuberg, Reykjavík<br/>„5 Performences", Kunstraum Wohnraum, Hannover<br/><br/>1994 // „Innsetning fyrir kaffihús", Café Karólína, Akureyri
					</p>
    </section>

    <section>
      <h1>Samsýningar - Gruppenausstellungen - Selected Group Exhibitions</h1>

      <p>2019		„osloBIENNALEN, First Edition 2019–2024”,&nbsp;(c. Eva González-Sancho Bodero, Per Gunnar Eeg-Tverbakk) Oslo City, Norway +<br /><br />
2018 // „The Fountain Mémoire”,&nbsp;(c. Rolf Bier) Deutscher Künstlerbund, Berlin<br /><br />
								2017 // „The Fountain Mémoire”,&nbsp;(c. Rolf Bier) Projektraum Akku, Stuttgart<br />
										„The Fountain Mémoire”,&nbsp;(c. Rolf Bier) Atelierhaus e.V., Hannover<br />
										„Hrina / Bout", (c. Yean Fee Quay) Listasafn Reykjavíkur, Hafnarhús / Reykjavík Art Museum<br /><br />
										2016 // „Inglan Is a Bitch”, Spor Klübü, Berlin<br />
										„Stingur í augun 2”, Verksmiðjan á Hjalteyri, Hjalteyri (IS)<br />
										„Dulkápan”, Núllið, Bankastræti, Reykjavík<br /><br />
										2015 // „100 kápur á Frakkastíg”, (c. Rakel Steinarsdóttir), portið við Frakkastíg 7, Listahátíð í Reykjavík, Reykjavik Art Festival<br />
										„Sjónarhorn / Points of view”, (c. Markús Þór Andrésson), Safnahúsið / Culture House, Reykjavík<br />
										„MENN/MEN”, (c. Ólöf Sigurðardóttir) Hafnarborg, Hafnarfjörður
                   <br /><br />
									2013 // „Correlation", (c. Alexander Steig) Halle50, München<br />
											„First things first", (c. Alexander Steig) Firstlines gallery, München<br /><br />
									2012 // „art (PARK)ing day", (c. Harpa Dögg Kjartansdóttir/Berglind Helgadóttir) Óðinstorg/Artíma Gallerí, Reykjavík<br />
											„Lókal-Glóbal", (c. Hlynur Helgason) Listasafnið á Akureyri / Akureyri Art Museum, Akureyri<br />
											„Sköpun bernskunnar", (c. Pálína Guðmundsdóttir) GalleriBOX/Salur Myndlistarfélagsins, Akureyri<br />
											„Sjálfstætt fólk / (I)ndependent people", ásamt / mit / with Jóna Hlíf Halldórsdóttir (c. Jonatan Engqvist) Reykjavík Art Museum<br />
											„Núningur / Friction”, (c. Ólafur S. Gíslason, Einar Garibaldi, Kristinn Hrafnsson) Listasafn ASÍ, Reykjavík +<br /><br />
									2011 // „TEXT”, (c. Hlynur Hallsson) Kuckei + Kuckei, Berlin<br />
											„Rencontre Platonique", (c. Sophie Roube) Musée Denys-Puech, Rodez (F)
											„Haustsýning", (c. Birgir Sigurðsson) 002 Gallery, Hafnarfjörður<br />2011 // „Læsi - Literacy", (c. JBK Ransu) The Living Art Museum, Reykjavík<br />„Beyond Frontiers”, with Guy Tillim and Michael Subotzky, Kuckei + Kuckei, Berlin<br />„Koddu. The Icelandic Case", (c. Ásmundur Ásmundsson, Tinna Grétarsdóttir, H. Lárusson) The Living Art Museum, Reykjavík +<br />
                      <br />2010 // „Fyrsta sýning", (c. Birgir Sigurðsson) 002 Gallery, Hafnarfjörður<br />„Leinen los!", (c. Ute Stuffer) Kunstverein Hannover +<br />„OMBRE - SHADOW - SCHATTEN" (c. Alexander Steig), Konschthaus beim Engel, Luxemburg (L)<br />„Reality Check”, (c. Æsa Sigurjónsdóttir) Listahátíð í Reykjavík<br />„VIRIDUM VIDEO",  (c. Eckhard Westermeier) Hermannshof, Springe-Völksen (D)<br /><br />2009 // „Lífróður/In Deep Water",  (c. Markús Þór Andrésson / Dorothee Kirch) Hafnarborg, Hafnarfjörður (IS)<br />„Kvörn", Verksmiðjan á Hjalteyri, Hjalteyri (IS)<br />„Freyjumyndir", (c. Guðrún Pálina Guðmundsdóttir) Flustöðin á Akureyri / Akureyri Airport +<br /><br />2008 // „Eguivalence",  (c. JBK Ransu) Lazareti – Galerija OTOK, Dubrovnik, Croatia<br />„Überblick", Kunstverein Hannover<br />„Hlass", (c. Jóna Hlíf Halldórsdóttir) Hlaðan Halastjörnunni, Öxnadal (IS)<br />„Fugl", (c. George Hollanders) Gallerí Víð8tta, Eyjafjarðarsveit<br />2008 // (Maí) „strip - Bilder in Folge / images in line", Kunstmuseum Stuttgart<br />(Mars) „Bæ, bæ, Ísland", Listasafnið á Akureyri, Akureyri Art Museum +<br />„European Attitude", Zendai Museum of Modern Art, Shanghai, RC<br /><br />2007 // „Skyldi' ég vera þetta sjálfur", Ketilhúsið, Akureyri<br />„Asia-Europe Mediations", Museum Inner Spaces, Poznan, Poland<br />„Að mynda orð", Hoffmannsgallerí, ReykjavíkurAkademían, Reykjavík
                  <br /><br />2006 // „GLAUBEN UND WISSEN", Galerie der Künstler, München<br />„Guðs útvalda þjóð - Gods chosen people", Kling &amp; Bang, Reykjavík<br />„Preview", Via 113, Hildesheim<br />„Neue Kunst in Alten Gärten", Gehrden-Lenthe<br />„Seitenwechsel", ArtIG, Hannover<br /><br />2005 // „Strip - Images in a line", Kunstverein Hannover. Deutscher Kuenstlerbund (Curated by Rolf Bier)<br />„zug um zug",  Kunstpreis der Sparda Bank, Hannover<br />„Passages to Olymp", Sojo Gallery, Kumamoto, Japan<br />„Media art", Yamabiko Museum, Mishima, Japan<br />„Intasllationen im Hohlkörper", Deutzer Brücke, Köln<br /><br />2004 // „Charlottenborgs Efterårsudstilling", Charlottenborg, København+<br />„ARTForum Berlin 2004” <br />„María mey", Safnaðarheimili Akureyrarkirkju, Akureyri<br />„Umhverfi og náttúra - Enviroment and nature", National Gallery of Iceland, Reykjavík<br />„María mey", Bragginn á Melrakkasléttu, Kópasker (IS)<br />„Set", Kuckei + Kuckei, Berlin<br /><br />2003 // „Die Sehnsucht des Kartografen", Kunstverein Hannover (S/K/C)<br />„Ferðafuða", Hafnarhúsið, Reykjavík Art Museum2002 // „SEA SAW", Manchester Metropolitan University-Gallery, Manchenster(GB)<br />„Perspektiven", Kunstverein Hannover (S/K/C)<br />„Ferðafuða", Akureyri &amp; Seyðisfjörður (IS)<br />„Akureyri í myndlist II", Akureyri Art Museum (S/K/C)


                     <br /><br />2001 // „Max-Pechstein-Förderpreis", Städtisches Museum Zwickau (S/K/C)<br />„Freundschaft", Kuckei + Kuckei, Berlin<br />„rolex_nord", Atelierhaus Voltmerstraße, Hannover<br />„Camp, Lejre", Lejre, (DK) (S/K/C)<br />„Bahnhof-Lichtspiele", Video-Projekt, Hauptbahnhof Hannover (S/K/C)<br />„Lebt und arbeitet in Hannover", Galerie Drees, Hannover<br /><br />2000 // „Rýmið í rýminu", Ketilhúsið, Akureyri<br />„Ein Treppenhaus für die Kunst, V", Ministerium für Wissenschaft und Kultur, Hannover (S/K/C)<br />„Balance 2000", Kunsthalle Faust, Eilenriede, Innenstadt, Hannover (S/K/C)<br />„Utopische Bürger?", workweb_art, Köln<br /><br />1999 // „Hot spot", Kultur Bahnhof Eller, Düsseldorf<br />„Transplants 2", arsenal Galeria Miejska, Poznan (PL)<br />„Parasiten", Galerie 13, Hannover<br />„Sommer", Kuckei + Kuckei, Berlin<br />„Das Lachen des Ovid...", Voges + Deisen, Frankfurt a. M<br /><br />1998 // „Gebrauchsanweisungen", Galerie 13, Hannover<br />„Transplants", Kubus Hannover (S/K/C)<br />„-30/60+", Kjarvalsstaðir-Reykjavík Art Museum, Reykjavík (S/K/C)<br />„NU", North Udstillningssted, København<br />„Junge Kunst in der Allbank", Allbank Hannover (S/K/C)<br />„Non Painters Painting Exhibition", BerlinTokyo, Berlin (S/K/C)<br />„Visions du nord -  Nuit blanches", Musée d´art moderne de la Ville de Paris (S/K/C)


                     <br /><br />1997 // „Die Meisterschüler", Bürocenter Weidetor, Hannover (S/K/C)<br />„Wandlungen", Kunstprojekt Litfaßsäule, Hannover<br />„ON Iceland", The Living Art Museum, Reykjavík (S/K/C)<br />„Eröffnung – Opening – Opnun", Villa Minimo, Hannover<br />„StadtNatur", Projekt im Steintorviertel, Hannover<br />„Neue Kunst aus Hannover", Künstlerhaus Hamburg<br /><br />1996 // „Wiedersehen", 79. Herbstausstellung, Kunstverein Hannover (S/K/C)<br />„Nomadsland", Künstlerhaus, Dortmund<br />„POOL II", TCH, ARTig, Hannover (S/K/C)<br />„Sýnir og veruleiki", Gallerí Gúlp, Reykjavík &amp; Akureyri<br />„Mahlzeit", Foro Artistico Eisfabrik, Hannover<br />„Ást", Listasafnið á Akureyri<br /><br />1995 // „One Night Stand", Kunstnerens Hus, Oslo (S/K/C)<br />„Skúlptúr", Art Festival, Akureyri<br />„Gullkistan", Laugarvatni (IS) (S/K/C)<br />„Visual Resonances II", QUARTAIR, Contemporary Art Initiative, Den Haag<br />„Stunde Null", Medien-Kunst Projekt, Innenstadt Hannover (S/K/C)<br />„17 ár", The Living Art Museum, Reykjavík<br /><br />1994 // „Gebärde", Kunstraum Düsseldorf<br />1993 // „16 dagar", The Living Art Museum, Reykjavík (S/K/C)
									</p>
    </section>

    <section>
      <h1>Gjörningar – Performances – Performances</h1>

      <p>2018 // „já / nei“, Kunstraum München, München<br /><br />
							2011 // „Hérna", 111 - ein zeitgenössischer Ort für Kunst, Berlin<br /><br />2010 // „Sund (áætlun)", Verksmiðjan á Hjalteyri<br /><br />2008 // „Sund", Lazareti – Galerija OTOK, Dubrovnik, Croatia<br /><br />2006 // „HM fyrir all - WM für alle - WC for all ", AWD Arena, Hannover<br />„Gyðjan" Skeið, Svarfaðardal (IS)<br /><br />2005 // „Afsakið - Entschuldigung - Sorry" Yamabikomuseum, Mishima, Japan<br />2003 // „Þingseta - Parlamentsitz - Parlament" Alþingi, Reykjavík<br />„Kosningabarátta - Wahlkampf - Electioncampaign" (IS)2001<br />„Bakpoki - Rucksack - Bag" Schloss Ringenberg, Hamminkeln<br />„Skrímsli - Ungeheuer - Monster" Ausstellungs- und Atelierhaus, Münster<br />„Hér - Hier - Here" (Dagsstimme), Kunstverein Heilbronn<br /><br />2000 // „Loftræsting - ", Sprengel Museum, Hannover<br />„Opið-Offen-Open", Oberwelt, Stuttagart<br />„Gluggar-Fenster-Windows", Der Garten, Fürstenberg/Weser<br /><br />1999 // „Slá grasið" (Rasen mähen/Maw the Lawn), Stadtpark Hannover<br />„Sex gjörningar" (Sechs Performances/Six Performances), Künstverein Hannover<br />„Opna dyr" (Türen öffnen/Open doors), Künstlerhaus Göttingen<br /><br />1998 // „Að opna glugga" (Fenster zu öffnen/To open a window), Galerie 13, Hannover<br />„Einn, tveir, þrír..." (Eins, zwei, drei.../One, two, three...), Künstlerhaus, Dortmund
              

              <br /><br />1997 // „Áttirnar" (Die Richtungen/The Directions), Kunstprojekt Litfaßsäule, Hannover<br />„Taktu þér miða" (Bitte, nimm Dir einen Zettel/Please, Take a card), The Living Art Museum, Reykjavík<br />„Ávarp" (Begrüßung/Welcoming), Villa Minimo, Hannover<br />„5 Götur" (5 Straßen/5 Streets), Künstlerhaus, Hamburg<br />„Svið" (Bühne/Stage), Tacheles, Berlin<br /><br />1996 // „Heimurinn" (Die Welt/The World), Künstlerhaus, Dortmund<br />„Götur" (Straßen/Streets), Eisfabrik, Hannover<br />„Mljet", Multi Media Centrum, Zagreb, Kroatien<br />„Íslenska – Þýska" (Isländisch – Deutsch/Icelandic – German), Ausgang Dressel, Via 113, Hildesheim<br /><br />1995 // „Velkomin" (Wilkommen/Wellcome) und „Viðtal" (Interview), Kunstnerens Hus, Oslo<br />„Tíminn og vatnið" (Die Zeit und das Wasser/The time and the water), QUARTAIR, Den Haag<br />„Laga til" (Aufraumen/Cleaning Up), „Gera hreint" (Saubermachen/Cleansing)und „Ganga frá"<br />Weggehen/Leaving), Kunstraum Wohnraum, Hannover<br />„Fara að sofa" (Ins Bett gehen/Go to Sleep), Kunstakademie Düsseldorf<br /><br />1994 // „Island", Kunstraum Düsseldorf<br />„The Art trio",Deiglan, Akureyri<br />
            „Sand(ur)", FH Hannover<br /><br />
1993 // „Að nefna hlutina réttum nöfnum" (Die Dinge beim richtigen Namen nennen/To call a Spade a Spade), FH Hannover<br />
            „Vatn, vatn, vatn, anda" (Wasser, Wasser, Wasser, atmen/Water, Water, Water, Breath, The Living Art Museum<br />
1992 // „Já, harmónika–Nei, harmónika" (Ja, Akkordeon–Nein, Akkordeon/Yes, Accordion–No, Accordion), MÍR, Reykjavík</p>
    </section>

    <section>
      <h1>Sýningarverk – Austellungsprojekte – Exhibition projects</h1>

      <p>2014 // „Þarf það að vera skriflegt?” Málarasalurinn, LHÍ, Reykjavik ásamt/mit/with Jóna Hlíf Halldórsdóttir<br />
							2013 // „Fjórtán sinnum fjölfeldi" Populus Tremula, Akureyri<br />
							2012 // „Collaboration_5" Verksmiðjan á Hjalteyri ásamt/mit/with Alexander Steg, Beate Engl, Thomas Tiede<br />
							2011- // Flóra, Akureyri ásamt/mit/with Kristín Þóra Kjartansdóttir<br />
							2011 // „TEXT",  Kuckei + Kuckei, Berlin <br />
							2008-2014 // Verksmiðjan á Hjalteyri<br />
							2005 // „Big in Japan" Sojo Gallery, Kumamoto, Japan<br />2004 // „aldrei-nie-never" Living Art Museum, Reykjavik, Gallerí +,Akureyri, Kuckei + Kuckei, Berlin +<br />2002 // „don" Chinati Foundation, Locker Plant, Marfa, Texas<br />2002 // „bingur-haufen-pile" Barkenhof, Atelier 4, Worpswede +<br />2000 // DEKP, Hannover ásamt/mit/with Carsten Greife, Daniel Schürer<br />1999 // „Eitthvað- Etwas - Something", Kunstverein Hannover<br />1999- // GUK+ Exhibition place, Selfoss (IS), Lejre (DK), Hannover (D) + laptop ásamt/mit/with Alda Sigurðardóttir, Steinunn Helga Sigurðardóttir, Carsten Greife, Jürgen Witte<br />1997-1999 // Villa Minimo, Hannover<br /> 1997 // „A 4", Galleri Otto Plonk, Bergen (N)<br />1996 // „Sýnir og veruleiki", Gallerí Gúlp, Reykjavík &amp; Akureyri<br />1996- // gallery hallsson<br />1994- // Kunstraum Wohnraum, Hannover &amp; Akureyri</p>
    </section>

    <section>
      <h1>Útgefin verk – Eigene Publikationen – Own Publication</h1>

      <p>
							2017 // „Þúsund dagar - Dagur eitt til eitthundraðþrjátíuogátta" Pastel 05 (bók/Buch/book)	<br />
								2013 // „Stafrófið - Das Alphabet (IS) - The Alphabet (IS)" (bók/Buch/book)	<br />
								2011 // „Myndir - Bilder - Pictures" (bók/Buch/book)<br />
								2001 // „Hér - Hier - Here" (dagblað/Zeitung/newspaper)<br />
1999 // „Listamannalíf" (&amp; Hlynur Helgason), (myndband/Video)<br />
1998 // „Landamæri – Landesgrenzen – Borderlines" (bókverk/Buchobjekt/book object)<br />
1998 // „Grenzen – Borders" (myndband/Video)<br />
1997 // „Der Pool", (myndband/Video/)<br />
1996 // „Hlynur Hallsson" (bókverk/Buchobjekt/book object)<br />
1996 // „Átta götumyndir frá Akureyri" (bókverk/Buchobjekt/book object)<br />
1994- // „BLATT BLAÐ" (tímarit/Zeitschriften/Magazines)<br />
1993 // „Portrett af Listasögunni" (bókverk/Buchobjekt/book object)<br />
1992 // „Út frá Ásabyggð" (bókverk/Buchobjekt)<br />
1992 // „H-Sagnorð" (myndband/Video)<br />
1990 // „Ljóð Myndir Pappírsflugvélar" (bók/Buch/book)</p>
    </section>

    <section>
      <h1>Birtingar (Úrval) – Bibliografie (Auswahl) – Bibliography (Selection)</h1>

      <p>
								2017 // „Þúsund dagar - Dagur eitt til eitthundraðþrjátíuogátta”, flóra<br /><br />
								2015 // „Gullkistan 20 ár/years“ Listasafn Árnesinga, s. 3-8, 29 (Ben Valentine)<br />
								„Staða karlsins rannsökuð” Davíð Már Stefánsson, Morgunblaðið s. 56, 29.03.2015<br />
								„Sýn manna á manninn” Hannes Friðbjarnarson, Fréttatíminn s. 64, 27.-29.03.2015<br /><br />
								2013 // „Allt sem ég geri er pólitískt” Símon Birgisson, DV s. 23, 05.06.2013<br /> 
										„Collaboration_", Collaboration_Team, „Að síðari..." (Hlynur Hallsson)<br /> 
										„Mjög heimilisleg verk” Friðrika Benónísdóttir, Fréttablaðið s. 22, 06.03.2013<br /><br />
								2012 // „GEORGE BUSH ER FÁVITI!” Björn Þorláksson, Akureyri Vikublað s. 12-13,14.12.2012<br />
										„Listgildi samtímans, handbók um samtímalist á Íslandi” Jón B. K. Ransu, s. 34<br /><br />
								2011 // „Sameiginlegur karakter” Árni Matthíasson, Morgunblaðið s. 58, 01.09.2011<br />
										„Íslensk listasaga V", „Myndlistin sem samskiptasvið” s. 250, 251 (Eva Heisler)<br />
										„Myndir - Bilder - Pictures" forlag höfundanna, Claudia Rahn, Raimar Stange Friðrik H. Hallsson, Kristín Kjartansdóttir
										<br />„Það litla í lífinu skiptir líka máli” Díana Rós A. Rivera, Morgunblaðið s. 28, 06.07.2011<br />
							
              
                    <br />
2010 // „GrenzGebietRuhr" Christoph Kivelitz, S. 32-41, Red. Bernd Finkeldey<br />
		„Zum Verhältnis von Kunst und Demokratie" Oliver Zybok, Kunstforum, S. 42-45, Bd. 205 November-Dezember 2010<br />
		„Eine Sprache, viele Zungen" Eckermann, Ruhr Nachrichten, 27.09.2010<br />
		„Im Land der Sprache(n) Grenzen überschreiten" Jürgen Boebers-Süßmann, S. WBO6 Westdeutsche Allgemeine, 15.09.2010<br />
		„Bochum aus sehs verschieden Blickwinkeln" S. BOL02, Ruhr Nachrichten, 15.09.2010<br />
		„Pólitískari myndlist" Ásgerður Júlíusdóttir, Sunnudags Mogginn, Lesbók, 18.07.2010<br />
		“…og tilbiður guð sinn sem deyr”, gun, Fréttablaðið, 17.07.2010<br />
		„Seitenwechsel!", ART IG, „Hlynur Hallsson" (Theo Jaeger) Ed. Anna Grunemann, Christane Oppermann<br />
		„Leinen Los!", Kunstverein Hannover, „Hlynur Hallsson" (Raimar Stange) Red. Ute Stuffer<br /><br />
2009 // „Icelandic art today”, Hatje Cantz, „Hlynur Hallsson" (Æsa Sigurjónsdóttir) Ed. Christian Schön, Halldór Björn Runólfsson<br />
		„Litir í glerkrukku” Einar Falur Ingólfsson, Morgunblaðið, 06.01.2009<br /><br />
2008 // „Snúið við” Sigurjón M. Egilsson, Mannlíf s. 76, Desember 2008<br />
		„Jón og séra Jón" Þóra Þórisdóttir, Morgunblaðið, 22.11.2008<br />
		„Hlynur Hallsson – Walter Benjamin 1-4", Sjónauki #3, 2008<br />
		„Hlynur Hallsson og þátttökulist" Gunnar J. Árnason, Skírnir, haust 2008<br />
		„Turning things around" Haukur S. Magnússon, The Reykjavík Grapevine #17, 2008<br />
		„Önnur sýn og í nýju samhengi" Ingveldur Geirsdóttir, Morgunblaðið s. 38, 11.06.2008<br />
		„Milljónaverk á Subway" Eiríkur Jónsson, Séð og heyrt, #46, 06.-12. 11.2008<br />
		„Listamaður mánaðarins" Markús Þór Andrésson, Læknablaðið, 09.2008<br />
		„List með hlutverk" Ragna Sigurðardóttir, Morgunblaðið, 28.08.2008<br />
		„Alltaf átt heima á Nýló" Gunnhildur Finnsdóttir, Morgunblaðið, 15.08.2008<br />
		„Lífsmark í manngerðu landslagi" Sigtryggur, DV, 08.08.2008<br />
		„Art at Home" Steinunn Jakobsdóttir, The Reykjavik Grapevine, 02.2008
    
    <br /><br />2008 // „Myndlistin er tæki til að velta við hlutum" Einar Falur Ingólfsson, Morgunblaðið, 21.01.2008<br /><br />
2007 // „Bannað að spreyja" Hildur Edda Einarsdóttir, Blaðið, 25.08.2007<br />
               „Hlynur Hallsson - on the road", ART IG, „ASIA - EUROPE mediations" (Harro Schmidt)<br />
               „Fotos, die sich sich zum Tagebuch fügen" Ingeborg Ruthe, Berliner Zeitung, 01.02.2007<br /><br />
2006 // „Grüner wird´s nicht" Alexandra Glanz, Hannovershe Allgemeine Zeitung, 25.08.2006<br />
               „Voll das ganz normale Leben" Alexandra Glanz, Hannovershe Allgemeine Zeitung, 22.08.2006<br />
               „Myndlist snýst um samskipti" Hjálmar S. Brynjólfsson, Morgunblaðið, 14.08.2006<br />
               „Tvö hundruð manna bolti" Kristrún Heiða Hauksdóttir, Fréttablaðið, 15.07.2006<br />
               „400 Beine kämpfen um einen Ball" Fabian Mast, Neue Presse, 08.07.2006<br />
               „Allir í boltanum" Kristrín Heiða Hauksdóttir, Fréttablaðið, 05.07.2006<br />
               „Hluti af stærri heild" Ragna Sigurðardóttir, Morgunblaðið, 14.03.2006<br />
             „Aftur Hlynur og orkulindir Ásdísar" Margrét Þóra Þórsdóttir, Morgunblaðið, 19.02.2006<br /><br />
2005 // „Nú þú" Ragna Sigurðardóttir, Morgunblaðið, 14.11.2005<br />
             „Kunstpreis der Sparda-Bank für Hlynur Hallsson" Alexandra Glanz, Hannovershe Allgemeine Zeitung, 04.11.2005<br />
             „zug am zug", ART IG, „Kunstpreis der Sparda-Bank Hannover- Stiftung" (Thomas Wulffen)<br />
             „Was ist George W. Bush?" Kristina Tieke, Hannoverische Allgemeine Zeitung 01.02.2005<br />
             „Vill provocera och väcka" Britte Montigny Skånska dagbladet 19.01.2005<br /><br />
2004 // „Landamæri Hlyns" Skapti Hallgrímsson, Morgunblaðið, 30.04.2004<br />
             „Die Sehnsucht des Kartografen" Michale Stoeber, Kunstforum, Bd. 169 März-April 2004<br />
             „Herr Ikarus ist ganz Kavalies" Jochen Stöckmann, Frankfurter Allgemeine Zeitung, 19.01.2004<br />
             „Der Globus der Seele" Till Briegleb, Süddeutsche Zeitung, 12.01.2004<br />
             „Lichthaus Plus Neue Kunst, Projekte 2001-2004", LPNK/Revolver, „Die Grenze als Fantasma" (Stephan Berg)<br /><br />
2003 // „Die Sehnsucht des Kartografen" Kunstverein Hannover  (Stephan Berg, Martin Engler)<br />
             „Þegar einn plús einn verða þrír" Ragna Sigurðardóttir, Morgunblaðið, 07.08.2003<br />
             „Blákaldur veruleikinn" Þóroddur Bjarnasson, Lesbók Morgunblaðsins, 01.02.2003<br />
             „Hver er ég - Hvað vil ég?" Súsanna Svavarsdóttir, Lesbók Morgunblaðsins, 25.01.2003<br />
             „Hlynur Hallsson, Bíó - Kino - Movies" Living Art Museum (Horst Griese, Paul T. Werner, James Wagner)

             <br /><br />2002 // „Hoping to inspire talk, an artist ignites a firestorm" Jim Yardley, International Herald Tribune, 14-15.09.2002<br />
           „Myndlistin er pólitísk", Skapti Hallgrímsson, Morgunblaðið, 08.09.2002<br />
           „Hoping to Inspire Talk, Artist Ignites Debate"  Jim Yardley, The New York Times, 05.09.2002<br />
           „'Part two' of controversial art exhibition opens today" Dan Keane, The Big Bend Sentinel, 29.08.2002<br />
           „Hlynur Hallsson stýrir sýningu í Marfa", Morgunblaðið, 10.08.2002<br />
           „Nordlichter"  Peter Herbstreut, Der Tagesspiegel, 18.05.2002<br />
           „Hlynur Hallsson sagt Takk"  Inken Steen, Weser Kurier, 29.04.2002<br />
           „Performace Hähnchengrill" Klaus Irler , taz Bremen, 28.03.2002<br />
           „Seine Skulpturen lösen sich auf"  Donata Holz , Wümme-Zeitung, 08.03.2002<br /><br />
2001 // „Hlynur Hallsson - or what we understand when we talk to each other" Städtisches Museum Zwickau (Stephan Berg)<br />
            „Wenn beim Weinfest auch Berglämmer zugelassen sind"  Andreas Sommer , Heilbronner Stime, 30.03.2001<br />
            „Fenster zum Hof" Ludwig Zerull, Hannovershe Allgemeine Zeitung, 30.03.2001<br />
            „Schräges Multikulti",  : Frame 06, März/April 2001<br /><br />
2000 // „Die Stimme bringt Bilder an den Tag" Andreas Sommer, Heilbronner Stimme, 30.12.2000<br /> 
            „Berlino, capitale dell'effimero?"  Elena Zanichelli, Juliet, n. 99 Oct.-Nov. 2000<br /> 
            „Balance 2000, Arttrail" Kunsthalle Faust/Kulturamt Hannover (Michael Stoeber)<br />
            „Hlynur Hallsson, Stigagangur-Treppenhaus-Stairwell" Nds. Ministerium für Wissenschaft und Kultur (Astrid Wege)<br />
            „Eine Liege für den Minister" Alexandra Glanz, Hannovershe Allgemeine Zeitung, 28.06.2000<br /> 
            „Ein Fahrstuhl der immer voll ist, Kunst im Treppenhaus des Ministers", Neue Presse, 28.06.2000<br /> 
            „Tvær alveg eins eða hvað?", Morgunblaðið, 08.06.2000<br />
            „Schrittfest", Tipp Berlin, Juni 2000<br />
            „Über die Arbeit 'Spurningar-Fragen-Questions' von Hlynur Hallsson", www. endo.mpg.de/artproject (Raimar Stange)<br />
            „Dagbókin um veg(g)inn" Halldór Björn Runólfsson, Morgunblaðið, 05.02.2000<br />
            „Stærsta dagbók á Íslandi!" Þóroddur Bjarnasson, Morgunblaðið, 28.01.2000<br />
            „Færir dagbók á vegginn" Margrét E. Ólafsdóttir, Fókus, 14.01.2000


            <br /><br />1999 // „Cartoon trifft auf blaue Poesie" Ulrike Merten, Neue Rhein Zeitung, 20.11.1999<br /> 
            „Ólíkir heimar" Áslaug Thorlacius, DV, 4.10.1999<br />
            „Andstæður" Halldór Björn Runólfsson, Morgunblaðið, 14.09.1999<br />
            „Skógarferð og sundferð fá nýja merkingu" Þórður Ingimarsson, Vikudagur, 9.09.1999<br />
            „Makoto Aida-Hlynur Hallsson", Akureyri Art Museum (Jón Proppe, Hannes Sigurðsson, Michael Stoeber)<br />
            „Mörkin sett" Valdís Eyja Pálsdóttir, Dagur, 13.08.1999<br />
            „Hlynur Hallsson", Flash Art International,Summer 1999<br /> 
            „Bilder des Lebens, Bilder des Lichts" Alexandra Glanz, Hannovershe Allgemeine Zeitung, 20.05.1999<br /> 
            „Hlynur Hallsson im Kunstverein Hannover" Raimar Stange, Kunst-Bulletin, 6/1999<br /> 
            „Hlynur Hallsson, Verk - Werke - Works" Kunstverein Hannover (Rolf Bier, Silke Boerma, Ólafur Gíslason, Douglas Gordon, Friðrik Haukur Hallsson, Hans Ulrich Obrist, Sabine Öllerer, Halldór Björn Runólfsson, Raimar Stange, Michael Stephan, Thomas Wulffen)<br />
            „Reingehen, rausgehen" Julia Otto, Göttinger Tageblatt, Magazin, 18.05.1999<br />
            „Saubere Sache" Kristina Tieke, Schädelspalter, 5/1999<br />
            „Heike Helfert über Hlynur Hallsson" Artist, Kunstmagazin, H. 39. 2/1999<br />
            „Transplants" Kubus Hannover (Gabriele Sand)<br />
            „Hversdagslíf á klofnum skjá" Anna G. Ólafsdóttir, Morgunblaðið, 22.01.1999<br /><br />
1998 // „Hlynur Hallsson" Kunstverein Gehrden (Oskar Negt, Angelika Sallfeld, Raimar Stange, Hlynur Hallsson)<br />
            „-30/60+" Kjarvalsstaðir, Reykjavík Municipal Museum.<br />
            „Nuit Blanche" Musée dárt moderne de la Ville de Paris (Gunnar Kvaran)<br /><br />
1997 // „Die Meisterschüler" FH Hannover (Eckhard Schneider)<br />
            „Að upplifa augnablikið" Þórarinn Stefánsson, Morgunblaðið, 30.05.1997<br />
            „Bort fra objektet" Øysten Hauge, Bergens tidende, 11.03.1997<br /><br />
1996 // „Pool 2" ARTig, Hannover<br />
1995 // „Stunde Null" FH Hannover
             
             </p>
    </section>

    <section>
      <h1>Slóðir - Links - Links</h1>

      <p>
							<a href="http://www.hallsson.de/" target="_blank">hallsson.de</a><br />
							<a href="http://www.kuckei-kuckei.de/">kuckei-kuckei.de</a><br />
							<a href="http://www.galerie-robert-drees.de/">galerie-robert-drees.de</a><br />
							<a href="http://www.hlynur.is/">hlynur.is</a></p>
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

export default withRouter(CV)
