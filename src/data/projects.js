import dglogo from "../assets/dg-logo.svg";
import clublogo from "../assets/sport-team-manager-logo.svg";
import tizenlogo from "../assets/jellyfin-tizen-logo.svg";
import containerlogo from "../assets/ha-cc.svg";
import tessellogo from "../assets/tessel-logo.svg";

const projectList = [
  {
    slug: "digi-graf",
    title: "Digi Graf",
    description: "Software oplossing voor uitvaartonderneming.",
    tags: ["C#", ".NET", "WPF", "SQL Server"],
    repo: "https://github.com/PatrickSt1991/Uitvaartverzorging-Dossier-Registratie",
    download: "https://github.com/PatrickSt1991/Uitvaartverzorging-Dossier-Registratie/releases/latest",
    manual: "https://patrickst1991.github.io/Uitvaartverzorging-Dossier-Registratie/",
    link: "https://digigraf.madebypatrick.nl",
    image: dglogo,
    topContent: `
      <blockquote>"Een revolutionaire oplossing voor de uitvaartbranche."</blockquote>
      <p>DigiGraf is een op maat gemaakte applicatie die speciaal is ontwikkeld voor uitvaartondernemingen.</p>
    `,
    content: `
      <p class="mb-4">Deze gebruiksvriendelijke software stelt uitvaartverzorgers in staat om alle aspecten van hun werkzaamheden efficiënt en digitaal te beheren.</p>
      <p class="font-semibold text-slate-200 mb-2">Volledig digitaal dossierbeheer</p>
      <ul class="list-disc pl-6 mb-4 space-y-1">
        <li>Beheer alle gegevens van overledenen</li>
        <li>Verzekeringen</li>
        <li>Opbaringen</li>
        <li>Uitvaarten</li>
        <li>Condoleances</li>
        <li>Asbestemmingen</li>
      </ul>
      <p class="mb-3">Agenda en Notificaties: Krijg inzicht in aankomende uitvaarten en ontvang meldingen van overledenen van één jaar geleden, afgestemd op de verantwoordelijke uitvaartverzorger.</p>
      <p class="mb-3">Beheerfunctionaliteiten: Configureer eenvoudig medewerkers, leveranciers, locaties en andere essentiële gegevens via het beheermenu.</p>
      <p class="mb-3">Zoek- en Filteropties: Vind snel dossiers op basis van uitvaartnummer, achternaam of geboortedatum.</p>
      <p class="mb-3">Documentbeheer: Sla documenten zoals rouwbrieven, facturen en andere relevante bestanden op binnen het bijbehorende dossier.</p>
      <p class="mb-3">Kostenbegroting: Stel nauwkeurige begrotingen op voor uitvaarten, inclusief prijscomponenten en leveranciersinformatie.</p>
    `,
  },
  {
    slug: "club-info-board",
    title: "Club Info Board",
    description: "Real-time informatie over wedstrijden, uitslagen en wedstrijd details.",
    tags: ["Vue 3", "WordPress", "Sportlink API"],
    repo: "https://github.com/PatrickSt1991/Sportlink.Club.Info.Viewer",
    download: "https://github.com/PatrickSt1991/Sportlink.Club.Info.Viewer/releases/latest",
    manual: "https://patrickst1991.github.io/Sportlink.Club.Info.Viewer/",
    link: "https://clubinfoboard.madebypatrick.nl",
    image: clublogo,
    topContent: `
      <blockquote>"Met één blik op het scherm weet iedereen in de club wat er speelt"</blockquote>
      <p>Toon eenvoudig alle belangrijke clubinformatie op een groot scherm in de kantine, kleedkamer of bestuurskamer.</p>
    `,
    content: `
      <p class="mb-4">Het bespaart tijd, zorgt voor duidelijkheid en brengt leden dichter bij elkaar door altijd actuele informatie te tonen. Een ideale oplossing voor sportverenigingen die hun communicatie naar een hoger niveau willen tillen.</p>
      <ul class="list-disc pl-6 mb-4 space-y-1">
        <li>Overzicht van <strong>komende wedstrijden</strong></li>
        <li>Duidelijke weergave van <strong>uitslagen</strong></li>
        <li>Overzichtelijke <strong>kleedkamer- en veldgegevens</strong></li>
        <li>Geschikt voor gebruik op TV-schermen en displays in de club</li>
      </ul>
    `,
  },
  {
    slug: "tessel",
    title: "Tessel",
    description: "Mediaspeler voor Samsung Tizen TV's: USB, SMB, DLNA, WebDAV en netwerkstreams, met ondertitels die wél werken.",
    tags: ["JavaScript", "Tizen", "Samsung TV", "SMB", "DLNA", "WebDAV"],
    repo: "https://github.com/PatrickSt1991/tessel-tizen-tv",
    download: "https://github.com/PatrickSt1991/tessel-tizen-tv/releases/latest",
    manual: "https://github.com/PatrickSt1991/tessel-tizen-tv/blob/main/README.md",
    link: "https://tessel.madebypatrick.nl/",
    image: tessellogo,
    topContent: `
      <blockquote>"Je NAS, USB-stick of stream rechtstreeks op je Samsung TV, zonder extra kastje."</blockquote>
      <p>Tessel is een mediaspeler voor Samsung Tizen TV's vanaf 2017. De app draait op Samsungs eigen AVPlay, dus video wordt hardwareversneld afgespeeld en de afstandsbediening werkt zoals je gewend bent.</p>
    `,
    content: `
      <p class="mb-4">Blader door een USB-stick, een SMB-share op je NAS, een DLNA-server of een WebDAV-map en speel af wat de TV kan decoderen: H.264, HEVC en VP9, met AAC, MP3, AC3 en EAC3 als audio. HLS, DASH, RTSP en RTMP-streams spelen ook rechtstreeks.</p>
      <p class="font-semibold text-slate-200 mb-2">Wat Tessel anders maakt</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Ondertitels die echt in beeld komen:</strong> SRT, VTT, ASS en SAMI naast het bestand of ingebed in MP4 en MKV, met instelbaar lettertype, grootte, kleur en positie.</li>
        <li><strong>Alle servers op één tegel:</strong> SMB- en WebDAV-servers die je zelf instelt plus de DLNA-servers die Tessel op het netwerk vindt, zoals Plex, Jellyfin of de mediaserver van je NAS.</li>
        <li><strong>Verder kijken waar je was:</strong> een half bekeken bestand vraagt of je door wilt gaan, mappen tonen wat al gezien is en de cijfertoetsen springen in stappen van een tiende.</li>
        <li><strong>Muziek, foto's en afspeellijsten:</strong> een mini-speler met albumhoes en tags, een fotoviewer met diashow en M3U- of PLS-lijsten voor IPTV-kanalen.</li>
        <li><strong>Casten vanaf je telefoon:</strong> scan één keer een QR-code, plak een link en de TV speelt hem af. Geen account, geen app.</li>
        <li><strong>Transcode-server voor de rest:</strong> DivX, DTS en TrueHD, of echte 5.1 naar je soundbar, via een optionele Docker-container op je NAS of pc.</li>
        <li><strong>Jij bepaalt het netwerkverkeer:</strong> alles toestaan, alleen je eigen servers of helemaal niets voor een TV die alleen USB mag lezen.</li>
      </ul>
      <p class="mb-3">Installeren gaat het makkelijkst met <a href="/projects/apps-2-samsung">Apps 2 Samsung</a>: kies het kanaal Tizen Community en daarna Tessel. De app wordt dan voor je gesigneerd en op de TV gezet. Handmatig kan ook met een eigen distributor-certificaat en <code>sdb install</code>.</p>
      <p class="mb-3">Tessel heette tot versie 1.7.0 VLC TV. Het is een onafhankelijk project dat geen libVLC gebruikt en niet aan VideoLAN verbonden is.</p>
    `,
  },
  {
    slug: "apps-2-samsung",
    title: "Apps 2 Samsung",
    description: "Applicatie om snel en eenvoudig apps op je Samsung Smart TV te installeren.",
    tags: ["C#", ".NET", "Tizen", "Samsung TV", "WGT"],
    repo: "https://github.com/Apps2Samsung/Apps2Samsung",
    download: "https://github.com/Apps2Samsung/Apps2Samsung/releases/latest",
    manual: "https://github.com/Apps2Samsung/Apps2Samsung/blob/master/README.md",
    image: tizenlogo,
    topContent: `
      <blockquote>"Installeer je apps zonder gedoe, direct op je TV."</blockquote>
      <p>Gebruiksvriendelijke tool die het installeren van apps op Samsung Smart TV's moeiteloos automatiseert.</p>
    `,
    content: `
      <p class="mb-4">Met slechts enkele klikken ontdek je automatisch je TV's in het netwerk, kies je een release en versie, en laat je de rest over aan de installer.</p>
      <p class="mb-4">Voor Tizen 7 en hoger verloopt het als vanzelf: log in met je Samsung-account voor certificaatbeheer om de installatie veilig te laten verlopen.</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Volledig gestroomlijnd installatieproces:</strong> van detectie tot installatie, alles geautomatiseerd.</li>
        <li><strong>Tizen 7+ ondersteuning:</strong> certificaatbeheer via Samsung-login is geïntegreerd.</li>
        <li><strong>Modern en degelijk:</strong> frisse interface, extra functies en voortdurende verbeteringen.</li>
        <li><strong>Vooraf configureren:</strong> stel server- en gebruikersinstellingen alvast in zodat je na installatie direct aan de slag kunt.</li>
      </ul>
    `,
  },
  {
    slug: "container-cleaning",
    title: "HA Container Reiniging",
    description: "Home Assistant integratie: mis nooit meer een containerreiniging.",
    tags: ["Python", "Home Assistant", "Integration"],
    repo: "https://github.com/PatrickSt1991/ha-afvalcontainer-cleaning",
    download: "https://github.com/PatrickSt1991/ha-afvalcontainer-cleaning/releases/latest",
    manual: "https://github.com/PatrickSt1991/ha-afvalcontainer-cleaning/blob/master/README.md",
    image: containerlogo,
    topContent: `
      <blockquote>"Altijd snel en duidelijk inzicht in wanneer uw container wordt schoongemaakt."</blockquote>
    `,
    content: `
      <p class="mb-4">Wilt u weten wanneer uw containers worden gereinigd? Met deze integratie voegt u sensoren toe aan Home Assistant die de reinigingsdiensten bijhouden, zodat u nooit meer een schoonmaakbeurt mist.</p>
    `,
  },
];

// Tessel en Apps 2 Samsung voorop: die twee vormen samen het uitgelichte
// blok op de homepage en staan daardoor ook bovenaan de Projecten-pagina.
const order = [
  "tessel",
  "apps-2-samsung",
  "club-info-board",
  "digi-graf",
  "container-cleaning",
];

export const projects = [...projectList].sort(
  (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug)
);

// De projecten in het uitgelichte blok op de homepage. Twee kaarten die
// samen de volle breedte vullen, in deze volgorde.
const featuredSlugs = ["tessel", "apps-2-samsung"];
export const featured = featuredSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter(Boolean);
