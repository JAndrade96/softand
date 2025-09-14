// src/proyects/autiqo.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";


//Iconos utilizados 
import {
    FaArrowLeft,
    FaCar,
    FaMotorcycle,
    FaChartLine,
    FaUsers,
    FaFilePdf,
    FaShoppingCart,
    FaCreditCard,
    FaMobileAlt,
    FaDesktop,
    FaTag,
    FaFilter,
    FaShareAlt,
    FaEye,
    FaEdit,
    FaAndroid
} from "react-icons/fa";
import { SiReact, SiMysql, SiJavascript, SiTailwindcss, SiNodedotjs, SiTypescript } from "react-icons/si";

//import imagenes
import dashboardImage from '../assets/AutiQo/dashboard.png';
import Credito from '../assets/AutiQo/credito.png';
import Login from '../assets/AutiQo/loginAQ.png';
import Vehiculo from '../assets/AutiQo/vehiculo.png';
import Excel from '../assets/AutiQo/Excel.png';
import Clientes from '../assets/AutiQo/clientes.png';
import app from '../assets/AutiQo/app.png';
import proforma from '../assets/AutiQo/proforma.png';
import AutiqoLogo from '../assets/AutiQo/icon.png';

// Mensajes de WhatsApp por idioma
const whatsappMessages = {
    es: "Hola, quiero solicitar la Demo De AutiQo",
    en: "Hello, I want to request the AutiQo Demo",
    pt: "Olá, quero solicitar a Demonstração do AutiQo"
};

const AutiqoPage = () => {
    const navigate = useNavigate();
    const { language, changeLanguage, t } = useApp();
    const tabKeys = ["general", "information"]; // keys fijas
    const [activeTab, setActiveTab] = useState(tabKeys[0]); // siempre "general
    const [selectedImage, setSelectedImage] = useState(null);
    //console.log("Idioma actual:", language);

    // Datos de ejemplo para funcionalidades
    const features = [
        {
            id: 1,
            title:
                language === "es"
                    ? "App Móvil React Native"
                    : language === "en"
                        ? "React Native Mobile App"
                        : "Aplicativo Móvel React Native",
            description:
                language === "es"
                    ? "Aplicación móvil desarrollada con React Native y SDK54 para gestión de proformas y cotizaciones sobre la marcha."
                    : language === "en"
                        ? "Mobile application developed with React Native and SDK54 for on-the-go quote and estimate management."
                        : "Aplicativo móvel desenvolvido com React Native e SDK54 para gestão de proformas e cotações em movimento.",
            icon: <FaMobileAlt size={30} className="text-blue-500" />,
            image: app,
        },
        {
            id: 2,
            title:
                language === "es"
                    ? "Sitio Web Administrativo"
                    : language === "en"
                        ? "Admin Web Panel"
                        : "Painel Administrativo Web",
            description:
                language === "es"
                    ? "Panel de administración completo con CRUD de productos, usuarios, sucursales y configuración del sistema."
                    : language === "en"
                        ? "Full admin panel with CRUD for products, users, branches, and system configuration."
                        : "Painel administrativo completo com CRUD de produtos, usuários, filiais e configuração do sistema.",
            icon: <FaDesktop size={30} className="text-green-500" />,
            image: Login,
        },
        {
            id: 3,
            title:
                language === "es"
                    ? "Gestión de Productos"
                    : language === "en"
                        ? "Product Management"
                        : "Gestão de Produtos",
            description:
                language === "es"
                    ? "Administra automóviles, motos y otros productos con toda su información técnica y comercial."
                    : language === "en"
                        ? "Manage cars, motorcycles, and other products with complete technical and commercial information."
                        : "Gerencie carros, motos e outros produtos com todas as suas informações técnicas e comerciais.",
            icon: <FaCar size={30} className="text-purple-500" />,
            image: Vehiculo,
        },
        {
            id: 4,
            title:
                language === "es"
                    ? "Sistema de Cotizaciones"
                    : language === "en"
                        ? "Quotation System"
                        : "Sistema de Cotações",
            description:
                language === "es"
                    ? "Genera proformas al contado o crédito con cálculo automático de cuotas según intereses y plazos."
                    : language === "en"
                        ? "Generate quotes in cash or credit with automatic installment calculations based on interest and terms."
                        : "Gere proformas à vista ou a crédito com cálculo automático de parcelas conforme juros e prazos.",
            icon: <FaCreditCard size={30} className="text-yellow-500" />,
            image: Credito,
        },
        {
            id: 5,
            title:
                language === "es"
                    ? "Generación de PDF"
                    : language === "en"
                        ? "PDF Generation"
                        : "Geração de PDF",
            description:
                language === "es"
                    ? "Crea documentos profesionales en PDF con toda la información de la cotización para compartir con clientes."
                    : language === "en"
                        ? "Create professional PDF documents with all quote information to share with clients."
                        : "Crie documentos PDF profissionais com todas as informações da cotação para compartilhar com clientes.",
            icon: <FaFilePdf size={30} className="text-red-500" />,
            image: proforma,
        },
        {
            id: 6,
            title:
                language === "es"
                    ? "Dashboard y Estadísticas"
                    : language === "en"
                        ? "Dashboard & Analytics"
                        : "Dashboard e Estatísticas",
            description:
                language === "es"
                    ? "Visualiza métricas y estadísticas de ventas, proformas por usuario, sucursal y modelo con gráficos interactivos."
                    : language === "en"
                        ? "Visualize sales metrics and statistics, quotes per user, branch, and model with interactive charts."
                        : "Visualize métricas e estatísticas de vendas, proformas por usuário, filial e modelo com gráficos interativos.",
            icon: <FaChartLine size={30} className="text-indigo-500" />,
            image: dashboardImage,
        },
        {
            id: 7,
            title:
                language === "es"
                    ? "Gestión de Clientes"
                    : language === "en"
                        ? "Client Management"
                        : "Gestão de Clientes",
            description:
                language === "es"
                    ? "Administra tu cartera de clientes, con historial de cotizaciones, estado de venta y etiquetas personalizables."
                    : language === "en"
                        ? "Manage your client portfolio with quote history, sales status, and customizable tags."
                        : "Gerencie sua carteira de clientes com histórico de cotações, status de vendas e tags personalizáveis.",
            icon: <FaUsers size={30} className="text-pink-500" />,
            image: Clientes,
        },
        {
            id: 8,
            title:
                language === "es"
                    ? "Filtros Avanzados"
                    : language === "en"
                        ? "Advanced Filters"
                        : "Filtros Avançados",
            description:
                language === "es"
                    ? "Encuentra rápidamente proformas, clientes o productos con sistema de filtros por múltiples criterios."
                    : language === "en"
                        ? "Quickly find quotes, clients, or products with a multi-criteria filter system."
                        : "Encontre rapidamente proformas, clientes ou produtos com sistema de filtros por múltiplos critérios.",
            icon: <FaFilter size={30} className="text-teal-500" />,
            image: Excel,
        },
    ];

    // datos de tecnologías
    const tecnologias = [
        {
            nombre: "React Native",
            descripcion:
                language === "es"
                    ? "App móvil"
                    : language === "en"
                        ? "Mobile App"
                        : "App Móvel",
            color: "text-blue-500",
            borde: "hover:border-blue-500",
            icon: <SiReact size={40} />,
        },
        {
            nombre: "SDK54",
            descripcion:
                language === "es"
                    ? "Desarrollo Android"
                    : language === "en"
                        ? "Android Development"
                        : "Desenvolvimento Android",
            color: "text-green-500",
            borde: "hover:border-green-500",
            icon: <FaAndroid size={40} />,
        },
        {
            nombre: "React",
            descripcion:
                language === "es"
                    ? "Panel web"
                    : language === "en"
                        ? "Web Panel"
                        : "Painel web",
            color: "text-blue-600",
            borde: "hover:border-blue-600",
            icon: <SiReact size={40} />,
        },
        {
            nombre: "MySQL",
            descripcion:
                language === "es"
                    ? "Base de datos"
                    : language === "en"
                        ? "Database"
                        : "Banco de dados",
            color: "text-orange-500",
            borde: "hover:border-orange-500",
            icon: <SiMysql size={40} />,
        },
        {
            nombre: "Node.js",
            descripcion:
                language === "es"
                    ? "Backend"
                    : language === "en"
                        ? "Backend"
                        : "Backend",
            color: "text-green-800",
            borde: "hover:border-green-800",
            icon: <SiNodedotjs size={40} />,
        },
        {
            nombre: "TypeScript",
            descripcion:
                language === "es"
                    ? "Tipado fuerte"
                    : language === "en"
                        ? "Strong typing"
                        : "Tipagem forte",
            color: "text-purple-500",
            borde: "hover:border-purple-500",
            icon: <SiTypescript size={40} />,
        },
        {
            nombre: "JavaScript",
            descripcion:
                language === "es"
                    ? "Lógica de negocio"
                    : language === "en"
                        ? "Business logic"
                        : "Lógica de negócio",
            color: "text-yellow-500",
            borde: "hover:border-yellow-500",
            icon: <SiJavascript size={40} />,
        },
        {
            nombre: "Tailwind CSS",
            descripcion:
                language === "es"
                    ? "Estilos rápidos"
                    : language === "en"
                        ? "Fast styling"
                        : "Estilos rápidos",
            color: "text-teal-500",
            borde: "hover:border-teal-500",
            icon: <SiTailwindcss size={40} />,
        },
    ];

    // Configurar mensaje de WhatsApp según idioma
    const whatsappNumber = "59167720813";
    const whatsappMessage = whatsappMessages[language];
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    return (
        <div className="min-h-screen bg-gray-200 py-8 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">

                {/* Barra superior */}
                <div className="flex justify-between items-center mb-6">
                    {/* Botón de volver */}
                    <button
                        onClick={() => {
                            localStorage.removeItem('language');
                            changeLanguage('es'); // idioma por defecto
                            navigate(-1);
                        }}
                        className="bg-white text-center w-48 rounded-2xl h-10 relative text-black text-l font-semibold group dark:bg-gray-800 dark:text-white"
                        type="button"
                    >
                        {/* Barra animada con ícono */}
                        <div className="bg-gray-400 rounded-xl h-8 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500 hover:bg-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024"
                                height="25px"
                                width="25px"
                                className="fill-current text-black dark:text-white"
                            >
                                <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path>
                                <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path>
                            </svg>
                        </div>
                        {/* Texto dinámico */}
                        <p className="translate-x-2">{t('back')}</p>
                    </button>

                    {/* Selector de idioma */}
                    <select
                        value={language}
                        onChange={(e) => changeLanguage(e.target.value)}
                        className="h-12 px-4 text-l rounded-2xl border bg-white dark:bg-gray-800 dark:text-white"
                    >
                        <option value="es">🇪🇸 Español</option>
                        <option value="en">🇺🇸 English</option>
                        <option value="pt">🇧🇷 Português</option>
                    </select>
                </div>


                {/* Header */}
                <div className="text-center mb-12">
                    <img
                        src={AutiqoLogo}
                        alt="Autiqo Logo"
                        className="mx-auto mb-4 w-32 h-auto"
                    />

                    <h1 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">{t('titleAutiQo')}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
                        {t('description')}
                    </p>
                </div>

                {/* Navegación por pestañas */}
                <div className="flex flex-wrap justify-center mb-8">
                    {tabKeys.map((tab) => (
                        <button
                            key={tab}
                            className={`relative px-6 py-3 font-semibold transition-colors duration-300 text-lg ${activeTab === tab ? "text-black dark:text-white" : "text-gray-500 hover:text-gray-800"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {t(tab)}
                            <span
                                className={`absolute bottom-0 left-1/2 w-full h-[3px] bg-black transform -translate-x-1/2 transition-all duration-300 ease-in-out dark:bg-white ${activeTab === tab ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                                    }`}
                            />
                        </button>
                    ))}
                </div>

                {/* Contenido de pestañas */}
                {activeTab === "general" && (
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8 dark:bg-gray-800 transition-colors duration-500">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{t('whatIs')}</h2>
                        <p className="text-gray-600 mb-4 dark:text-gray-300">
                            {t('description')}
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 dark:text-white">{t('featuresTitle')}</h3>
                        <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2 dark:text-gray-300">
                            {t('features').map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-2">{t('forAdmins')}</h4>
                                <p className="text-blue-700">{t('adminDesc')}</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-2">{t('forAdvisors')}</h4>
                                <p className="text-green-700">{t('advisorDesc')}</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "information" && (
                    <div className="mb-8 dark:bg-gray-800 transition-colors duration-500 p-3 rounded-2xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center dark:text-white">
                            {t('functionalities')}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 dark:bg-gray-800 transition-colors duration-500">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="bg-white rounded-lg shadow-md overflow-visible dark:bg-black transition-colors duration-500"
                                >
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            {feature.icon}
                                            <h3 className="text-xl font-semibold ml-3 dark:text-white">{feature.title}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4 dark:text-gray-300">{feature.description}</p>
                                    </div>

                                    {/* Imagen con tooltip */}
                                    <div className="bg-gray-100 p-4 text-center relative group cursor-pointer">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="mx-auto rounded shadow-inner w-full max-h-64 object-contain transition-transform duration-500 ease-in-out hover:scale-125"
                                            onClick={() => setSelectedImage(feature.image)}
                                        />
                                        <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {t('viewEnlarged')}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Modal */}
                        {selectedImage && (
                            <div
                                className="fixed inset-0 flex items-center justify-center z-50"
                                style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                                onClick={() => setSelectedImage(null)}
                            >
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    title={t('closeImage')}
                                    className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300 z-50"
                                >
                                    ✕
                                </button>

                                <div
                                    className="relative"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <img
                                        src={selectedImage}
                                        alt={t('viewEnlarged')}
                                        className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-xl transition-transform duration-300 scale-100 hover:scale-105"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Sección de tecnología */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8 dark:bg-gray-800 transition-colors duration-500">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center dark:text-white">{t('technologies')}</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                        {tecnologias.map((tech, index) => (
                            <div
                                key={index}
                                className={`group relative w-full max-w-xs p-4 rounded-lg shadow transition duration-300 text-center border-2 ${tech.color} hover:shadow-lg ${tech.borde}`}
                            >
                                <div
                                    className={`absolute top-3 left-3 opacity-0 group-hover:opacity-100 transform -translate-x-4 rotate-[-90deg] group-hover:translate-x-0 group-hover:rotate-0 transition-all duration-500 ${tech.color}`}
                                >
                                    {tech.icon}
                                </div>

                                <div className={`${tech.color} font-bold text-lg mb-1`}>{tech.nombre}</div>
                                <div className="text-sm text-gray-600">{tech.descripcion}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Llamada a la acción */}
                <div className="bg-gradient-to-r from-[#25334b] to-[#3a5d94] rounded-lg shadow-md p-8 text-center text-white">
                    <h2 className="text-2xl font-bold mb-4">{t('interested')}</h2>
                    <p className="mb-6 max-w-2xl mx-auto">
                        {t('contactText')}
                    </p>
                    <button
                        className="bg-white text-[#25334b] font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
                        onClick={() => window.open(whatsappLink, "_blank")}
                    >
                        {t('requestDemo')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AutiqoPage;