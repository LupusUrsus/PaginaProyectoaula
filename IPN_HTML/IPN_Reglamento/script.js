// Base de datos de reglamentos con resúmenes ampliados
const regulations = [
    {
        id: "REG-001",
        title: "Ley Orgánica del IPN",
        category: "general",
        description: "Documento rector que establece las bases jurídicas y la estructura fundamental del Instituto Politécnico Nacional.",
        keywords: "ley orgánica, estructura, fundamentos jurídicos, marco legal",
        lastUpdate: "2022-03-15",
        link: "https://www.ipn.mx/normatividad/ley-organica.html",
        summary: `
            <h4>Información relevante para estudiantes:</h4>
            <p>Establece la autonomía del IPN y su estructura organizacional. Define los tipos de planteles (CECyTs, ESIQUIE, etc.) y los niveles educativos que ofrece.</p>
        `
    },
    {
        id: "REG-002",
        title: "Reglamento Interno del IPN",
        category: "administrative",
        description: "Define la organización y funcionamiento de las dependencias del Instituto.",
        keywords: "organización, funcionamiento, dependencias, estructura administrativa",
        lastUpdate: "2021-11-30",
        link: "https://www.ipn.mx/normatividad/reglamento-interno.html",
        summary: `
            <h4>Puntos importantes:</h4>
            <p>Describe las responsabilidades de directivos, coordinadores y personal administrativo. Incluye procesos de toma de decisiones y organización de eventos académicos.</p>
        `
    },
    {
        id: "REG-003",
        title: "Reglamento General de Estudios",
        category: "academic",
        description: "Norma los procesos académicos de nivel medio superior, superior y posgrado.",
        keywords: "estudios, académico, planes de estudio, materias, créditos",
        lastUpdate: "2023-01-10",
        link: "https://www.ipn.mx/normatividad/reglamento-estudios.html",
        summary: `
            <h4>Contenido clave para estudiantes:</h4>
            <ul>
                <li>Duración de carreras y semestres</li>
                <li>Requisitos para inscripción y reinscripción</li>
                <li>Procedimientos para cambios de carrera o turno</li>
                <li>Normas sobre asistencia y puntualidad</li>
            </ul>
        `
    },
    {
        id: "REG-004",
        title: "Reglamento General de Evaluación y Promoción",
        category: "academic",
        description: "Establece los criterios y procedimientos para la evaluación académica y promoción de estudiantes.",
        keywords: "evaluación, calificaciones, promoción, exámenes, parciales, ordinarios, extraordinarios",
        lastUpdate: "2022-08-22",
        link: "https://www.ipn.mx/normatividad/reglamento-evaluacion.html",
        summary: `
            <h4>Información sobre exámenes:</h4>
            <ul>
                <li><strong>Exámenes parciales:</strong> 3 por semestre con fechas establecidas</li>
                <li><strong>Exámenes ordinarios:</strong> Al final del semestre, mínimo 6.0 para aprobar</li>
                <li><strong>Exámenes extraordinarios:</strong> Máximo 3 asignaturas por semestre</li>
                <li><strong>ETS (Examen de Título de Suficiencia):</strong> Requisitos y procedimiento</li>
                <li>Derecho a revisión de examen y aclaraciones</li>
            </ul>
        `
    },
    {
        id: "REG-005",
        title: "Reglamento de Titulación",
        category: "academic",
        description: "Regula los procesos y requisitos para obtener el título profesional en el IPN.",
        keywords: "titulación, egreso, título profesional, ETS, servicio social, residencias",
        lastUpdate: "2023-02-18",
        link: "https://www.ipn.mx/normatividad/reglamento-titulacion.html",
        summary: `
            <h4>Opciones de titulación en CECyT 3:</h4>
            <ol>
                <li><strong>ETS (Examen de Título de Suficiencia):</strong> El más común en nivel medio superior</li>
                <li>Por promedio (requiere 9.0 o más)</li>
                <li>Por estudios de posgrado</li>
            </ol>
            <h4>Requisitos comunes:</h4>
            <ul>
                <li>100% de créditos</li>
                <li>Servicio social completo</li>
                <li>No adeudos administrativos</li>
            </ul>
        `
    },
    {
        id: "REG-006",
        title: "Reglamento de Becas",
        category: "student",
        description: "Establece las normas para la asignación de becas y apoyos económicos a estudiantes.",
        keywords: "becas, apoyo económico, financiamiento, manutención, excelencia",
        lastUpdate: "2022-05-14",
        link: "https://www.ipn.mx/normatividad/reglamento-becas.html",
        summary: `
            <h4>Becas disponibles en CECyT 3:</h4>
            <ul>
                <li><strong>Beca de Excelencia:</strong> Para promedios de 9.0 o más</li>
                <li><strong>Beca de Manutención:</strong> Apoyo económico mensual</li>
                <li><strong>Beca de Transporte:</strong> Para estudiantes de bajos recursos</li>
                <li><strong>Becas externas:</strong> CONACYT, empresas privadas</li>
            </ul>
            <h4>Requisitos generales:</h4>
            <p>Promedio mínimo de 7.5, 85% de asistencia, situación económica comprobable</p>
        `
    },
    {
        id: "REG-007",
        title: "Reglamento de Ingreso y Permanencia",
        category: "student",
        description: "Define los requisitos para ingresar y mantenerse como estudiante en el IPN.",
        keywords: "ingreso, permanencia, requisitos, baja temporal, baja definitiva",
        lastUpdate: "2021-09-05",
        link: "https://www.ipn.mx/normatividad/reglamento-ingreso.html",
        summary: `
            <h4>Proceso de ingreso a CECyT 3:</h4>
            <ol>
                <li>Examen de admisión (COMIPEMS)</li>
                <li>Publicación de resultados</li>
                <li>Registro de documentos</li>
                <li>Curso de inducción</li>
            </ol>
            <h4>Permanencia:</h4>
            <ul>
                <li>Mínimo 8.0 de promedio para mantener lugar en carrera técnica</li>
                <li>Máximo 3 materias reprobadas por semestre</li>
                <li>Procedimientos para baja temporal</li>
            </ul>
        `
    },
    {
        id: "REG-008",
        title: "Reglamento de Egresados",
        category: "student",
        description: "Norma la relación del IPN con sus graduados y establece beneficios para exalumnos.",
        keywords: "egresados, graduados, exalumnos, bolsa de trabajo, beneficios",
        lastUpdate: "2020-12-01",
        link: "https://www.ipn.mx/normatividad/reglamento-egresados.html",
        summary: `
            <h4>Beneficios para egresados de CECyT 3:</h4>
            <ul>
                <li>Acceso a bolsa de trabajo del IPN</li>
                <li>Descuentos en cursos y diplomados</li>
                <li>Uso de instalaciones deportivas</li>
                <li>Acceso a biblioteca y recursos digitales</li>
            </ul>
        `
    },
    {
        id: "REG-009",
        title: "Reglamento de Disciplina",
        category: "discipline",
        description: "Establece sanciones y procedimientos por incumplimiento de normas institucionales.",
        keywords: "disciplina, sanciones, conducta, faltas, medidas correctivas",
        lastUpdate: "2022-07-19",
        link: "https://www.ipn.mx/normatividad/reglamento-disciplina.html",
        summary: `
            <h4>Faltas comunes y sanciones:</h4>
            <ul>
                <li><strong>Faltas leves:</strong> Llegadas tardías, uniforme incompleto (amonestación verbal)</li>
                <li><strong>Faltas graves:</strong> Falsificación de documentos, daño a instalaciones (suspensión)</li>
                <li><strong>Faltas muy graves:</strong> Acoso, violencia (expulsión)</li>
            </ul>
            <h4>Proceso disciplinario:</h4>
            <p>Derecho a defensa, apelaciones y procedimiento para impugnar sanciones</p>
        `
    },
    {
        id: "REG-010",
        title: "Código de Ética del IPN",
        category: "discipline",
        description: "Define los principios éticos que deben seguir todos los miembros de la comunidad politécnica.",
        keywords: "ética, valores, principios, honor, integridad",
        lastUpdate: "2021-04-25",
        link: "https://www.ipn.mx/normatividad/codigo-etica.html",
        summary: `
            <h4>Principios fundamentales:</h4>
            <ul>
                <li>Respeto a la dignidad humana</li>
                <li>Integridad académica (no al plagio, no a copiar en exámenes)</li>
                <li>Responsabilidad social</li>
                <li>Excelencia académica</li>
            </ul>
        `
    },
    {
        id: "REG-011",
        title: "Reglamento del Personal Académico",
        category: "administrative",
        description: "Norma las funciones, derechos y obligaciones de docentes e investigadores.",
        keywords: "profesores, investigadores, personal académico, derechos, obligaciones",
        lastUpdate: "2023-03-08",
        link: "https://www.ipn.mx/normatividad/reglamento-academico.html",
        summary: `
            <h4>Relevante para estudiantes:</h4>
            <p>Establece los deberes de los profesores, incluyendo:</p>
            <ul>
                <li>Obligación de actualizar contenidos</li>
                <li>Horarios de asesoría</li>
                <li>Evaluación justa y transparente</li>
                <li>Procedimientos para reportar profesores</li>
            </ul>
        `
    },
    {
        id: "REG-012",
        title: "Reglamento del Personal Administrativo",
        category: "administrative",
        description: "Establece las obligaciones y derechos del personal administrativo del IPN.",
        keywords: "administrativo, personal, funcionarios, trámites, servicios escolares",
        lastUpdate: "2022-10-30",
        link: "https://www.ipn.mx/normatividad/reglamento-administrativo.html",
        summary: `
            <h4>Para trámites escolares:</h4>
            <ul>
                <li>Tiempos máximos de respuesta para trámites</li>
                <li>Requisitos para solicitudes</li>
                <li>Horarios de atención al público</li>
                <li>Procedimientos para quejas</li>
            </ul>
        `
    },
    {
        id: "REG-013",
        title: "Reglamento para el Nivel Medio Superior",
        category: "academic",
        description: "Aplica específicamente a las vocacionales (CECyTs) del Instituto.",
        keywords: "medio superior, vocacional, CECyT, bachillerato, técnico",
        lastUpdate: "2022-06-12",
        link: "https://www.ipn.mx/normatividad/reglamento-medio-superior.html",
        summary: `
            <h4>Específico para CECyT 3:</h4>
            <ul>
                <li>Duración de carreras técnicas (3 años)</li>
                <li>Requisitos para prácticas profesionales</li>
                <li>Normas sobre laboratorios y talleres</li>
                <li>Procedimientos para certificación técnica</li>
            </ul>
        `
    },
    {
        id: "REG-014",
        title: "Reglamento para el Nivel Superior",
        category: "academic",
        description: "Norma las escuelas profesionales y unidades académicas de educación superior.",
        keywords: "superior, profesional, licenciatura, ingeniería, posgrado",
        lastUpdate: "2023-01-28",
        link: "https://www.ipn.mx/normatividad/reglamento-superior.html",
        summary: `
            <h4>Para estudiantes que continuarán en ESIME, ESCOM, etc.:</h4>
            <ul>
                <li>Requisitos para titulación en nivel superior</li>
                <li>Normas sobre residencias profesionales</li>
                <li>Procedimientos para equivalencias</li>
            </ul>
        `
    },
    {
        id: "REG-015",
        title: "Reglamento de Posgrado e Investigación",
        category: "academic",
        description: "Regula los estudios de maestría, doctorado y actividades de investigación.",
        keywords: "posgrado, investigación, maestría, doctorado, tesis",
        lastUpdate: "2022-11-15",
        link: "https://www.ipn.mx/normatividad/reglamento-posgrado.html",
        summary: `
            <h4>Para egresados interesados en posgrados:</h4>
            <ul>
                <li>Requisitos de admisión</li>
                <li>Becas para posgrado</li>
                <li>Proceso de elaboración de tesis</li>
                <li>Exámenes de grado</li>
            </ul>
        `
    },
    {
        id: "C3-001",
        title: "Manual de Organización CECyT 3",
        category: "cecyt3",
        description: "Documento que describe la estructura organizacional específica del CECyT 3.",
        keywords: "organización, CECyT 3, estructura, departamentos",
        lastUpdate: "2022-09-10",
        link: "https://www.cecyt3.ipn.mx/normatividad",
        summary: `
            <h4>Estructura del plantel:</h4>
            <ul>
                <li>Dirección General</li>
                <li>Subdirecciones académica y administrativa</li>
                <li>Departamentos (Servicios Escolares, Orientación Educativa, etc.)</li>
                <li>Coordinaciones de carrera</li>
            </ul>
        `
    },
    {
        id: "C3-002",
        title: "Protocolo de Seguridad CECyT 3",
        category: "cecyt3",
        description: "Normas específicas de seguridad y emergencias para la comunidad del CECyT 3.",
        keywords: "seguridad, emergencias, protocolo, evacuación",
        lastUpdate: "2023-01-15",
        link: "https://www.cecyt3.ipn.mx/normatividad",
        summary: `
            <h4>Procedimientos importantes:</h4>
            <ul>
                <li>Rutas de evacuación</li>
                <li>Puntos de reunión</li>
                <li>Números de emergencia internos</li>
                <li>Protocolo para accidentes en laboratorios</li>
            </ul>
        `
    }
];

// Mapeo de términos de búsqueda comunes
const searchAliases = {
    "examen": "examen parcial ordinario extraordinario evaluación calificación",
    "examenes": "examen parcial ordinario extraordinario evaluación calificación",
    "ets": "examen título suficiencia titulación egreso",
    "beca": "beca apoyo económico manutención financiamiento",
    "titulacion": "titulación egreso ets examen título suficiencia",
    "disciplina": "disciplina sanción falta conducta medida correctiva",
    "servicio": "servicio social horas requisito comunidad",
    "practicas": "prácticas profesionales empresa horas documento",
    "laboratorio": "laboratorio taller material equipo seguridad",
    "biblioteca": "biblioteca préstamo libros horario reglamento",
    "uniforme": "uniforme vestimenta presentación código vestir"
};

// Función para formatear fechas
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

// Función para expandir términos de búsqueda
function expandSearchTerm(term) {
    term = term.toLowerCase();
    if (searchAliases[term]) {
        return searchAliases[term] + " " + term;
    }
    return term;
}

// Función para mostrar reglamentos
function displayRegulations(regs) {
    const resultsContainer = document.getElementById('results');
    
    if (regs.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-file-circle-exclamation"></i>
                <h3>No se encontraron reglamentos</h3>
                <p>Intenta con otros términos de búsqueda o selecciona una categoría diferente.</p>
                <p>Prueba con: "exámenes", "ETS", "becas", "titulación" o "disciplina"</p>
            </div>
        `;
        return;
    }
    
    resultsContainer.innerHTML = regs.map(reg => `
        <div class="regulation-card" data-category="${reg.category}">
            <div class="card-header">
                <div class="regulation-id">${reg.id}</div>
                <h3 class="card-title">${reg.title}</h3>
            </div>
            <div class="card-body">
                <p class="regulation-desc">${reg.description}</p>
                ${reg.summary ? `<div class="regulation-summary">${reg.summary}</div>` : ''}
                <a href="${reg.link}" target="_blank" class="btn">
                    <i class="fas fa-file-pdf"></i> Ver documento completo
                </a>
                <div class="regulation-meta">
                    <span><i class="fas fa-sync-alt"></i> Actualizado: ${formatDate(reg.lastUpdate)}</span>
                    <span><i class="fas fa-tags"></i> ${reg.keywords.split(',').slice(0, 3).join(', ')}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Función para filtrar reglamentos
function filterRegulations() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    
    // Expandir términos de búsqueda comunes
    const expandedSearch = expandSearchTerm(searchTerm);
    
    const filtered = regulations.filter(reg => {
        const matchesSearch = expandedSearch.split(' ').some(term => 
            term.length > 2 && (
                reg.title.toLowerCase().includes(term) || 
                reg.description.toLowerCase().includes(term) || 
                reg.keywords.toLowerCase().includes(term) ||
                (reg.summary && reg.summary.toLowerCase().includes(term))
            )
        );
        
        const matchesFilter = activeFilter === 'all' || 
                             (activeFilter === 'academic' && reg.category === 'academic') ||
                             (activeFilter === 'administrative' && reg.category === 'administrative') ||
                             (activeFilter === 'student' && reg.category === 'student') ||
                             (activeFilter === 'discipline' && reg.category === 'discipline') ||
                             (activeFilter === 'cecyt3' && reg.category === 'cecyt3');
        
        return matchesSearch && matchesFilter;
    });
    
    displayRegulations(filtered);
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar todos los reglamentos inicialmente
    displayRegulations(regulations);
    
    // Configurar el buscador
    document.getElementById('search').addEventListener('input', filterRegulations);
    
    // Configurar los botones de filtro
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterRegulations();
        });
    });
    
    // Configurar búsquedas rápidas
    document.querySelectorAll('.quick-search-btn').forEach(button => {
        button.addEventListener('click', function() {
            const term = this.dataset.term;
            document.getElementById('search').value = term;
            filterRegulations();
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const resultItems = document.querySelectorAll(".result-item");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const quickSearchButtons = document.querySelectorAll(".quick-search-btn");

    // Filtro por categoría (botones superiores)
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Activar solo el botón seleccionado
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            resultItems.forEach(item => {
                if (filter === "all" || item.getAttribute("data-filter") === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            // Limpiar búsqueda de texto
            searchInput.value = "";
        });
    });

    // Búsqueda por texto
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        resultItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? "block" : "none";
        });

        // Reset filtros visuales
        filterButtons.forEach(btn => btn.classList.remove("active"));
    });

    // Búsqueda rápida por botón
    quickSearchButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const term = btn.getAttribute("data-term");
            searchInput.value = term;

            const query = term.toLowerCase();

            resultItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? "block" : "none";
            });

            filterButtons.forEach(btn => btn.classList.remove("active"));
        });
    });
});