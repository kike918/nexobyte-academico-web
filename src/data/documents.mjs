/**
 * Registro de anexos para exhibición pública.
 * Las copias PDF fueron aprobadas por el responsable del proyecto.
 * Esta versión requiere adjuntar los 5 archivos en public/documentos/ ANTES de fusionar a main.
 * No fusionar mientras falte algún PDF: de lo contrario habrá enlaces rotos.
 */
export const documents = [
  {code:'A', slug:'constitucion', title:'Documento privado de constitución', description:'Estatutos, capital, accionistas y representación legal.', filename:'anexo-a-constitucion-publico.pdf', approvedPublicCopy:true},
  {code:'B', slug:'rues-sociedad', title:'RUES de la sociedad', description:'Simulación de matrícula mercantil de la persona jurídica.', filename:'anexo-b-rues-sociedad-publico.pdf', approvedPublicCopy:true},
  {code:'C', slug:'rues-establecimiento', title:'RUES del establecimiento', description:'Simulación de matrícula del establecimiento de comercio.', filename:'anexo-c-rues-establecimiento-publico.pdf', approvedPublicCopy:true},
  {code:'D', slug:'rut', title:'Registro Único Tributario (simulado)', description:'Formulario RUT de estudio y obligaciones tributarias.', filename:'anexo-d-rut-publico.pdf', approvedPublicCopy:true},
  {code:'E', slug:'responsabilidades', title:'Carta de responsabilidades', description:'Declaración de responsabilidades tributarias en el supuesto académico.', filename:'anexo-e-responsabilidades-publico.pdf', approvedPublicCopy:true},
];
export function publicPdfUrl(doc, base) {
  return doc.approvedPublicCopy ? `${base}documentos/${doc.filename}` : null;
}
