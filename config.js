// ════════════════════════════════════════════════════════════════
//  CONFIG.JS — Editá SOLO este archivo para adaptar a cada cliente
//  (index.html, style.css y script.js no los tocás nunca más)
// ════════════════════════════════════════════════════════════════

const SITE_CONFIG = {

  // ── MARCA ──────────────────────────────────────────────────────
  // Nombre que aparece en el nav, hero, footer y título del browser
  marcaPrincipal: "Alma",      // Parte normal del nombre
  marcaItalica:   "Joyas",   // Parte en cursiva y con color del acento

  // ── DESCRIPCIÓN CORTA ──────────────────────────────────────────
  rubro:     "indumentaria y bijouterie",  // Ej: "Joyería artesanal", "Indumentaria"
  ubicacion: "Córdoba",          // Ej: "Buenos Aires", "Palermo"

  // ── HERO ───────────────────────────────────────────────────────
  heroSubtitulo: "Indumentaria y bijouterie que combinan<br>estilo, calidad y personalidad para cada ocasión.",

  // ── SECCIÓN NOSOTROS ───────────────────────────────────────────
  nosotros: {
    label:  "Nuestra esencia",
    titulo: "Cada detalle define tu estilo",
    parrafos: [
      "En <strong>Alma Joyas</strong> nos apasiona ofrecer piezas únicas que realzan tu identidad. Nuestra colección de indumentaria y bijouterie está pensada para acompañarte en cada momento, con diseños actuales y versátiles.",
      "Nacimos con la idea de acercar moda accesible sin perder calidad ni estilo, brindando opciones que se adapten a distintas personalidades y tendencias.",
      "Seleccionamos cada prenda y accesorio con dedicación, priorizando materiales de calidad y un diseño cuidado para que te sientas cómoda y segura al usarlos."
    ],
    stats: [
      { num: "100%", label: "Estilo propio" },
      { num: "★",   label: "Tendencias actuales" }
    ]
  },

  // ── SECCIÓN PRODUCTOS ──────────────────────────────────────────
  productos: {
    label:  "Lo que ofrecemos",
    titulo: "Nuestros productos"
  },

  // ── CONTACTO ───────────────────────────────────────────────────
  whatsapp:  "541134521808",       // Sin +, sin espacios. Ej: "5491123456789"
  instagram: "dulce.princesa.ok",  // Sin @

  contacto: {
  label:      "Hablemos",
  titulo:     "¿Buscás algo especial?",
  waDisplay:  "+54 11 3452-1808",           
  waTexto:    "Hola! Vi su página y me gustaría consultar por sus productos.",
  ctaTitulo:  "Encontrá tu estilo ideal",
  ctaParrafo: "Te ayudamos a elegir la prenda o accesorio perfecto según tu estilo, ocasión o necesidad. Consultanos por disponibilidad, talles, combinaciones o recomendaciones.",
  ctaBoton:   "Escribinos por WhatsApp"
},

  // ── FOOTER ─────────────────────────────────────────────────────
  footer: {
    copyright: "© 2026 Alma Joyas · Estilo en cada detalle"
  },

  // ── ADMIN ──────────────────────────────────────────────────────
  admin: {
    usuario:     "NaiLoza",
    password:    "nachu18082001",
    nombrePanel: "Alma Joyas"   // Aparece en la barra de administrador
  },

  // ── TIPO DE PRODUCTO (para los textos del panel admin) ─────────
  tipoProducto:        "Joyas",               // Ej: "joya", "prenda", "producto"
  tipoProductoEjemplo: "Anillo", // Ej: "Anillo de plata", "Vestido talle M"

  // ── CATEGORÍAS PREDEFINIDAS (panel admin) ──────────────────────
  // Las que aparecen en el dropdown al cargar el panel por primera vez
  categoriasFijas: [],

  // ── FIREBASE ───────────────────────────────────────────────────
  // Creá un proyecto nuevo en https://console.firebase.google.com para cada cliente
  firebase: {
    apiKey:            "AIzaSyDNUQ0Kz_vjlPzG3ChnWIFFeKOPziIcz1c",
    authDomain:        "dulce-princesa-18082001.firebaseapp.com",
    projectId:         "dulce-princesa-18082001",
    storageBucket:     "dulce-princesa-18082001.firebasestorage.app",
    messagingSenderId: "1030198289641",
    appId:             "1:1030198289641:web:0b93396e294ccc23fbfc78"
  },

  // ── TIPOGRAFÍA (Google Fonts) ───────────────────────────────────
  // Si cambiás las fuentes, script.js actualiza el link de Google Fonts automáticamente
  // Usá exactamente el nombre como aparece en fonts.google.com
  fontSerif: "Cormorant Garamond",  // Fuente elegante para títulos
  fontSans:  "Jost",                // Fuente moderna para cuerpo de texto

  // ── PALETA DE COLORES ──────────────────────────────────────────
  // Usá coolors.co o palettte.app para generar paletas para cada cliente
  colores: {
    // ── BRAND BASE ─────────────────────────────
    primary: "#3AA6B9",        // color principal (botones, acentos)
    primarySoft: "#CDEFF2",    // fondos suaves
    primaryLight: "#EAF9FB",   // secciones claras
    secondary: "#7ED6DF",      // bordes, detalles

    // ── BACKGROUNDS ───────────────────────────
    background: "#F7FCFD",     // fondo general
    white: "#ffffff",         // tarjetas / modales

    // ── TEXT ──────────────────────────────────
    text: "#1F3A40",          // texto principal
    textSoft: "#5F7C82",      // texto secundario

    // ── ACCENTS ───────────────────────────────
    accent: "#5BC0BE",        // opcional (detalles)

    // ── EFFECTS / UI ──────────────────────────
    overlay: "rgba(31,58,64,0.6)",
    overlayStrong: "rgba(31,58,64,0.7)",
    border: "rgba(126,214,223,0.4)",
    shadow: "rgba(0,0,0,0.08)",

    // ── STATUS ────────────────────────────────
    success: "#25D366",
    successHover: "#1ebe5d"
  },

  // ── CATÁLOGO INICIAL / RESTAURACIÓN ────────────────────────────
  // Estos son los productos que se cargan si Firebase está vacío
  // o cuando el admin presiona "Restaurar originales"
  productosDefault: []
};
