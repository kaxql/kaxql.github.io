// Sistema de partículas decorativas
function crearParticulas() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 15;
    
    // Limpiar partículas existentes
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamaño y posición aleatorios
        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 15; // 15-25 segundos
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Color aleatorio suave
        const colors = [
            'rgba(255, 255, 255, 0.7)',
            'rgba(255, 255, 255, 0.5)',
            'rgba(255, 255, 255, 0.3)',
            'rgba(240, 248, 255, 0.6)',
            'rgba(230, 247, 255, 0.4)'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = randomColor;
        
        particlesContainer.appendChild(particle);
    }
}

// Reiniciar partículas cuando cambian los colores
function reiniciarParticulas() {
    crearParticulas();
}

// Inicializar partículas cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    crearParticulas();
    
    // Recrear partículas si hay cambios en el DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // Verificar si el contenedor de partículas fue afectado
                if (mutation.target.id === 'particles' || 
                    Array.from(mutation.addedNodes).some(node => node.id === 'particles')) {
                    crearParticulas();
                }
            }
        });
    });
    
    // Observar cambios en el body
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Manejar redimensionamiento de ventana
window.addEventListener('resize', function() {
    // Recrear partículas para adaptarse al nuevo tamaño
    setTimeout(crearParticulas, 100);
});

// Exportar funciones para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { crearParticulas, reiniciarParticulas };
}