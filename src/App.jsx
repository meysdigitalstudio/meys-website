import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import logo from "./assets/meys-logo.jpeg";
import child from "./assets/child.jpeg";
import today from "./assets/today.jpeg";
import portfolioMays from "./assets/portfolio-mays.jpeg";

import Impressum from "./Impressum.jsx";
import Datenschutz from "./Datenschutz.jsx";





function HomePage() {
const [lang, setLang] = useState("de");

const t = {
 de: {
  home: "Home",
  vision: "Meine Vision",
  why: "Warum Meys",
  portfolio: "Portfolio",
  contact: "Kontakt",
  small: "DIGITALAGENTUR",
  title1: "Wir gestalten.",
  title2: "Du wächst.",
  subtitle:
    "Von der ersten Idee bis zur fertigen Website – modern, schnell und individuell für dein Unternehmen entwickelt.",
  start: "Projekt starten",
  view: "Portfolio ansehen",

  visionNumber: "01 — MEINE VISION",
  visionTitle: "Von einer Leidenschaft zu einer Marke.",
  vision1:
    "Was als Kindheitsleidenschaft begann, ist heute meine Vision: Unternehmen mit modernen, professionellen Websites dabei zu helfen, online zu wachsen.",
  vision2:
    "Hallo, ich bin Meys. Schon als Kind war ich fasziniert von Technologie und kreativen Projekten. Ich habe mich immer gefragt, wie Websites entstehen und wie aus einer Idee etwas Echtes wird.",
  vision3:
    "Mit zwölf Jahren begann ich, Videos auf YouTube zu veröffentlichen. Über die Jahre durfte ich eine Community mit mehr als 50.000 Followern aufbauen. Diese Zeit hat mich geprägt.",
  vision4:
    "Mit 17 Jahren und neben der Oberstufe habe ich bereits die ersten Websites für echte Unternehmen entwickelt und arbeite kontinuierlich daran, meine Fähigkeiten auszubauen.",
  vision5:
    "Ich lerne jeden Tag dazu und arbeite mit Leidenschaft an jedem Projekt. Mein Ziel ist es, Websites zu entwickeln, auf die meine Kundinnen und Kunden wirklich stolz sein können.",
  child: "DAMALS",
  childText: "Wo alles begann.",
  today: "HEUTE",
  todayText: "Wer ich heute bin.",

  whyNumber: "02 — WARUM MEYS?",
  whyTitle: "Jede Marke erzählt ihre eigene Geschichte.",
  whyCard1Title: "Mehr als nur Code.",
  whyCard1Text:
    "Eine Website ist der erste Eindruck eines Unternehmens und sollte genau widerspiegeln, wofür eine Marke steht. Sie entsteht nicht nur durch Code, sondern durch Verständnis, Kreativität und ein Gespür für Details.",
  whyCard2Title: "Keine Vorlage. Sondern deine Marke.",
  whyCard2Text:
    "Ich entwickle keine Standardlösungen, sondern Websites, die individuell auf dein Unternehmen abgestimmt sind. Jedes Projekt entsteht mit dem Ziel, Vertrauen aufzubauen und deine Marke authentisch zu präsentieren.",
  whyCard3Title: "Mehr als nur Webentwicklung.",
  whyCard3Text:
    "Ein professioneller Online-Auftritt besteht nicht nur aus einer Website. Deshalb unterstütze ich Unternehmen auch bei professionellen Fotos, Bildbearbeitung und kurzen Werbevideos, damit deine Marke überall einen starken Eindruck hinterlässt.",
  whyCard4Title: "Persönliche Zusammenarbeit.",
  whyCard4Text:
    "Ich nehme mir Zeit für deine Ideen und entwickle gemeinsam mit dir eine Lösung, die wirklich zu deinem Unternehmen passt.",

  portfolioNumber: "03 — PORTFOLIO",
  portfolioTitle: "Ein Projekt, das zeigt, was möglich ist.",
  portfolioText:
    "Mein erster vollständig entwickelter Online-Shop für ein echtes Unternehmen – modern, responsiv und von der ersten Idee bis zur fertigen Website umgesetzt.",
  case: "CASE 01",
  projectName: "Mays R&S",
  projectDescription:
    "Ein moderner Online-Shop für Restaurants und Süßspeisen mit Produktverwaltung, Warenkorb, Stripe-Zahlung und responsivem Design für Laptop und Smartphone.",
  live: "Live ansehen →",
servicesNumber: "04 — LEISTUNGEN",
servicesTitle: "Leistungen & Preise",
servicesText:
  "Jede Website wird individuell entwickelt und an dein Unternehmen angepasst. Die Preise sind Einstiegspreise und können je nach Umfang und gewünschten Funktionen variieren.",

priceNote:
  "Hinweis: Domain, Hosting, Wix-Kosten und andere externe Dienste werden vom Kunden übernommen. Auf Wunsch übernehme ich außerdem professionelle Fotos, Bildbearbeitung oder kurze Videos. Die Preise sind Einstiegspreise und können je nach Projekt variieren.",

landingTitle: "Landing Page",
landingText:
  "Perfekt für Unternehmen, Selbstständige oder lokale Geschäfte, die online professionell auftreten möchten.",

landing1: "Individuelles Design",
landing2: "Responsive für Smartphone & Tablet",
landing3: "Kontaktformular",
landing4: "WhatsApp-Integration",
landing5: "Google Maps",
landing6: "Social-Media-Verlinkungen",
landing7: "DSGVO-konforme Grundstruktur",

landingPrice: "ab 899 €",


request: "Anfragen →",

// Wix
wixTitle: "Wix Website",
wixText:
  "Schnell, modern und kostengünstig für Unternehmen, die keine individuelle Programmierung brauchen.",
wix1: "Individuelles Design",
wix2: "Mobile Optimierung",
wix3: "Kontaktformular",
wix4: "Bildergalerie",
wix5: "Einfache Verwaltung",
wix6: "Schnelle Veröffentlichung",
wixPrice: "ab 1.499 €",

// Business
businessTitle: "Business Website",
businessText:
  "Ideal für Unternehmen, die mehr Informationen präsentieren und professionell wachsen möchten.",
business1: "Individuelles Design",
business2: "Mehrere Unterseiten",
business3: "Moderne Animationen",
business4: "Kontaktformular",
business5: "Bildergalerie",
business6: "SEO-Grundoptimierung",
business7: "Schnelle Ladezeiten",
businessPrice: "ab 2,499 €",

// Online-Shop
shopTitle: "Online-Shop",
shopText:
  "Für Unternehmen, die ihre Produkte professionell online verkaufen möchten.",
shop1: "Produktverwaltung",
shop2: "Warenkorb",
shop3: "Online-Zahlung mit Stripe",
shop4: "Kategorien",
shop5: "Rabattcodes",
shop6: "Versandoptionen",
shop7: "Sichere Bestellabwicklung",
shopPrice: "ab 3,999 €",

// Individuelle Lösung
customTitle: "Individuelle Weblösung",
customText:
  "Für besondere Ideen, die nicht in eine feste Kategorie passen.",
custom1: "Buchungssysteme",
custom2: "Kundenbereiche",
custom3: "Individuelle Formulare",
custom4: "Spezielle Funktionen",
custom5: "API-Anbindungen",
customPrice: "Preis auf Anfrage",

// Support
supportTitle: "Wartung & Support",
supportText:
  "Auch nach der Veröffentlichung bleibe ich für Änderungen und Support da.",
support1: "Neue Produkte hinzufügen",
support2: "Texte oder Bilder ändern",
support3: "Technische Fehler beheben",
support4: "Regelmäßige Updates",
support5: "Kleine Design-Anpassungen",
supportPrice: "ab 49 € / Monat",

request: "Anfragen →",

contactNumber: "05 — KONTAKT",
contactTitle: "Lass uns dein Projekt starten.",
contactText:
  "Du hast eine Idee für eine Website, einen Online-Shop oder brauchst Hilfe bei Fotos, Videos oder Design? Schreib mir einfach und wir schauen gemeinsam, was zu deinem Projekt passt.",

emailBtn: "E-Mail schreiben →",
whatsappBtn: "WhatsApp schreiben →",

contactNote: "Antwort meistens innerhalb von 24–48 Stunden.",

footerText:
  "Moderne Webseiten und Online-Shops für Unternehmen und Selbstständige.",

footerNav: "Navigation",
footerContact: "Kontakt",
footerLegal: "Rechtliches",

services: "Leistungen",

email: "E-Mail",

imprint: "Impressum",
privacy: "Datenschutz",

copyright:
  "© 2026 Meys Digital Studio. Alle Rechte vorbehalten.",

},

  en: {
    home: "Home",
    vision: "My Vision",
    why: "Why Meys",
    portfolio: "Portfolio",
    contact: "Contact",
    small: "DIGITAL AGENCY",
    title1: "We design.",
    title2: "You grow.",
    subtitle:
      "From the first idea to the finished website – modern, fast and individually built for your business.",
    start: "Start project",
    view: "View portfolio",

    visionNumber: "01 — MY VISION",
    visionTitle: "From a passion to a brand.",
    vision1:
      "What started as a childhood passion is now my vision: helping businesses grow online with modern and professional websites.",
    vision2:
      "Hi, I’m Meys. Since I was a child, I have been fascinated by technology and creative projects. I always wondered how websites are created and how an idea becomes something real.",
    vision3:
      "At the age of twelve, I started publishing videos on YouTube. Over the years, I was able to build a community with more than 50,000 followers. That time shaped me a lot.",
    vision4:
      "At 17 and while attending upper school, I have already developed my first websites for real businesses and continue to improve my skills every day.",
    vision5:
      "I learn something new every day and work with passion on every project. My goal is to create websites that my clients can truly be proud of.",
    child: "THEN",
    childText: "Where it all started.",
    today: "TODAY",
    todayText: "Who I am today.",
    whyNumber: "02 — WHY MEYS?",
whyTitle: "Every brand tells its own story.",
whyCard1Title: "More than code.",
whyCard1Text: "A website is the first impression of a business. It should show what a brand stands for and be built with understanding, creativity and attention to detail.",
whyCard2Title: "Not a template. Your brand.",
whyCard2Text: "I don’t create standard solutions. I build websites that are made to fit your business.",
whyCard3Title: "More than web development.",
whyCard3Text: "A strong online presence is more than a website. I can also support you with professional photos, editing and short videos.",
whyCard4Title: "Personal collaboration.",
whyCard4Text: "I take time for your ideas and work with you to create a solution that truly fits your business.",
portfolioNumber: "03 — PORTFOLIO",
portfolioTitle: "A project that shows what's possible.",
portfolioText:
  "My first fully developed online shop for a real business — modern, responsive and built from the first idea to the finished website.",

case: "CASE 01",

projectName: "Mays R&S",

projectDescription:
  "A modern online shop for restaurants and desserts with product management, shopping cart, Stripe payments and responsive design for desktop and mobile.",

live: "View Live →",

servicesNumber: "04 — SERVICES",
servicesTitle: "Services & Pricing",
servicesText:
  "Every website is individually developed and tailored to your business. Prices are starting prices and may vary depending on the scope and requested features.",

priceNote:
  "Please note: Domain, hosting, Wix fees and other external services are paid by the customer. If requested, I also offer professional photography, photo editing and short promotional videos. Prices are starting prices and may vary depending on the project.",

landingTitle: "Landing Page",
landingText:
  "Perfect for businesses, freelancers and local companies that want a professional online presence.",

wixTitle: "Wix Website",
wixText:
  "Fast, modern and affordable for businesses that do not require custom programming.",

businessTitle: "Business Website",
businessText:
  "Ideal for businesses that want to present more information and grow professionally.",

shopTitle: "Online Shop",
shopText:
  "For businesses that want to sell their products professionally online.",

customTitle: "Custom Web Solution",
customText:
  "For unique ideas that don't fit into a standard category.",

supportTitle: "Maintenance & Support",
supportText:
  "After your website is published, I continue to help with updates and support.",

from: "from",
request: "Request →",
customPrice: "Price on request",
month: "/ month",

landing1: "Custom Design",
landing2: "Responsive for Mobile & Tablet",
landing3: "Contact Form",
landing4: "WhatsApp Integration",
landing5: "Google Maps",
landing6: "Social Media Links",
landing7: "GDPR-compliant basic structure",

landingPrice: "from €899",
request: "Request →",

servicesNumber: "04 — SERVICES",
servicesTitle: "Services & Pricing",
servicesText:
  "Every website is individually developed and tailored to your business. Prices are starting prices and may vary depending on the scope and requested features.",

priceNote:
  "Please note: Domain, hosting, Wix fees and other external services are paid by the customer. If requested, I also offer professional photography, photo editing and short promotional videos. Prices are starting prices and may vary depending on the project.",

// Landing Page
landingTitle: "Landing Page",
landingText:
  "Perfect for businesses, freelancers and local companies that want a professional online presence.",
landing1: "Custom Design",
landing2: "Responsive for Mobile & Tablet",
landing3: "Contact Form",
landing4: "WhatsApp Integration",
landing5: "Google Maps",
landing6: "Social Media Links",
landing7: "GDPR-compliant Structure",
landingPrice: "from €899",

// Wix Website
wixTitle: "Wix Website",
wixText:
  "Fast, modern and affordable for businesses that do not require custom programming.",
wix1: "Custom Design",
wix2: "Mobile Optimization",
wix3: "Contact Form",
wix4: "Image Gallery",
wix5: "Easy Management",
wix6: "Fast Publishing",
wixPrice: "from €1.499",

// Business Website
businessTitle: "Business Website",
businessText:
  "Ideal for businesses that want to present more information and grow professionally.",
business1: "Custom Design",
business2: "Multiple Pages",
business3: "Modern Animations",
business4: "Contact Form",
business5: "Image Gallery",
business6: "Basic SEO Optimization",
business7: "Fast Loading Times",
businessPrice: "from €2.499",

// Online Shop
shopTitle: "Online Shop",
shopText:
  "For businesses that want to sell their products professionally online.",
shop1: "Product Management",
shop2: "Shopping Cart",
shop3: "Online Payments with Stripe",
shop4: "Categories",
shop5: "Discount Codes",
shop6: "Shipping Options",
shop7: "Secure Checkout",
shopPrice: "from €3.999",

// Custom Solution
customTitle: "Custom Web Solution",
customText:
  "For unique ideas that don't fit into a standard category.",
custom1: "Booking Systems",
custom2: "Customer Areas",
custom3: "Custom Forms",
custom4: "Special Features",
custom5: "API Integrations",
customPrice: "Price on Request",

// Support
supportTitle: "Maintenance & Support",
supportText:
  "I continue to help you with updates and support even after your website has been published.",
support1: "Add New Products",
support2: "Update Texts or Images",
support3: "Fix Technical Issues",
support4: "Regular Updates",
support5: "Small Design Changes",
supportPrice: "from €49 / month",

request: "Request →",

contactNumber: "05 — CONTACT",
contactTitle: "Let's start your project.",
contactText:
  "Do you have an idea for a website, an online shop or do you need help with photos, videos or design? Just send me a message and together we'll find the right solution for your project.",

emailBtn: "Send Email →",
whatsappBtn: "Chat on WhatsApp →",

contactNote: "Usually replies within 24–48 hours.",

footerText:
  "Modern websites and online shops for businesses and freelancers.",

footerNav: "Navigation",
footerContact: "Contact",
footerLegal: "Legal",

services: "Services",

email: "Email",

imprint: "Legal Notice",
privacy: "Privacy Policy",

copyright:
  "© 2026 Meys Digital Studio. All rights reserved.",
  },

  ar: {
    home: "الرئيسية",
    vision: "رؤيتي",
    why: "لماذا Meys",
    portfolio: "الأعمال",
    contact: "تواصل",
    small: "وكالة رقمية",
    title1: "نصمم.",
    title2: "وأنت تنمو.",
    subtitle:
      "من أول فكرة إلى موقع كامل — حديث، سريع ومصمم خصيصًا لشركتك.",
    start: "ابدأ مشروعك",
    view: "شاهد الأعمال",

    visionNumber: "01 — رؤيتي",
    visionTitle: "من شغف إلى علامة.",
    vision1:
      "ما بدأ كشغف منذ الطفولة أصبح اليوم رؤيتي: مساعدة الشركات على النمو عبر الإنترنت من خلال مواقع حديثة واحترافية.",
    vision2:
      "مرحبًا، أنا ميس. منذ طفولتي كنت مهتمة بالتكنولوجيا والمشاريع الإبداعية. كنت دائمًا أتساءل كيف تُبنى المواقع وكيف تتحول الفكرة إلى شيء حقيقي.",
    vision3:
      "في عمر الثانية عشرة بدأت بنشر الفيديوهات على يوتيوب. ومع الوقت استطعت بناء مجتمع يضم أكثر من 50 ألف متابع. هذه التجربة أثرت فيّ كثيرًا.",
    vision4:
      "بعمر 17 سنة وبجانب دراستي في المرحلة الثانوية، طورت بالفعل أول مواقع لشركات حقيقية وأعمل كل يوم على تطوير مهاراتي.",
    vision5:
      "أتعلم كل يوم شيئًا جديدًا وأعمل بشغف على كل مشروع. هدفي هو إنشاء مواقع يكون عملائي فخورين بها فعلًا.",
    child: "سابقًا",
    childText: "هنا بدأ كل شيء.",
    today: "اليوم",
    todayText: "من أنا اليوم.",
    whyNumber: "02 — لماذا Meys؟",
whyTitle: "كل علامة لها قصتها الخاصة.",
whyCard1Title: "أكثر من مجرد كود.",
whyCard1Text: "الموقع هو أول انطباع عن الشركة، لذلك يجب أن يعكس هوية العلامة وما تمثله، وليس فقط أن يكون عبارة عن كود.",
whyCard2Title: "ليست قالبًا جاهزًا، بل علامتك.",
whyCard2Text: "أنا لا أعمل بحلول جاهزة، بل أصمم مواقع تناسب شركتك وهويتها.",
whyCard3Title: "أكثر من تطوير مواقع.",
whyCard3Text: "الظهور الاحترافي لا يعتمد فقط على الموقع. يمكنني أيضًا مساعدتك بالصور الاحترافية وتعديل الصور والفيديوهات القصيرة.",
whyCard4Title: "تعاون شخصي.",
whyCard4Text: "أهتم بأفكارك وأعمل معك على حل يناسب شركتك بشكل حقيقي.",

portfolioNumber: "03 — الأعمال",
portfolioTitle: "مشروع يوضح ما يمكن تحقيقه.",
portfolioText:
  "أول متجر إلكتروني قمت بتطويره بالكامل لشركة حقيقية، بتصميم حديث ومتجاوب، بدءًا من الفكرة وحتى الموقع النهائي.",

case: "المشروع 01",

projectName: "Mays R&S",

projectDescription:
  "متجر إلكتروني حديث للمطاعم والحلويات مع إدارة المنتجات، وسلة المشتريات، والدفع عبر Stripe، وتصميم متجاوب للكمبيوتر والهاتف.",

live: "عرض الموقع →",

servicesNumber: "04 — الخدمات",
servicesTitle: "الخدمات والأسعار",
servicesText:
  "يتم تطوير كل موقع بشكل خاص ليتناسب مع شركتك. الأسعار هي أسعار ابتدائية وقد تختلف حسب حجم المشروع والوظائف المطلوبة.",

priceNote:
  "ملاحظة: تكاليف النطاق والاستضافة وWix والخدمات الخارجية الأخرى يتحملها العميل. ويمكنني أيضًا توفير تصوير احترافي وتعديل الصور وإنتاج فيديوهات قصيرة عند الطلب. الأسعار ابتدائية وقد تختلف حسب المشروع.",

landingTitle: "صفحة هبوط",
landingText:
  "مثالية للشركات وأصحاب الأعمال الذين يريدون حضورًا احترافيًا على الإنترنت.",

wixTitle: "موقع Wix",
wixText:
  "سريع وحديث وبتكلفة مناسبة للشركات التي لا تحتاج إلى برمجة مخصصة.",

businessTitle: "موقع أعمال",
businessText:
  "مثالي للشركات التي ترغب في عرض معلومات أكثر والنمو بشكل احترافي.",

shopTitle: "متجر إلكتروني",
shopText:
  "للشركات التي تريد بيع منتجاتها عبر الإنترنت بشكل احترافي.",

customTitle: "حل ويب مخصص",
customText:
  "للأفكار الخاصة التي لا تناسب الحلول الجاهزة.",

supportTitle: "الصيانة والدعم",
supportText:
  "أستمر في تقديم الدعم والتحديثات حتى بعد نشر الموقع.",

from: "ابتداءً من",
request: "اطلب الآن ←",
customPrice: "السعر عند الطلب",
month: "/ شهريًا",

landing1: "تصميم مخصص",
landing2: "متوافق مع الهاتف والتابلت",
landing3: "نموذج تواصل",
landing4: "دمج واتساب",
landing5: "خرائط Google",
landing6: "روابط وسائل التواصل الاجتماعي",
landing7: "هيكل أساسي متوافق مع GDPR",

landingPrice: "ابتداءً من 349 €",
request: "طلب عرض →",

servicesNumber: "04 — الخدمات",
servicesTitle: "الخدمات والأسعار",
servicesText:
  "يتم تطوير كل موقع بشكل خاص ليتناسب مع شركتك. الأسعار هي أسعار ابتدائية وقد تختلف حسب حجم المشروع والوظائف المطلوبة.",

priceNote:
  "ملاحظة: تكاليف النطاق (Domain)، والاستضافة (Hosting)، ورسوم Wix، والخدمات الخارجية الأخرى يتحملها العميل. كما يمكنني عند الطلب توفير تصوير احترافي، وتعديل الصور، وإنتاج فيديوهات قصيرة. الأسعار المعروضة هي أسعار ابتدائية وقد تختلف حسب حجم المشروع.",

// Landing Page
landingTitle: "صفحة هبوط",
landingText:
  "مثالية للشركات وأصحاب الأعمال والمتاجر المحلية التي ترغب في الظهور بشكل احترافي على الإنترنت.",
landing1: "تصميم مخصص",
landing2: "متوافق مع الهاتف والأجهزة اللوحية",
landing3: "نموذج تواصل",
landing4: "دمج واتساب",
landing5: "خرائط Google",
landing6: "روابط وسائل التواصل الاجتماعي",
landing7: "هيكل متوافق مع GDPR",
landingPrice: "ابتداءً من 899 €",

// Wix Website
wixTitle: "موقع Wix",
wixText:
  "سريع وحديث وبتكلفة مناسبة للشركات التي لا تحتاج إلى برمجة مخصصة.",
wix1: "تصميم مخصص",
wix2: "تحسين للهواتف",
wix3: "نموذج تواصل",
wix4: "معرض صور",
wix5: "إدارة سهلة",
wix6: "نشر سريع",
wixPrice: "ابتداءً من 1.499€",

// Business Website
businessTitle: "موقع أعمال",
businessText:
  "مثالي للشركات التي ترغب في عرض المزيد من المعلومات والنمو بشكل احترافي.",
business1: "تصميم مخصص",
business2: "عدة صفحات",
business3: "حركات وتصميمات حديثة",
business4: "نموذج تواصل",
business5: "معرض صور",
business6: "تهيئة أساسية لمحركات البحث (SEO)",
business7: "سرعة تحميل عالية",
businessPrice: "ابتداءً من 2.499€",

// Online Shop
shopTitle: "متجر إلكتروني",
shopText:
  "للشركات التي ترغب في بيع منتجاتها عبر الإنترنت بطريقة احترافية.",
shop1: "إدارة المنتجات",
shop2: "سلة المشتريات",
shop3: "الدفع الإلكتروني عبر Stripe",
shop4: "التصنيفات",
shop5: "أكواد الخصم",
shop6: "خيارات الشحن",
shop7: "إتمام الطلبات بأمان",
shopPrice: "ابتداءً من 3.999€",

// Custom Solution
customTitle: "حل ويب مخصص",
customText:
  "للأفكار الخاصة التي لا تناسب الحلول الجاهزة.",
custom1: "أنظمة الحجز",
custom2: "مناطق العملاء",
custom3: "نماذج مخصصة",
custom4: "وظائف خاصة",
custom5: "ربط API",
customPrice: "السعر عند الطلب",

// Support
supportTitle: "الصيانة والدعم",
supportText:
  "أستمر في تقديم الدعم والتحديثات حتى بعد نشر الموقع.",
support1: "إضافة منتجات جديدة",
support2: "تعديل النصوص أو الصور",
support3: "إصلاح المشاكل التقنية",
support4: "تحديثات منتظمة",
support5: "تعديلات تصميم بسيطة",
supportPrice: "ابتداءً من 49 € / شهريًا",

request: "إرسال طلب →",

contactNumber: "05 — تواصل",
contactTitle: "لنبدأ مشروعك.",
contactText:
  "هل لديك فكرة لموقع إلكتروني أو متجر إلكتروني، أو تحتاج إلى المساعدة في الصور أو الفيديوهات أو التصميم؟ أرسل لي رسالة وسنجد معًا الحل المناسب لمشروعك.",

emailBtn: "إرسال بريد إلكتروني →",
whatsappBtn: "التواصل عبر واتساب →",

contactNote: "عادةً يتم الرد خلال 24 إلى 48 ساعة.",

footerText:
  "مواقع إلكترونية ومتاجر إلكترونية حديثة للشركات وأصحاب الأعمال.",

footerNav: "التنقل",
footerContact: "التواصل",
footerLegal: "المعلومات القانونية",

services: "الخدمات",

email: "البريد الإلكتروني",

imprint: "بيانات الناشر",
privacy: "سياسة الخصوصية",

copyright:
  "© 2026 Meys Digital Studio. جميع الحقوق محفوظة.",

  },
};










 return (
  <main className="page"> 
      <nav className="navbar">
        <div className="brand">
          <img src={logo} alt="Meys Logo" className="logo" />
          <span>Meys</span>
        </div>

      <div className="links">
  <a href="#home">{t[lang].home}</a>
  <a href="#vision">{t[lang].vision}</a>
  <a href="#why">{t[lang].why}</a>
  <a href="#portfolio">{t[lang].portfolio}</a>
  <a href="#contact">{t[lang].contact}</a>
</div>

<div className="languageSwitch">
  <button onClick={() => setLang("de")}>DE</button>
  <button onClick={() => setLang("en")}>EN</button>
  <button onClick={() => setLang("ar")}>AR</button>
</div>
      </nav>

<section className="hero" id="home">
  <div className="heroText">
    <p className="small">{t[lang].small}</p>

    <h1>
      {t[lang].title1}
      <span>{t[lang].title2}</span>
    </h1>

    <p className="subtitle">{t[lang].subtitle}</p>

    <div className="buttons">
      <a href="#contact" className="primary">
        {t[lang].start}
      </a>

      <a href="#portfolio" className="secondary">
        {t[lang].view}
      </a>
    </div>
  </div>

  <div className="visual">
    <div className="laptop">
      <div className="screen">
        <h2>Meys</h2>
        <p>We design. You grow.</p>
      </div>
    </div>
    <div className="pinkGlow"></div>
  </div>
</section>

<section className="visionSection" id="vision">
  <div className="visionText">
    <p className="sectionNumber">
  {t[lang].visionNumber}
</p>
    <h2>{t[lang].visionTitle}</h2>

<p>{t[lang].vision1}</p>

<p>{t[lang].vision2}</p>

<p>{t[lang].vision3}</p>

<p>{t[lang].vision4}</p>

<p className="italicText">
  {t[lang].vision5}
</p>
  </div>

  <div className="visionImages">
    <div className="photoCard childCard">
      <img src={child} alt="Meys als Kind" />
      <span>{t[lang].child}</span>
<p>{t[lang].childText}</p>
    </div>

    <div className="photoCard todayCard">
      <img src={today} alt="Meys heute" />
      <span>{t[lang].today}</span>
<p>{t[lang].todayText}</p>
    </div>
  </div>
</section>

<section className="whySection" id="why">
  <p className="sectionNumber">{t[lang].whyNumber}</p>

  <h2>{t[lang].whyTitle}</h2>

  <div className="whyGrid">
    <article className="whyCard">
      <h3>{t[lang].whyCard1Title}</h3>
      <p>{t[lang].whyCard1Text}</p>
    </article>

    <article className="whyCard">
      <h3>{t[lang].whyCard2Title}</h3>
      <p>{t[lang].whyCard2Text}</p>
    </article>

    <article className="whyCard">
      <h3>{t[lang].whyCard3Title}</h3>
      <p>{t[lang].whyCard3Text}</p>
    </article>

    <article className="whyCard">
      <h3>{t[lang].whyCard4Title}</h3>
      <p>{t[lang].whyCard4Text}</p>
    </article>
  </div>
</section>

    <section className="portfolioSection" id="portfolio">
  <img src={logo} alt="" className="portfolioBgLogo" />

  <div className="portfolioGlow one"></div>
  <div className="portfolioGlow two"></div>

  <div className="portfolioHeader">
    <p className="sectionNumber">{t[lang].portfolioNumber}</p>
    <h2>{t[lang].portfolioTitle}</h2>
    <p>{t[lang].portfolioText}</p>
  </div>

  <div className="portfolioImage">
    <img src={portfolioMays} alt="Mays Online-Shop" />
  </div>

  <div className="portfolioContent">
    <p className="caseText">{t[lang].case}</p>
    <h3>{t[lang].projectName}</h3>

    <p>{t[lang].projectDescription}</p>

    <div className="techTags">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>React</span>
      <span>Node.js</span>
      <span>Express</span>
      <span>Stripe</span>
      <span>Railway</span>
      <span>GitHub</span>
    </div>

    <a href="https://mays-r-s.de" target="_blank" rel="noopener noreferrer" className="liveBtn">
      {t[lang].live}
    </a>
  </div>
</section>

<section className="servicesSection" id="services">
  <div className="servicesHeader">
    <p className="sectionNumber">{t[lang].servicesNumber}</p>
    <h2>{t[lang].servicesTitle}</h2>
    <p>{t[lang].servicesText}</p>
    <span className="priceNote">{t[lang].priceNote}</span>
  </div>

  <div className="servicesGrid">
    <article className="serviceCard">
      <h3>{t[lang].landingTitle}</h3>
      <p>{t[lang].landingText}</p>
      <ul>
        <li>{t[lang].landing1}</li>
        <li>{t[lang].landing2}</li>
        <li>{t[lang].landing3}</li>
        <li>{t[lang].landing4}</li>
        <li>{t[lang].landing5}</li>
        <li>{t[lang].landing6}</li>
        <li>{t[lang].landing7}</li>
      </ul>
      <strong>{t[lang].landingPrice}</strong>
      <a href="#contact">{t[lang].request}</a>
    </article>

    <article className="serviceCard">
      <h3>{t[lang].wixTitle}</h3>
      <p>{t[lang].wixText}</p>
      <ul>
        <li>{t[lang].wix1}</li>
        <li>{t[lang].wix2}</li>
        <li>{t[lang].wix3}</li>
        <li>{t[lang].wix4}</li>
        <li>{t[lang].wix5}</li>
        <li>{t[lang].wix6}</li>
      </ul>
      <strong>{t[lang].wixPrice}</strong>
      <a href="#contact">{t[lang].request}</a>
    </article>

    <article className="serviceCard">
      <h3>{t[lang].businessTitle}</h3>
      <p>{t[lang].businessText}</p>
      <ul>
        <li>{t[lang].business1}</li>
        <li>{t[lang].business2}</li>
        <li>{t[lang].business3}</li>
        <li>{t[lang].business4}</li>
        <li>{t[lang].business5}</li>
        <li>{t[lang].business6}</li>
        <li>{t[lang].business7}</li>
      </ul>
      <strong>{t[lang].businessPrice}</strong>
      <a href="#contact">{t[lang].request}</a>
    </article>

    <article className="serviceCard highlightCard">
      <h3>{t[lang].shopTitle}</h3>
      <p>{t[lang].shopText}</p>
      <ul>
        <li>{t[lang].shop1}</li>
        <li>{t[lang].shop2}</li>
        <li>{t[lang].shop3}</li>
        <li>{t[lang].shop4}</li>
        <li>{t[lang].shop5}</li>
        <li>{t[lang].shop6}</li>
        <li>{t[lang].shop7}</li>
      </ul>
      <strong>{t[lang].shopPrice}</strong>
      <a href="#contact">{t[lang].request}</a>
    </article>

    <article className="serviceCard">
      <h3>{t[lang].customTitle}</h3>
      <p>{t[lang].customText}</p>
      <ul>
        <li>{t[lang].custom1}</li>
        <li>{t[lang].custom2}</li>
        <li>{t[lang].custom3}</li>
        <li>{t[lang].custom4}</li>
        <li>{t[lang].custom5}</li>
      </ul>
      <strong>{t[lang].customPrice}</strong>
      <a href="#contact">{t[lang].request}</a>
    </article>

    <article className="serviceCard">
      <h3>{t[lang].supportTitle}</h3>
      <p>{t[lang].supportText}</p>
      <ul>
        <li>{t[lang].support1}</li>
        <li>{t[lang].support2}</li>
        <li>{t[lang].support3}</li>
        <li>{t[lang].support4}</li>
        <li>{t[lang].support5}</li>
      </ul>
      <strong>{t[lang].supportPrice}</strong>
      <a href="#contact">{t[lang].request}</a>
    </article>
  </div>
</section>

<section className="contactSection" id="contact">
  <div className="contactGlow"></div>

  <div className="contactBox">
    <p className="sectionNumber">{t[lang].contactNumber}</p>

    <h2>{t[lang].contactTitle}</h2>

    <p>{t[lang].contactText}</p>

    <div className="contactButtons">
      <a
        href="mailto:meys2008business@gmail.com"
        className="emailBtn"
      >
        {t[lang].emailBtn}
      </a>

      <a
        href="https://wa.me/4915754591981"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsappBtn"
      >
        {t[lang].whatsappBtn}
      </a>
    </div>

    <span className="contactNote">
      {t[lang].contactNote}
    </span>
  </div>
</section>

<footer className="siteFooter">
  <div className="footerGlow"></div>

  <div className="footerTop">

    <div className="footerBrand">
      <h3>Meys Digital Studio</h3>
      <p>We design. You grow.</p>
      <span>{t[lang].footerText}</span>
    </div>

    <div className="footerColumn">
      <h4>{t[lang].footerNav}</h4>

      <a href="#home">{t[lang].home}</a>
      <a href="#vision">{t[lang].vision}</a>
      <a href="#portfolio">{t[lang].portfolio}</a>
      <a href="#services">{t[lang].services}</a>
      <a href="#contact">{t[lang].contact}</a>
    </div>

    <div className="footerColumn">
      <h4>{t[lang].footerContact}</h4>

      <a href="mailto:meys2008business@gmail.com">
        {t[lang].email}
      </a>

      <a
        href="https://wa.me/4915754591981"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>

      <a
        href="https://youtube.com/@meys_barbie?si=ecJZCFmzUtuLSHXR"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube
      </a>
    </div>

    <div className="footerColumn">
      <h4>{t[lang].footerLegal}</h4>

      <a href="/impressum">
        {t[lang].imprint}
      </a>

      <a href="/datenschutz">
        {t[lang].privacy}
      </a>
    </div>

  </div>

  <div className="footerBottom">
    <p>{t[lang].copyright}</p>
  </div>
</footer>



      </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
    </Routes>
  );
}

export default App;