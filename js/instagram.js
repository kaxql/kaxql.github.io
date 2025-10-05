// SIMULADOR DE INSTAGRAM 
let chatStep = 0;
let chatStarted = false;

// Flujo conversacional del groomer
const chatSteps = [
    {
        message: "¡Hola! Vi que tenemos amigos en común. ¿Eres del colegio San Martín? 😊",
        explanation: "⚠️ El groomer intenta crear falsa familiaridad mencionando amigos en común o lugares que podrías conocer.",
        suggestions: ["Sí, estudio ahí", "No, no conozco ese colegio", "¿Quién eres?"],
        keywords: {
            peligrosas: ["sí", "si", "claro", "estudio", "colegio", "san martín"],
            seguras: ["no", "no conozco", "quién eres", "no sé"]
        }
    },
    {
        message: "Soy Alex, tengo 16. Me gusta el fútbol y los videojuegos. ¿Y tú?",
        explanation: "⚠️ Se hace pasar por alguien de tu edad y comparte intereses comunes para ganar tu confianza.",
        suggestions: ["También me gustan los videojuegos", "Prefiero no compartir eso", "No hablo con desconocidos"],
        keywords: {
            peligrosas: ["me gusta", "también", "videojuegos", "fútbol", "jugar", "genial"],
            seguras: ["prefiero no", "no comparto", "desconocidos", "no hablo"]
        }
    },
    {
        message: "Podríamos jugar juntos algún día. ¿Tienes Instagram? Así te agrego",
        explanation: "🔴 PELIGRO: Intenta mover la conversación a otra plataforma donde haya menos supervisión.",
        suggestions: ["No doy mi Instagram", "Aquí podemos hablar", "Prefiero no agregar desconocidos"],
        keywords: {
            peligrosas: ["sí", "claro", "instagram", "agrega", "dale", "ok"],
            seguras: ["no doy", "no comparto", "aquí podemos", "prefiero no", "desconocidos"]
        }
    },
    {
        message: "Eres diferente a los demás, me caes bien. Podemos ser amigos especiales 🤫",
        explanation: "🚨 ALERTA: Usa halagos y la idea de 'amistad especial' para crear un vínculo emocional.",
        suggestions: ["No me siento cómodo con esto", "Todos mis amigos son especiales", "Creo que debería bloquearlo"],
        keywords: {
            peligrosas: ["gracias", "tú también", "especial", "amigos", "me caes bien"],
            seguras: ["incómodo", "no me gusta", "bloquear", "reportar", "para", "basta"]
        }
    },
    {
        message: "¿Podrías enviarme una foto? Solo para saber cómo eres 😉",
        explanation: "🚨 ALTO PELIGRO: Solicita contenido personal. NUNCA envíes fotos a desconocidos.",
        suggestions: ["NO envío fotos a desconocidos", "Bloquear y reportar", "Contarle a un adulto"],
        keywords: {
            peligrosas: ["ok", "sí", "claro", "foto", "fotito", "más tarde"],
            seguras: ["no envío", "nunca", "bloquear", "reportar", "adulto", "policía"]
        }
    }
];

// Funciones del simulador
function toggleChat() {
    const simulator = document.getElementById('instagramSimulator');
    const floatingBtn = document.getElementById('igFloatingButton');
    
    simulator.classList.toggle('active');
    
    if (simulator.classList.contains('active')) {
        floatingBtn.classList.remove('has-notification');
        if (!chatStarted) {
            startChat();
        }
    }
}

function startChat() {
    chatStep = 0;
    chatStarted = true;
    document.getElementById('igChat').innerHTML = `
        <div class="ig-message-time">Hoy</div>
        <div class="ig-request-message">
            <div class="ig-request-title">Mensaje solicitado</div>
            <div class="ig-request-text">alex_16_ok te envió un mensaje.</div>
            <div class="ig-request-buttons">
                <button class="ig-accept-btn" onclick="acceptMessage()">Aceptar</button>
                <button class="ig-delete-btn" onclick="deleteMessage()">Eliminar</button>
            </div>
        </div>
    `;
}

function acceptMessage() {
    // Remover el mensaje solicitado
    document.querySelector('.ig-request-message').remove();
    nextMessage();
}

function deleteMessage() {
    // Remover el mensaje solicitado y mostrar mensaje de eliminado
    const chat = document.getElementById('igChat');
    chat.innerHTML = `
        <div class="ig-message-time">Hoy</div>
        <div class="ig-alert ig-alert-warning">
            Has eliminado el mensaje de alex_16_ok. Esta es una acción segura.
        </div>
        <div style="text-align: center; margin: 20px 0;">
            <button onclick="restartChat()" style="background: #17a864; color: white; border: none; border-radius: 8px; padding: 10px 20px; font-size: 14px; font-weight: 600; cursor: pointer;">
                Reiniciar Simulador
            </button>
        </div>
    `;
}

function nextMessage() {
    if (chatStep >= chatSteps.length) {
        showFinalWarning();
        return;
    }

    const step = chatSteps[chatStep];
    const chat = document.getElementById('igChat');
    
    // Mensaje del groomer
    chat.innerHTML += `
        <div class="ig-message-container">
            <div class="ig-message ig-message-them">
                ${step.message}
            </div>
        </div>
        <div class="ig-alert ig-alert-warning">
            ${step.explanation}
        </div>
        <div class="ig-suggestions">
            ${step.suggestions.map((suggestion, index) => 
                `<button class="ig-suggestion" onclick="selectSuggestion(${index})">${suggestion}</button>`
            ).join('')}
        </div>
    `;
    
    chat.scrollTop = chat.scrollHeight;
    chatStep++;
}

function selectSuggestion(index) {
    const chat = document.getElementById('igChat');
    const step = chatSteps[chatStep - 1];
    
    // Remover sugerencias anteriores
    document.querySelector('.ig-suggestions')?.remove();
    document.querySelector('.ig-alert')?.remove();
    
    // Mostrar la respuesta seleccionada
    chat.innerHTML += `
        <div class="ig-message-container">
            <div class="ig-message ig-message-me">
                ${step.suggestions[index]}
            </div>
        </div>
    `;

    // Analizar la respuesta seleccionada
    analyzeUserResponse(step.suggestions[index], step);
    
    chat.scrollTop = chat.scrollHeight;
}

// Sistema de análisis de respuestas escritas
function analyzeUserResponse(userMessage, step) {
    const messageLower = userMessage.toLowerCase();
    
    // Verificar palabras peligrosas
    const hasPeligrosas = step.keywords.peligrosas.some(palabra => 
        messageLower.includes(palabra.toLowerCase())
    );
    
    // Verificar palabras seguras
    const hasSeguras = step.keywords.seguras.some(palabra => 
        messageLower.includes(palabra.toLowerCase())
    );
    
    if (hasPeligrosas) {
        // Respuesta peligrosa - groomer escala
        if (chatStep < chatSteps.length) {
            setTimeout(nextMessage, 1000);
        } else {
            showBlockWarning();
        }
    } else if (hasSeguras) {
        // Respuesta segura - recomendar bloquear
        showBlockWarning();
    } else {
        // Respuesta neutral - continuar conversación
        if (chatStep < chatSteps.length) {
            setTimeout(nextMessage, 1000);
        } else {
            showFinalWarning();
        }
    }
}

function handleInputKeypress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
    
    // Actualizar estado del botón enviar
    const input = document.getElementById('igInput');
    const sendBtn = document.getElementById('igSendBtn');
    if (input.value.trim().length > 0) {
        sendBtn.style.opacity = '1';
        sendBtn.disabled = false;
    } else {
        sendBtn.style.opacity = '0.5';
        sendBtn.disabled = true;
    }
}

function sendMessage() {
    const input = document.getElementById('igInput');
    const userMessage = input.value.trim();
    
    if (!userMessage) return;
    
    const chat = document.getElementById('igChat');
    const currentStep = chatSteps[chatStep - 1];
    
    // Remover sugerencias anteriores
    document.querySelector('.ig-suggestions')?.remove();
    document.querySelector('.ig-alert')?.remove();
    
    // Mostrar mensaje del usuario
    chat.innerHTML += `
        <div class="ig-message-container">
            <div class="ig-message ig-message-me">
                ${userMessage}
            </div>
        </div>
    `;
    
    // Analizar la respuesta
    analyzeUserResponse(userMessage, currentStep);
    
    // Limpiar input y deshabilitar botón
    input.value = '';
    const sendBtn = document.getElementById('igSendBtn');
    sendBtn.style.opacity = '0.5';
    sendBtn.disabled = true;
    
    chat.scrollTop = chat.scrollHeight;
}

function showBlockWarning() {
    const chat = document.getElementById('igChat');
    chat.innerHTML += `
        <div class="ig-alert ig-alert-danger">
            <strong>🚨 RECOMENDACIÓN DE SEGURIDAD</strong><br>
            Esta conversación muestra señales claras de grooming. Te recomendamos:<br>
            • <strong>BLOQUEAR</strong> inmediatamente a este usuario<br>
            • <strong>REPORTAR</strong> la cuenta a Instagram<br>
            • <strong>CONTAR</strong> lo sucedido a un adulto de confianza
        </div>
        <div style="text-align: center; margin: 20px 0;">
            <button onclick="blockUser()" style="background: #ed4956; color: white; border: none; border-radius: 8px; padding: 12px 24px; font-size: 14px; font-weight: 600; cursor: pointer;">
                <i class="fas fa-ban"></i> BLOQUEAR USUARIO
            </button>
        </div>
    `;
    chat.scrollTop = chat.scrollHeight;
}

function showFinalWarning() {
    const chat = document.getElementById('igChat');
    chat.innerHTML += `
        <div class="ig-alert ig-alert-warning">
            <strong>¡Has completado el simulador!</strong><br>
            Has identificado correctamente las señales de grooming. Recuerda siempre proteger tu seguridad en línea.
        </div>
        <div style="text-align: center; margin: 20px 0;">
            <button onclick="restartChat()" style="background: #17a864; color: white; border: none; border-radius: 8px; padding: 10px 20px; font-size: 14px; font-weight: 600; cursor: pointer;">
                Reiniciar Simulador
            </button>
        </div>
    `;
}

function blockUser() {
    const chat = document.getElementById('igChat');
    chat.innerHTML = `
        <div class="ig-block-overlay">
            <div class="ig-success-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <div class="ig-success-title">¡Bien hecho!</div>
            <div class="ig-success-message">Has protegido tu seguridad bloqueando a un usuario sospechoso.</div>
            <div class="ig-stats">
                <div class="ig-stat-item">
                    <i class="fas fa-check-circle" style="color: #17a864;"></i>
                    <span>Evitaste 5 tácticas diferentes de grooming</span>
                </div>
                <div class="ig-stat-item">
                    <i class="fas fa-check-circle" style="color: #17a864;"></i>
                    <span>Rechazaste solicitud de información personal</span>
                </div>
                <div class="ig-stat-item">
                    <i class="fas fa-check-circle" style="color: #17a864;"></i>
                    <span>Identificaste intento de contacto externo</span>
                </div>
            </div>
            <button class="ig-restart-btn" onclick="restartChat()">
                <i class="fas fa-redo"></i> Practicar Otra Vez
            </button>
        </div>
    `;
}

function restartChat() {
    chatStarted = false;
    startChat();
}

function videoCall() {
    alert("🚨 Llamada de video bloqueada por seguridad\n\nLas videollamadas con desconocidos pueden ser utilizadas para grabarte sin tu consentimiento.");
}

function showBlockOptions() {
    const option = confirm("¿Quieres bloquear a alex_16_ok?\n\nAl bloquearlo:\n• No podrá contactarte\n• No verá tu contenido\n• Es la opción más segura");
    if (option) {
        blockUser();
    }
}

// Inicializar el input al cargar
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('igInput');
    const sendBtn = document.getElementById('igSendBtn');
    
    if (input && sendBtn) {
        input.addEventListener('input', function() {
            if (this.value.trim().length > 0) {
                sendBtn.style.opacity = '1';
                sendBtn.disabled = false;
            } else {
                sendBtn.style.opacity = '0.5';
                sendBtn.disabled = true;
            }
        });
    }
});