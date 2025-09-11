import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


//animaciones
import PixelBlast from './components/PixelBlast';
import AnimatedContent from './components/AnimatedContent';


// imagens portada de proyectos
import loginAQ from './public/loginAQ.png';


export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  //numero y mensaj para WhatsApp
  const whatsappNumber = "59167720813";
  const whatsappMessage = "Hola, quiero solicitar una cotización";
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
    /*{
      id: 2,
      title: "Sistema de Gestión ERP AutiQo",
      description: "Sistema de Gestion de Productos de ventas y creación de proformas de los mismos",
      category: "Web",
      image: loginAQ
    },
    {
      id: 3,
      title: "Sistema de Gestión ERP AutiQo",
      description: "Sistema de Gestion de Productos de ventas y creación de proformas de los mismos",
      category: "Web",
      image: loginAQ
    }*/
  ];

  // Datos de ejemplo para empresas colaboradoras
  const companies = [
    { id: 1, name: "Empresa Uno", logo: "" },
    { id: 2, name: "Empresa Dos", logo: "" },
    { id: 3, name: "Empresa Tres", logo: "" },
    { id: 4, name: "Empresa Cuatro", logo: "" },
    { id: 5, name: "Empresa Cinco", logo: "" },
    { id: 6, name: "Empresa Seis", logo: "" }
  ];

  // Filtros para proyectos
  const [filter, setFilter] = useState("Todos");
  const categories = ["Todos", "Web"];

  const filteredProjects = filter === "Todos"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className={`top-0 bg-white shadow-md z-50 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#25334b]">SOFTAND</h1>
          <nav className="hidden md:flex space-x-8">
            {/*            <a href="#inicio" className="hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-blue-600 transition-colors">Proyectos</a>
            <a href="#clientes" className="hover:text-blue-600 transition-colors">Clientes</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>*/}
          </nav>
          <button
            onClick={() => window.open(whatsappLink, "_blank")}
            className="bg-[#25334b] text-white px-4 py-2 rounded hover:bg-[#1a2533] transition-colors">
            Contactar
          </button>
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
              color="#5566A6" // blanco-azulado para armonía
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
              <span className="inline-block backdrop-blur-md px-2 py-1 rounded">Software a medida.</span>
              <br />
              <span className="inline-block backdrop-blur-md px-2 py-1 rounded">Simple, claro y funcional.</span>
            </h2>
            <p className="text-lg text-gray-200 mb-10 drop-shadow-md">
              <span className="inline-block px-1 py-0.5 rounded" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.6)' }}>Creamos sistemas, sitios web y apps adaptadas 100% a tu negocio.</span>            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => window.open(whatsappLink, "_blank")}
                className="bg-white text-[#25334b] border border-white px-6 py-3 rounded hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg">
                Solicitar una cotización
              </button>
              <button
                className="bg-[#25334b] text-white px-6 py-3 rounded hover:bg-[#1a2533] transition-all transform hover:-translate-y-1 shadow-lg border border-white"
                onClick={() => { document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' }); }}
              >
                Ver proyectos
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#25334b] mb-12">Nuestros Servicios</h2>
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
              <div className="flex items-start gap-4 p-6 rounded-lg hover:shadow-md transition-all">
                <span className="text-3xl">🔧</span>
                <div>
                  <h3 className="font-semibold text-lg">Software a medida</h3>
                  <p className="text-gray-600">Creamos soluciones que se adaptan a tus procesos, no al revés.</p>
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
              <div className="flex items-start gap-4 p-6 rounded-lg hover:shadow-md transition-all">
                <span className="text-3xl">🌐</span>
                <div>
                  <h3 className="font-semibold text-lg">Sitios web profesionales</h3>
                  <p className="text-gray-600">Desde páginas corporativas hasta e-commerce listos para vender.</p>
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
              <div className="flex items-start gap-4 p-6 rounded-lg hover:shadow-md transition-all">
                <span className="text-3xl">📱</span>
                <div>
                  <h3 className="font-semibold text-lg">Aplicaciones móviles</h3>
                  <p className="text-gray-600">Desarrollo de apps Android/IOS a medida o híbridas.</p>
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
              <div className="flex items-start gap-4 p-6 rounded-lg hover:shadow-md transition-all">
                <span className="text-3xl">🧠</span>
                <div>
                  <h3 className="font-semibold text-lg">Consultoría y soporte</h3>
                  <p className="text-gray-600">Te ayudamos a pensar la solución antes de programarla.</p>
                </div>
              </div>
            </AnimatedContent>

          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="px-6 py-20 bg-gray-300">
        <div className="max-w-6xl mx-auto justify-items-center">
          <h2 className="text-3xl font-bold text-center text-[#25334b] mb-6">Nuestros Proyectos</h2>
          <p className="text-center text-gray-600 mb-12">Descubre algunos de nuestros trabajos más recientes</p>

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
                  className={`mx-2 mb-2 px-4 py-2 rounded-full ${filter === category ? 'bg-[#25334b] text-white' : 'bg-white text-[#25334b]'
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
                ? "grid-cols-1 place-items-center" // fuerza al centro si solo hay 1
                : filteredProjects.length === 2
                  ? "grid-cols-1 md:grid-cols-2" // dos en medio
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
            >              {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 hover:shadow-xl transition-transform duration-600 ease-out w-full max-w-sm"
              >
                <img
                  src={project.image || "/images/placeholder.png"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-[#3d6dbf] font-semibold">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                  <p className="text-[#25334b] mb-2">{project.description}</p>
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
                      Ver detalles
                    </span>
                  </button>
                </div>
              </div>
              </div>
            ))}
        </div>
      </AnimatedContent>
    </div>
      </section >

    {/* Clientes Section */ }
  {/*      
      <section id="clientes" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#25334b] mb-6">Empresas que confían en nosotros</h2>
          <p className="text-center text-gray-600 mb-12">Colaboramos con empresas de todos los tamaños y sectores</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map(company => (
              <div key={company.id} className="flex justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={company.logo || "/images/placeholder.png"}
                  alt={company.name}
                  className="max-h-12 max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      */}


  {/* Contacto Section */ }
  {/*     <section id="contacto" className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#25334b] mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-lg text-gray-600 mb-10">Contáctanos y recibe una cotización sin compromiso</p>

          <form className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto  bg-gradient-to-r from-gray-500 to-indigo-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Nombre"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Empresa"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Cuéntanos sobre tu proyecto"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-[#25334b] text-white px-8 py-3 rounded hover:bg-[#1a2533] transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>}
      */}

  {/* Footer */ }
  <footer className="bg-[#25334b] text-white py-12 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Sobre nosotros */}
      <div>
        <h3 className="text-2xl font-bold mb-4">SOFTAND</h3>
        <p className="text-gray-300">Desarrollo de software a medida para tu negocio.</p>
      </div>

      {/* Servicios */}
      <div>
        <h4 className="font-semibold mb-4">Servicios</h4>
        <ul className="space-y-3 text-gray-300">
          {["Software a medida", "Sitios web", "Apps móviles", "Consultoría"].map((service, i) => (
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
        <h4 className="font-semibold mb-4">Enlaces</h4>
        <ul className="space-y-3 text-gray-300">
          {["#inicio", "#servicios", "#proyectos", "#clientes"].map((link, i) => (
            <li key={i} className="group relative overflow-hidden">
              <a href={link} className="block transition-all duration-300 group-hover:pl-2 group-hover:text-white">
                {link.replace("#", "").charAt(0).toUpperCase() + link.replace("#", "").slice(1)}
              </a>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 ease-out group-hover:w-full"></div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacto */}
      <div>
        <h4 className="font-semibold mb-4">Contacto</h4>
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
            <a href={whatsappLink} className="hover:text-blue-400 transition-colors">+591 123 456 78</a>
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
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all transform hover:scale-125">
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
      <p>© {new Date().getFullYear()} SOFTAND. Todos los derechos reservados.</p>
    </div>
  </footer>

    </div >
  );
}