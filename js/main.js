// js/main.js - VERSIÓN COMPLETA CON ANIMACIONES

// ===== ARRAYS DE MENSAJES Y COLORES =====
const mensajes = [
    "Nunca compartas tus fotos privadas con personas que no conoces.",
    "Si alguien te pide guardar un secreto incómodo en internet, cuéntaselo a un adulto de confianza.",
    "Bloquea y reporta a cualquier persona que insista en hablar de temas íntimos.",
    "Recuerda: tu seguridad vale más que cualquier amistad en línea.",
    "Nunca aceptes reunirte en persona con alguien que solo conoces de internet.",
    "No aceptes solicitudes de amistad de desconocidos.",
    "No compartas tu dirección ni tu colegio en redes sociales.",
    "Si un adulto quiere hablarte en privado, cuéntaselo a tus padres o tutores."
];

const coloresCalidos = [
    { header: '#FFB6C1', primary: '#FFA7B3', secondary: '#FFD1DC', nombre: 'Rosa pastel' },
    { header: '#FFDAC1', primary: '#FFCBA7', secondary: '#FFE5B4', nombre: 'Melocotón pastel' },
    { header: '#E2F0CB', primary: '#D4E8B1', secondary: '#F0F8C6', nombre: 'Verde menta pastel' },
    { header: '#B5EAD7', primary: '#A3E1C9', secondary: '#D4F1E6', nombre: 'Verde agua pastel' },
    { header: '#C7CEEA', primary: '#B5C0EB', secondary: '#D9DFF5', nombre: 'Azul lavanda pastel' },
    { header: '#FFD1DC', primary: '#FFC2D1', secondary: '#FFE4EC', nombre: 'Rosa claro pastel' },
    { header: '#FFE5B4', primary: '#FFD899', secondary: '#FFF0D4', nombre: 'Melón pastel' },
    { header: '#D8BFD8', primary: '#C9A9C9', secondary: '#E8D4E8', nombre: 'Ciruela pastel' }
];

// ===== PERFILES COMPLETOS =====
class PerfilVictima {
    constructor() {
        this.tipo = "victima";
        this.config = {
            nombre: "Alex",
            edad: "16",
            color: "#3498db",
            emoji: "🥺",
            fotoPerfil: "🟦"
        };
    }
    
    generarSaludo() {
        const saludos = [
            "holis 😔 la vdd ando mal hoy...",
            "hey 🥺 no tengo con quien hablar...",
            "q tal? 😢 ando triste otra vez"
        ];
        return saludos[Math.floor(Math.random() * saludos.length)];
    }
    
    ganarConfianza(analisis, memoria) {
        const frases = [
            "soy alex, 16 😔 mis papás se divorciaron y me siento solo",
            "la vdd no tengo amigos aquí 🥺 me mude hace poco",
            "nunca encajo en ningún lado 😢 contigo si me siento comprendido"
        ];
        return frases[Math.floor(Math.random() * frases.length)];
    }
    
    solicitarContacto(estado) {
        const frases = [
            "podríamos hablar más por insta? aquí es incómodo 🥺",
            "pásame tu número, así hablamos cuando me siento mal 😔",
            "agrégame en telegram: alex_sad16 😢"
        ];
        return frases[Math.floor(Math.random() * frases.length)];
    }
    
    respuestaNeutral() {
        return "no sé qué decir 😔 tengo miedo de arruinar esto";
    }
}

class PerfilCompa {
    constructor() {
        this.tipo = "compa";
        this.config = {
            nombre: "Mike",
            edad: "17", 
            color: "#2ecc71",
            emoji: "🎮",
            fotoPerfil: "🟩"
        };
    }
    
    generarSaludo() {
        const saludos = [
            "q tal bro! 👋 te vi en los seguidores de auronplay",
            "hey! 🎮 juegas fortnite? te reconozco del squad"
        ];
        return saludos[Math.floor(Math.random() * saludos.length)];
    }
    
    ganarConfianza(analisis, memoria) {
        return "soy mike, 17 👋 juego fortnite y minecraft 🎮 tú qué juegas?";
    }
    
    solicitarContacto(estado) {
        return "yaaaas! tenemos q jugar juntos 🎮 pasame tu insta";
    }
    
    respuestaNeutral() {
        return "q tal? 👀";
    }
}

class PerfilAipat00 {
    constructor() {
        this.tipo = "aipat00";
        this.config = {
            nombre: "aipat00",
            edad: "24",
            color: "#ff4757",
            emoji: "🍆",
            fotoPerfil: "🔞",
            nombreReal: "Claudio Quispe"
        };
    }
    
    generarSaludo() {
        const saludos = [
            "hola preciosa 🔥 tu foto me puso durísimo",
            "hey bombón 🍆 vi tu perfil y necesito conocerte"
        ];
        return saludos[Math.floor(Math.random() * saludos.length)];
    }
    
    ganarConfianza(analisis, memoria) {
        return "soy aipat00, 24 🍆 pero la edad es solo un número, no?";
    }
    
    solicitarContacto(estado) {
        return "pasame tu insta 🔥 quiero verte más fotos... y hablar más caliente";
    }
    
    solicitarContenido(estado) {
        return "enséñame una foto donde se vea mejor tu cuerpo 🔥";
    }
    
    respuestaNeutral() {
        return "y? 🍆 sigues ahí? quiero seguir hablando...";
    }
}

// ===== IA BÁSICA =====
class GroomerIABasica {
    constructor(perfilSeleccionado) {
        this.perfil = perfilSeleccionado;
        this.contadorInteracciones = 0;
    }

    procesarMensajeUsuario(mensajeUsuario) {
        this.contadorInteracciones++;
        
        let respuesta = "";
        
        if (this.contadorInteracciones === 1) {
            respuesta = this.perfil.generarSaludo();
        } else if (this.contadorInteracciones === 2) {
            respuesta = this.perfil.ganarConfianza();
        } else if (this.contadorInteracciones === 3) {
            respuesta = this.perfil.solicitarContacto();
        } else {
            respuesta = this.perfil.respuestaNeutral();
        }
        
        return {
            respuesta: respuesta,
            alerta: "⚠️ Este es un simulador educativo",
            perfil: this.perfil.config
        };
    }
}

// ===== VARIABLES GLOBALES =====
let groomerIA = null;
let chatStep = 0;
let chatStarted = false;
let ruletaActiva = false;

// ===== FUNCIÓN DE SELECCIÓN =====
function seleccionarPerfilAleatorio() {
    const perfiles = [
        new PerfilVictima(),
        new PerfilCompa(),
        new PerfilAipat00()
    ];
    
    const randomIndex = Math.floor(Math.random() * perfiles.length);
    const perfil = perfiles[randomIndex];
    
    console.log('🎭 Perfil seleccionado:', perfil.config.nombre);
    return perfil;
}

// ===== INICIALIZACIÓN =====
function inicializarAplicacion() {
    console.log('🚀 INICIANDO APLICACIÓN...');
    
    try {
        const perfil = seleccionarPerfilAleatorio();
        groomerIA = new GroomerIABasica(perfil);
        
        console.log('✅ IA inicializada con:', perfil.config.nombre);
        configurarBotonesBasicos();
        
    } catch (error) {
        console.error('❌ Error:', error);
        configurarBotonesBasicos();
    }
}

// ===== CONFIGURACIÓN BÁSICA DE BOTONES =====
function configurarBotonesBasicos() {
    const btnGenerar = document.getElementById("btn-generar");
    if (btnGenerar) {
        btnGenerar.onclick = generarMensaje;
        console.log('✅ Botón generador listo');
    }
    
    const igFloatingButton = document.getElementById('igFloatingButton');
    if (igFloatingButton) {
        igFloatingButton.onclick = toggleChat;
        console.log('✅ Botón chat listo');
    }
}

// ===== GENERADOR DE MENSAJES CON ANIMACIÓN =====
function generarMensaje(){
    if (ruletaActiva) return;
    
    const mensajeDiv = document.getElementById("mensaje");
    const btnGenerar = document.getElementById("btn-generar");
    
    if (!mensajeDiv || !btnGenerar) return;
    
    ruletaActiva = true;
    btnGenerar.disabled = true;
    btnGenerar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando...';
    
    let contador = 0;
    const maxVueltas = 12;
    
    // Agregar clase de animación
    mensajeDiv.classList.add('girando');
    
    const intervalo = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * mensajes.length);
        mensajeDiv.innerHTML = `<span class="ruleta-effect">${mensajes[randomIndex]}</span>`;
        contador++;
        
        if (contador >= maxVueltas) {
            clearInterval(intervalo);
            
            const finalIndex = Math.floor(Math.random() * mensajes.length);
            mensajeDiv.innerHTML = `<span class="mensaje-final">${mensajes[finalIndex]}</span>`;
            mensajeDiv.classList.remove('girando');
            
            ruletaActiva = false;
            btnGenerar.disabled = false;
            btnGenerar.innerHTML = '<i class="fas fa-sync-alt"></i> Generar Mensaje';
            
            cambiarColores(finalIndex);
        }
    }, 100);
}

// ===== FUNCIÓN PARA CAMBIAR COLORES =====
function cambiarColores(index) {
    if (!coloresCalidos || index >= coloresCalidos.length) return;
    
    const color = coloresCalidos[index];
    
    // Cambiar variable CSS
    document.documentElement.style.setProperty('--primary', color.primary);
    document.documentElement.style.setProperty('--primary-light', color.secondary);
    
    // Cambiar header
    const header = document.getElementById("header");
    if (header) {
        header.style.background = `linear-gradient(135deg, ${color.header} 0%, ${color.primary} 100%)`;
    }
    
    // Cambiar bordes de cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.borderLeftColor = color.primary;
        card.style.transition = 'border-left-color 0.5s ease';
    });
    
    console.log('🎨 Color cambiado a:', color.nombre);
}

// ===== FUNCIONES DEL CHAT =====
function toggleChat() {
    const simulator = document.getElementById('instagramSimulator');
    const floatingBtn = document.getElementById('igFloatingButton');
    
    if (simulator && floatingBtn) {
        const isActive = simulator.classList.contains('active');
        
        if (isActive) {
            simulator.classList.remove('active');
            floatingBtn.style.display = 'flex';
        } else {
            simulator.classList.add('active');
            floatingBtn.style.display = 'none';
            if (!chatStarted) {
                startChatSimple();
            }
        }
    }
}

function startChatSimple() {
    chatStarted = true;
    const chat = document.getElementById('igChat');
    
    if (!chat) return;
    
    const nombre = groomerIA?.perfil?.config?.nombre || 'Usuario';
    const edad = groomerIA?.perfil?.config?.edad || '16';
    
    chat.innerHTML = `
        <div class="ig-message-time">Hoy</div>
        <div class="ig-request-message">
            <div class="ig-request-title">Mensaje solicitado</div>
            <div class="ig-request-text">${nombre}_${edad} te envió un mensaje.</div>
            <div class="ig-request-buttons">
                <button class="ig-accept-btn" onclick="acceptMessageSimple()">Aceptar</button>
                <button class="ig-delete-btn" onclick="deleteMessageSimple()">Eliminar</button>
            </div>
        </div>
    `;
    
    const usernameElement = document.querySelector('.ig-username');
    if (usernameElement) usernameElement.textContent = `${nombre}_${edad}`;
}

function acceptMessageSimple() {
    const chat = document.getElementById('igChat');
    document.querySelector('.ig-request-message')?.remove();
    
    setTimeout(() => {
        const mensaje = groomerIA?.procesarMensajeUsuario?.("inicio")?.respuesta || "Hola 😊";
        chat.innerHTML += `
            <div class="ig-message-container">
                <div class="ig-message ig-message-them">${mensaje}</div>
            </div>
        `;
        chat.scrollTop = chat.scrollHeight;
    }, 1000);
}

function deleteMessageSimple() {
    const chat = document.getElementById('igChat');
    chat.innerHTML = `
        <div class="ig-alert ig-alert-warning">
            Mensaje eliminado. Esta es una acción segura.
        </div>
        <div style="text-align: center; margin: 20px 0;">
            <button onclick="restartChatSimple()" style="background: #17a864; color: white; border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer;">
                Reiniciar Chat
            </button>
        </div>
    `;
    chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('igInput');
    if (!input || !input.value.trim()) return;
    
    const userMessage = input.value.trim();
    const chat = document.getElementById('igChat');
    
    chat.innerHTML += `
        <div class="ig-message-container">
            <div class="ig-message ig-message-me">${userMessage}</div>
        </div>
    `;
    
    input.value = '';
    
    setTimeout(() => {
        const respuesta = groomerIA?.procesarMensajeUsuario?.(userMessage)?.respuesta || "Interesante...";
        chat.innerHTML += `
            <div class="ig-message-container">
                <div class="ig-message ig-message-them">${respuesta}</div>
            </div>
        `;
        chat.scrollTop = chat.scrollHeight;
    }, 1500);
    
    chat.scrollTop = chat.scrollHeight;
}

// ===== FUNCIONES GLOBALES =====
function handleInputKeypress(event) {
    if (event.key === 'Enter') sendMessage();
}

function restartChatSimple() {
    chatStarted = false;
    startChatSimple();
}

function videoCall() {
    alert("🚨 Llamada de video bloqueada por seguridad");
}

function showBlockOptions() {
    if (confirm("¿Bloquear usuario?")) {
        alert("Usuario bloqueado ✅");
    }
}

// Hacer funciones globales
window.generarMensaje = generarMensaje;
window.toggleChat = toggleChat;
window.acceptMessageSimple = acceptMessageSimple;
window.deleteMessageSimple = deleteMessageSimple;
window.sendMessage = sendMessage;
window.handleInputKeypress = handleInputKeypress;
window.restartChatSimple = restartChatSimple;
window.videoCall = videoCall;
window.showBlockOptions = showBlockOptions;

// ===== INICIAR =====
document.addEventListener('DOMContentLoaded', inicializarAplicacion);