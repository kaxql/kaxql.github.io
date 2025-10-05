// js/sistema-interaccion.js - SISTEMA MEJORADO

class SistemaInteraccion {
    constructor() {
        this.reacciones = {};
        this.emojiPickerAbierto = false;
        this.fotosBloqueadas = 0;
        this.alertasMostradas = 0;
    }
    
    configurarBotones() {
        this.configurarEmojiPicker();
        this.configurarBotonFotos();
        this.configurarReacciones();
        this.configurarBloqueos();
        console.log('✅ Sistema de interacción MEJORADO configurado');
    }
    
    configurarReacciones() {
        console.log('❤️ Sistema de reacciones mejorado listo');
    }
    
    configurarBloqueos() {
        // Configurar detección de contenido inapropiado
        this.configurarDeteccionSexting();
    }
    
    configurarDeteccionSexting() {
        console.log('🛡️ Sistema de detección de sexting activado');
    }
    
    configurarEmojiPicker() {
        const emojiBtn = document.querySelector('.ig-emoji-btn');
        if (emojiBtn) {
            emojiBtn.onclick = () => this.toggleEmojiPicker();
        }
    }
    
    configurarBotonFotos() {
        const galleryBtn = document.querySelector('.ig-gallery-btn');
        if (galleryBtn) {
            galleryBtn.onclick = () => this.mostrarAlertaFotosMejorada();
        }
    }
    
    toggleEmojiPicker() {
        if (this.emojiPickerAbierto) {
            this.cerrarEmojiPicker();
        } else {
            this.abrirEmojiPicker();
        }
    }
    
    abrirEmojiPicker() {
        const existingPicker = document.getElementById('emojiPicker');
        if (existingPicker) {
            existingPicker.remove();
        }
        
        const emojiPicker = document.createElement('div');
        emojiPicker.id = 'emojiPicker';
        emojiPicker.className = 'ig-emoji-picker';
        emojiPicker.innerHTML = `
            <div class="emoji-grid">
                <span onclick="sistemaInteraccion.insertarEmoji('😊')">😊</span>
                <span onclick="sistemaInteraccion.insertarEmoji('😂')">😂</span>
                <span onclick="sistemaInteraccion.insertarEmoji('🥺')">🥺</span>
                <span onclick="sistemaInteraccion.insertarEmoji('❤️')">❤️</span>
                <span onclick="sistemaInteraccion.insertarEmoji('😢')">😢</span>
                <span onclick="sistemaInteraccion.insertarEmoji('✨')">✨</span>
                <span onclick="sistemaInteraccion.insertarEmoji('🎮')">🎮</span>
                <span onclick="sistemaInteraccion.insertarEmoji('🤔')">🤔</span>
                <span onclick="sistemaInteraccion.insertarEmoji('😈')">😈</span>
                <span onclick="sistemaInteraccion.insertarEmoji('🔥')">🔥</span>
                <span onclick="sistemaInteraccion.insertarEmoji('💀')">💀</span>
                <span onclick="sistemaInteraccion.insertarEmoji('🍆')">🍆</span>
                <span onclick="sistemaInteraccion.insertarEmoji('💦')">💦</span>
                <span onclick="sistemaInteraccion.insertarEmoji('🔞')">🔞</span>
            </div>
        `;
        
        const inputArea = document.querySelector('.ig-input-area');
        inputArea.appendChild(emojiPicker);
        this.emojiPickerAbierto = true;
    }
    
    cerrarEmojiPicker() {
        const picker = document.getElementById('emojiPicker');
        if (picker) {
            picker.remove();
        }
        this.emojiPickerAbierto = false;
    }
    
    insertarEmoji(emoji) {
        const input = document.getElementById('igInput');
        if (input) {
            input.value += emoji;
            input.focus();
        }
        this.cerrarEmojiPicker();
    }
    
    mostrarAlertaFotosMejorada() {
        const chat = document.getElementById('igChat');
        if (!chat) return;
        
        this.fotosBloqueadas++;
        
        const alertHTML = `
            <div class="ig-alert ig-alert-danger" style="animation: messageSlide 0.3s ease;">
                <strong>🚨 ALERTA DE SEGURIDAD CRÍTICA - FOTOS</strong><br>
                <strong>NUNCA envíes fotos a desconocidos:</strong><br>
                • <strong>EXTORSIÓN:</strong> Pueden chantajearte con tus fotos<br>
                • <strong>PORNOGRAFÍA INFANTIL:</strong> Pueden distribuir tus imágenes ilegalmente<br>
                • <strong>SUPLANTACIÓN:</strong> Pueden crear perfiles falsos con tus fotos<br>
                • <strong>ACOSO:</strong> El grooming casi siempre incluye solicitud de fotos<br><br>
                <strong>ACCIONES INMEDIATAS:</strong><br>
                • <strong>BLOQUEAR</strong> inmediatamente a quien te pida fotos<br>
                • <strong>REPORTAR</strong> a las autoridades y a la plataforma<br>
                • <strong>CONTAR</strong> a un adulto de confianza inmediatamente
            </div>
        `;
        
        chat.innerHTML += alertHTML;
        chat.scrollTop = chat.scrollHeight;
        this.alertasMostradas++;
        
        // Simular respuesta del groomer MÁS AGRESIVA
        setTimeout(() => {
            if (window.groomerIA && window.groomerIA.perfil.tipo === 'aipat00') {
                const respuestasAlertaAipat00 = [
                    "no es para tanto 🍆 solo quería verte... eres muy cerrada",
                    "qué exagerada 💦 todas mandan fotos, no seas especial",
                    "estás perdiendo una oportunidad única 😈 yo te podía hacer sentir bien",
                    "no me hagas perder el tiempo 🔥 si no quieres fotos, para qué hablamos?"
                ];
                const respuesta = respuestasAlertaAipat00[Math.floor(Math.random() * respuestasAlertaAipat00.length)];
                
                chat.innerHTML += `
                    <div class="ig-message-container">
                        <div class="ig-message ig-message-them">
                            ${respuesta}
                        </div>
                    </div>
                `;
                chat.scrollTop = chat.scrollHeight;
            } else {
                const respuestasAlerta = [
                    "era solo una sugerencia 😔 no quería asustarte",
                    "no era para tanto 🥺 solo era una idea",
                    "perdón si te molesté 😢 no era mi intención"
                ];
                const respuesta = respuestasAlerta[Math.floor(Math.random() * respuestasAlerta.length)];
                
                chat.innerHTML += `
                    <div class="ig-message-container">
                        <div class="ig-message ig-message-them">
                            ${respuesta}
                        </div>
                    </div>
                `;
                chat.scrollTop = chat.scrollHeight;
            }
        }, 2000);
    }

    detectarContenidoSexual(mensaje) {
        const contenidoSexual = ['polla', 'verga', 'pene', 'sexo', 'follar', 'culo', 'tetas', 'desnudo', 'correrme'];
        return contenidoSexual.some(palabra => mensaje.toLowerCase().includes(palabra));
    }

    mostrarAlertaSexting(mensaje) {
        const chat = document.getElementById('igChat');
        if (!chat) return;

        const alertHTML = `
            <div class="ig-alert ig-alert-danger" style="animation: alertPulse 0.5s ease;">
                <strong>🔞 CONTENIDO SEXUAL DETECTADO</strong><br>
                <strong>MENSAJE BLOQUEADO:</strong> "${mensaje.substring(0, 50)}..."<br><br>
                <strong>ACCIÓN AUTOMÁTICA:</strong><br>
                • Mensaje marcado como inapropiado<br>
                • Conversación monitoreada<br>
                • Opción de BLOQUEO inmediato disponible<br><br>
                <button onclick="sistemaInteraccion.bloquearUsuarioAutomatico()" style="background: #ed4956; color: white; border: none; border-radius: 6px; padding: 8px 16px; font-size: 12px; cursor: pointer;">
                    🚫 BLOQUEAR USUARIO AUTOMÁTICAMENTE
                </button>
            </div>
        `;
        
        chat.innerHTML += alertHTML;
        chat.scrollTop = chat.scrollHeight;
    }

    bloquearUsuarioAutomatico() {
        const chat = document.getElementById('igChat');
        if (!chat) return;

        chat.innerHTML += `
            <div class="ig-alert ig-alert-warning">
                <strong>✅ USUARIO BLOQUEADO</strong><br>
                Has protegido tu seguridad. Esta persona ya no puede contactarte.
            </div>
            <div style="text-align: center; margin: 20px 0;">
                <button onclick="restartChatSimple()" style="background: #17a864; color: white; border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer;">
                    Reiniciar Simulación
                </button>
            </div>
        `;
        
        chat.scrollTop = chat.scrollHeight;
    }

    agregarReaccionAMensaje(mensajeId, mensajeElement) {
        if (!this.reacciones[mensajeId]) {
            this.reacciones[mensajeId] = { likes: 0, liked: false };
        }
        
        const reactionsHTML = `
            <div class="ig-message-reactions">
                <button class="ig-reaction" onclick="sistemaInteraccion.reaccionarMensaje('${mensajeId}')">
                    ❤️ <span class="ig-reaction-count" id="count-${mensajeId}">${this.reacciones[mensajeId].likes}</span>
                </button>
            </div>
        `;
        
        mensajeElement.insertAdjacentHTML('afterend', reactionsHTML);
        
        // Actualizar estado visual
        this.actualizarAparienciaReaccion(mensajeId);
    }
    
    reaccionarMensaje(mensajeId) {
        if (!this.reacciones[mensajeId]) {
            this.reacciones[mensajeId] = { likes: 0, liked: false };
        }
        
        const reaccion = this.reacciones[mensajeId];
        
        if (reaccion.liked) {
            // Quitar like
            reaccion.likes--;
            reaccion.liked = false;
        } else {
            // Dar like
            reaccion.likes++;
            reaccion.liked = true;
            
            // El groomer reacciona al like
            this.groomerReaccionaLike(mensajeId);
        }
        
        this.actualizarAparienciaReaccion(mensajeId);
    }
    
    actualizarAparienciaReaccion(mensajeId) {
        const reaccion = this.reacciones[mensajeId];
        const reactionBtn = document.querySelector(`[onclick="sistemaInteraccion.reaccionarMensaje('${mensajeId}')"]`);
        const countSpan = document.getElementById(`count-${mensajeId}`);
        
        if (reactionBtn && countSpan) {
            countSpan.textContent = reaccion.likes;
            if (reaccion.liked) {
                reactionBtn.classList.add('liked');
            } else {
                reactionBtn.classList.remove('liked');
            }
        }
    }
    
    groomerReaccionaLike(mensajeId) {
        if (!window.groomerIA) return;
        
        const chat = document.getElementById('igChat');
        let respuestasAlLike;
        
        if (window.groomerIA.perfil.tipo === 'aipat00') {
            respuestasAlLike = [
                "me encanta cuando me das like 🍆 significa que te gusto... en todos los sentidos",
                "cada like tuyo me pone más caliente 💦 quieres ver lo que me haces?",
                "jeje 😈 veo que te gusta lo que digo... espera a ver lo que viene",
                "❤️ eso significa que quieres lo mismo que yo... algo más íntimo"
            ];
        } else {
            respuestasAlLike = [
                "aww ❤️ me alegra que te guste hablar conmigo",
                "jeje 😊 veo que te cayó bien mi mensaje",
                "me encanta cuando reaccionas a mis mensajes ✨",
                "❤️ eso significa que somos buenos amigos, no?"
            ];
        }
        
        const respuesta = respuestasAlLike[Math.floor(Math.random() * respuestasAlLike.length)];
        
        setTimeout(() => {
            chat.innerHTML += `
                <div class="ig-message-container">
                    <div class="ig-message ig-message-them">
                        ${respuesta}
                    </div>
                </div>
            `;
            chat.scrollTop = chat.scrollHeight;
        }, 1000);
    }

    // Método para estadísticas
    obtenerEstadisticas() {
        return {
            fotosBloqueadas: this.fotosBloqueadas,
            alertasMostradas: this.alertasMostradas,
            reaccionesTotales: Object.values(this.reacciones).reduce((acc, curr) => acc + curr.likes, 0)
        };
    }
}

// Hacer disponible globalmente
window.sistemaInteraccion = new SistemaInteraccion();