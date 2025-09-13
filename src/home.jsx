import React, { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

//animaciones
import PixelBlast from './components/PixelBlast';
import AnimatedContent from './components/AnimatedContent';

// imagens portada de proyectos
import loginAQ from './assets/autiqo/loginAQ.png';

// Crear contexto para tema e idioma
const AppContext = createContext();

// Hook personalizado para usar el contexto
export const useApp = () => useContext(AppContext);

// Traducciones
const translations = {
  es: {
    title: "SOFTAND",
    heroTitle1: "Software a medida.",
    heroTitle2: "Simple, claro y funcional.",
    heroDescription: "Creamos sistemas, sitios web y apps adaptadas 100% a tu negocio.",
    contactUs: "Contáctanos",
    viewProjects: "Ver proyectos",
    services: "Nuestros Servicios",
    customSoftware: "Software a medida",
    customSoftwareDesc: "Creamos soluciones que se adaptan a tus procesos, no al revés.",
    webSites: "Sitios web profesionales",
    webSitesDesc: "Desde páginas corporativas hasta e-commerce listos para vender.",
    mobileApps: "Aplicaciones móviles",
    mobileAppsDesc: "Desarrollo de apps Android/IOS a medida o híbridas.",
    consulting: "Consultoría y soporte",
    consultingDesc: "Te ayudamos a pensar la solución antes de programarla.",
    projects: "Nuestros Proyectos",
    projectsDesc: "Descubre algunos de nuestros trabajos más recientes",
    all: "Todos",
    web: "Web",
    viewDetails: "Ver detalles",
    footerDesc: "Desarrollo de software a medida para tu negocio.",
    servicesTitle: "Servicios",
    linksTitle: "Enlaces",
    contactTitle: "Contacto",
    home: "Inicio",
    servicesLink: "Servicios",
    projectsLink: "Proyectos",
    clients: "Clientes",
    rights: "Todos los derechos reservados."
  },
  en: {
    title: "SOFTAND",
    heroTitle1: "Custom software.",
    heroTitle2: "Simple, clear and functional.",
    heroDescription: "We create systems, websites and apps 100% adapted to your business.",
    contactUs: "Contact us",
    viewProjects: "View projects",
    services: "Our Services",
    customSoftware: "Custom software",
    customSoftwareDesc: "We create solutions that adapt to your processes, not the other way around.",
    webSites: "Professional websites",
    webSitesDesc: "From corporate pages to e-commerce ready to sell.",
    mobileApps: "Mobile applications",
    mobileAppsDesc: "Development of custom Android/IOS apps or hybrid ones.",
    consulting: "Consulting and support",
    consultingDesc: "We help you think about the solution before programming it.",
    projects: "Our Projects",
    projectsDesc: "Discover some of our most recent works",
    all: "All",
    web: "Web",
    viewDetails: "View details",
    footerDesc: "Custom software development for your business.",
    servicesTitle: "Services",
    linksTitle: "Links",
    contactTitle: "Contact",
    home: "Home",
    servicesLink: "Services",
    projectsLink: "Projects",
    clients: "Clients",
    rights: "All rights reserved."
  },
  pt: {
    title: "SOFTAND",
    heroTitle1: "Software personalizado.",
    heroTitle2: "Simples, claro e funcional.",
    heroDescription: "Criamos sistemas, sites e aplicativos adaptados 100% ao seu negócio.",
    contactUs: "Contate-nos",
    viewProjects: "Ver projetos",
    services: "Nossos Serviços",
    customSoftware: "Software personalizado",
    customSoftwareDesc: "Criamos soluções que se adaptam aos seus processos, não o contrário.",
    webSites: "Sites profissionais",
    webSitesDesc: "Desde páginas corporativas até e-commerce prontos para vender.",
    mobileApps: "Aplicativos móveis",
    mobileAppsDesc: "Desenvolvimento de aplicativos Android/IOS personalizados ou híbridos.",
    consulting: "Consultoria e suporte",
    consultingDesc: "Ajudamos você a pensar na solução antes de programá-la.",
    projects: "Nossos Projetos",
    projectsDesc: "Descubra alguns dos nossos trabalhos mais recentes",
    all: "Todos",
    web: "Web",
    viewDetails: "Ver detalhes",
    footerDesc: "Desenvolvimento de software personalizado para o seu negócio.",
    servicesTitle: "Serviços",
    linksTitle: "Links",
    contactTitle: "Contato",
    home: "Início",
    servicesLink: "Serviços",
    projectsLink: "Projetos",
    clients: "Clientes",
    rights: "Todos os direitos reservados."
  }
};

// Proveedor de contexto
export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    // Cargar preferencias guardadas
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    const savedLanguage = localStorage.getItem("language") || "es";

    setIsDarkMode(savedDarkMode);
    setLanguage(savedLanguage);

    // Aplicar tema al cargar
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <AppContext.Provider value={{
      isDarkMode,
      toggleDarkMode,
      language,
      changeLanguage,
      t
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode, language, changeLanguage, t } = useApp();
  const [open, setOpen] = useState(false);

  //numero y mensaj para WhatsApp
  const whatsappNumber = "59167720813";
  const whatsappMessage = language === "es"
    ? "Hola, quiero solicitar una cotización"
    : language === "en"
      ? "Hello, I want to request a quote"
      : "Olá, quero solicitar um orçamento";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Datos de ejemplo para proyectos
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión ERP AutiQo",
      description: "Sistema de Gestion de Productos de ventas y creación de proformas de los mismos",
      category: "Web",
      image: loginAQ,
      url: "/proyectos/autiqo"
    },
  ];

  //banderas
  const languageFlags = {
    es: "🇪🇸",  // Bandera España
    en: "🇺🇸",  // Bandera USA
    pt: "🇧🇷"   // Bandera Brasil (o 🇵🇹 Portugal)
  };

  // Filtros para proyectos
  const [filter, setFilter] = useState(t("all"));
  const categories = [t("all"), t("web")];

  const filteredProjects = filter === t("all")
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors duration-300`}>
      {/* Header */}
      <header
        className={`top-0 ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-md z-50 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-[#25334b] dark:text-white">{t("title")}</h1>

          {/* Botones extras */}
          <div className="flex items-center gap-4">

            {/* Selector de idioma */}
            <div className="relative">
              {/* Botón principal */}
              <button
                onClick={() => setOpen(!open)}
                className={`
          p-2 rounded-full flex items-center gap-1 text-sm font-medium
          ${isDarkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}
          transition-all duration-200
        `}
              >
                <span className="text-lg">{languageFlags[language]}</span>
                <span className="text-xs">▼</span>
              </button>

              {/* Menú desplegable */}
              {open && (
                <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-1 min-w-[80px] z-50">
                  {Object.entries(languageFlags).map(([langCode, flag]) => (
                    <button
                      key={langCode}
                      onClick={() => {
                        changeLanguage(langCode);
                        setOpen(false);
                      }}
                      className={`
                w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                ${language === langCode
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }
                flex items-center gap-2
              `}
                    >
                      <span className="text-lg">{flag}</span>
                      <span>{langCode.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>


            {/* Dark/Light Mode Toggle */}
            <label className="inline-flex items-center relative cursor-pointer">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="peer hidden"
              />
              <div
                className="border border-gray-300 dark:border-white relative w-[90px] h-[40px] bg-white dark:bg-gray-800 peer-checked:bg-zinc-600 rounded-full
            after:absolute after:content-[''] after:w-[30px] after:h-[30px] after:bg-gradient-to-r from-orange-500 to-yellow-400
            peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px]
            peer-checked:after:left-[85px] peer-checked:after:translate-x-[-100%] shadow-md duration-300 after:duration-300 after:shadow-md
            after:border after:border-gray-300 dark:after:border-white"
              ></div>

              {/* Sol */}
              <svg
                className="absolute left-[10px] w-5 h-5 fill-yellow-400 peer-checked:opacity-40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,17a5,5 0 1,1 0-10a5,5 0 1,1 0,10ZM13,0h-2v4h2V0ZM13,20h-2v4h2v-4ZM4,11H0v2h4v-2ZM24,11h-4v2h4v-2ZM5.64,5.64L3.22,3.22L1.81,4.64L4.23,7.05L5.64,5.64ZM19.77,19.77L17.36,17.36L15.95,18.77L18.36,21.18L19.77,19.77ZM5.64,18.36L4.23,19.77L1.81,17.36L3.22,15.95L5.64,18.36ZM19.77,4.23L18.36,5.64L15.95,3.22L17.36,1.81L19.77,4.23Z" />
              </svg>

              {/* Luna */}
              <svg
                className="absolute right-[10px] w-5 h-5 fill-gray-800 opacity-60 peer-checked:fill-white peer-checked:opacity-90"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.75 15.5A9 9 0 0 1 9.25 3a9.002 9.002 0 1 0 12.5 12.5z" />
              </svg>
            </label>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative bg-gradient-to-r from-[#25334b] from-45% to-[#3a5d94] overflow-hidden"
      >
        <div className="relative w-full h-full">
          {/* Fondo PixelBlast */}
          <div className="absolute top-[-50px] w-full h-full">
            <PixelBlast
              variant="square"
              pixelSize={3}
              color="#5566A6"
              patternScale={2}
              patternDensity={1}
              pixelSizeJitter={0}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}
              liquid
              liquidStrength={0}
              liquidRadius={0}
              liquidWobbleSpeed={0}
              speed={0.6}
              edgeFade={0.25}
              transparent
            />
          </div>

          {/* Contenido encima con padding */}
          <div className="relative px-6 py-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              <span className="inline-block backdrop-blur-md px-2 py-1 rounded">{t("heroTitle1")}</span>
              <br />
              <span className="inline-block backdrop-blur-md px-2 py-1 rounded">{t("heroTitle2")}</span>
            </h2>
            <p className="text-lg text-gray-200 mb-10 drop-shadow-md">
              <span className="inline-block px-1 py-0.5 rounded" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.6)' }}>{t("heroDescription")}</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => window.open(whatsappLink, "_blank")}
                className="bg-white text-[#25334b] border border-white px-6 py-3 rounded hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg">
                {t("contactUs")}
              </button>
              <button
                className="bg-[#25334b] text-white px-6 py-3 rounded hover:bg-[#1a2533] transition-all transform hover:-translate-y-1 shadow-lg border border-white"
                onClick={() => { document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' }); }}
              >
                {t("viewProjects")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className={`px-6 py-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold text-center ${isDarkMode ? "text-white" : "text-[#25334b]"} mb-12`}>{t("services")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              {/*A medida*/}
              <div className={`flex items-start gap-4 p-6 rounded-lg hover:shadow-md transition-all ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white"}`}>
                <span className="text-3xl">🔧</span>
                <div>
                  <h3 className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>{t("customSoftware")}</h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{t("customSoftwareDesc")}</p>
                </div>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              {/*Sitios Web*/}
              <div className={`flex items-start gap-4 p-6 rounded-lg hover:shadow-md transition-all ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white"}`}>
                <span className="text-3xl">🌐</span>
                <div>
                  <h3 className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>{t("webSites")}</h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{t("webSitesDesc")}</p>
                </div>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              {/*Apps moviles*/}
              <div className={`flex items-start gap-4 p-6 rounded-lg hover:shadow-md transition-all ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white"}`}>
                <span className="text-3xl">📱</span>
                <div>
                  <h3 className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>{t("mobileApps")}</h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{t("mobileAppsDesc")}</p>
                </div>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              {/*Consultoria y soporte*/}
              <div className={`flex items-start gap-4 p-6 rounded-lg hover:shadow-md transition-all ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white"}`}>
                <span className="text-3xl">🧠</span>
                <div>
                  <h3 className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>{t("consulting")}</h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{t("consultingDesc")}</p>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className={`px-6 py-20 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}>
        <div className="max-w-6xl mx-auto justify-items-center">
          <h2 className={`text-3xl font-bold text-center ${isDarkMode ? "text-white" : "text-[#25334b]"} mb-6`}>{t("projects")}</h2>
          <p className={`text-center ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-12`}>{t("projectsDesc")}</p>

          {/* Filtros */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <div className="flex justify-center mb-10 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`mx-2 mb-2 px-4 py-2 rounded-full ${filter === category
                    ? 'bg-[#25334b] text-white'
                    : isDarkMode
                      ? 'bg-gray-600 text-white'
                      : 'bg-white text-[#25334b]'
                    } transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedContent>

          {/* Grid de Proyectos */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <div
              className={`grid gap-8 justify-items-center align-middle ${filteredProjects.length === 1
                ? "grid-cols-1 place-items-center"
                : filteredProjects.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
            >
              {filteredProjects.map(project => (
                <div
                  key={project.id}
                  className={`rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 hover:shadow-xl transition-transform duration-600 ease-out w-full max-w-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
                >
                  <img
                    src={project.image || "/images/placeholder.png"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-sm text-[#3d6dbf] font-semibold">{project.category}</span>
                    <h3 className={`text-xl font-bold mt-2 mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{project.title}</h3>
                    <p className={isDarkMode ? "text-gray-300" : "text-[#25334b]"}>{project.description}</p>
                    <div>
                      <button
                        className="learn-more group relative w-44 h-10 bg-transparent p-0 border-0 outline-none cursor-pointer font-inherit text-inherit"
                        onClick={() => {
                          navigate(project.url);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <span className="circle relative block w-10 h-10 rounded-full bg-[#25334b] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
                          <span className="icon arrow absolute top-0 bottom-0 left-2 m-auto w-4 h-0.5 bg-transparent transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:translate-x-3 group-hover:bg-white">
                            <span className="before content-[''] absolute top-[-0.25rem] right-[0.1rem] w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></span>
                          </span>
                        </span>
                        <span className="button-text absolute inset-0 ml-6 py-2 text-center text-[#282936] text-sm font-bold uppercase leading-relaxed transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
                          {t("viewDetails")}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#25334b] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre nosotros */}
          <div>
            <h3 className="text-2xl font-bold mb-4">SOFTAND</h3>
            <p className="text-gray-300">{t("footerDesc")}</p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold mb-4">{t("servicesTitle")}</h4>
            <ul className="space-y-3 text-gray-300">
              {[t("customSoftware"), t("webSites"), t("mobileApps"), t("consulting")].map((service, i) => (
                <li key={i} className="group relative overflow-hidden">
                  <a href="#" className="block cursor-pointer transition-all duration-300 group-hover:pl-2">
                    {service}
                  </a>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 ease-out group-hover:w-full"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-4">{t("linksTitle")}</h4>
            <ul className="space-y-3 text-gray-300">
              {[t("home"), t("servicesLink"), t("projectsLink"), t("clients")].map((link, i) => (
                <li key={i} className="group relative overflow-hidden">
                  <a href={`#${link.toLowerCase()}`} className="block transition-all duration-300 group-hover:pl-2 group-hover:text-white">
                    {link}
                  </a>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 ease-out group-hover:w-full"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">{t("contactTitle")}</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@softand.com" className="hover:text-blue-400 transition-colors">info@softand.com</a>
              </li>
              <li className="flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={whatsappLink} className="hover:text-blue-400 transition-colors">+591 677 208 13</a>
              </li>
              <li className="flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="hover:text-blue-400 transition-colors">Bolivia, Santa Cruz de la Sierra</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes sociales centradas */}
        <div className="flex justify-center mt-8 space-x-6 text-2xl">
          <a href="https://www.facebook.com/share/1DHB4D7gQ2/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all transform hover:scale-125">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/softandbo/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all transform hover:scale-125">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-all transform hover:scale-125">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-125">
            <i className="bi bi-twitter-x"></i>
          </a>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© {new Date().getFullYear()} SOFTAND. {t("rights")}</p>
        </div>
      </footer>
    </div>
  );
}