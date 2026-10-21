# Auditoría de navegación y contenido · S6

Fecha: 21/10/2026.

## Páginas cubiertas

- 1 portada: `src/pages/index.astro`
- 5 capítulos: `src/pages/[slug].astro`, rutas `empresa/`, `servicios/`, `formalizacion/`, `siad/`, `marco-juridico/`
- 5 visores: `src/pages/documentos/[code].astro`, anexos A–E

**Total: 11 páginas estáticas.**

## Encabezado único (verificado en fuente)

Los tres templates importan y usan `src/components/SiteHeader.astro`. No conservan un `<header class="nav">` independiente. El encabezado presenta Inicio, NexoByte, Servicios, Formalización, Caso SIAD, Marco jurídico y Más (Clientes potenciales, Anexos PDF, Integrantes y Conclusiones), además del acceso directo a los anexos.

Las diferencias visualizadas en capturas corresponden al menú anterior y requieren verificar la versión publicada actual y forzar recarga del navegador.

## Navegación contextual

- Portada: tarjetas a los cinco capítulos, anclas a las secciones y fichas a los cinco visores con descargas.
- Capítulos: enlace para volver al inicio, índice interno de apartados y enlaces a otros capítulos y anexos.
- Visores PDF: nuevo acceso visible a todos los anexos, Formalización y Marco jurídico, más PDF embebido, apertura externa y descarga.

## Contenido adicional recomendado (no publicar como hechos sin respaldo documental)

1. **Caso SIAD:** tabla contractual de obligaciones NexoByte / Logística del Centro, entregables y criterios de aceptación; cronograma ilustrativo dentro de los 60 días; riesgos y medidas preventivas claramente académicos.
2. **Formalización:** correspondencia anexo → finalidad, autoridad/trámite, responsables y alcance, indicando siempre que no hay registro efectivo.
3. **Marco jurídico:** referencias normativas específicas y bibliografía APA 7 conciliadas con el documento final; glosario sobre cheque, factura título valor, aceptación, RADIAN y licencia.
4. **Empresa y servicios:** ejemplos hipotéticos de flujos para clientes B2B y límites del portafolio; no atribuir clientes ni resultados reales.
5. **Trabajo colaborativo:** conclusiones separadas por autor solo cuando existan aportes autorizados y definitivos; identificar el estado preliminar hasta ese momento.

## Verificaciones antes del cierre

- Ejecutar build Pages sobre `main`.
- Abrir portada, los cinco capítulos y los cinco anexos en escritorio y móvil.
- Comprobar anclas, menú «Más», estado activo, descarga PDF y botón «Volver».
- No mezclar datos de nuevos aportes con documentación original sin conciliación.
