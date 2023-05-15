const frases = [
  "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "El fracaso es una oportunidad para empezar de nuevo con más experiencia.",
  "La única forma de hacer un gran trabajo es amar lo que haces.",
  "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes al no intentarlo."
];

function obtenerFraseAlAzar() {
  return frases[Math.floor(Math.random() * frases.length)];
}