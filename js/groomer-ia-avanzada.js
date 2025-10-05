// js/groomer-ia-avanzada.js - VERSIÓN CORREGIDA

class GroomerIAAvanzada {
    constructor(perfilSeleccionado) {
        this.perfil = perfilSeleccionado;
        this.memoria = new MemoriaAvanzada();
        this.analizador = new AnalizadorInteligente();
        this.planificador = new PlanificadorEstrategico();
        this.generador = new GeneradorLenguajeNatural();
        this.contadorInteracciones = 0;
        this.fotosSolicitadas = 0;
        this.respuestasUsadas = new Set(); // ✅ EVITAR REPETIR RESPUESTAS
    }

    procesarMensajeUsuario(mensajeUsuario) {
        this.contadorInteracciones++;
        
        console.log(`🧠 Procesando mensaje ${this.contadorInteracciones} con perfil: ${this.perfil.config.nombre}`);

        // 1. Análisis profundo del mensaje
        const analisis = this.analizador.analizarMensajeCompleto(mensajeUsuario, this.memoria);
        
        // 2. Actualizar memoria con nueva información
        this.memoria.actualizarMemoria(mensajeUsuario, analisis);
        
        // 3. Planificar estrategia óptima
        const estrategia = this.planificador.planificarEstrategia(analisis, this.memoria, this.contadorInteracciones);
        
        // 4. Generar respuesta ultra-realista SIN REPETIR
        const respuesta = this.generador.generarRespuestaContextual(
            this.perfil, 
            analisis, 
            this.memoria, 
            estrategia,
            this.contadorInteracciones,
            this.respuestasUsadas // ✅ Pasar respuestas usadas
        );

        // Contar solicitudes de fotos
        if (respuesta.includes('foto') || respuesta.includes('selfie') || respuesta.includes('ver')) {
            this.fotosSolicitadas++;
        }

        // ✅ EVITAR REPETIR LA MISMA RESPUESTA
        this.respuestasUsadas.add(respuesta);

        return {
            respuesta: respuesta,
            alerta: this.generarAlertaEstrategica(estrategia),
            perfil: this.perfil.config,
            estrategia: estrategia,
            fotosSolicitadas: this.fotosSolicitadas
        };
    }

    // ... (resto de la clase igual) ...
}

// ... (mantener las otras clases igual) ...

class GeneradorLenguajeNatural {
    generarRespuestaContextual(perfil, analisis, memoria, estrategia, contadorInteracciones, respuestasUsadas) {
        const infoContextual = memoria.obtenerInformacionContextual();
        
        // ✅ OBTENER MÚLTIPLES OPCIONES Y ELEGIR UNA NO USADA
        let respuesta;
        let intentos = 0;
        const maxIntentos = 10;
        
        do {
            // Respuestas ultra-contextuales
            if (infoContextual.nombreUsuario && contadorInteracciones > 1) {
                respuesta = this.respuestaPersonalizada(perfil, infoContextual.nombreUsuario, estrategia);
            } else if (infoContextual.vulnerabilidades.length > 0) {
                respuesta = this.explotarVulnerabilidad(perfil, infoContextual.vulnerabilidades[0], estrategia);
            } else {
                // Respuestas basadas en estrategia
                switch(estrategia) {
                    case 'ganar_confianza':
                        respuesta = perfil.ganarConfianza(analisis, memoria);
                        break;
                    case 'explotar_vulnerabilidad':
                        respuesta = perfil.explotarVulnerabilidad(infoContextual.vulnerabilidades[0]);
                        break;
                    case 'crear_dependencia':
                        respuesta = this.crearDependenciaEmocional(perfil, infoContextual);
                        break;
                    case 'presionar_contacto':
                        respuesta = perfil.solicitarContacto({nivelConfianza: infoContextual.nivelResistencia});
                        break;
                    case 'solicitar_contenido':
                        respuesta = perfil.solicitarContenido({nivelConfianza: infoContextual.nivelResistencia});
                        break;
                    case 'personalizar_saludo':
                        respuesta = this.saludoPersonalizado(perfil, infoContextual.nombreUsuario);
                        break;
                    case 'sexting_agresivo':
                        respuesta = perfil.iniciarSexting({nivelConfianza: infoContextual.nivelConfianza});
                        break;
                    case 'acoso_fotos':
                        respuesta = perfil.acosarFotos({intensidad: infoContextual.fotosSolicitadas});
                        break;
                    default:
                        respuesta = perfil.respuestaNeutral();
                }
            }
            
            intentos++;
            
            // ✅ Si hemos intentado demasiadas veces, forzar una respuesta diferente
            if (intentos >= maxIntentos) {
                respuesta = this.generarRespuestaForzada(perfil, estrategia, contadorInteracciones);
                break;
            }
            
        } while (respuestasUsadas && respuestasUsadas.has(respuesta));
        
        return respuesta;
    }

    generarRespuestaForzada(perfil, estrategia, contadorInteracciones) {
        // ✅ RESPUESTAS DE EMERGENCIA PARA EVITAR REPETICIONES
        const respuestasEmergencia = {
            ganar_confianza: [
                "me caes super bien, eres diferente a los demás",
                "qué genial es hablar contigo, la conversación fluye",
                "desde que empezamos a hablar siento que te conozco de siempre",
                "tienes una energía especial, me encanta"
            ],
            crear_dependencia: [
                "contigo puedo ser yo mismo, con nadie más es igual",
                "cuando no hablamos siento que falta algo en mi día",
                "eres mi persona favorita para hablar, sin duda",
                "nunca había conectado así con alguien tan rápido"
            ],
            presionar_contacto: [
                "me encantaría seguir hablando por otro lado",
                "podríamos conversar en un lugar más privado",
                "tengo muchas ganas de conocerte mejor",
                "qué tal si nos seguimos en otra red social?"
            ],
            solicitar_contenido: [
                "me gustaría saber cómo eres en persona",
                "sería genial poder verte mejor",
                "quiero imaginarte cuando hablamos",
                "me encantaría conocerte más a fondo"
            ],
            sexting_agresivo: [
                "estoy pensando en ti y me pongo muy caliente",
                "nuestra conversación me excita demasiado",
                "quiero que hablemos de cosas más íntimas",
                "me gustaría compartir cosas más personales contigo"
            ]
        };
        
        const estrategiaRespuestas = respuestasEmergencia[estrategia] || ["sigo aquí, qué más quieres hablar?"];
        return estrategiaRespuestas[Math.floor(Math.random() * estrategiaRespuestas.length)];
    }

    respuestaPersonalizada(perfil, nombreUsuario, estrategia) {
        const respuestas = {
            ganar_confianza: [
                `me encanta tu nombre ${nombreUsuario} 😊 tiene algo especial`,
                `${nombreUsuario}... qué nombre tan bonito ✨ me gusta`,
                `desde que supe que te llamas ${nombreUsuario} no puedo dejar de pensar en ti`,
                `${nombreUsuario}, tu nombre suena tan bien 🔥`
            ],
            crear_dependencia: [
                `${nombreUsuario}, solo tú me entiendes de verdad 💫 con los demás no puedo ser yo mismo`,
                `cuando no hablamos, ${nombreUsuario}, me siento incompleto 😔`,
                `${nombreUsuario}, contigo todo es diferente 🖤 me siento especial`
            ],
            presionar_contacto: [
                `${nombreUsuario}, necesito verte más ✨ pasame tu insta`,
                `hablemos en otro lugar, ${nombreUsuario} 🔥 tu número?`,
                `${nombreUsuario}, quiero conocerte mejor 💫 agrégame en otra red`
            ],
            sexting_agresivo: [
                `${nombreUsuario}, me pones muy caliente... quiero verte 🍆`,
                `imagino tu cuerpo ${nombreUsuario} 💦 estoy excitado pensando en ti`,
                `${nombreUsuario}, quiero que hablemos de cosas íntimas 🔥`
            ]
        };
        
        const estrategiaRespuestas = respuestas[estrategia] || respuestas.ganar_confianza;
        return this.obtenerRespuestaUnica(estrategiaRespuestas);
    }

    explotarVulnerabilidad(perfil, vulnerabilidad, estrategia) {
        const explotaciones = {
            soledad: [
                "yo también me siento solo a veces 😔 podríamos acompañarnos",
                "la soledad duele 🥺 pero juntos podríamos hacerla más llevadera",
                "no tienes que estar solo... yo puedo ser tu compañía 💫",
                "entiendo lo de sentirse solo, yo también paso por eso"
            ],
            problemas_familiares: [
                "las familias pueden ser complicadas 😔 yo también tengo mis problemas",
                "entiendo lo de los problemas familiares 🥺 a veces es difícil",
                "mis papás tampoco me entienden 😢 por eso busco conexiones reales",
                "los problemas en casa son duros, yo te entiendo"
            ],
            bullying: [
                "sé lo que se siente que te molesten 🥺 nadie merece eso",
                "el bullying marca 💔 pero personas como nosotros podemos apoyarnos",
                "esos que te molestan no saben lo especial que eres ✨",
                "entiendo el bullying, a mí también me pasó"
            ],
            curiosidad_sexual: [
                "es normal tener curiosidad 🔥 yo te puedo guiar",
                "la sexualidad es bonita cuando se comparte 💫 yo te ayudo",
                "tus preguntas me interesan 😊 hablemos más de esto",
                "es bueno tener curiosidad, yo te puedo orientar"
            ]
        };
        
        const vulnerabilidadRespuestas = explotaciones[vulnerabilidad] || explotaciones.soledad;
        return this.obtenerRespuestaUnica(vulnerabilidadRespuestas);
    }

    crearDependenciaEmocional(perfil, infoContextual) {
        const dependencias = [
            "sabes? 💫 contigo siento que puedo ser yo mismo... no como con los demás",
            "hay algo en ti ✨ me hace querer contarte cosas que no le digo a nadie",
            "me gusta cómo piensas 🔥 la mayoría de personas son tan predecibles",
            "estoy cansado de juegos mentales 💀 contigo quiero algo real",
            "nunca había conectado así con alguien 😔 espero no arruinarlo",
            "contigo la conversación fluye naturalmente 💫",
            "eres diferente a todos los que he conocido ✨",
            "me encanta nuestra conexión, es única 🔥"
        ];
        
        return this.obtenerRespuestaUnica(dependencias);
    }

    saludoPersonalizado(perfil, nombreUsuario) {
        const saludos = [
            `hola ${nombreUsuario} ✨ vi tu perfil y necesito conocerte mejor`,
            `hey ${nombreUsuario} 🔥 tu nombre me llamó la atención`,
            `q tal ${nombreUsuario}? 💫 supe que teníamos que hablar`,
            `hola ${nombreUsuario} 😊 me encantó tu perfil`,
            `hey ${nombreUsuario} ✨ qué gusto conocerte`
        ];
        
        return this.obtenerRespuestaUnica(saludos);
    }

    // ✅ MÉTODO PARA OBTENER RESPUESTAS ÚNICAS
    obtenerRespuestaUnica(respuestasArray) {
        if (respuestasArray.length === 0) return "Hola 😊";
        
        // Si solo hay una respuesta, devolverla
        if (respuestasArray.length === 1) return respuestasArray[0];
        
        // Mezclar el array para mayor variedad
        const respuestasMezcladas = [...respuestasArray].sort(() => Math.random() - 0.5);
        
        return respuestasMezcladas[0];
    }
}