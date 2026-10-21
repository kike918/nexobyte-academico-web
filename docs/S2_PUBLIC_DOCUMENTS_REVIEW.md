# S2 — Inventario y controles para documentos públicos

**Estado:** revisión preliminar terminada; publicación de PDF **bloqueada** hasta aprobación.

## Inventario del expediente académico

| Documento | Páginas | Uso previsto |
| --- | ---: | --- |
| Anexo A — Constitución | 3 | Visor y descarga |
| Anexo B — RUES sociedad | 5 | Visor y descarga |
| Anexo C — RUES establecimiento | 3 | Visor y descarga |
| Anexo D — RUT académico | 8 | Visor y descarga |
| Anexo E — Carta responsabilidades | 2 | Visor y descarga |

Total: 21 páginas. Fuente: expedientes aprobados conservados fuera del repositorio público.

## Hallazgos de prepublicación

- Los formularios oficiales reproducen apariencia institucional. Agregar una banda clara y visible en **todas las páginas**: «SIMULACIÓN ACADÉMICA — SIN VALIDEZ REGISTRAL».
- Comprobar visualmente las zonas con datos identificativos, firmas y códigos; la extracción de texto no detecta lo que puede estar dentro de imágenes.
- El RUT académico tiene páginas con imágenes rasterizadas. La revisión de privacidad debe ser **visual, página por página**.
- No publicar originales íntegros ni enlaces a carpetas privadas de Drive.
- Mantener la denominación **NexoByte Centro de Servicios Tecnológicos** para el establecimiento y **NexoByte S.A.S.** para la sociedad.
- Evitar publicar información personal de integrantes sin consentimiento.

## Criterios de aceptación S2

1. Copias públicas separadas de los originales.
2. Revisión visual de privacidad y marca académica por página.
3. PDF accesibles en `public/documentos/` con nombres no ambiguos.
4. Los botones **Ver PDF** abren visor accesible; **Descargar** sirve el archivo PDF.
5. Enlaces compatibles con `/nexobyte-academico-web/` (GitHub Pages).
6. Navegación y accesibilidad básica en móvil.
7. Validación exitosa de `npm run build`.
8. PR revisado; no desplegar antes de aprobación.

## Estado de compilación

No se declara aprobado `npm run build`: el entorno de preparación no pudo resolver `registry.npmjs.org`. El workflow `.github/workflows/validate-manual.yml` existe y requiere iniciarse manualmente en GitHub Actions. No se ha iniciado publicación.

## Avance de preparación (21/oct/2026)

Se generaron cinco copias **locales** de los PDF (21 páginas en total) con una franja académica añadida fuera del área original de cada página para no ocultar campos. Las copias están empaquetadas para revisión previa, pero **no han sido subidas a GitHub ni aprobadas para publicación**. El control `approvedPublicCopy` sigue en `false` para los cinco anexos. La revisión de privacidad, fidelidad documental y legibilidad debe completarse antes de activar cada archivo.
