/* ==========================================================================
   JDM Details — main.js
   No dependencies. No tracking. No network calls.
   ========================================================================== */
(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════════════════════════
     1. CONFIG — the only block you normally need to edit
     ═══════════════════════════════════════════════════════════════════════ */
  var CONFIG = {
    // Social profiles. Leave a value as '' and the icon simply won't render.
    social: {
      instagram: '',   // e.g. 'https://www.instagram.com/jdmdetails'
      facebook: '',
      tiktok: ''
    }
  };

  /* ═══════════════════════════════════════════════════════════════════════
     2. Spanish dictionary
     The HTML ships in English. Only the ES strings live here; switching back
     to EN restores the original markup captured on load. That way the page is
     fully readable and indexable even if JavaScript never runs.
     ═══════════════════════════════════════════════════════════════════════ */
  var ES = {
    'a11y.skip': 'Ir al contenido',
    'brand.tagline': 'Cuidado Automotriz Premium',

    'nav.services': 'Servicios',
    'nav.packages': 'Paquetes',
    'nav.process': 'Proceso',
    'nav.gallery': 'Galería',
    'nav.faq': 'Preguntas',
    'nav.contact': 'Contacto',

    'cta.call': 'Llamar',
    'cta.whatsapp': 'Agendar por WhatsApp',
    'cta.callNumber': 'Llamar (909) 968-8571',

    'hero.eyebrow': 'Detailing a domicilio · Sur de California',
    'hero.title.1': 'Brillo de concesionario,',
    'hero.title.2': 'en la puerta de tu casa.',
    'hero.sub': 'Detailing profesional a mano para cualquier vehículo: interior, exterior y protección de pintura. Llevamos el agua, el equipo y los productos. Tú no pierdes el día.',

    'chip.1': 'Lavado 100% a mano',
    'chip.2': 'Vamos hasta ti',
    'chip.3': 'Hablo Español',
    'chip.4': 'Protección cerámica',

    'services.eyebrow': 'Lo que hacemos',
    'services.title': 'Detailing hecho a mano, de principio a fin',
    'services.lede': 'Sin cepillos y sin atajos. Cada paso de abajo es parte de cómo trabajamos: combínalos en el paquete que tu carro necesita.',

    'svc.1.t': 'Lavado y secado a mano',
    'svc.1.d': 'Lavado a mano con dos baldes y jabón de pH neutro, secado con microfibra que no raya.',
    'svc.2.t': 'Rines y llantas',
    'svc.2.d': 'Limpieza profunda de rin y barril, remoción de polvo de freno y brillo de alta duración para la llanta.',
    'svc.3.t': 'Limpieza interior completa',
    'svc.3.d': 'Aspirado de asientos, alfombras, tapetes y baúl, más limpieza total de tablero, consola y paneles de puerta.',
    'svc.4.t': 'Extracción con shampoo',
    'svc.4.d': 'Extracción con shampoo y agua caliente que levanta manchas y mugre incrustada en telas y alfombras.',
    'svc.5.t': 'Descontaminación con clay bar',
    'svc.5.d': 'Retira hierro, mugre de carretera y contaminantes adheridos que el lavado no alcanza, dejando la pintura lisa como vidrio.',
    'svc.6.t': 'Protección cerámica en spray',
    'svc.6.d': 'Cera cerámica premium en spray para brillo extremo, repelencia al agua y protección duradera.',

    'pkg.eyebrow': 'Paquetes',
    'pkg.title': 'Elige el nivel de detalle que tu carro necesita',
    'pkg.lede': 'Tres paquetes, un mismo estándar de trabajo. El precio final depende del tamaño y del estado del vehículo: escríbenos y te cotizamos en minutos.',
    'pkg.askPrice': 'Consultar precio',
    'pkg.exterior': 'Cuidado exterior',
    'pkg.interior': 'Cuidado interior',
    'pkg.book': 'Agendar este paquete',
    'pkg.badge': 'Más completo',

    'pkg.std.name': 'Detail Estándar',
    'pkg.std.desc': 'El reinicio esencial. Limpio por dentro y por fuera, hecho como se debe: a mano.',
    'pkg.std.ex.1.t': 'Lavado y secado a mano.',
    'pkg.std.ex.1.d': 'Lavado exterior suave a mano con secado en microfibra que no raya.',
    'pkg.std.ex.2.t': 'Llantas y rines.',
    'pkg.std.ex.2.d': 'Limpieza profunda de llantas rematada con brillo de alto gloss.',
    'pkg.std.ex.3.t': 'Vidrios impecables.',
    'pkg.std.ex.3.d': 'Limpieza completa de ventanas y espejos, por dentro y por fuera.',
    'pkg.std.in.1.t': 'Limpieza interior completa.',
    'pkg.std.in.1.d': 'Limpieza a fondo de todas las superficies principales de la cabina.',
    'pkg.std.in.2.t': 'Aspirado interior.',
    'pkg.std.in.2.d': 'Aspirado completo de asientos, tapetes y alfombras.',
    'pkg.std.in.3.t': 'Paneles y tablero.',
    'pkg.std.in.3.d': 'Desempolvado y remoción de mugre en paneles de puerta, consola central y tablero.',

    'pkg.dlx.name': 'Detail Deluxe',
    'pkg.dlx.desc': 'Enfocado en el interior. Limpia, renueva y protege las superficies que tocas todos los días.',
    'pkg.dlx.ex.1.t': 'Lavado y secado a mano.',
    'pkg.dlx.ex.1.d': 'Lavado suave a mano seguido de secado con toalla de microfibra que no raya.',
    'pkg.dlx.in.1.t': 'Aspirado interior completo.',
    'pkg.dlx.in.1.d': 'Aspirado a fondo de todos los asientos, tapetes, alfombras y baúl.',
    'pkg.dlx.in.2.t': 'Paneles y superficies.',
    'pkg.dlx.in.2.d': 'Limpieza y remoción de polvo en tablero, consola central y paneles de puerta.',
    'pkg.dlx.in.3.t': 'Limpieza ligera de tapicería.',
    'pkg.dlx.in.3.d': 'Tratamiento de manchas y limpieza suave para refrescar asientos de tela y alfombras.',
    'pkg.dlx.in.4.t': 'Acondicionar y proteger.',
    'pkg.dlx.in.4.d': 'Protector premium en vinilo, caucho y plásticos, más acondicionador de cuero para evitar resequedad y grietas.',
    'pkg.dlx.in.5.t': 'Vidrios interiores sin marcas.',
    'pkg.dlx.in.5.d': 'Limpieza cristalina de ventanas y espejos.',
    'pkg.dlx.in.6.t': 'Ambientador.',
    'pkg.dlx.in.6.d': 'Toque final de aroma fresco para que tu carro huela increíble.',

    'pkg.prm.name': 'Premium Wash',
    'pkg.prm.desc': 'Descontaminación total, protección cerámica y extracción profunda con shampoo. Lo más cerca de estar nuevo.',
    'pkg.prm.ex.1.t': 'Lavado a mano y descontaminación.',
    'pkg.prm.ex.1.d': 'Lavado a mano a fondo que retira mugre de carretera, hierro y contaminantes de superficie.',
    'pkg.prm.ex.2.t': 'Tratamiento con clay bar.',
    'pkg.prm.ex.2.d': 'Limpieza profunda que deja la pintura completamente lisa.',
    'pkg.prm.ex.3.t': 'Rines y llantas.',
    'pkg.prm.ex.3.d': 'Limpieza profunda de rines y aplicación de brillo en llantas.',
    'pkg.prm.ex.4.t': 'Protección cerámica en spray.',
    'pkg.prm.ex.4.d': 'Cera cerámica premium en spray para brillo extremo, repelencia al agua y protección duradera.',
    'pkg.prm.in.1.t': 'Aspirado.',
    'pkg.prm.in.1.d': 'Aspirado completo de asientos, alfombras, tapetes y baúl.',
    'pkg.prm.in.2.t': 'Paneles y superficies.',
    'pkg.prm.in.2.d': 'Limpieza profunda de tablero, consola central, paneles de puerta y portavasos.',
    'pkg.prm.in.3.t': 'Extracción con shampoo.',
    'pkg.prm.in.3.d': 'Tratamiento profundo con shampoo en asientos de tela y alfombras para levantar manchas y suciedad.',
    'pkg.prm.in.4.t': 'Vidrios sin marcas.',
    'pkg.prm.in.4.d': 'Limpieza cristalina en todos los vidrios y espejos, interiores y exteriores.',
    'pkg.prm.in.5.t': 'Ambientador.',
    'pkg.prm.in.5.d': 'Aroma premium para dejar tu vehículo con olor a nuevo.',

    'cmp.title': 'Comparación lado a lado',
    'cmp.caption': 'Comparación de lo que incluye cada paquete de JDM Details',
    'cmp.included': 'Qué incluye',
    'cmp.r1': 'Lavado a mano y secado en microfibra',
    'cmp.r2': 'Rines y brillo de llantas',
    'cmp.r3': 'Vidrios exteriores',
    'cmp.r4': 'Vidrios interiores',
    'cmp.r5': 'Aspirado interior (asientos, tapetes, alfombras)',
    'cmp.r6': 'Aspirado del baúl',
    'cmp.r7': 'Paneles, tablero y consola',
    'cmp.r8': 'Limpieza ligera de tapicería',
    'cmp.r9': 'Acondicionar y proteger (vinilo, cuero)',
    'cmp.r10': 'Ambientador',
    'cmp.r11': 'Descontaminación con clay bar',
    'cmp.r12': 'Protección cerámica en spray',
    'cmp.r13': 'Extracción con shampoo y agua caliente',
    'cmp.note': '¿Necesitas algo que no está en la lista — motor, restauración de faros, remoción de pelo de mascota? Pregúntanos, cotizamos trabajos a la medida.',

    'proc.eyebrow': 'Cómo funciona',
    'proc.title': 'Cuatro pasos, cero complicaciones',
    'proc.1.t': 'Cuéntanos de tu carro',
    'proc.1.d': 'Mándanos un mensaje con la marca, el modelo y un par de fotos. Confirmamos el paquete y el precio desde el inicio.',
    'proc.2.t': 'Elige hora y lugar',
    'proc.2.d': 'Casa, oficina o donde esté parqueado el carro. Solo necesitamos espacio para trabajar alrededor del vehículo.',
    'proc.3.t': 'Lo detallamos a mano',
    'proc.3.d': 'Llegamos con nuestra propia agua, energía y productos profesionales. La mayoría de trabajos toma entre 1 y 4 horas.',
    'proc.4.t': 'Lo revisas antes de que nos vayamos',
    'proc.4.d': 'Recorremos el carro contigo. Si algo no quedó bien, lo corregimos en el momento.',

    'why.eyebrow': 'Por qué JDM Details',
    'why.title': 'La diferencia está en lo que no nos saltamos',
    'why.1.t': 'Solo lavado a mano',
    'why.1.d': 'Sin cepillos automáticos ni tiras giratorias. Solo microfibra, agua limpia y una técnica que no deja micro-rayones.',
    'why.2.t': 'Vamos hasta ti',
    'why.2.d': 'Servicio 100% móvil. Sin dejar el carro, sin sala de espera y sin perder medio sábado.',
    'why.3.t': 'Productos profesionales',
    'why.3.d': 'Jabones de pH neutro, sprays cerámicos y acondicionadores elegidos para proteger pintura, cuero y molduras, no solo para brillar un día.',
    'why.4.t': 'Hablamos español',
    'why.4.d': 'Atención completa en español o inglés, sin intermediarios y sin malentendidos.',

    'gal.eyebrow': 'Nuestro trabajo',
    'gal.title': 'Antes y después',
    'gal.lede': 'Vehículos reales, resultados reales. Fotos de nuestros trabajos más recientes.',
    'gal.slot': 'Espacio de foto',
    'gal.note': '⚑ Prototipo: estos espacios están esperando las fotos reales de antes y después.',

    'rev.eyebrow': 'Clientes',
    'rev.title': 'Lo que dice la gente',
    'rev.ph': 'Reseña real de cliente pendiente.',
    'rev.cite': '— Nombre, vehículo',
    'rev.note': '⚑ Prototipo: se reemplazará con reseñas verificadas de Google. No publicamos testimonios inventados.',

    'area.eyebrow': 'Cobertura',
    'area.title': 'Dónde trabajamos',
    'area.lede': 'Servicio móvil en el Inland Empire y el área metropolitana de Los Ángeles. ¿No estás en la lista? Escríbenos, muchas veces viajamos más lejos.',
    'area.note': '⚑ Prototipo: confirmar la lista real de cobertura con el dueño antes de publicar.',

    'faq.eyebrow': 'Preguntas',
    'faq.title': 'Lo que más nos preguntan',
    'faq.1.q': '¿Cuánto tarda un detail?',
    'faq.1.a': 'El Detail Estándar toma normalmente entre 1 y 2 horas. El Deluxe entre 2 y 3 horas, y un Premium Wash con clay bar y extracción con shampoo puede tomar de 3 a 4 horas según el tamaño y el estado del vehículo.',
    'faq.2.q': '¿Necesitan agua y electricidad de mi casa?',
    'faq.2.a': 'No. Llegamos totalmente autónomos, con nuestra propia agua y energía. Si tienes tomas disponibles y prefieres que las usemos, también está bien: solo avísanos al agendar.',
    'faq.3.q': '¿Qué es el clay bar y lo necesito?',
    'faq.3.a': 'El clay bar retira contaminantes adheridos a la pintura que el lavado por sí solo no levanta: partículas industriales, polvo de riel, sobrespray. Si la pintura se siente áspera después de lavarla, lo necesitas. Va incluido en el Premium Wash.',
    'faq.4.q': '¿Cuánto dura la protección cerámica en spray?',
    'faq.4.a': 'Un spray cerámico premium suele durar varios meses según el clima, dónde parqueas y con qué frecuencia lavas el carro. No es un recubrimiento cerámico permanente, pero te da brillo real y repelencia al agua a una fracción del costo.',
    'faq.5.q': '¿Atienden camionetas, SUV y vans?',
    'faq.5.a': 'Sí. El precio varía según el tamaño y el estado del vehículo, por eso confirmamos la cotización antes de agendar. Mándanos una foto y te damos un número exacto.',
    'faq.6.q': '¿Cómo debo preparar mi carro?',
    'faq.6.a': 'Solo retira objetos personales y de valor de la cabina y del baúl para que podamos llegar a cada superficie. De lo demás nos encargamos nosotros.',

    'cta.title': '¿Listo para ver tu carro como nuevo otra vez?',
    'cta.sub': 'Escríbenos con tu vehículo y tu ubicación. Confirmamos el paquete, el precio y la hora, normalmente el mismo día.',

    'foot.contact': 'Contacto',
    'foot.hours': 'Lun–Sáb, 8:00 AM – 6:00 PM',
    'foot.lang': 'English y Español',
    'foot.nav': 'Sitio',
    'foot.privacy': 'Privacidad',
    'foot.privacyText': 'Este sitio no usa cookies, no corre analítica y no carga nada desde servidores de terceros. Nada de lo que haces aquí se rastrea ni se almacena. Contactarnos por WhatsApp o por teléfono se rige por los términos de esos servicios.',
    'foot.rights': 'Todos los derechos reservados.',
    'foot.proto': 'Prototipo v0.1 — contenido pendiente de aprobación del cliente.'
  };

  /* Prefilled WhatsApp message per language. */
  var WA_TEXT = {
    en: { generic: "Hi JDM Details, I'd like to book a detail.", pkg: "Hi JDM Details, I'm interested in the %s package." },
    es: { generic: 'Hola JDM Details, quiero agendar un detail.', pkg: 'Hola JDM Details, me interesa el paquete %s.' }
  };

  var PKG_NAMES = {
    'Standard Detail': 'Detail Estándar',
    'Deluxe Detail': 'Detail Deluxe',
    'Premium Wash': 'Premium Wash'
  };

  var META = {
    en: { title: 'JDM Details — Premium Auto Care | Mobile Detailing', toggle: 'Cambiar a español', next: 'ES' },
    es: { title: 'JDM Details — Cuidado Automotriz Premium | Detailing a domicilio', toggle: 'Switch to English', next: 'EN' }
  };

  /* ═══════════════════════════════════════════════════════════════════════
     3. i18n
     ═══════════════════════════════════════════════════════════════════════ */
  var EN = Object.create(null);          // originals captured from the markup
  var nodes = [];
  var current = 'en';

  function captureOriginals() {
    nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!(key in EN)) EN[key] = el.textContent;
    });
  }

  function applyLang(lang) {
    var dict = lang === 'es' ? ES : EN;
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = dict[key];
      if (typeof value === 'string') el.textContent = value;
      else if (lang === 'es' && EN[key] !== undefined) el.textContent = EN[key];
    });

    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.title = META[lang].title;

    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.setAttribute('aria-label', META[lang].toggle);
      toggle.firstElementChild.textContent = META[lang].next;
    }

    updateWhatsAppLinks(lang);
    current = lang;

    try { localStorage.setItem('jdm-lang', lang); } catch (e) { /* private mode */ }
  }

  /* Rewrites only the ?text= parameter of wa.me links, never the number. */
  function updateWhatsAppLinks(lang) {
    var strings = WA_TEXT[lang];
    document.querySelectorAll('a[href*="wa.me/"]').forEach(function (a) {
      var url;
      try { url = new URL(a.href); } catch (e) { return; }
      if (url.hostname !== 'wa.me') return;

      var pkg = a.getAttribute('data-pkg');
      var text = pkg
        ? strings.pkg.replace('%s', lang === 'es' ? (PKG_NAMES[pkg] || pkg) : pkg)
        : strings.generic;

      if (url.searchParams.has('text')) {
        url.searchParams.set('text', text);
        a.href = url.toString();
      }
    });
  }

  /* Tags each package CTA with the package it belongs to, so the prefilled
     WhatsApp message stays correct in both languages. */
  function tagPackageLinks() {
    document.querySelectorAll('.pkg').forEach(function (card) {
      var heading = card.querySelector('.pkg-head h3');
      var link = card.querySelector('.pkg-foot a[href*="wa.me/"]');
      if (heading && link) link.setAttribute('data-pkg', EN[heading.getAttribute('data-i18n')] || heading.textContent);
    });
  }

  function initLang() {
    captureOriginals();
    tagPackageLinks();

    var saved = null;
    try { saved = localStorage.getItem('jdm-lang'); } catch (e) { /* ignore */ }

    var lang = saved === 'es' || saved === 'en'
      ? saved
      : (navigator.language || 'en').toLowerCase().indexOf('es') === 0 ? 'es' : 'en';

    applyLang(lang);

    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        applyLang(current === 'es' ? 'en' : 'es');
      });
    }
  }

  /* ═══════════════════════════════════════════════════════════════════════
     4. Navigation
     ═══════════════════════════════════════════════════════════════════════ */
  function initNav() {
    var burger = document.getElementById('burger');
    var nav = document.getElementById('nav');
    if (!burger || !nav) return;

    function setOpen(open) {
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.classList.toggle('is-open', open);
    }

    burger.addEventListener('click', function () {
      setOpen(burger.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        burger.focus();
      }
    });

    // Reset the drawer if the viewport grows past the desktop breakpoint.
    var desktop = window.matchMedia('(min-width: 940px)');
    var onChange = function (e) { if (e.matches) setOpen(false); };
    if (desktop.addEventListener) desktop.addEventListener('change', onChange);
    else desktop.addListener(onChange);
  }

  function initHeaderState() {
    var header = document.getElementById('site-header');
    if (!header) return;
    var ticking = false;

    function update() {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ═══════════════════════════════════════════════════════════════════════
     5. Scroll reveal
     ═══════════════════════════════════════════════════════════════════════ */
  function initReveal() {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var targets = document.querySelectorAll(
      '.section-head, .card, .pkg, .step, .mini, .shot, .quote, .qa, .compare-wrap, .area-list, .cta-inner > *'
    );

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    // Anything already on screen when the page loads is shown right away — only
    // what sits below the fold gets observed. That keeps very tall viewports
    // (and any browser where the observer never fires) from showing a blank page.
    // The stagger comes from CSS (.reveal:nth-child), so no inline styles are
    // needed and the strict style-src CSP stays intact.
    var fold = window.innerHeight * 0.95;
    targets.forEach(function (el) {
      el.classList.add('reveal');
      if (el.getBoundingClientRect().top < fold) el.classList.add('is-in');
      else io.observe(el);
    });
  }

  /* ═══════════════════════════════════════════════════════════════════════
     6. Social links (rendered only when configured, https only)
     ═══════════════════════════════════════════════════════════════════════ */
  var ICONS = {
    instagram: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9s.7.8.9 1.4c.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4s-.8.7-1.4.9c-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9s-.7-.8-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4s.8-.7 1.4-.9c.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.2.8s-.6.7-.8 1.2c-.2.4-.3 1-.4 2.1C2.7 9.8 2.7 10.2 2.7 12s0 2.2.1 3.4c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2s.7.6 1.2.8c.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8s.6-.7.8-1.2c.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-3.4s0-2.2-.1-3.4c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.2s-.7-.6-1.2-.8c-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1m0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8m0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2m6.3-8.2a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0',
    facebook: 'M14 8.5V6.9c0-.7.2-1.1 1.2-1.1h1.5V2.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v1.9H8.4V12h2.4v9h3.1v-9h2.4l.4-3.5z',
    tiktok: 'M16.6 5.8a4.3 4.3 0 0 1-1-2.8h-3v11.7a2.4 2.4 0 1 1-2.4-2.4c.2 0 .4 0 .6.1V9.3a5.4 5.4 0 1 0 4.9 5.4V9.2a7.2 7.2 0 0 0 4.2 1.3V7.4a4.3 4.3 0 0 1-3.3-1.6'
  };

  var SVG_NS = 'http://www.w3.org/2000/svg';

  function initSocials() {
    var list = document.getElementById('socials');
    if (!list) return;
    var added = 0;

    Object.keys(ICONS).forEach(function (key) {
      var href = CONFIG.social[key];
      if (!href) return;
      if (!/^https:\/\//i.test(href)) return;   // refuse anything but https

      var a = document.createElement('a');
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', key.charAt(0).toUpperCase() + key.slice(1));

      var svg = document.createElementNS(SVG_NS, 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('aria-hidden', 'true');
      var path = document.createElementNS(SVG_NS, 'path');
      path.setAttribute('d', ICONS[key]);
      svg.appendChild(path);
      a.appendChild(svg);

      var li = document.createElement('li');
      li.appendChild(a);
      list.appendChild(li);
      added++;
    });

    if (added) list.hidden = false;
  }

  /* ═══════════════════════════════════════════════════════════════════════
     7. Boot
     ═══════════════════════════════════════════════════════════════════════ */
  function init() {
    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());

    initLang();
    initNav();
    initHeaderState();
    initReveal();
    initSocials();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
