// Project Details Data
const projectsData = {
    ism: {
        title: "ISM - Instituto San Martín",
        subtitle: "Gestión de Redes Sociales y Contenido Educativo",
        description: "Desarrollo de estrategia integral de social media para instituto de educación superior, incluyendo creación de contenido, gestión de comunidad y campañas de captación de estudiantes.",
        video: "Assets/ism.mp4",
        objectives: [
            "Aumentar la visibilidad de la marca en redes sociales",
            "Generar engagement con estudiantes potenciales",
            "Comunicar la propuesta de valor educativa",
            "Incrementar las consultas e inscripciones"
        ],
        services: [
            "Gestión de redes sociales (Instagram, Facebook, TikTok)",
            "Creación de contenido audiovisual",
            "Diseño gráfico para publicaciones",
            "Estrategia de contenido educativo",
            "Community management",
            "Campañas de captación digital"
        ],
        results: [
            { label: "Alcance mensual", value: "+150K" },
            { label: "Engagement rate", value: "8.5%" },
            { label: "Nuevos seguidores", value: "+5K" },
            { label: "Consultas generadas", value: "+300" }
        ]
    },
    casaterra: {
        title: "Casa Terra",
        subtitle: "Estrategia Digital para Bienes Raíces",
        description: "Desarrollo de identidad digital y estrategia de contenido para marca de bienes raíces enfocada en diseño, arquitectura y espacios de vida premium.",
        video: "Assets/casaterra.mp4",
        objectives: [
            "Posicionar la marca como referente en bienes raíces de diseño",
            "Crear una narrativa visual coherente y aspiracional",
            "Atraer clientes de alto valor",
            "Destacar la propuesta de valor arquitectónica"
        ],
        services: [
            "Estrategia de contenido visual",
            "Gestión de Instagram",
            "Fotografía de propiedades",
            "Copywriting especializado",
            "Diseño de feed aesthetic",
            "Storytelling de marca"
        ],
        results: [
            { label: "Crecimiento de seguidores", value: "+12K" },
            { label: "Engagement promedio", value: "12%" },
            { label: "Leads generados", value: "+80" },
            { label: "Propiedades vendidas", value: "15" }
        ]
    },
    delicranch: {
        title: "Delicranch",
        subtitle: "Contenido Digital para Alimentos Saludables",
        description: "Creación de estrategia de contenido y gestión de redes sociales para marca de alimentos saludables, enfocada en promover un estilo de vida wellness y alimentación consciente.",
        video: "Assets/deli.mp4",
        objectives: [
            "Posicionar la marca en el sector de alimentos saludables",
            "Educar sobre nutrición y vida saludable",
            "Crear comunidad comprometida con el wellness",
            "Impulsar ventas en puntos físicos y online"
        ],
        services: [
            "Gestión de redes sociales",
            "Creación de recetas y contenido nutricional",
            "Fotografía de producto y food styling",
            "Campañas digitales",
            "Colaboraciones con influencers",
            "Contenido educativo sobre nutrición"
        ],
        results: [
            { label: "Alcance orgánico", value: "+200K" },
            { label: "Interacciones", value: "+25K" },
            { label: "Aumento en ventas", value: "35%" },
            { label: "Seguidores activos", value: "+8K" }
        ]
    },
    entel: {
        title: "Entel",
        subtitle: "Campañas de Telecomunicaciones",
        description: "Apoyo en creación de contenido y campañas digitales para operadora de telecomunicaciones, enfocado en promociones, lanzamientos de productos y engagement con clientes.",
        video: null,
        objectives: [
            "Comunicar beneficios de productos y servicios",
            "Generar engagement con la audiencia joven",
            "Apoyar campañas promocionales",
            "Mantener presencia digital activa"
        ],
        services: [
            "Creación de contenido para redes sociales",
            "Copywriting publicitario",
            "Diseño de piezas gráficas",
            "Coordinación de campañas digitales",
            "Soporte en estrategia de contenido"
        ],
        results: [
            { label: "Piezas creadas", value: "+500" },
            { label: "Campañas ejecutadas", value: "12" },
            { label: "Alcance total", value: "+1M" },
            { label: "Engagement", value: "6.8%" }
        ]
    },
    max: {
        title: "Max",
        subtitle: "Contenido para Plataforma de Streaming",
        description: "Creación de contenido creativo y copywriting para plataforma de streaming, promocionando estrenos, series y contenido exclusivo.",
        video: null,
        objectives: [
            "Promover estrenos y contenido exclusivo",
            "Generar expectativa y conversación",
            "Aumentar suscripciones",
            "Mantener engagement constante"
        ],
        services: [
            "Copywriting creativo",
            "Gestión de contenido en redes",
            "Creación de campañas de lanzamiento",
            "Diseño de piezas promocionales",
            "Estrategia de contenido entertainment"
        ],
        results: [
            { label: "Publicaciones creadas", value: "+300" },
            { label: "Alcance promedio", value: "500K" },
            { label: "Engagement rate", value: "9.2%" },
            { label: "Campañas de estreno", value: "8" }
        ]
    }
};

// Modal Functions
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const modal = document.getElementById('projectModal');
    
    // Populate modal content
    document.querySelector('.project-modal-title').textContent = project.title;
    document.querySelector('.project-modal-subtitle').textContent = project.subtitle;
    document.querySelector('.project-description').textContent = project.description;
    
    // Populate media
    const mediaContainer = document.querySelector('.project-modal-media');
    if (project.video) {
        mediaContainer.innerHTML = `<video src="${project.video}" autoplay loop muted playsinline class="project-modal-video"></video>`;
    } else {
        mediaContainer.innerHTML = `<div class="project-modal-placeholder">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
        </div>`;
    }
    
    // Populate objectives
    const objectivesList = document.querySelector('.project-objectives');
    objectivesList.innerHTML = project.objectives.map(obj => `<li>${obj}</li>`).join('');
    
    // Populate services
    const servicesList = document.querySelector('.project-services');
    servicesList.innerHTML = project.services.map(service => `<li>${service}</li>`).join('');
    
    // Populate results
    const resultsGrid = document.querySelector('.project-results-grid');
    resultsGrid.innerHTML = project.results.map(result => `
        <div class="result-item">
            <div class="result-value">${result.value}</div>
            <div class="result-label">${result.label}</div>
        </div>
    `).join('');
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});
