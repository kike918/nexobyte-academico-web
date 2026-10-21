/**
 * Registro de anexos para exhibición pública.
 * Los PDF NO están incluidos hasta aprobación documental.
 * Para habilitar uno: incorporar una copia depurada en public/documentos/,
 * revisar todas las páginas y cambiar approvedPublicCopy a true.
 */
export const documents = [
  {code:'A', slug:'constitucion', title:'Documento privado de constitución', description:'Estatutos, capital, accionistas y representación legal.', filename:'anexo-a-constitucion-publico.pdf', approvedPublicCopy:false},
  {code:'B', slug:'rues-sociedad', title:'RUES de la sociedad', description:'Simulación de matrícula mercantil de la persona jurídica.', filename:'anexo-b-rues-sociedad-publico.pdf', approvedPublicCopy:false},
  {code:'C', slug:'rues-establecimiento', title:'RUES del establecimiento', description:'Simulación de matrícula del establecimiento de comercio.', filename:'anexo-c-rues-establecimiento-publico.pdf', approvedPublicCopy:false},
  {code:'D', slug:'rut', title:'Registro Único Tributario (simulado)', description:'Formulario RUT de estudio y obligaciones tributarias.', filename:'anexo-d-rut-publico.pdf', approvedPublicCopy:false},
  {code:'E', slug:'responsabilidades', title:'Carta de responsabilidades', description:'Declaración de responsabilidades tributarias en el supuesto académico.', filename:'anexo-e-responsabilidades-publico.pdf', approvedPublicCopy:false},
];
export function publicPdfUrl(doc, base) {
  return doc.approvedPublicCopy ? `${base}documentos/${doc.filename}` : null;
}
