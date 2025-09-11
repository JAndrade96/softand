import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <header className="flex justify-start items-center mb-19">
        <h1 className="text-3xl font-bold text-[#25334b]">SOFTAND</h1>
      </header>
      <section className="text-center mb-20">
        <h2 className="text-4xl font-bold text-[#25334b] mb-4">
          Software a medida.<br /> Simple, claro y funcional.
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Creamos sistemas, sitios web y apps adaptadas 100% a tu negocio.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-[#25334b] border border-[#25334b] px-6 py-2 rounded hover:bg-[#f5f5f5]">
            Solicitar una cotización
          </button>
          <button className="bg-[#25334b] text-white px-6 py-2 rounded hover:bg-[#1a2533]">
            Ver proyectos
          </button>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="flex items-start gap-4">
          <span className="text-2xl">🔧</span>
          <div>
            <h3 className="font-semibold text-lg">Software a medida</h3>
            <p className="text-gray-600">Creamos soluciones que se adaptan a tus procesos, no al revés.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-2xl">🌐</span>
          <div>
            <h3 className="font-semibold text-lg">Sitios web profesionales</h3>
            <p className="text-gray-600">Desde páginas corporativas hasta e-commerce listos para vender.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-2xl">📱</span>
          <div>
            <h3 className="font-semibold text-lg">Aplicaciones móviles</h3>
            <p className="text-gray-600">Desarrollo de apps Android/IOS a medida o híbridas.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-2xl">🧠</span>
          <div>
            <h3 className="font-semibold text-lg">Consultoría y soporte</h3>
            <p className="text-gray-600">Te ayudamos a pensar la solución antes de programarla.</p>
          </div>
        </div>
      </section>
    </div>
  );
}