import Head from 'next/head'
import { useState } from 'react'
import Frame from '../../components/frame'
import Nav from '../../components/nav'
import ProjectsNav from '../../components/projects-nav'

const artistTabs = [
  { id: 'ragnar', label: 'RAGNAR' },
  { id: 'joris', label: 'JORIS' },
  { id: 'jonahlif', label: 'J\u00d3NA HL\u00cdF' },
  { id: 'steingrimur', label: 'STEINGR\u00cdMUR' },
  { id: 'baldvin', label: 'BALDVIN' },
  { id: 'alda', label: 'ALDA' },
  { id: 'schoeller', label: 'SCHOELLER' },
  { id: 'hrund', label: 'HRUND' },
  { id: 'jonlaxdal', label: 'J\u00d3N LAXDAL' },
  { id: 'margret', label: 'MARGR\u00c9T' },
]

const KW = () => {
  const [activeTab, setActiveTab] = useState('ragnar')

  return (
    <Frame>
      <Head>
        <title>KW // HLYNUR HALLSSON</title>
      </Head>

      <Nav path="/projects" />
      <ProjectsNav current="kw" />

      <h2>KUNSTRAUM WOHNRAUM</h2>

      <div className="description">
        <p>
          var stofnað af Hlyni Hallssyni og Jan Fehlis og árið
          1994. Á heimili Hlyns Hallssonar og Kristínar
          Kjartansdóttur hafa listamenn haldið sýningar
          síðan. Eftir því sem fjölskyldan hefur
          flutt hefur sýningarrýmið einnig flutt sig um set.
          Flestir myndlistarmennirnir setja upp sýningarnar með
          heimilisaðstæðurnar í huga og hafa notað hin
          ýmsu herbergi, eldhús, svefnherbergi, barnaherbergi,
          baðherbergi, ganga, stiga, svalir, garð og svo framvegis
          þó að oftast séu sýningarnar í
          stofunni. Í Ásabyggðinni eru sýningarnar
          í stofu/eldhúsi.
        </p>
      </div>

      <div className="exhibition-history">
        <div className="location-block">
          <h3>Ásabyggð 2, IS-600, Akureyri, 2003-</h3>
          <p>4.10.2009. - 20.12.2009 Aðalheiður S. Eysteinsdóttir</p>
          <p>5.07.2009. - 20.09.2009 Guðrún Vera Hjartardóttir</p>
          <p>5.04.2009. - 21.06.2009 Huginn Þór Arason</p>
          <p>4.01.2009. - 22.03.2009 Hanna Hlíf Bjarnadóttir</p>
          <p>5.10.2008. - 21.12.2008 Arna Valsdóttir</p>
          <p>27.07.2008. - 21.09.2008 Alexander Steig</p>
          <p>16.03.2008. - 22.06 2008 Ragnar Kjartansson</p>
          <p>6.01.2008. - 9.03 2008 Joris Rademaker</p>
          <p>1.01.2006. - 29.03.2006 JÓNA HLÍF HALLDÓRSDÓTTIR</p>
          <p>1.05.2005. - 29.07.2005 STEINGRÍMUR EYFJÖRÐ</p>
          <p>6.02.2005. - 29.04.2005 BALDVIN RINGSTED</p>
          <p>7.11.2004. - 30.01.2005 ALDA SIGURÐARDÓTTIR</p>
          <p>1.08.2004. - 24.10.2004 ULRIKE SCHOELLER</p>
          <p>2.05.2004. - 25.07.2004 HRUND JÓHANNESDÓTTIR</p>
          <p>1.02.2004. - 25.03.2004 JÓN LAXDAL HALLDÓRSSON</p>
          <p>2.11.2003. - 25.01.2004 MARGRÉT BLÖNDAL</p>
        </div>

        <div className="location-block">
          <h3>Callinstrasse 8, D-30167, Hannover, 2000-2001</h3>
          <p>26.5.2001 - 27.7.2001 PIET TRANTEL &quot;MENTALITY&quot;</p>
          <p>18.3.2000 - 13.5.2000 GÖTZ BERGAMANN &quot;DIE RÜCKSEITE DER ZEIT&quot;</p>
        </div>

        <div className="location-block">
          <h3>Nedderfeldstrasse 20, D-30451 Hannover, 1998-1999</h3>
          <p>13.11.1999 - 16.12.1999 SABINE ÖLLERER &quot;INNEN / AUSSEN&quot;</p>
          <p>4.9.1999 PASCALE KOMARNICKI &quot;CINEMA 2000&quot;</p>
          <p>3.7.1999 - 21.7.1999 GUÐRÚN PÁLÍNA GUÐMUNDSDÓTTIR</p>
          <p>20.2.1999 - 23.4.1999 PIOTR KOMARNICKI &quot;TRANSITORY PRESENCE&quot;</p>
          <p>28.11.1998 - 18.12.1998 ROLF BIER &quot;VIER STÜCKE FÜR EINE WOHNUNG&quot;</p>
          <p>7.11.1998 - 22.11.1998 MICHAEL STEPHAN &quot;WEINT BEI MUSIK&quot;</p>
        </div>

        <div className="location-block">
          <h3>Ahlemerstrasse 15b, D-30451 Hannover, 1994-1998</h3>
          <p>1998 FEBRUARY SANDRA KAPPELMANN &amp; CECILIA QUARNSTRÖM &quot;INSTALLATION&quot;</p>
          <p>1998 JANUARY BRIGITTE RAABE &quot;VIDEO&quot;</p>
          <p>1997 DECEMBER THOMAS WOLSING &quot;INTALLATION&quot;</p>
          <p>1997 OCTOBER BIRGIR ANDRÉSSON &quot;PORTRAITS&quot;</p>
          <p>1997 SEPTEMBER MICHAEL BOCZOR &quot;IRRTUM KASERNE&quot;</p>
          <p>1997 JUNE CLAUDIA DOLL &quot;FAMILIENBEUTEL&quot;</p>
          <p>1997 MAY GUNNAR KRISTINSSON &quot;DAS TRAUMPAAR&quot;</p>
          <p>1997 MARCH CARSTEN GREIFE &quot;HOME, SWEET HOME&quot;</p>
          <p>1997 FEBRUARY ULRIKE BOLDT &quot;RAUMINSTALLATION&quot;</p>
          <p>1996 DECEMBER &quot;5X5X5&quot; GROUP EXHIBITION SAM C, J.FEHLIS, K. OLBRICH, U. BOLDT, C. DOLL, P. SCHMIDT, K. KLEINAU, S. ÖLLERER, M. BOCZOR, B. LÜTJEN, R. NAKAGAWA, A. STEIG, M. KOBECKE, H. ÁSMUNDSSON, K. HAUKSDÓTTIR, H. BJARNADÓTTIR, S. H. SIGURÐARDÓTTIR</p>
          <p>1996 NOVEMBER W. DUPONT &quot;OBJECTS&quot;</p>
          <p>1996 OCTOBER KATRIN KLEINAU &quot;RAUMKLEID IV&quot;</p>
          <p>1996 JULY HULDA ÁGÚSTSDÓTTIR &quot;OUT IN THE OPEN&quot;</p>
          <p>1996 JUNE LIND VÖLUNDARDÓTTIR &quot;INTALLATION&quot;</p>
          <p>1996 MAY STEINUNN HELGA SIGURÐARDÓTTIR &quot;OLD MEMORIES FROM ICELAND&quot;</p>
          <p>1996 APRIL 17TH FLOOR PRODUCTIONS &quot;RAUMKLANGINSTALLATION&quot;</p>
          <p>1996 MARCH KNUT ECKSTEIN &quot;FORMSCHÖN&quot;</p>
          <p>1996 FEBRUARY ANDRÉ ALDER &quot;HOMEBEAM&quot;</p>
          <p>1996 JANUARY OLAV RASCHKE &quot;ZEIT RÄUMEN&quot;</p>
          <p>1995 DECEMBER &quot;ENKEL&quot; GROUPEXHIBITION SIGURDÍS ARNARDÓTTIR, JAN FEHLIS, UWE MÜßEL, ANJA STEIDINGER, ALEXANDER STEIG, JÜRGEN WITTE</p>
          <p>1995 NOVEMBER PETER POMMERER &quot;HINTER GLAS&quot;</p>
          <p>1995 OCTOBER JÜRGEN WITTE &quot;DÉJEUNER SUR L&apos;HERBE&quot;</p>
          <p>1995 JUNE HLYNUR HALLSSON &quot;PERFORMACES&quot;</p>
          <p>1995 MAY ANNAMIRL WEISHÄUPL &quot;AUF DER HUT&quot;</p>
          <p>1995 APRIL ÓMAR SMÁRI KRSITINSSON &quot;ISERNHAGENER STRASSE&quot;</p>
          <p>1995 MARCH AENNE LANGHORST &amp; PERDIE BLUMM &quot;LOCHFOTOS UND VERMÄHLTES&quot;</p>
          <p>1995 FEBRUARY STEINUNN HELGA SIGURÐARDÓTTIR &quot;MERKI EFTIR FINGUR&quot;</p>
          <p>1995 JANUARY JAN FEHLIS &quot;WAS ICH GEMACHT HABE&quot;</p>
          <p>1994 DECEMBER PETRA KALTENMORGEN &quot;SALT LEFT&quot;</p>
          <p>1994 NOVEMBER T. SCHLOPSNIES &quot;RAKETENHORST&quot;</p>
        </div>
      </div>

      <div className="tab-nav">
        {artistTabs.map((tab) => (
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
        {activeTab === 'ragnar' && (
          <div>
            <h3 className="artist-title">RAGNAR KJARTANSSON</h3>
            <p className="exhibition-info">
              ALLT ER GOTT AÐ FRÉTTA AF PÓESÍUNNI<br />
              16.03. - 22.06.2008<br />
              Opið samkvæmt samkomulagi
            </p>
            <div className="artist-text">
              <p>
                Sunnudaginn 16. mars 2008 klukkan 11-13 opnar sýning Ragnars Kjartanssonar &quot;Allt er gott að frétta af póesíunni&quot; í Kunstraum Wohnraum á Akureyri.
              </p>
              <p>
                Sýning Ragnars Kjartanssonar í Kunstraum Wohnraum byggist á ljósmyndum sem Ragnar tók á símann sinn í Parísarborg af þremur listakonunum. Þessi verk eru sönnunargögn fyrir ljóðrænu tilverunnar. Þrjú guðdómleg móment úr hversdagsleikanum. Þetta eru heldur ekki hversdagslegar konur á myndunum.
              </p>
              <p>Úr bréfi til vinar:</p>
              <p>
                &quot;Jæja allt er gott að frétta af póesíunni...Í dag var ég eithvað að skoða myndirnar sem ég tók á ferðalaginu, fann og prentaði út þrjár myndir sem ég tók af Ásdísi, Heklu og Laufey um helgina.... þú sagðir mér að vera duglegur að taka myndir á símann ...  er eithvað að spá í að sýna þær hjá Hlyni Hallssyni und Familie (er með sýningu þar í mars) Finnst þér þetta ekki elegant portrett af listakonum í parís... músurnar þrjár  ... ein í monumental augnablikinu klædd gulum sari í barrokkeyðimörkinni, önnur sofandi í módernismanum, ekki alveg að meika heiminn og sú þriðja alveg kreisí í hvirfilvindinum.... allar eru þær að hugleiða mismunandi krystalkúlur... eru í einhverju trans ástandi&quot;
                <br />-Ragnar Kjartansson
              </p>
            </div>
            <div className="images">
              <div className="image-block">
                <img src="/images/projects/kw/ragnar/1.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/ragnar/2.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/ragnar/3.jpeg" alt="" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'joris' && (
          <div>
            <h3 className="artist-title">JORIS RADEMAKER</h3>
            <div className="artist-text">
              <p>
                Sunnudaginn 6. janúar 2008 klukkan 11-13 opnar Joris Rademaker sýninguna Mannleg tilvist í Kunstraum Wohnraum á Akureyri. Joris er Hollendingur en hefur fengist við myndlist síðan 1983. Hann var útnefndur bæjarlistamaður Akureyrar árið 2006. Joris vinnur með blandaða tækni og oft með mismunandi þema í lengri tíma í senn. Þetta er einhverskonar yfirlitssýning inni á heimili þar sem verkin samræmast alvöru og leik heimilisfólksins. Þau eru unnin út frá pússluspilskubbi, og í mismunandi tækni, vatnsliti, veggfóður, sprey, þrykk, málverk, ljósrit, klippimynd og sem objekt eða hlutir.Kunstraum Wohnraum hefur verið starfrækt frá árinu 1994, fyrst í Hannover og nú á Akureyri. Það er til húsa á heimili Hlyns Hallssonar og Kristínar Kjartansdóttur í Ásabyggð 2. Sýning Jorisar Rademakers stendur til 2. mars 2008 og er opin eftir samkomulagi og hægt er að hringja í síma 4623744.
              </p>
            </div>
            <div className="artist-text">
              <h4>MANNLEG TILVIST 06.01. - 02.03.2008</h4>
              <p>
                Joris Rademaker flutti 1991 til Íslands og varð skömmu síðar faðir. Hann kom í haustmyrkrinu og reyndi að fóta sig í nýju umhverfi og í föðurhlutverkinu. Þessi mikla breyting á lífinu kom fljótt fram í hans list. Í Hollandi hafði allt hans líf snúist eingöngu um myndlist. Á Íslandi varð hún að víkja fyrir launavinnu og varð frístundaiðja. Viðbrigðin að verða allt í einu faðir og í framandi landi var samblanda af gleði og einsemd. Hinu þéttbýla, frjósama og velræktaða Hollandi með aldagamla þróaða evrópska menningu var skipt út fyrir hrjóstrugt, fremur harðbýlt, kalt, einangrað land með fáum en kraftmiklum einstaklingum og unga listmenningu, fyrir utan fornbókmenntir.
              </p>
              <p>
                Fyrir tilviljun rakst Joris dag nokkurn á barnaleikföng frá því um 1960 sem tengdamóðir hans hafði fundið undir rúmi á hótelherbergi sem hún þreif í sumarvinnu. Þetta voru marglit plastleikföng ódýr og fjöldaframleidd sem bæði gátu verið gestaþraut og púsluspil. Joris heillaðist af margbreytileika fígúranna og valdi sér eina rauða á litinn og fór að þróa hana áfram í mismunandi myndform og í margvísleg efni. Hún minnti hann á teikningu Leonardós daVinci sem stendur eins og fimmarma stjarna þar sem höfuð og útlimir vísa í mismunandi áttir. Myndverk Jorisar með þessari fígúru fjalla um einstaklinginn í alheiminum - stundum aleinan og stundum í félagslegu samhengi, mis nánu. Stundum í skipulögðum munstrum - eins og samfélagsstrúktúrinn. Í þessari fígúru tjáir Joris alvöru og gleði lífsins - einstaklingsins og heildarinnar.Joris sýndi mismunandi seríur af þessari fígúru á árunum 1994-97 en er núna að nýju að endurbæta og loka þessu þema. Þetta er því einskonar yfirlitssýning - inni á heimili þar sem verkin samræmast alvöru og leik heimilisfólksins.
              </p>
            </div>
            <div className="cv-block">
              <h4>CV</h4>
              <p>
                1977-1983 Myndmenntakennaranám í Tilburg í Hollandi<br />
                1983-1986 AKI: Myndlistaskólinn í Enschede í Hollandi<br />
                2006 Bæjarlistamaður Akureyrar
              </p>
              <p>
                Sýningar<br />
                1987 Gallery Hooghuis, Arnhem, Holland<br />
                1988 Markt 17, Enschede, Noordkunst, Holland<br />
                1995 Listasafnið á Akureyri<br />
                1995 Slunkaríki, Ísafjörður<br />
                1997 Nýlistasafnið í Reykjavík<br />
                1997 Deiglan Akureyri, Listasumar 95 á Akureyri<br />
                1998 Gallerí+, Akureyri<br />
                2002 Slunkaríki, Ísafjörður<br />
                2002 Gallerí Skuggi, Reykjavík<br />
                2004 Safnasafnið, Svalbarðsströnd<br />
                2005 Bókasafn Háskólans á Akureyri<br />
                2005 Gallarí gangur, Reykjavík<br />
                2005 Gallerí+, Akureyri<br />
                2006 Populus Tremula, Akureyri<br />
                2006 Karólína Restaurant
              </p>
            </div>
            <div className="images">
              <div className="image-block">
                <img src="/images/projects/kw/joris/1.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/joris/2.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/joris/3.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/joris/4.jpeg" alt="" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jonahlif' && (
          <div>
            <h3 className="artist-title">JÓNA HLÍF HALLDÓRSDÓTTIR</h3>
            <div className="artist-text two-column">
              <div>
                <p>
                  Gegnum
                </p>
                <p>
                  Sumir gengu fattlausir gegnum áramótin og urðu ekki varir við sekúnduna sem bætt var við veraldartímann. Aðrir hafa þá gáfu að geta skyggnst á bakvið hið smáa, einfalda. Í dag er það smáorðið „gegnum" sem Jóna Hlíf varpar ljósi á. Orðið vísar til tíma og nær yfir atburði, en jafnframt hreyfingu. Við förum gegnum tímabil; brjótumst gegnum þau þegar illa lætur, en komumst einfaldlega gegnum þau þegar skár gengur. Í stofunni blasir skyndilega við veggur sem gerir upp á milli stofunnar og eldhússins. Eldhúsþrællinn er kunnuglegt hlutverk sem við gegnum, en veggurinn yfir í náð stofunnar er gegnsær og þaraðauki er hægt að ganga gegnum hann.  Hann er bara í plati. Áður hefur verið sagt um verk Jónu Hlífar að þau einkennist af barnslegri einlægni og einfaldleika, en hún hefur jöfnum höndum unnið við vídeóverk, málverk, textaverk og innsetningar. Verkið sem í dag birtist endurspeglar nokkur af einkennum hennar sem listakonu. Rendurnar sem strimlarnir birta minna á málverkin, og úr vídeóverkunum má rekast einbrotinn margfaldleika sem endurtekur sig hér.
                  <br />-Hjálmar Brynjólfsson
                </p>
              </div>
              <div>
                <p>1.01.2006. - 29.03.2006</p>
                <p>
                  Through
                </p>
                <p>
                  Some people didn&apos;t notice the second that was added to time last night. Other have the gift to be able to see through the small and simple. Today, Jona Hlif, is reflecting the icelandic word &quot;gegnum&quot;, which means &quot;through&quot; and &quot;obey&quot;. The word refers to time and events, as well as movement. We go through different phases during lifetime. In the living room a wall is suddenly apparent between the living room and the kitchen. We may live a life as kitchen slaves, but the wall is almost make-belief and at least see through. If you want you can walk through it. Jona Hlif&apos;s works have been described as childishly sincere and simplistic, and she has been working on videos, paintings, text works and installations. Today&apos;s work presents some of her characteristics. The stripes in this installation reflect the paintings, and in her video works one can find simple multiplicity as in this work.
                  <br />-Hjálmar Brynjólfsson
                </p>
              </div>
            </div>
            <div className="images">
              <div className="image-block">
                <img src="/images/projects/kw/jonahlif/1.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/jonahlif/2.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/jonahlif/3.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/jonahlif/4.jpeg" alt="" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'steingrimur' && (
          <div>
            <h3 className="artist-title">STEINGRÍMUR EYFJÖRÐ</h3>
            <div className="artist-text">
              <p>
                KUNSTRAUM WOHNRAUM, Ásabyggð 2, IS-600, Akureyri, 1.05.2005. - 29.07.2005
              </p>
              <p>
                Þetta eru teikningar af tindátum?<br />
                Jú. Fyrirmyndirnar eru af tindátum sem voru í umferð hjá kynslóð sem erfædd á árunum 1945 til 1975. Flestir sem sjá þessar myndir þekkja þessi form aftur. Bæði smáatriðin og sérstaklega stellingarnar sem segja kannski meira en nokkur orð. Sumir komu bognir úr verksmiðjunni og aðrir urðu fljótt nagaðir á endunum.
              </p>
              <p>
                En myndirnar sjálfar?<br />
                Þær sýna hólf inni í minningunni sem er orðið aðeins bjagað og þessir hreinu litir lýsa kannski fyrst og fremst litnum á plastefninu sem tindátarnir eru gerðir úr. Þetta er eins konar öfug upplitun; málningin er afmáð og í ljós koma hinir hreinu frumlitir plastsins.  Þetta eru form eða mynd sem hefur einungis áhrif á þessar tilteknu kynslóðir. Þau eru hlaðin vísunum og merkingum sem hafa hlaðist utan á Þessi form með árunum.
              </p>
              <p>
                Kannski ekki ósvipað og ákveðnar stellingar líkamans í klassískum styttum og hinu sögulega málverki hafði áhrif á hugsunarhátt og hegðun fólks áður en fígúran yfirgaf myndflötinn og færði sig yfir á ljósmyndina og síðan kvikmyndina?<br />
                Já algjörlega. Tindátarnir eru dæmi um heim er til staðar lengst inni í hugarheimi hvers og eins hjá þessari kynslóð. Það sem er mjög áhugavert við þá er að maður þarf ekki að sjá þá sérstaklega til þess að þeir verði raunverulegir. Þeir hafa þegar öðlast sjálfstætt líf í sameiginlegri menningarvitund.<br />
                Án þess að gleyma sér í eðlishyggju þá er nokkuð ljóst að það voru fyrst og fremst drengir sem léku sér með svona tindáta. Er þetta ekki frekar karllægur heimur sem þú ert að sýna okkur hérna?
              </p>
              <p>
                Jú það er alveg á hreinu. Eins og við munum þá var tveimur liðum stillt upp og lítilli kúlu komið fyrir á milli þeirra. Henni var síðan rúllað á víxl til að fella andstæðinginn.
              </p>
              <p>
                Þrátt fyrir að þetta sé karllægt á yfirborðinu er þetta kynlaust í eðli sínu.<br />
                Það er alveg spurning. Indjáninn er náttúrulega fulltrúi fyrir hið villta og óþekkta, náttúruna og eðlið, meðan kúrekinn ræðst inn á þeirra svæði og reynir að eigna sér og koma skipulagi á óreiðuna sem hið óþekkta er í huga hans. Stelpur og konur hafa ekki áhuga á þessum heimi og hafa kannski aldrei skilið hann. Í rauninni fyrirlíta þær hann og þau gildi sem hann stendur fyrir.
              </p>
              <p>
                Stundum er sagt að þetta sé allt saman skilyrt frá fæðingu og stelpur sjái frekar um heimilið með því að æfa sig að klæða dúkkur og elda fyrir fjölskylduna mat. Ef ég væri að höfða til kvenna væri ég sennilega með dúkkur, föt og blóm en það er önnur saga. Það er kvennasaga.<br />
                Hvað með hin kynlausu leikföng leggur og skel sem íslensk börn gleymdu sér með áður en þau fluttu til borgarinnar. Þau eru öll orðin að minjagripum fyrir mörgum áratugum. Alveg eins og þessir tindátar.
              </p>
              <p>
                Já þeir eru úreltir en virka ennþá á þessa kynslóð sem &quot;instant regression&quot; í þroska. þannig eru áhrif myndlistarinnar. Hún hefur áhrif á það sem undir býr.<br />
                Það ríkir mjög sterk nostalgía yfir þessum verkum. Jafnvel sorg.<br />
                Það getur verið tengt dauðanum. Þessir leikir snúast um að drepa og vera drepinn.<br />
                Sem er nátengt kynhvötinni, valdi og stjórn.<br />
                Ég sé þetta líka sem það sem gerist á jaðrinum á dauðarýminu.
              </p>
              <p>
                Hvaða rými er það?<br />
                Það er þar sem ekkert er.
              </p>
              <p>
                Einhvers konar núllpunktur eða hvað?<br />
                Ekki einu sinni það. Þetta er eiginlega líkan af grunnhugmyndum af mörgum myndum. Sérstaklega Hollywoodmyndum. Annars vegar þroska til tólf ára aldurs og hins vegar þegar farið er inn á svæðið sem snýst um átök og dauða. En aldrei er okkur sagt að þetta dauðarými er þar sem ekkert er. Það er líka hægt að hugsa sér að þessar myndir eða inprint séu lyklar inn í heim sem endurtekur sig í sífellu. Alveg eins og kúlubardaginn. Þannig er reglan í Hollywood myndum og þeirri menningu sem er mótuð af henni.
              </p>
              <p>
                Drengurinn verður meðvitaður um kúlurnar við kynþroskann. Þegar eistun síga niður. þá byrjar alveg nýtt tímabil. Hann missir sakleysið. Þegar hann leggur frá sér tindátana breytist hann á vissan hátt í tindáta sjálfur og sektarkenndin hrjúfrar um sig í líkamanum.
              </p>
              <p>
                Rétt eins og hjá stúlkunni. Hún getur auðveldlega breyst í dúkku þegar hún getur sjálf byrjað að fjölga sér við kynþroskann.
              </p>
              <p>
                Vissulega. En maðurinn er sem betur fer ekki vélrænn. Þegar kúlan er á leiðinni á milli þá vakna upp spurningar um fegurð, ást, dauða, guð, líf og svo framvegis. Þess vegna er endurtekningin möguleg.
              </p>
              <p>
                Já þó að goðsagan sé í eðli sínu tímalaus þá erum við öll fangar hennar. Hún endurtekur sig endalaust og maður kemst ekki út úr henni.
              </p>
              <p>
                Ferðalag kúlunnar og þær spurningar sem vakna upp á leiðinni eru tími dauðastundarinnar.
              </p>
            </div>
            <div className="images">
              <div className="image-block">
                <img src="/images/projects/kw/steingrimur/1.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/steingrimur/2.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/steingrimur/3.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/steingrimur/4.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/steingrimur/5.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/steingrimur/6.jpeg" alt="" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'baldvin' && (
          <div>
            <h3 className="artist-title">BALDVIN RINGSTED</h3>
            <div className="artist-text">
              <p>
                b.01.07.&apos;74 Akureyri
              </p>
              <p>
                Nám:<br />
                &apos;00 - &apos;04.....Myndlistaskólinn á Akureyri, Diploma<br />
                &apos;03 - &apos;03.....Lahti polytechnic school of art Finland<br />
                &apos;03 – &apos;04.....A.C.F.A (Ýmis námskeið)<br />
                &apos;94 – &apos;97.....Tónlistaskóli F.Í.H.<br />
                &apos;91 –&apos;93......Verkmenntaskólinn á Akureyri
              </p>
              <p>
                Sýningar:<br />
                Café Karolina Akureyri 2004<br />
                Fuglafjord, Fuglafjörður,Færeyjar 2004<br />
                Útskriftarsýning Myndlistaskólans á Akureyri 2004<br />
                Ketilhús Akureyri 2004<br />
                Deiglan Akureyri   2004<br />
                galleri Svarti kassinn 2004<br />
                Bögglageymslan Akureyri 2003<br />
                Lansbankinn Akureyri 2002, 2003
              </p>
            </div>
            <div className="images">
              <div className="image-block">
                <img src="/images/projects/kw/baldvin/1.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/baldvin/2.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/baldvin/3.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/baldvin/4.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/baldvin/5.jpeg" alt="" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'alda' && (
          <div>
            <h3 className="artist-title">ALDA SIGURÐARDÓTTIR</h3>
            <div className="artist-text">
              <p>Landslagsverk</p>
              <p>
                Hvernig upplifi ég landslag, íslenskt landslag?<br />
                Hvernig hefur þessi upplifun breyst?
              </p>
              <p>
                Ég hef heyrt og lært falleg ljóð sem lýsa og tigna landslagið. Ég hef séð málverk, ljósmyndir og kvikmyndir sem lýsa og tigna landslagið. En mér hefur alltaf þótt það sem ég horfi á út um gluggann vera stórkostlegra en það sem er í gullrammanum yfir sófanum. Ég hef gengið um landslagið og verið í því. Tignað það og sogað til mín áhrif þess. Verið hluti af því stolt og rík.
              </p>
              <p>
                Það sem nú hefur fyrst og fremst áhrif á upplifun mína á landslaginu eru umræður um nýtingu þess. Þar fer mest fyrir stjórnmálamönnum og áhugamönnum um vinnuvélar. Með þeim eru útlendingar sem hafa áhuga á að kaupa ódýrt rafmagn.
              </p>
              <p>
                Í staðinn fyrir ást og aðdáun, virðingu, unað, djúpa hrifningu, sælukennd, lítillæti og stolt finn ég aðeins fyrir sorg, söknuði, reiði, ótta, biturleika, vonleysi, sársauka, dofa og skömm.
              </p>
              <p>
                Alda Sigurðardóttir (1960)<br />
                Ártún 3, 800 Selfoss<br />
                (354) - 482-3925<br />
                e-mail: aldasig@simnet.is<br />
                web: http://www.simnet.is/aldasig
              </p>
            </div>
            <div className="images">
              <div className="image-block">
                <img src="/images/projects/kw/alda/1.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/alda/2.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/alda/3.jpeg" alt="" />
              </div>
            </div>
            <div className="cv-block">
              <h4>CV</h4>
              <p>
                Studies:<br />
                * University of Iceland, BSc. in nursing 1984<br />
                * Icelandic College of Arts and Crafts, Multimedia, 1989-1993<br />
                * Helsinki Art Akademi 1991<br />
                * Courses in design and computer work.
              </p>
              <p>
                Main group exhibitions:<br />
                * 1993, SIXTEEN DAYS, The Living Art Museum, Reykjavík<br />
                * 1995, GULLKISTAN at Laugarvatn, curated and parttook -104 visual artists<br />
                * 1996, TUKT, at a deserted jailhouse in Reykjavík<br />
                * 1997, PORTMYNDIR, in alleys by the main shopping street in Reykjavík<br />
                * 1998, NU, four icelandic artists in Gallery North, Copenhagen, Denmark<br />
                * 1999, LAND, 29 Icelandic female artists in Listasafn Árnesinga in Selfoss. IFor Icelandic wilderness.<br />
                * 2000, SAMRÆÐUR VIð SAFNEIGN, (Dialogue with a collection) The LAM (Living Art Museum).<br />
                * 2000, NORDIC ART EXCHANGE,  Kalmar, Sweden.<br />
                * 2001, FELLINGAR, Curated and parttook - 13 Icelandic women artists in cooperation with the Library of Womens History and the National and University Library.<br />
                * 2001, CAMP, Lejre in Denmark<br />
                * 2002, CAMP Hornafjörður, in Iceland.<br />
                * 2003, KOLONIALEN, Bryggen, Copenhagen.
              </p>
              <p>
                Solo exhibitions:<br />
                * 1994, Portið, Hafnarfjörður<br />
                * 1996, The LAM in Reykjavík<br />
                * 1996, Reykjavík City Theater<br />
                * 1996, Gallery Gulp, a travelling box gallery<br />
                * 1996, Gallery Barmur, a travelling brouch<br />
                * 1998, Gallerí Slunkaríki, Ísafjörður, Iceland<br />
                * 1998, Árnessðsla&apos;s Art Museum, Selfoss, Iceland<br />
                * 1999, Galleri Minimo, Hannover, Germany<br />
                * 2000. Art festival in Seyðisfjörður, Iceland.<br />
                * 2004. Kunstraum Wohnraum, Akureyri, Iceland.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'schoeller' && (
          <div>
            <div className="images">
              <div className="image-block">
                <img src="/images/projects/kw/schoeller/1.jpeg" alt="" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'hrund' && (
          <div>
            <h3 className="artist-title">HRUND JÓHANNESDÓTTIR</h3>
            <div className="artist-text">
              <p>
                Sunnudaginn  2. maí 2004,  klukkan 11-13 opnar HRUND JÓHANNESDÓTTIR sýningu í KUNSTRAUM WOHNRAUM, Ásabyggð 2, 600 Akureyri. Þetta er fjórða einkasýnin Hrundar en hún hefur tekið þátt í á annan tug samsýninga. Hún útskrifaðist frá Listaháskóla Íslands 2002. Hrund vinnur með skúlptúra, myndbönd, innsetningar, gjörninga og hljóðverk svo eitthvað sé nefnt. Í einu myndbandi situr listamaðurinn í lokuðu herbergi með vodkaflösku og kók á klárar þessa drykki á klukkustund. Áhorfandinn getur séð hvað tímanum líður á jlukku sem hangir á veggnum bak við listamanninn. Í verkinu &quot;Málverk&quot; sem Hrund gerði í Finnlandi drakk hún hálfan líter af mjólk blandaðri með bláum matarlit, ældi svo í skál og málaði finnska fánann í tilefni þjóðhátíðardags Finna. Eftirminnelegt er einnig verk sem hún sýndi á Grasrótarsýningunni í Nýlistasafninu síðasta haust. Þar var trékofi sem leit út fyrir að vera sundurskotinn en við nánari athugun mátti sjá að götin 1000 voru eftir borvél. Annars segir Hrund sjálf um verkin sín: &quot;Engar heimspekilehgar útskýringar eða vangaveltur fylgja verkunum mínum, áhorfandinn upplifir verkin á sínum forsendum, ekki mínum.&quot; Það verður því spennandi að sjá hvað hún gerir í heimilisaðstæðunum í KUNSTRAUM WOHNRAUM á Akureyri. Sýningin stendur til 25. júlí og eru allir velkomnir.
              </p>
            </div>
            <div className="images">
              <div className="image-block">
                <img src="/images/projects/kw/hrund/1.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/hrund/2.jpeg" alt="" />
              </div>
            </div>
            <div className="cv-block">
              <h4>HRUND JÓHANNEARDÓTTIR</h4>
              <p>
                2002   Listaháskóli Íslands, B.A. Myndlista, skúlptúrdeild<br />
                1999   Fjölbrautarskólinn í Breiðholti, Stúdentspróf<br />
                1996   Iðnskólinn í Hafnarfirði, útskrifaðist af hönnunarbraut
              </p>
              <p>
                Einkasýiningar:<br />
                2001   Sofandi Þyrnirós, Neðanjarðarlestarstöð (Kaisanemi) Helsinki<br />
                {'       '}Ónefnt, Kælirinn, LHÍ<br />
                2000   Átrúnaðargoðið, Gallerý Nema Hvað
              </p>
              <p>
                Samsýningar:<br />
                2003   Grasrót, Nýlistasafnið<br />
                2002   Vinnustofusýning, Skipholti<br />
                {'       '}Opna galleríið, Menningarnótt<br />
                {'       '}Útskriftarsýning, Listaháskóli Íslands<br />
                2001   Hringferðin, Safnaðarheimilið Blönduósi<br />
                {'       '}BITCH, Gula húsið<br />
                {'       '}Go Shopping, búðartaka listnema, IKEA<br />
                2000   Jólasýing, Gula húsið<br />
                {'       '}Athygli, tilfinning..., Gula húsið<br />
                1998   Unglist, Gallery Geysir<br />
                1996   Útskriftarsýning, Iðnskólinn í Hafnarfirði
              </p>
            </div>
          </div>
        )}

        {activeTab === 'jonlaxdal' && (
          <div>
            <h3 className="artist-title">JÓN LAXDAL HALLDÓRSSON *1950</h3>
            <div className="cv-block">
              <p>
                Einkasýningar (One-Person Exhibitions)<br />
                1982 Rauða húsið<br />
                1983 Rauða húsið<br />
                1987 Nýlistasafnið<br />
                1989 Gamli Lundur<br />
                1991 Laxdalshús<br />
                1993 Boekie Woekie<br />
                1993 Kaffi Karólína<br />
                1994 Listasafnið á Akureyri<br />
                1995 Lundur<br />
                1995 Nýlistasafnið<br />
                1996 Deiglan<br />
                1997 Gallerí +<br />
                1998 Bókasafn Háskólans á Akureyri<br />
                1999 Svartfugl<br />
                2000 Kompan<br />
                2003 Ketilhúsið
              </p>
              <p>
                Helstu samsýningar (Selected Group Exhibitions)<br />
                1984 Glerá<br />
                1986 Glugginn<br />
                1992 Van den Berge<br />
                1993 Van den Berge<br />
                1993 Galerie Valerie<br />
                1993 Exess festival<br />
                1995 Við Hamarinn<br />
                1999 Kjarnaskógur<br />
                2000 Losti 2000<br />
                2003 Ferðafuða
              </p>
              <p>
                Bækur (Books)<br />
                1974 Myrkur í hvítri örk<br />
                1981 Flugur<br />
                1981 Ljóð (niðursoðin)<br />
                1982 Næturljóð<br />
                1983 Stofuljóð<br />
                1989 Prósi<br />
                1989 Verðlaun í ljóðasamkeppni Akureyrarbæjar<br />
                1991 Ljóð (niðursoðin)
              </p>
              <p>
                Verk í opinberri eigu (Works in Public Collections)<br />
                Akureyrarbær<br />
                Húsavíkurbær<br />
                Menntaskóplinn á Akureyri<br />
                Útgerðarðarfélag Akureyrar
              </p>
              <p>Bæjarlistamaður Akureyrar 1993-1994</p>
            </div>
            <div className="images">
              <div className="image-block">
                <img src="/images/projects/kw/jonlaxdal/1.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/jonlaxdal/2.jpeg" alt="" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'margret' && (
          <div>
            <div className="images">
              <div className="image-block">
                <img src="/images/projects/kw/margret/1.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/margret/2.jpeg" alt="" />
              </div>
              <div className="image-block">
                <img src="/images/projects/kw/margret/3.jpeg" alt="" />
              </div>
            </div>
          </div>
        )}
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
        .description p {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 12px;
        }
        .exhibition-history {
          margin-top: 24px;
          margin-bottom: 32px;
        }
        .location-block {
          margin-bottom: 24px;
        }
        .location-block h3 {
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 8px;
        }
        .location-block p {
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 2px;
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
        .tab-content {
          margin-top: 16px;
        }
        .artist-title {
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          border-bottom: 3px solid black;
          padding-bottom: 8px;
          margin: 0 0 16px;
        }
        .exhibition-info {
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 16px;
        }
        .artist-text p {
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 12px;
        }
        .artist-text h4 {
          font-size: 14px;
          font-weight: 600;
          border-bottom: 3px solid black;
          padding-bottom: 8px;
          margin: 24px 0 16px;
        }
        .cv-block {
          margin-top: 16px;
        }
        .cv-block h4 {
          font-size: 14px;
          font-weight: 600;
          border-bottom: 3px solid black;
          padding-bottom: 8px;
          margin: 0 0 16px;
        }
        .cv-block p {
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 12px;
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
      `}</style>
    </Frame>
  )
}

export default KW
