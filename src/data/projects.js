import dglogo from "../assets/digigraf-logo.png";
import clublogo from "../assets/sport-team-manager-logo.svg";
import tizenlogo from "../assets/jellyfin-tizen-logo.svg";

export const projects = [
  {
    slug: "digi-graf",
    title: "Digi Graf",
    description: "Software oplossing voor uitvaartonderneming.",
    repo: "https://github.com/PatrickSt1991/Uitvaartverzorging-Dossier-Registratie",
    download: "https://github.com/PatrickSt1991/Uitvaartverzorging-Dossier-Registratie/releases/latest",
    manual: "https://patrickst1991.github.io/Uitvaartverzorging-Dossier-Registratie/",
    image: dglogo,
    topContent: `
      <h2 class="text-2xl font-bold mb-4">DigiGraf</h2>
      <blockquote class="italic text-slate-400 mb-4">"Een revolutionaire oplossing voor de uitvaartbranche."</blockquote>
      <p class="mb-4">DigiGraf is een op maat gemaakte applicatie die speciaal is ontwikkeld voor uitvaartondernemingen.</p>
    `,
    content: `
      <p class="decoration-2 mb-2">Deze gebruiksvriendelijke software stelt uitvaartverzorgers in staat om alle aspecten van hun werkzaamheden efficiënt en digitaal te beheren.<p/>
      <p class="italic underline decoration-2">Volledig digitaal dossierbeheer</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Beheer alle gegevens van overledenen</li>
        <li>Verzekeringen</li>
        <li>Opbaringen</li>
        <li>Uitvaarten</li>
        <li>Condoleances</li>
        <li>Asbestemmingen</li>
      </ul>
      <p class="italic decoration-2 mb-4">Agenda en Notificaties: Krijg inzicht in aankomende uitvaarten en ontvang meldingen van overledenen van één jaar geleden, afgestemd op de verantwoordelijke uitvaartverzorger.</p>
      <p class="italic decoration-2 mb-4">Beheerfunctionaliteiten: Configureer eenvoudig medewerkers, leveranciers, locaties en andere essentiële gegevens via het beheermenu.</p>
      <p class="italic decoration-2 mb-4">Zoek- en Filteropties: Vind snel dossiers op basis van uitvaartnummer, achternaam of geboortedatum.</p>
      <p class="italic decoration-2 mb-4">Documentbeheer: Sla documenten zoals rouwbrieven, facturen en andere relevante bestanden op binnen het bijbehorende dossier.</p>
      <p class="italic decoration-2 mb-4">Kostenbegroting: Stel nauwkeurige begrotingen op voor uitvaarten, inclusief prijscomponenten en leveranciersinformatie.</p>
    `,
  },
  {
    slug: "club-info-board",
    title: "Club Info Board",
    description: "Real-time informatie over wedstrijden, uitslagen en wedstrijd details.",
    repo: "https://github.com/PatrickSt1991/Sportlink.Club.Info.Viewer",
    download: "https://github.com/PatrickSt1991/Sportlink.Club.Info.Viewer/releases/latest",
    manual: "https://patrickst1991.github.io/Sportlink.Club.Info.Viewer/",
    image: clublogo,
    link: "https://clubinfoboard.madebypatrick.nl",
    topContent: `
      <h2 class="text-2xl font-bold mb-4">Club Info Board</h2>
      <blockquote class="italic text-slate-400 mb-4">"Met één blik op het scherm weet iedereen in de club wat er speelt"</blockquote>
      <p class="mb-4">Toon eenvoudig alle belangrijke clubinformatie op een groot scherm in de kantine, kleedkamer of bestuurskamer.</p>
    `,
    content: `
      <p class="mb-4">Het bespaart tijd, zorgt voor duidelijkheid en brengt leden dichter bij elkaar door altijd actuele informatie te tonen. Een ideale oplossing voor sportverenigingen die hun communicatie naar een hoger niveau willen tillen.</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Overzicht van <b>komende wedstrijden</b></li>
        <li>Duidelijke weergave van <b>uitslagen</b></li>
        <li>Overzichtelijke <b>Kleedkamer- en veldgegevens</b></li>
        <li>Geschikt voor gebruik op TV-schermen en displays in de club</li>
      </ul>
    `,
  },
  {
    slug: "jellyfin-2-samsung",
    title: "Jellyfin 2 Samsung",
    description: "Applicatie om snel en eenvouding Jellyfin op je Samsung Smart TV te installeren.",
    repo: "https://github.com/PatrickSt1991/Samsung-Jellyfin-Installer",
    download: "https://github.com/PatrickSt1991/Samsung-Jellyfin-Installer/releases/latest",
    manual: "https://github.com/PatrickSt1991/Samsung-Jellyfin-Installer/blob/master/README.md",
    image: tizenlogo,
    topContent: `
      <h2 class="text-2xl font-bold mb-4">Jellyfin 2 Samsung</h2>
      <blockquote class="italic text-slate-400 mb-4">"Stream je media zonder gedoe, direct op je TV."</blockquote>
      <p class="mb-4">Gebruiksvriendelijke tool die het installeren van de Jellyfin-app op Samsung Smart TV's moeiteloos automatiseert.</p>
    `,
    content: `
    <p>Met slechts enkele klikken ontdek je automatisch je TV’s in het netwerk, kies je een release en versie, en laat je de rest over aan de installer.<br/><br/>
    Voor Tizen 7 en hoger verloopt het als vanzelf: log in met je Samsung-account voor certificaatbeheer om de installatie veilig te laten verlopen.<br/>
    <br/></p>
      <ul class="list-disc pl-6 mb-4">
        <li><b>Volledig gestroomlijnd installatieproces:</b> van detectie tot installatie, alles geautomatiseerd.</li>
        <li><b>Tizen 7+ ondersteuning:</b> certificaatbeheer via Samsung-login is geïntegreerd.</li>
        <li><b>Modern en degelijk:</b> frisse interface, extra functies en voortdurende verbeteringen.</li>
        <li><b>Vooraf configureren:</b> stel server- en gebruikersinstellingen alvast in zodat je na installatie direct aan de slag kunt.</li>
      </ul>
    `,
  },
];


