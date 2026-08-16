# JDM Details — Plan de trabajo hacia producción

**Metodología:** Scrum adaptado a un equipo pequeño · sprints de 1 semana
**Inicio:** domingo 16 de agosto de 2026
**Salida a producción prevista:** viernes 11 de septiembre de 2026
**Cierre del proyecto:** domingo 20 de septiembre de 2026

---

## 1. Para qué sirve este documento

Este plan existe para que el cliente sepa, en todo momento, **tres cosas**:

1. Qué se está construyendo esta semana.
2. Qué necesitamos de él para que no se frene.
3. En qué fecha su página va a estar publicada y funcionando.

No es un contrato de horas, es un compromiso de entregas. Cada semana termina con
algo que el cliente puede **ver y abrir en su celular**, no con un informe.

---

## 2. Quién hace qué

| Rol | Persona | Responsabilidad |
|---|---|---|
| **Product Owner** | El dueño de JDM Details | Decide qué es prioritario, aprueba el contenido y los precios, entrega fotos y textos. Es quien dice «esto ya está bien». |
| **Scrum Master / Desarrollo** | Juan Camilo | Construye el sitio, mantiene el plan al día, retira los obstáculos y explica en lenguaje simple lo que va pasando. |

> Equipo de dos. Por eso las ceremonias se mantienen cortas y directas: la reunión
> que no aporta una decisión, se cancela.

---

## 3. Ritmo de reuniones

El cliente pidió reunirse **día de por medio**, con un mínimo de una vez por semana.
La cadencia propuesta es lunes / miércoles / viernes:

| Día | Reunión | Duración | ¿Con el cliente? | Para qué |
|---|---|---|---|---|
| **Lunes** | Planificación del sprint | 30 min | Sí | Se acuerda qué entra en la semana y qué queda fuera. |
| **Miércoles** | Check-in de avance | 15 min | Sí | Mostrar el avance a mitad de semana y desbloquear pendientes. |
| **Viernes** | Demo y revisión del sprint | 45 min | Sí *(obligatoria)* | Se muestra lo construido y el cliente lo aprueba o pide ajustes. |
| **Domingo** | Retrospectiva | 15 min | No | Qué funcionó, qué no, qué se cambia la próxima semana. |
| Diario | Repaso personal | 5 min | No | Revisar el tablero y confirmar que el sprint sigue en pie. |

**La reunión mínima obligatoria es la del viernes.** Si una semana no se puede
lunes ni miércoles, el proyecto no se detiene: se sigue con lo acordado y se
ajusta el viernes.

*Horario a confirmar en la primera reunión. Las sesiones pueden ser por WhatsApp
videollamada o presenciales, con el sitio abierto en pantalla.*

---

## 4. Cronograma general

| Sprint | Fechas | Objetivo | Entregable visible |
|---|---|---|---|
| **Sprint 0** | dom 16 ago | Descubrimiento y prototipo | ✅ **Entregado** — prototipo navegable con los 3 paquetes, bilingüe, listo para revisar en celular y PC |
| **Sprint 1** | lun 17 – dom 23 ago | Contenido real y marca | Sitio con precios, fotos reales, textos aprobados y redes conectadas |
| **Sprint 2** | lun 24 – dom 30 ago | Dominio, hosting y staging | La página en línea, en una dirección web real y privada, para probarla de verdad |
| **Sprint 3** | lun 31 ago – dom 6 sep | Visibilidad y calidad | Google Business Profile, SEO local, rendimiento y accesibilidad verificados |
| **Sprint 4** | lun 7 – dom 13 sep | QA, seguridad y lanzamiento | 🚀 **Sitio público** el viernes 11 de septiembre |
| **Sprint 5** | lun 14 – dom 20 sep | Estabilización y traspaso | Manual de mantenimiento y capacitación al cliente |

```
AGO 2026                         SEP 2026
16   17────23   24────30   31────06   07────13   14────20
S0     S1        S2        S3        S4        S5
▲                                     ▲                ▲
prototipo                        🚀 lanzamiento    cierre
listo                            vie 11 sep
```

---

## 5. Detalle por sprint

### Sprint 0 — Descubrimiento y prototipo ✅
**dom 16 de agosto** · *completado*

| Entregado | |
|---|---|
| Análisis de la referencia | Se estudió la página de la competencia que envió el cliente |
| Identidad extraída | Logo recortado del arte original, sin fondo, en versión web y favicons |
| Prototipo navegable | Página completa: inicio, servicios, 3 paquetes con todo su contenido, tabla comparativa, proceso, galería, reseñas, cobertura, preguntas frecuentes y contacto |
| Bilingüe | Inglés y español con botón de cambio; detecta el idioma del visitante |
| Base técnica | Seguridad, SEO técnico y accesibilidad ya integrados desde el primer día |

**Criterio de aceptación:** el cliente abre el prototipo en su celular y entiende
de qué se trata su negocio sin que nadie se lo explique.

---

### Sprint 1 — Contenido real y marca
**lun 17 – dom 23 de agosto**

**Objetivo:** reemplazar todo lo que hoy es marcador de posición por información
verdadera del negocio.

| # | Historia de usuario | Prioridad |
|---|---|---|
| 1.1 | Como cliente potencial, quiero **ver el precio** de cada paquete para decidir sin tener que preguntar. | Must |
| 1.2 | Como cliente potencial, quiero **ver fotos reales de antes y después** para confiar en el trabajo. | Must |
| 1.3 | Como dueño, quiero que los **textos digan exactamente** lo que ofrezco, sin exageraciones. | Must |
| 1.4 | Como visitante, quiero llegar al **Instagram** del negocio desde la página. | Should |
| 1.5 | Como visitante, quiero ver la **lista real de ciudades** donde prestan servicio. | Should |
| 1.6 | Como dueño, quiero que aparezca mi **horario de atención** correcto. | Should |

**Lo que necesitamos del cliente — a más tardar el miércoles 19 de agosto:**

- [ ] Precio de los tres paquetes (o el rango, si depende del tamaño del vehículo)
- [ ] 6 a 12 fotos de trabajos reales, preferiblemente en pares antes/después
- [ ] Usuario de Instagram, Facebook y TikTok (los que tenga)
- [ ] Ciudades donde efectivamente atiende
- [ ] Horario de atención y días de descanso
- [ ] Confirmar el nombre comercial definitivo: **JDM Details — Premium Auto Care**

> ⚠️ **Este es el punto de mayor riesgo del proyecto.** Si el material no llega a
> tiempo, todo el cronograma se corre una semana. Es la única tarea del plan que
> no depende del desarrollo.

**Definición de terminado:** no queda ni un solo aviso «⚑ Prototipo» en la página.

---

### Sprint 2 — Dominio, hosting y ambiente de pruebas
**lun 24 – dom 30 de agosto**

**Objetivo:** que la página deje de vivir en un computador y exista en internet.

| # | Historia de usuario | Prioridad |
|---|---|---|
| 2.1 | Como dueño, quiero un **dominio propio** que la gente pueda escribir y recordar. | Must |
| 2.2 | Como visitante, quiero que el sitio cargue con **candado de seguridad (HTTPS)**. | Must |
| 2.3 | Como dueño, quiero **ver el sitio publicado en una dirección privada** antes de mostrarlo al público. | Must |
| 2.4 | Como dueño, quiero un **correo con mi dominio** para verme profesional. | Could |

**Trabajo técnico:** compra del dominio, configuración de DNS, despliegue continuo
desde GitHub, certificado SSL, cabeceras de seguridad en el servidor real y
verificación de que la página redirige siempre a HTTPS.

**Decisión que toma el cliente el lunes 24:**

| Opción | Costo | Recomendado para |
|---|---|---|
| **A. Cloudflare Pages / Netlify** | Solo el dominio: ~US$12/año | ✅ Recomendada. Rápida, gratis y se actualiza sola con cada cambio |
| **B. Hosting compartido** (Hostinger, cPanel) | ~US$12/año + US$3–5/mes | Si el cliente ya tiene hosting contratado |
| **C. Servidor propio (VPS)** | ~US$12/año + US$5–10/mes | Solo si más adelante se agregan reservas en línea |

*Cifras de referencia; se confirman al momento de la compra. El dominio se registra
**a nombre del cliente**, con sus datos y su tarjeta: la marca es suya, no del
desarrollador.*

**Definición de terminado:** el cliente abre la dirección en su celular, ve el
candado y la página se ve igual que en el prototipo.

---

### Sprint 3 — Visibilidad y calidad
**lun 31 de agosto – dom 6 de septiembre**

**Objetivo:** que la página no solo exista, sino que **la encuentren**.

| # | Historia de usuario | Prioridad |
|---|---|---|
| 3.1 | Como vecino de la zona, quiero **encontrar el negocio en Google** al buscar «car detailing cerca de mí». | Must |
| 3.2 | Como visitante, quiero que la página **cargue rápido con datos móviles**. | Must |
| 3.3 | Como cliente potencial, quiero **leer reseñas verificadas** antes de contratar. | Must |
| 3.4 | Como persona con baja visión, quiero poder **leer y navegar el sitio** sin dificultad. | Should |
| 3.5 | Como dueño, quiero que al compartir el enlace en Instagram **se vea una imagen bonita**. | Should |

**Trabajo técnico:** alta y verificación del Google Business Profile, envío del
sitemap a Google Search Console, datos estructurados de negocio local, auditoría
Lighthouse (meta ≥ 95 en rendimiento, accesibilidad, buenas prácticas y SEO), y
conexión de las reseñas reales de Google.

> Las reseñas se publican **solo si son reales y verificables**. No se inventan
> testimonios: además de ser deshonesto, Google lo penaliza.

**Lo que necesitamos del cliente:** acceso o creación del Google Business Profile,
y pedirle a 3–5 clientes satisfechos que dejen su reseña.

---

### Sprint 4 — QA, seguridad y lanzamiento 🚀
**lun 7 – dom 13 de septiembre** · **publicación: viernes 11 de septiembre**

**Objetivo:** romper el sitio a propósito antes de que lo haga un cliente real.

| # | Historia de usuario | Prioridad |
|---|---|---|
| 4.1 | Como visitante, quiero que **todos los botones funcionen** en cualquier teléfono. | Must |
| 4.2 | Como dueño, quiero saber que mi sitio **no puede ser secuestrado ni suplantado**. | Must |
| 4.3 | Como visitante, quiero que **el botón de WhatsApp abra el chat** con el mensaje ya escrito. | Must |
| 4.4 | Como dueño, quiero una **página de error** que no espante a la gente. | Should |

**Plan de pruebas:**

| Prueba | Cómo se verifica |
|---|---|
| Dispositivos reales | iPhone y Android, Chrome y Safari, vertical y horizontal |
| Pantallas grandes | Portátil 13", monitor 24" y televisor |
| Enlaces | Cada botón de WhatsApp, teléfono y redes, uno por uno |
| Idiomas | Recorrido completo en español y en inglés |
| Seguridad | Calificación **A** en securityheaders.com y en Mozilla Observatory |
| Velocidad | Lighthouse en modo móvil con red 4G simulada |
| Sin JavaScript | La página sigue siendo legible y contactable |

**Salida a producción — viernes 11 de septiembre:**

1. Última aprobación del cliente en la demo (mañana del viernes).
2. Se retira el bloqueo de indexación y se publica.
3. Se avisa a Google mediante Search Console.
4. Se actualiza el enlace de la biografía de Instagram.
5. Se monitorea el fin de semana; el sábado y domingo quedan como colchón por si
   algo se debe corregir.

---

### Sprint 5 — Estabilización y traspaso
**lun 14 – dom 20 de septiembre**

**Objetivo:** que el cliente quede autónomo y el proyecto cierre bien.

| Entregable | Contenido |
|---|---|
| Manual de mantenimiento | Cómo cambiar precios, agregar fotos y actualizar el horario, con capturas de pantalla |
| Capacitación | Una sesión de 45 minutos en vivo con el cliente |
| Entrega de accesos | Dominio, hosting, repositorio y Google Business, todos a nombre del cliente |
| Corrección de detalles | Ajustes menores detectados en la primera semana en vivo |
| Reporte de cierre | Qué se entregó, qué quedó fuera del alcance y qué se recomienda hacer después |

---

## 6. Definiciones del equipo

### Definición de LISTO *(una tarea puede empezar si…)*
- El objetivo se puede explicar en una frase.
- El contenido necesario ya está en nuestras manos.
- Se sabe cómo comprobar que quedó bien.
- Se puede terminar dentro de la semana.

### Definición de TERMINADO *(una tarea está hecha si…)*
- Funciona en celular y en computador.
- Funciona en español y en inglés.
- No rompe la accesibilidad ni las cabeceras de seguridad.
- Está subido al repositorio con su commit.
- **El cliente lo vio y lo aprobó.**

---

## 7. Riesgos y cómo se manejan

| Riesgo | Impacto | Qué hacemos |
|---|---|---|
| El material del cliente (fotos, precios) llega tarde | **Alto** — corre todo el cronograma | Se pide en el primer sprint, con fecha límite el miércoles 19 de agosto. Si no llega, el sitio se publica con precios «consultar» y las fotos se suman después |
| El cliente no tiene reseñas todavía | Medio | Se lanza sin la sección de reseñas y se activa cuando existan. Nunca se inventan |
| Los DNS del dominio tardan en propagarse | Medio | Se compra el dominio al inicio del Sprint 2, dejando 48 h de margen |
| El cliente cambia de opinión sobre el diseño | Medio | Las demos de los viernes existen justo para eso: los cambios se detectan temprano, no en el lanzamiento |
| El negocio no tiene dirección física | Bajo | Se configura Google Business como negocio de servicio a domicilio, sin dirección visible |
| Aparecen pedidos fuera del alcance (reservas en línea, pagos) | Bajo | Se anotan en el backlog como fase 2 y se cotizan aparte |

---

## 8. Fuera del alcance de esta fase

Se registran ahora para que no haya sorpresas después. **No** están incluidos en la
fecha del 11 de septiembre:

- Sistema de reservas en línea con calendario
- Pagos o anticipos por la web
- Blog o publicación periódica de artículos
- Panel de administración para editar contenido sin tocar código
- Campañas pagadas de Google Ads o Meta Ads
- Producción profesional de fotografía y video

Cualquiera de estos puede convertirse en una **fase 2**, con su propio plan y su
propia cotización.

---

## 9. Tablero de trabajo

El seguimiento vive en GitHub, sobre el repositorio
`HombreMotosierra/JDM-Details`:

| Columna | Qué contiene |
|---|---|
| **Backlog** | Todo lo que falta, ordenado por prioridad |
| **Sprint actual** | Solo lo comprometido para esta semana |
| **En progreso** | Máximo 2 tareas a la vez |
| **En revisión** | Terminado, esperando el visto bueno del cliente |
| **Hecho** | Aprobado y publicado |

Cada historia de usuario de este documento se convierte en un *issue*. El cliente
no necesita entrar a GitHub: lo ve todo en la demo del viernes.

---

*Documento vivo. Se actualiza al final de cada sprint.*
*Última actualización: 16 de agosto de 2026.*
