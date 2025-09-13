// src/proyects/autiqo.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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




//mensaje de whatsapp
const whatsappNumber = "59167720813";
const whatsappMessage = "Hola, quiero solicitar la Demo De AutiQo";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const AutiqoPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("General");
    const [selectedImage, setSelectedImage] = useState(null);

    // Datos de ejemplo para funcionalidades
    const features = [
        {
            id: 1,
            title: "App Móvil React Native",
            description: "Aplicación móvil desarrollada con React Native y SDK54 para gestión de proformas y cotizaciones sobre la marcha.",
            icon: <FaMobileAlt size={30} className="text-blue-500" />,
            image: app
        },
        {
            id: 2,
            title: "Sitio Web Administrativo",
            description: "Panel de administración completo con CRUD de productos, usuarios, sucursales y configuración del sistema.",
            icon: <FaDesktop size={30} className="text-green-500" />,
            image: Login
        },
        {
            id: 3,
            title: "Gestión de Productos",
            description: "Administra automóviles, motos y otros productos con toda su información técnica y comercial.",
            icon: <FaCar size={30} className="text-purple-500" />,
            image: Vehiculo
        },
        {
            id: 4,
            title: "Sistema de Cotizaciones",
            description: "Genera proformas al contado o crédito con cálculo automático de cuotas según intereses y plazos.",
            icon: <FaCreditCard size={30} className="text-yellow-500" />,
            image: Credito
        },
        {
            id: 5,
            title: "Generación de PDF",
            description: "Crea documentos profesionales en PDF con toda la información de la cotización para compartir con clientes.",
            icon: <FaFilePdf size={30} className="text-red-500" />,
            image: proforma
        },
        {
            id: 6,
            title: "Dashboard y Estadísticas",
            description: "Visualiza métricas y estadísticas de ventas, proformas por usuario, sucursal y modelo con gráficos interactivos.",
            icon: <FaChartLine size={30} className="text-indigo-500" />,
            image: dashboardImage
        },
        {
            id: 7,
            title: "Gestión de Clientes",
            description: "Administra tu cartera de clientes, con historial de cotizaciones, estado de venta y etiquetas personalizables.",
            icon: <FaUsers size={30} className="text-pink-500" />,
            image: Clientes
        },
        {
            id: 8,
            title: "Filtros Avanzados",
            description: "Encuentra rápidamente proformas, clientes o productos con sistema de filtros por múltiples criterios.",
            icon: <FaFilter size={30} className="text-teal-500" />,
            image: Excel
        }
    ];

    // datos de tecnologías
    const tecnologias = [
        { nombre: "React Native", descripcion: "App móvil", color: "text-blue-500", borde: "hover:border-blue-500", icon: <SiReact size={40} /> },
        { nombre: "SDK54", descripcion: "Desarrollo Android", color: "text-green-500", borde: "hover:border-green-500", icon: <FaAndroid size={40} /> },
        { nombre: "React", descripcion: "Panel web", color: "text-blue-600", borde: "hover:border-blue-600", icon: <SiReact size={40} /> },
        { nombre: "MySQL", descripcion: "Base de datos", color: "text-orange-500", borde: "hover:border-orange-500", icon: <SiMysql size={40} /> },
        { nombre: "Node.js", descripcion: "Backend", color: "text-green-800", borde: "hover:border-green-800", icon: <SiNodedotjs size={40} /> },
        { nombre: "TypeScript", descripcion: "Tipado fuerte", color: "text-purple-500", borde: "hover:border-purple-500", icon: <SiTypescript size={40} /> },
        { nombre: "JavaScript", descripcion: "Lógica de negocio", color: "text-yellow-500", borde: "hover:border-yellow-500", icon: <SiJavascript size={40} /> },
        { nombre: "Tailwind CSS", descripcion: "Estilos rápidos", color: "text-teal-500", borde: "hover:border-teal-500", icon: <SiTailwindcss size={40} /> }
    ];
    return (
        <div className="min-h-screen bg-gray-200 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Botón de volver */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-[#25334b] hover:text-gray-800 mb-6 transition-colors"
                >
                    <FaArrowLeft className="mr-2" /> Volver atrás
                </button>

                {/* Header */}
                <div className="text-center mb-12">
                    {/* Logo */}
                    <img
                        src={AutiqoLogo}
                        alt="Autiqo Logo"
                        className="mx-auto mb-4 w-32 h-auto" // Ajusta el tamaño a tu gusto
                    />

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Sistema Autiqo</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Software integral de gestión de ventas especializado en automóviles, motos y productos diversos,
                        con cotizaciones a crédito y contado, aplicación móvil y panel administrativo web.
                    </p>
                </div>

                {/* Navegación por pestañas */}
                <div className="flex flex-wrap justify-center mb-8">
                    {["General", "Información"].map((tab) => (
                        <button
                            key={tab}
                            className={`
                            relative px-6 py-3 font-semibold transition-colors duration-300 text-lg
                            ${activeTab === tab
                                    ? "text-black"
                                    : "text-gray-500 hover:text-gray-800"
                                } `}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            <span className={`
                                    absolute bottom-0 left-1/2 w-full h-[3px] bg-black transform -translate-x-1/2
                                    transition-all duration-300 ease-in-out
                                    ${activeTab === tab
                                    ? "scale-x-100 opacity-100"
                                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                                }`}
                            />
                        </button>
                    ))}
                </div>

                {/* Contenido de pestañas */}
                {activeTab === "General" && (
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Qué es Autiqo?</h2>
                        <p className="text-gray-600 mb-4">
                            Autiqo es un software de gestión de productos de ventas, principalmente automóviles, motos y otros objetos.
                            Cuenta con una app Android desarrollada en React Native con SDK54 que ofrece una forma fácil y rápida de crear
                            proformas de productos con posibilidad de cotizar al crédito o contado.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Características Principales</h3>
                        <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                            <li>Cálculo automático de créditos y cuotas según el precio del producto</li>
                            <li>Generación de imágenes compartibles con clientes interesados</li>
                            <li>Resumen de todas las cotizaciones realizadas por usuario</li>
                            <li>Contacto directo con clientes desde la plataforma</li>
                            <li>Sitio web administrativo con CRUD (Crear, Leer, Actualizar, Eliminar) completo de items, usuarios y sucursales</li>
                            <li>Gestión de costos como interés anual y tipo de cambio</li>
                            <li>Dashboard con estadísticas de proformas por usuario, sucursal y modelo</li>
                            <li>Múltiples roles de usuario (administrador, asesor) con permisos diferenciados</li>
                            <li>Generación de PDF profesionales con datos completos</li>
                            <li>Sistema de etiquetas para seguimiento de estado de clientes</li>
                            <li>Filtros avanzados por modelo, fecha y tipo de proforma</li>
                        </ul>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-2">Para Administradores</h4>
                                <p className="text-blue-700">
                                    Acceso completo a todas las funcionalidades del sistema, gestión de usuarios,
                                    configuración de parámetros del sistema y visualización de estadísticas detalladas.
                                </p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-2">Para Asesores</h4>
                                <p className="text-green-700">
                                    Creación de proformas tanto al crédito como al contado, gestión de clientes,
                                    seguimiento de cotizaciones y comunicación directa con potenciales compradores.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Información" && (
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Funcionalidades de Autiqo
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="bg-white rounded-lg shadow-md overflow-visible"
                                >
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            {feature.icon}
                                            <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">{feature.description}</p>
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
                                            Haz clic para ver imagen ampliada
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Modal */}
                        {selectedImage && (
                            <div
                                className="fixed inset-0 flex items-center justify-center z-50"
                                style={{ backgroundColor: "rgba(0,0,0,0.7)" }} // fondo transparente estilo RGB
                                onClick={() => setSelectedImage(null)} // cerrar al hacer click fuera de la imagen
                            >
                                {/* Botón cerrar */}
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    title="Cerrar imagen"
                                    className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300 z-50"
                                >
                                    ✕
                                </button>

                                <div
                                    className="relative"
                                    onClick={(e) => e.stopPropagation()} // evita que se cierre al hacer click sobre la imagen
                                >
                                    {/* Imagen ampliada */}
                                    <img
                                        src={selectedImage}
                                        alt="Imagen ampliada"
                                        className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-xl transition-transform duration-300 scale-100 hover:scale-105"
                                    />
                                </div>
                            </div>
                        )}

                    </div>
                )}

                {/* Sección de tecnología */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tecnologías Utilizadas</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                        {tecnologias.map((tech, index) => (
                            <div
                                key={index}
                                className={`group relative w-full max-w-xs p-4 rounded-lg shadow transition duration-300 text-center border-2 ${tech.color} hover:shadow-lg ${tech.borde}`}
                            >
                                {/* Icono que aparece con animación */}
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
                    <h2 className="text-2xl font-bold mb-4">¿Interesado en Autiqo?</h2>
                    <p className="mb-6 max-w-2xl mx-auto">
                        Contáctanos para obtener más información sobre cómo Autiqo puede transformar
                        la gestión de ventas de tu negocio de automóviles o productos.
                    </p>
                    <button
                        className="bg-white text-[#25334b] font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
                        onClick={() => window.open(whatsappLink, "_blank")}
                    >
                        Solicitar Demo
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AutiqoPage;