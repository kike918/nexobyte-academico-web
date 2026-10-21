# S2 — Habilitación segura del visor y las descargas

## Implementado en dev

- `src/data/documents.mjs`: catálogo central de los cinco anexos con `approvedPublicCopy: false`.
- `src/pages/documentos/[code].astro`: cinco rutas estáticas (`a` a `e`), con mensajes de revisión y futuro visor nativo PDF.
- `src/pages/index.astro`: cada ficha documental enlaza a su página individual.
- No se han publicado PDF ni cambiado la configuración de despliegue.

## Activación por anexo

1. Preparar una **copia pública separada** del PDF original.
2. Revisión visual página por página: nombres, identificadores, firmas, números, códigos QR/de barras, imágenes escaneadas y datos personales; eliminar lo que no sea necesario para el ejercicio.
3. Incluir en cada página una marca inequívoca: `SIMULACIÓN ACADÉMICA — SIN VALIDEZ REGISTRAL`.
4. Verificar la representación gráfica final y que los datos legales del caso académico sean coherentes.
5. Colocar el PDF aprobado en `public/documentos/` con el nombre de `filename` del catálogo.
6. Cambiar **únicamente ese anexo** a `approvedPublicCopy: true`.
7. Ejecutar manualmente el workflow `S1 Astro build (manual)` sobre `dev`.
8. Revisar visor, apertura externa y descarga en escritorio y móvil; verificar rutas GitHub Pages bajo `/nexobyte-academico-web/`.

## Bloqueos existentes

- No hay copias PDF aprobadas para repositorio público: los cinco documentos permanecen desactivados.
- PR #1 es borrador; sin fusión a main.
- GitHub Pages aún no está publicado.
- Los cambios S2 posteriores al build verde anterior deben recibir una nueva validación.
