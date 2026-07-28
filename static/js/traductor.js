// Diccionario con todas las traducciones de tu página
const traducciones = {
    es: {
        // Navegación
        navProyecto: "Proyecto",
        navFuncionamiento: "Funcionamiento",
        navTecnologias: "Tecnologías",
        navBeneficios: "Beneficios",
        btnIdioma: "🇺🇸 English",

        // Hero Section
        badgeProyecto: "</> PROYECTO DE PROGRAMACIÓN",
        heroTexto: "Plataforma inteligente que utiliza Inteligencia Artificial para evaluar la postura de una persona en tiempo real y entregar recomendaciones ergonómicas.",
        heroBoton: 'Conocer Proyecto <i class="bi bi-arrow-right"></i>',
        stat1: '<i class="bi bi-activity text-success"></i> Análisis en tiempo real',
        stat2: '<i class="bi bi-shield-lock text-primary"></i> Privacidad asegurada',
        stat3: '<i class="bi bi-emoji-smile text-purple"></i> Fácil de usar',

        // Dashboard Mockup
        dashPostura: '<i class="bi bi-x-circle"></i> Postura: Incorrecta',
        dashTiempo: "Tiempo: 00:02:15",
        dashDetener: '<i class="bi bi-stop-fill"></i> Detener análisis',
        dashTituloCorr: "Corrección recomendada",
        dashCorr1: '<i class="bi bi-diamond-fill text-success me-1"></i> Endereza la espalda',
        dashCorr2: '<i class="bi bi-diamond-fill text-danger me-1"></i> Mantén los hombros relajados',
        dashCorr3: '<i class="bi bi-diamond-fill text-danger me-1"></i> Eleva la pantalla',
        dashPuntuacion: "Puntuación",

        // Sección Proyecto
        eyebrowProyecto: "Proyecto",
        tituloProyecto: '¿Qué es <span class="text-gradient">Posture Lab?</span>',
        textoProyecto: "PostureLab es una plataforma que analiza la postura de una persona utilizando visión por computadora e Inteligencia Artificial. El sistema detecta malas posturas, entrega recomendaciones ergonómicas y almacena el historial de evaluaciones para ayudar a mejorar los hábitos posturales.",
        objTitulo: "Nuestro objetivo",
        objTexto: "Prevenir problemas de salud causados por malas posturas.",

        // Sección Problema
        eyebrowProblema: "El problema",
        tituloProblema: "Problema",
        problema1Titulo: "Largas jornadas",
        problema1Texto: "Muchas personas permanecen más de 8 horas frente al computador.",
        problema2Titulo: "Malos hábitos",
        problema2Texto: "Una postura incorrecta puede provocar dolores de espalda, cuello y hombros.",
        problema3Titulo: "Prevención",
        problema3Texto: "Detectar malas posturas a tiempo ayuda a prevenir lesiones musculoesqueléticas.",

        // Sección Funcionamiento
        eyebrowProceso: "El proceso",
        tituloFuncionamiento: "¿Cómo funciona?",
        funcionDescripcion: "El proceso de PostureLab se divide en cinco etapas principales.",
        funcion1Titulo: "1. Captura",
        funcion1Texto: "La cámara registra la postura del usuario en tiempo real.",
        funcion2Titulo: "2. Detección",
        funcion2Texto: "MediaPipe identifica hombros, cuello y espalda mediante visión artificial.",
        funcion3Titulo: "3. Análisis",
        funcion3Texto: "Se calculan los ángulos corporales para evaluar la postura.",
        funcion4Titulo: "4. Evaluación",
        funcion4Texto: "El sistema clasifica la postura utilizando un semáforo ergonómico.",
        funcion5Titulo: "5. Historial",
        funcion5Texto: "Se almacenan las evaluaciones para observar la evolución del usuario.",

        // Sección Tecnologías
        eyebrowStack: "Stack técnico",
        tituloTecnologias: "Tecnologías utilizadas",

        // Sección Beneficios y Aplicaciones
        eyebrowResultados: "Resultados",
        tituloBeneficios: "Beneficios",
        beneficio1: '<span class="benefit-icon"><i class="bi bi-check-lg"></i></span> Detecta malas posturas en tiempo real.',
        beneficio2: '<span class="benefit-icon"><i class="bi bi-check-lg"></i></span> Recomienda mejoras ergonómicas.',
        beneficio3: '<span class="benefit-icon"><i class="bi bi-check-lg"></i></span> Guarda el historial de evaluaciones.',
        beneficio4: '<span class="benefit-icon"><i class="bi bi-check-lg"></i></span> Hardware de bajo costo.',
        beneficio5: '<span class="benefit-icon"><i class="bi bi-check-lg"></i></span> Fácil implementación.',
        tituloAplicaciones: "Aplicaciones",
        textoAplicaciones: "• Oficinas<br>• Estudiantes<br>• Programadores<br>• Teletrabajo<br>• Gamers<br>• Empresas",

        // Footer
        footerSubtitulo: "Plataforma Inteligente de Evaluación Postural",
        footerEquipo: "Equipo: Daniel Jiménez, Sergio Bustos, Camilo Díaz, Martin Rojas, Benjamin Delgado"
    },
    en: {
        // Navigation
        navProyecto: "Project",
        navFuncionamiento: "How it works",
        navTecnologias: "Technologies",
        navBeneficios: "Benefits",
        btnIdioma: "🇨🇱 Español",

        // Hero Section
        badgeProyecto: "</> PROGRAMMING PROJECT",
        heroTexto: "Smart platform that uses Artificial Intelligence to evaluate posture in real time and provide ergonomic recommendations.",
        heroBoton: 'Explore Project <i class="bi bi-arrow-right"></i>',
        stat1: '<i class="bi bi-activity text-success"></i> Real-time analysis',
        stat2: '<i class="bi bi-shield-lock text-primary"></i> Guaranteed privacy',
        stat3: '<i class="bi bi-emoji-smile text-purple"></i> Easy to use',

        // Dashboard Mockup
        dashPostura: '<i class="bi bi-x-circle"></i> Posture: Incorrect',
        dashDetener: '<i class="bi bi-stop-fill"></i> Stop analysis',
        dashTituloCorr: "Recommended correction",
        dashTiempo: "Time: 00:02:15",
        dashCorr1: '<i class="bi bi-diamond-fill text-success me-1"></i> Straighten your back',
        dashCorr2: '<i class="bi bi-diamond-fill text-danger me-1"></i> Keep shoulders relaxed',
        dashCorr3: '<i class="bi bi-diamond-fill text-danger me-1"></i> Raise the monitor',
        dashPuntuacion: "Score",

        // Project Section
        eyebrowProyecto: "Project",
        tituloProyecto: 'What is <span class="text-gradient">Posture Lab?</span>',
        textoProyecto: "PostureLab is a platform that analyzes posture using computer vision and Artificial Intelligence. The system detects poor posture, provides ergonomic recommendations, and stores evaluation history to help improve posture habits.",
        objTitulo: "Our goal",
        objTexto: "Prevent health issues caused by poor posture.",

        // Problem Section
        eyebrowProblema: "The problem",
        tituloProblema: "Problem",
        problema1Titulo: "Long working hours",
        problema1Texto: "Many people spend more than 8 hours sitting in front of a computer.",
        problema2Titulo: "Bad habits",
        problema2Texto: "Incorrect posture can cause back, neck, and shoulder pain.",
        problema3Titulo: "Prevention",
        problema3Texto: "Detecting poor posture early helps prevent musculoskeletal injuries.",

        // How it works Section
        eyebrowProceso: "The process",
        tituloFuncionamiento: "How does it work?",
        funcionDescripcion: "The PostureLab process is divided into five main stages.",
        funcion1Titulo: "1. Capture",
        funcion1Texto: "The camera records the user's posture in real time.",
        funcion2Titulo: "2. Detection",
        funcion2Texto: "MediaPipe identifies shoulders, neck, and back using computer vision.",
        funcion3Titulo: "3. Analysis",
        funcion3Texto: "Body angles are calculated to evaluate overall posture.",
        funcion4Titulo: "4. Evaluation",
        funcion4Texto: "The system classifies posture using an ergonomic traffic light status.",
        funcion5Titulo: "5. History",
        funcion5Texto: "Evaluations are stored to monitor the user's progress over time.",

        // Tech Section
        eyebrowStack: "Tech stack",
        tituloTecnologias: "Technologies used",

        // Benefits Section
        eyebrowResultados: "Results",
        tituloBeneficios: "Benefits",
        beneficio1: '<span class="benefit-icon"><i class="bi bi-check-lg"></i></span> Detects bad posture in real time.',
        beneficio2: '<span class="benefit-icon"><i class="bi bi-check-lg"></i></span> Recomends ergonomic improvements.',
        beneficio3: '<span class="benefit-icon"><i class="bi bi-check-lg"></i></span> Stores evaluation history.',
        beneficio4: '<span class="benefit-icon"><i class="bi bi-check-lg"></i></span> Low-cost hardware.',
        beneficio5: '<span class="benefit-icon"><i class="bi bi-check-lg"></i></span> Easy implementation.',
        tituloAplicaciones: "Applications",
        textoAplicaciones: "• Offices<br>• Students<br>• Developers<br>• Remote work<br>• Gamers<br>• Companies",

        // Footer
        footerSubtitulo: "Smart Posture Evaluation Platform",
        footerEquipo: "Team: Daniel Jiménez, Sergio Bustos, Camilo Díaz, Martin Rojas, Benjamin Delgado"
    }
};

// Variable para recordar el idioma actual (por defecto español)
let idiomaActual = localStorage.getItem('idioma_posturelab') || 'es';

// Función para aplicar los textos según el idioma
function cambiarIdioma(idioma) {
    idiomaActual = idioma;
    localStorage.setItem('idioma_posturelab', idioma);

    const mapa = traducciones[idioma];
    if (!mapa) return;

    // Recorre todos los IDs del diccionario y reemplaza el contenido HTML del elemento si existe
    for (const id in mapa) {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = mapa[id];
        }
    }
}

// Función asignada al click del botón
function alternarIdioma() {
    const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
    cambiarIdioma(nuevoIdioma);
}

// Cargar el idioma guardado al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    cambiarIdioma(idiomaActual);
});