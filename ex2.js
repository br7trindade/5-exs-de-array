// 2. Organizando a lista de animais
let animais = ["Gato", "Cachorro", "Pássaro"];

// Adicionando o "Elefante" ao final da lista
animais.push("Elefante");

// Removendo o "Gato" da lista
animais.splice(animais.indexOf("Gato"), 1);

// Exibindo a lista atualizada
console.log("Lista de animais atualizada:", animais);
