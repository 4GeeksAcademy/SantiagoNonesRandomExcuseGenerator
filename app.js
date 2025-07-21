function generateExcuse() {
  let who = ["El Barbero", "El sobrino de mi tía", "El loco de la cuadra", "El mismisimo Donald J. Trump", "Chespirito"];
  let action = ["lanzó por la ventana", "se limpió la salsa de la cara con", "cambió por una pepsicola", "perdió", "tiró por la alcantarilla"];
  let what = ["mis llaves del carro", "el cargador del teléfono", "el único boxer limpio que tenía", "mi billetera", "la computadora"];
  let when = ["ayer por la noche", "ahoritica mismo", "en plena hora de la siesta", "hace raaaato"];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

console.log(generateExcuse());

window.onload = function() {
  const excuse = generateExcuse(); 
  document.getElementById("excuse").innerText = excuse;
};
