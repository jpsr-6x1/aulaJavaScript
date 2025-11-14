const livro = {
    titulo : "A Cabana",
    autor : "William P. Young",
    paginas : "240 páginas",
    disponivel: "Sim",
    
    detalhes() {
        return `O livro "${this.titulo}" foi escrito por ${this.autor}, possui ${this.paginas} e é publicado pela ${this.editora}.`;
    }
};

console.log(livro.titulo);
console.log(livro["autor"]);

livro.editora = "Editora Arqueiro";

console.log(livro.detalhes());

const biblioteca = {
    livros: ["A Cabana","Diario de um Banana","Dom Quixote","O Menino do Dedo Verde"],
}

for (let livro of biblioteca.livros) {
    console.log(livro);
}
// Aula 16 //
function saudar(nome = "Pedro") {
    return `Olá, ${nome}!`;
}

function calcularMedia (a,b,c){
    return(a+b+c)/3;
}

function apresentarProduto (nomeProduto,preco = 0){
    return `Produto: ${nomeProduto} | Preço: R$ ${preco}`;
}

console.log(saudar("Ana"));  
console.log(saudar("Carlos"));

console.log(calcularMedia(8, 7.5, 9));  
console.log(calcularMedia(10, 6, 8));

console.log(apresentarProduto("Caderno", 12.50));  
console.log(apresentarProduto("Caneta"));