import dglogo from "../assets/dg-logo.svg";
import clublogo from "../assets/sport-team-manager-logo.svg";
import tizenlogo from "../assets/jellyfin-tizen-logo.svg";
import containerlogo from "../assets/ha-cc.svg";

export const projects = [
  {
    slug: "digi-graf",
    title: "Digi Graf",
    description: "Software oplossing voor uitvaartonderneming.",
    tags: ["C#", ".NET", "WPF", "SQL Server"],
    repo: "https://github.com/PatrickSt1991/Uitvaartverzorging-Dossier-Registratie",
    download: "https://github.com/PatrickSt1991/Uitvaartverzorging-Dossier-Registratie/releases/latest",
    manual: "https://patrickst1991.github.io/Uitvaartverzorging-Dossier-Registratie/",
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
    slug: "jellyfin-2-samsung",
    title: "Jellyfin 2 Samsung",
    description: "Applicatie om snel en eenvoudig Jellyfin op je Samsung Smart TV te installeren.",
    tags: ["C#", ".NET", "Tizen", "Samsung TV"],
    repo: "https://github.com/PatrickSt1991/Samsung-Jellyfin-Installer",
    download: "https://github.com/PatrickSt1991/Samsung-Jellyfin-Installer/releases/latest",
    manual: "https://github.com/PatrickSt1991/Samsung-Jellyfin-Installer/blob/master/README.md",
    image: tizenlogo,
    topContent: `
      <blockquote>"Stream je media zonder gedoe, direct op je TV."</blockquote>
      <p>Gebruiksvriendelijke tool die het installeren van de Jellyfin-app op Samsung Smart TV's moeiteloos automatiseert.</p>
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
    description: "Home Assistant integratie — mis nooit meer een containerreiniging.",
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
