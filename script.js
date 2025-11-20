let listaDeCompras = ["arroz", "feijao", "macarrao", "leite", "banana"];

console.log("Lista inicial:", listaDeCompras);

listaDeCompras.push("chocolate");
console.log("Após adicionar item:", listaDeCompras);

listaDeCompras.shift();
console.log("Após remover o primeiro item:", listaDeCompras);

let itensComMaisDeCincoCaracteres = listaDeCompras.filter(item => item.length > 5);

console.log("Itens com mais de 5 caracteres:", itensComMaisDeCincoCaracteres);

//Atividade 2

let frase = " JavaScript é uma linguagem poderosa! ";

let fraseSemEspacos = frase.trim();

let palavras = fraseSemEspacos.split(" ");

console.log("Frase sem espaços:", fraseSemEspacos);
console.log("Array de palavras:", palavras);
