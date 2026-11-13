/* =========================================================
   Romeni di Pordenone — site script
   ---------------------------------------------------------
   EDIT HERE: contact details, events and all texts (RO/IT).
   Leave a contact field empty ("") to hide it on the page.
   ========================================================= */

const CONFIG = {
  facebookUrl: "https://www.facebook.com/profile.php?id=100064533109022",
  email: "romenidipordenone@libero.it",
  phone: "+39 328 312 9568",
  whatsapp: "393283129568", // international format, digits only ("" to hide)
};

/* Upcoming events. Past events disappear automatically the day after.
   date: "YYYY-MM-DD". Every text has a Romanian (ro) and Italian (it) version.
   Optional fields: edition, tagline, time, place, mapUrl, free, program, note, support. */
const EVENTS = [
  {
    date: "2026-11-22",
    time: "10:00 – 17:30",
    title: { ro: "Succo della Vita", it: "Succo della Vita" },
    edition: {
      ro: "Ediția I · împreună cu asociația Tridimensioni",
      it: "1ª edizione · insieme all'associazione Tridimensioni",
    },
    tagline: {
      ro: "„Multe culori, același gust. Multe inimi, același scop.”",
      it: "«Molti colori, lo stesso gusto. Molti cuori, lo stesso scopo.»",
    },
    text: {
      ro: "O zi de toamnă româno-italiană: ateliere pentru copii, suc de mere făcut pe loc, muzică și dansuri populare, prezentări de carte și un bufet cu donație liberă pentru caritate.",
      it: "Una giornata d'autunno italo-romena: laboratori per bambini, succo di mele fatto sul momento, musica e danze popolari, presentazioni di libri e un buffet a offerta libera per beneficenza.",
    },
    place: "Via Pordenone 32, Tamai di Brugnera (PN)",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Via%20Pordenone%2032%2C%20Tamai%20di%20Brugnera",
    free: true,
    program: [
      {
        time: "10:00",
        ro: "Laborator deschis: producția sucului de mere · laborator creativ cu materiale reciclate",
        it: "Laboratorio aperto: produzione del succo di mele · laboratorio creativo con materiali riciclati",
      },
      {
        time: "11:30",
        ro: "Premiere simbolică pentru toți copiii participanți („Micul ecologist – artistul toamnei”) · recital al cântăreților",
        it: "Premiazione simbolica per tutti i bambini partecipanti («Il piccolo ecologista – l'artista dell'autunno») · esibizione cantanti",
      },
      {
        time: "12:30",
        ro: "Bufet româno-italian cu donație liberă; încasările merg în scopuri caritabile",
        it: "Buffet rumeno-italiano a offerta libera; il ricavato sarà devoluto in beneficenza",
      },
      {
        time: "14:00",
        ro: "Saluturi instituționale și intervenții ale autorităților",
        it: "Saluti istituzionali e interventi delle autorità",
      },
      {
        time: "14:30",
        ro: "Prezentarea cărților autoarelor Daniela Marchetti și Carina Cesa Sava",
        it: "Presentazione dei libri di Daniela Marchetti e Carina Cesa Sava",
      },
      { time: "15:00", ro: "Recitalul soliștilor vocali", it: "Esibizione dei solisti vocali" },
      { time: "16:00", ro: "Spectacolul corurilor Miorița și Flori de Dor", it: "Spettacolo dei cori Miorița e Flori de Dor" },
      { time: "16:20", ro: "Spectacolul ansamblului de dansuri Voie Bună", it: "Spettacolo del gruppo di danza Voie Bună" },
      {
        time: "16:40",
        ro: "Marele recital al corurilor Miorița și Flori de Dor, împreună cu soliștii",
        it: "Grande esibizione dei cori Miorița e Flori de Dor insieme ai solisti",
      },
      {
        time: "17:30",
        ro: "Încheiere, mulțumiri și tradiționala castagnată cu vin fiert",
        it: "Chiusura, ringraziamenti e tradizionale castagnata con vin brulé",
      },
    ],
    note: {
      ro: "Pe tot parcursul zilei: expoziție de obiecte artizanale din lemn, italiene și românești. Bufetul nu este potrivit pentru persoanele cu alergii sau intoleranțe alimentare.",
      it: "Durante tutta la giornata: esposizione di oggetti artigianali in legno italo-romeni. Il buffet non è pensato per persone con allergie o intolleranze alimentari.",
    },
    support: {
      ro: "Cu contribuția Consiliului Regional FVG și cu patronajul Consulatului General al României la Trieste și al ANCI FVG.",
      it: "Con il contributo del Consiglio Regionale FVG e il patrocinio del Consolato Generale di Romania a Trieste e di ANCI FVG.",
    },
  },
];

const I18N = {
  ro: {
    "a11y.skip": "Sari la conținut",
    "a11y.menu": "Meniu",
    "brand.tag": "Asociație culturală recreativă",
    "nav.about": "Despre noi",
    "nav.activities": "Activități",
    "nav.events": "Evenimente",
    "nav.join": "Implică-te",
    "nav.contact": "Contact",

    "hero.kicker": "Cultură · Tradiție · Integrare",
    "hero.title": "Un colț de acasă, în inima Friulului.",
    "hero.text": "Asociația Culturală Recreativă Romeni di Pordenone (ARP) aduce împreună românii din Pordenone și din provincie. Păstrăm vii cântecul, portul și tradițiile românești și construim punți de prietenie cu comunitatea italiană.",
    "hero.cta1": "Urmărește-ne pe Facebook",
    "hero.cta2": "Scrie-ne",
    "hero.next": "Următorul eveniment",

    "about.kicker": "Despre noi",
    "about.title": "Cultură, tradiție și integrare",
    "about.quote": "„Românii au o cultură vastă, rădăcini tradiționale, valori la care ținem. A locui în Italia înseamnă și integrare!”",
    "about.p1": "Suntem o asociație culturală și recreativă a comunității românești din provincia Pordenone. Organizăm festivaluri, spectacole și ateliere, participăm la evenimentele multiculturale din regiune și colaborăm cu alte asociații culturale și cu instituțiile locale.",
    "about.p2": "Activitățile noastre sunt deschise tuturor: românilor, italienilor și oricui vrea să descopere frumusețea culturii românești.",
    "v1.title": "Tradiții vii",
    "v1.text": "Cântec, dans și port popular: ducem mai departe ce am primit de acasă, pe scenele din Friuli.",
    "v2.title": "Punți între culturi",
    "v2.text": "„Multe culori, același gust. Multe inimi, același scop.” Credem în schimbul de cultură dintre România și Italia.",
    "v3.title": "Solidaritate",
    "v3.text": "Ne sprijinim unii pe alții, iar donațiile strânse la evenimentele noastre merg în scopuri caritabile.",

    "act.kicker": "Ce facem",
    "act.title": "Activitățile noastre",
    "a1.title": "Festivaluri",
    "a1.text": "Organizăm festivaluri dedicate culturii românești, cu muzică, dansuri, poezie, artă, cărți și gastronomie, precum Festivalul FOSAR de la Villa Varda.",
    "a2.title": "Corul Flori de Dor",
    "a2.text": "Spectacolul și corul asociației duc cântecul popular românesc pe scenele din Friuli, alături de soliști și ansambluri folclorice.",
    "a3.title": "Pentru copii",
    "a3.text": "Ateliere creative cu materiale reciclate și mici premii pentru toți participanții, ca cei mici să descopere tradițiile jucându-se.",
    "a4.title": "Evenimente multiculturale",
    "a4.text": "Reprezentăm România la sărbători precum Jubileul Migranților din Pordenone sau Borgo Mondo din Udine.",
    "a5.title": "Gastronomie",
    "a5.text": "Bufete româno-italiene, mici și preparate tradiționale: bucătăria noastră, împărțită cu toată lumea.",
    "a6.title": "Cultură și cărți",
    "a6.text": "Prezentări de carte, expoziții de artă și artizanat, întâlniri cu scriitori și artiști români din Italia.",

    "ev.kicker": "Calendar",
    "ev.title": "Evenimente viitoare",
    "ev.note": "Noutățile și fotografiile de la evenimente apar pe pagina noastră de Facebook.",
    "ev.noteLink": "Vezi pe Facebook →",
    "ev.empty": "Pregătim următoarele evenimente. Urmărește-ne pe Facebook ca să afli primul!",
    "ev.free": "Intrare liberă",
    "ev.map": "Vezi pe hartă",
    "ev.program": "Programul zilei",

    "past.title": "Din activitatea noastră",
    "p1.date": "13 septembrie 2025",
    "p1.title": "Festivalul FOSAR",
    "p1.text": "Prima ediție a festivalului dedicat Anului Cultural România–Italia: muzică și dansuri populare, poezie, artă, cărți și gastronomie, realizat împreună cu mai multe asociații culturale, în prezența Consulului General al României la Trieste.",
    "p2.date": "4 octombrie 2025",
    "p2.title": "Jubileul Migranților",
    "p2.text": "Am reprezentat România cu cântec, dans și port popular, defilând pe străzile orașului alături de celelalte comunități, până în Piazzetta Calderari.",
    "p3.date": "27 iulie 2024",
    "p3.title": "Borgo Mondo",
    "p3.text": "Spectacolul Flori de Dor al asociației a urcat pe scena marii sărbători multiculturale din Udine.",

    "join.kicker": "Implică-te",
    "join.title": "Comunitatea crește cu fiecare om nou.",
    "join.text": "Fie că abia ai ajuns în provincia Pordenone, fie că locuiești aici de ani buni, ușa noastră e deschisă. Vino la un eveniment, adu o idee sau dă o mână de ajutor.",
    "j1.title": "Participă",
    "j1.text": "Vino la festivaluri și sărbători, singur sau cu familia. Intrarea este de obicei liberă.",
    "j2.title": "Cântă sau dansează cu noi",
    "j2.text": "Ai voce sau îți place dansul popular? Scrie-ne și urcă pe scenă alături de noi.",
    "j3.title": "Colaborează",
    "j3.text": "Ești o asociație, o firmă sau o instituție? Hai să construim împreună următorul eveniment.",

    "contact.kicker": "Contact",
    "contact.title": "Hai să vorbim",
    "contact.text": "Ai o întrebare, vrei să participi sau să colaborezi cu noi? Scrie-ne pe email, pe WhatsApp sau pe Facebook. Îți răspundem cu drag, în română sau în italiană.",
    "contact.email": "Email",
    "contact.phone": "Telefon",
    "contact.where": "Unde",
    "contact.address": "Aviano (PN), 33081 · activități în toată provincia Pordenone",

    "footer.name": "Asociația Culturală Recreativă „Romeni di Pordenone”",
    "footer.tag": "La comunità romena di Pordenone · Comunitatea românilor din Pordenone",
  },

  it: {
    "a11y.skip": "Vai al contenuto",
    "a11y.menu": "Menu",
    "brand.tag": "Associazione culturale ricreativa",
    "nav.about": "Chi siamo",
    "nav.activities": "Attività",
    "nav.events": "Eventi",
    "nav.join": "Partecipa",
    "nav.contact": "Contatti",

    "hero.kicker": "Cultura · Tradizione · Integrazione",
    "hero.title": "Un angolo di casa, nel cuore del Friuli.",
    "hero.text": "L'Associazione Culturale Ricreativa Romeni di Pordenone (ARP) riunisce i romeni di Pordenone e della provincia. Teniamo vivi il canto, il costume e le tradizioni romene e costruiamo ponti di amicizia con la comunità italiana.",
    "hero.cta1": "Seguici su Facebook",
    "hero.cta2": "Scrivici",
    "hero.next": "Prossimo evento",

    "about.kicker": "Chi siamo",
    "about.title": "Cultura, tradizione e integrazione",
    "about.quote": "«I romeni hanno una cultura vasta, radici tradizionali e valori a cui teniamo. Vivere in Italia significa anche integrazione!»",
    "about.p1": "Siamo un'associazione culturale e ricreativa della comunità romena della provincia di Pordenone. Organizziamo festival, spettacoli e laboratori, partecipiamo agli eventi multiculturali della regione e collaboriamo con altre associazioni culturali e con le istituzioni locali.",
    "about.p2": "Le nostre attività sono aperte a tutti: romeni, italiani e chiunque voglia scoprire la bellezza della cultura romena.",
    "v1.title": "Tradizioni vive",
    "v1.text": "Canto, danza e costume popolare: portiamo avanti ciò che abbiamo ricevuto da casa, sui palchi del Friuli.",
    "v2.title": "Ponti tra culture",
    "v2.text": "«Molti colori, lo stesso gusto. Molti cuori, lo stesso scopo.» Crediamo nello scambio culturale tra Romania e Italia.",
    "v3.title": "Solidarietà",
    "v3.text": "Ci sosteniamo a vicenda e le offerte raccolte durante i nostri eventi sono devolute in beneficenza.",

    "act.kicker": "Cosa facciamo",
    "act.title": "Le nostre attività",
    "a1.title": "Festival",
    "a1.text": "Organizziamo festival dedicati alla cultura romena, con musica, danze, poesia, arte, libri e gastronomia, come il Festival FOSAR a Villa Varda.",
    "a2.title": "Il coro Flori de Dor",
    "a2.text": "Lo spettacolo e il coro dell'associazione portano il canto popolare romeno sui palchi del Friuli, insieme a solisti e gruppi folcloristici.",
    "a3.title": "Per i bambini",
    "a3.text": "Laboratori creativi con materiali riciclati e piccoli premi per tutti i partecipanti, perché i più piccoli scoprano le tradizioni giocando.",
    "a4.title": "Eventi multiculturali",
    "a4.text": "Rappresentiamo la Romania in feste come il Giubileo dei Migranti a Pordenone o Borgo Mondo a Udine.",
    "a5.title": "Gastronomia",
    "a5.text": "Buffet rumeno-italiani, mititei e piatti tradizionali: la nostra cucina, condivisa con tutti.",
    "a6.title": "Cultura e libri",
    "a6.text": "Presentazioni di libri, mostre d'arte e artigianato, incontri con scrittori e artisti romeni in Italia.",

    "ev.kicker": "Calendario",
    "ev.title": "Prossimi eventi",
    "ev.note": "Novità e foto degli eventi vengono pubblicate sulla nostra pagina Facebook.",
    "ev.noteLink": "Vedi su Facebook →",
    "ev.empty": "Stiamo preparando i prossimi eventi. Seguici su Facebook per scoprirli per primo!",
    "ev.free": "Ingresso libero",
    "ev.map": "Vedi sulla mappa",
    "ev.program": "Programma della giornata",

    "past.title": "Dalla nostra attività",
    "p1.date": "13 settembre 2025",
    "p1.title": "Festival FOSAR",
    "p1.text": "La prima edizione del festival dedicato all'Anno Culturale Romania–Italia: musica e danze popolari, poesia, arte, libri e gastronomia, realizzato insieme a diverse associazioni culturali, alla presenza della Console Generale di Romania a Trieste.",
    "p2.date": "4 ottobre 2025",
    "p2.title": "Giubileo dei Migranti",
    "p2.text": "Abbiamo rappresentato la Romania con canti, danze e costumi popolari, sfilando per le vie della città insieme alle altre comunità fino a Piazzetta Calderari.",
    "p3.date": "27 luglio 2024",
    "p3.title": "Borgo Mondo",
    "p3.text": "Lo spettacolo Flori de Dor dell'associazione è salito sul palco della grande festa multiculturale di Udine.",

    "join.kicker": "Partecipa",
    "join.title": "La comunità cresce con ogni persona nuova.",
    "join.text": "Che tu sia appena arrivato in provincia di Pordenone o che ci viva da anni, la nostra porta è aperta. Vieni a un evento, porta un'idea o dai una mano.",
    "j1.title": "Partecipa",
    "j1.text": "Vieni ai festival e alle feste, da solo o con la famiglia. L'ingresso è di solito libero.",
    "j2.title": "Canta o balla con noi",
    "j2.text": "Hai una bella voce o ami la danza popolare? Scrivici e sali sul palco insieme a noi.",
    "j3.title": "Collabora",
    "j3.text": "Sei un'associazione, un'azienda o un ente? Costruiamo insieme il prossimo evento.",

    "contact.kicker": "Contatti",
    "contact.title": "Parliamone",
    "contact.text": "Hai una domanda, vuoi partecipare o collaborare con noi? Scrivici via email, su WhatsApp o su Facebook. Ti rispondiamo volentieri, in romeno o in italiano.",
    "contact.email": "Email",
    "contact.phone": "Telefono",
    "contact.where": "Dove",
    "contact.address": "Aviano (PN), 33081 · attività in tutta la provincia di Pordenone",

    "footer.name": "Associazione Culturale Ricreativa «Romeni di Pordenone»",
    "footer.tag": "La comunità romena di Pordenone · Comunitatea românilor din Pordenone",
  },
};

/* ========================================================= */

const LANG_KEY = "rdp-lang";
const LANGS = ["it", "ro"];

const ICONS = {
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm1-13h-2v6l5 3 1-1.7-4-2.3V7Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/></svg>',
};

function storedLang() {
  try {
    return localStorage.getItem(LANG_KEY);
  } catch {
    return null;
  }
}

// Italian first; a visitor's own choice (RO/IT button) is remembered.
function initialLang() {
  const saved = storedLang();
  return LANGS.includes(saved) ? saved : "it";
}

function upcomingEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return EVENTS
    .map((e) => ({ ...e, d: new Date(e.date + "T00:00:00") }))
    .filter((e) => e.d >= today)
    .sort((a, b) => a.d - b.d);
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function renderEvents(lang) {
  const list = document.getElementById("events-list");
  if (!list) return;
  const t = I18N[lang];
  const events = upcomingEvents();
  list.replaceChildren();

  if (!events.length) {
    list.append(el("li", "events-empty", t["ev.empty"]));
    return;
  }

  const locale = lang === "it" ? "it-IT" : "ro-RO";
  const month = new Intl.DateTimeFormat(locale, { month: "short" });
  const weekday = new Intl.DateTimeFormat(locale, { weekday: "long" });

  events.forEach((e, i) => {
    const li = el("li", "event");

    // Date block
    const side = el("div", "event-side");
    const date = el("time", "event-date");
    date.dateTime = e.date;
    date.append(
      el("span", "event-weekday", weekday.format(e.d)),
      el("span", "event-day", String(e.d.getDate())),
      el("span", "event-month", month.format(e.d).replace(".", "")),
      el("span", "event-year", String(e.d.getFullYear()))
    );
    side.append(date);
    if (e.free) side.append(el("span", "badge", t["ev.free"]));

    // Main column
    const main = el("div", "event-main");
    if (e.edition) main.append(el("p", "event-edition", e.edition[lang]));
    main.append(el("h3", "event-title", e.title[lang]));
    if (e.tagline) main.append(el("p", "event-tagline", e.tagline[lang]));
    if (e.text) main.append(el("p", "event-text", e.text[lang]));

    const meta = el("ul", "event-meta");
    if (e.time) {
      const li1 = el("li");
      li1.innerHTML = ICONS.clock;
      li1.append(el("span", null, e.time));
      meta.append(li1);
    }
    if (e.place) {
      const li2 = el("li");
      li2.innerHTML = ICONS.pin;
      const wrap = el("span", null, e.place + " ");
      if (e.mapUrl) {
        const a = el("a", "event-map", t["ev.map"]);
        a.href = e.mapUrl;
        a.target = "_blank";
        a.rel = "noopener";
        wrap.append(a);
      }
      li2.append(wrap);
      meta.append(li2);
    }
    if (meta.children.length) main.append(meta);

    if (e.program && e.program.length) {
      const details = el("details", "program");
      if (i === 0) details.open = true;
      details.append(el("summary", null, t["ev.program"]));
      const ol = el("ol", "program-list");
      e.program.forEach((p) => {
        const row = el("li");
        row.append(el("span", "program-time", p.time), el("span", "program-what", p[lang]));
        ol.append(row);
      });
      details.append(ol);
      if (e.note) details.append(el("p", "program-note", e.note[lang]));
      main.append(details);
    }

    if (e.support) main.append(el("p", "event-support", e.support[lang]));

    li.append(side, main);
    list.append(li);
  });
}

function renderNextEvent(lang) {
  const link = document.querySelector(".next-event");
  if (!link) return;
  const next = upcomingEvents()[0];
  if (!next) {
    link.hidden = true;
    return;
  }
  const locale = lang === "it" ? "it-IT" : "ro-RO";
  const day = new Intl.DateTimeFormat(locale, { day: "numeric", month: "long" }).format(next.d);
  link.querySelector(".next-event-title").textContent = `${next.title[lang]} · ${day}`;
  link.hidden = false;
}

function setLang(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = dict[node.dataset.i18n];
    if (value != null) node.textContent = value;
  });
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  renderEvents(lang);
  renderNextEvent(lang);
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* storage unavailable: ignore */
  }
}

function applyConfig() {
  document.querySelectorAll(".js-facebook").forEach((a) => (a.href = CONFIG.facebookUrl));

  if (CONFIG.email) {
    document.querySelectorAll(".js-email").forEach((a) => {
      a.href = "mailto:" + CONFIG.email;
      a.textContent = CONFIG.email;
    });
    document.querySelector(".js-email-row").hidden = false;
    // "Scrie-ne" opens the email client directly.
    document.querySelectorAll('a.btn[href="#contact"]').forEach((a) => (a.href = "mailto:" + CONFIG.email));
  } else {
    document.querySelectorAll(".js-email").forEach((a) => a.remove());
  }

  if (CONFIG.phone) {
    const a = document.querySelector(".js-phone");
    a.href = "tel:" + CONFIG.phone.replace(/[^\d+]/g, "");
    a.textContent = CONFIG.phone;
    document.querySelector(".js-phone-row").hidden = false;
  }
  if (CONFIG.whatsapp) {
    const wa = document.querySelector(".js-whatsapp");
    wa.href = "https://wa.me/" + CONFIG.whatsapp;
    wa.hidden = false;
    document.querySelector(".js-phone-row").hidden = false;
  }

  document.getElementById("year").textContent = new Date().getFullYear();
}

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

document.querySelectorAll(".lang-switch button").forEach((b) => {
  b.addEventListener("click", () => setLang(b.dataset.lang));
});

applyConfig();
initMenu();
setLang(initialLang());
