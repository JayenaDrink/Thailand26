// Variables globales
let filteredActivities = [...travelData.activities];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    renderActivities(filteredActivities);
    setupEventListeners();
});

// Inicializar opciones de filtro por día
function initializeFilters() {
    const dayFilter = document.getElementById('day-filter');
    const days = [...new Set(travelData.activities.map(activity => activity.day))];
    
    days.forEach(day => {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        dayFilter.appendChild(option);
    });
}

// Configurar event listeners
function setupEventListeners() {
    document.getElementById('day-filter').addEventListener('change', applyFilters);
    document.getElementById('type-filter').addEventListener('change', applyFilters);
    document.getElementById('clear-filters').addEventListener('click', clearFilters);
}

// Aplicar filtros
function applyFilters() {
    const dayFilter = document.getElementById('day-filter').value;
    const typeFilter = document.getElementById('type-filter').value;

    filteredActivities = travelData.activities.filter(activity => {
        const dayMatch = dayFilter === 'all' || activity.day === dayFilter;
        const typeMatch = typeFilter === 'all' || activity.type === typeFilter;
        return dayMatch && typeMatch;
    });

    renderActivities(filteredActivities);
}

// Limpiar filtros
function clearFilters() {
    document.getElementById('day-filter').value = 'all';
    document.getElementById('type-filter').value = 'all';
    filteredActivities = [...travelData.activities];
    renderActivities(filteredActivities);
}

// Renderizar actividades
function renderActivities(activities) {
    const container = document.getElementById('activities-container');
    const noResults = document.getElementById('no-results');

    if (activities.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    container.innerHTML = activities.map(activity => createActivityCard(activity)).join('');
}

// Crear tarjeta de actividad
function createActivityCard(activity) {
    const typeIcons = {
        hotel: '🏨',
        plane: '✈️',
        bus: '🚌',
        tour: '🎯'
    };

    const typeNames = {
        hotel: 'Hotel',
        plane: 'Vuelo',
        bus: 'Autobús',
        tour: 'Tour'
    };

    let detailsHTML = '';
    
    if (activity.type === 'bus') {
        detailsHTML = `
            <div class="activity-detail-item">
                <strong>Origen:</strong> <span>${activity.details.origin}</span>
            </div>
            <div class="activity-detail-item">
                <strong>Destino:</strong> <span>${activity.details.destination}</span>
            </div>
            ${activity.details.company ? `
            <div class="activity-detail-item">
                <strong>Compañía:</strong> <span>${activity.details.company}</span>
            </div>
            ` : ''}
        `;
    } else if (activity.type === 'plane') {
        detailsHTML = `
            <div class="activity-detail-item">
                <strong>Origen:</strong> <span>${activity.details.origin}</span>
            </div>
            <div class="activity-detail-item">
                <strong>Destino:</strong> <span>${activity.details.destination}</span>
            </div>
            <div class="activity-detail-item">
                <strong>Salida:</strong> <span>${activity.details.departure}</span>
            </div>
            <div class="activity-detail-item">
                <strong>Llegada:</strong> <span>${activity.details.arrival}</span>
            </div>
            ${activity.details.duration ? `
            <div class="activity-detail-item">
                <strong>Duración:</strong> <span>${activity.details.duration}</span>
            </div>
            ` : ''}
        `;
    } else if (activity.type === 'hotel') {
        detailsHTML = `
            ${activity.details.checkIn ? `
            <div class="activity-detail-item">
                <strong>Check-in:</strong> <span>${activity.details.checkIn}</span>
            </div>
            ` : ''}
            ${activity.details.checkOut ? `
            <div class="activity-detail-item">
                <strong>Check-out:</strong> <span>${activity.details.checkOut}</span>
            </div>
            ` : ''}
            ${activity.details.address ? `
            <div class="activity-detail-item">
                <strong>Dirección:</strong> <span>${activity.details.address}</span>
            </div>
            ` : ''}
        `;
    } else if (activity.type === 'tour') {
        detailsHTML = `
            ${activity.details.duration ? `
            <div class="activity-detail-item">
                <strong>Duración:</strong> <span>${activity.details.duration}</span>
            </div>
            ` : ''}
            ${activity.details.meetingPoint ? `
            <div class="activity-detail-item">
                <strong>Punto de encuentro:</strong> <span>${activity.details.meetingPoint}</span>
            </div>
            ` : ''}
            ${activity.time ? `
            <div class="activity-detail-item">
                <strong>Hora:</strong> <span>${activity.time}</span>
            </div>
            ` : ''}
        `;
    }

    const linksHTML = activity.links && activity.links.length > 0
        ? `<div class="activity-links">
            ${activity.links.map((link, index) => `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
                   class="activity-link ${index > 0 ? 'secondary' : ''}">
                    ${link.name}
                </a>
            `).join('')}
           </div>`
        : '';

    return `
        <div class="activity-card ${activity.type}">
            <div class="activity-day">${activity.day}</div>
            <div class="activity-header">
                <span class="activity-icon">${typeIcons[activity.type]}</span>
                <span class="activity-type">${typeNames[activity.type]}</span>
            </div>
            <h3 class="activity-title">${activity.title}</h3>
            <div class="activity-details">
                ${detailsHTML}
            </div>
            ${linksHTML}
        </div>
    `;
}

