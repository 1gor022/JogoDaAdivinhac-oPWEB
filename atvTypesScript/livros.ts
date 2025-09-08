interface ILivros{
        titulo: string;
        autor: string;
        editora: string;
        ano: number;
        isbn: string;
        preco: number;
        estoque: number;

        exibirDados(): void;
        atualizarEstoque(qtd: number): void;
}

class livrosFisicos implements ILivros{
    titulo: string;
    autor: string;
    editora: string;
    ano: number;
    isbn: string;
    preco: number;
    estoque: number;

    constructor(
    titulo: string,
    autor: string,
    editora: string,
    ano: number,
    isbn: string,
    preco: number,
    estoque: number)
    {
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor= autor;
        this.editora = editora;
        this.estoque = estoque;

    }
    
    exibirDados(): void {
        console.log(`Título: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Ano do livro: ${this.ano}`)
        console.log(`ISBN: ${this.isbn}`)
        console.log(`Preço: ${this.preco}`)
        console.log(`Editora: ${this.editora}`)
        console.log(`Estoque: ${this.estoque}`)
    }

    atualizarEstoque(qtd: number): void {
        this.estoque += qtd;
    }
}

class ebook implements ILivros {
    titulo: string;
    autor: string;
    editora: string;
    ano: number;
    isbn: string;
    preco: number;
    estoque: number;
    tamanhoArqv: number;

    constructor(
    titulo: string,
    autor: string,
    editora: string,
    ano: number,
    isbn: string,
    preco: number,
    estoque: number,
    tamanhoArqv: number)
    {
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor= autor;
        this.editora = editora;
        this.estoque = estoque;
        this.tamanhoArqv = tamanhoArqv;

    }

    exibirDados(): void {
        console.log(`Título: ${this.titulo}`)
        console.log(`Ano do livro: ${this.ano}`)
        console.log(`ISBN: ${this.isbn}`)
        console.log(`Preço: ${this.preco}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Editora: ${this.editora}`)
        console.log(`Estoque: ${this.estoque}`)
        console.log(`Tamanho do  arquivo: ${this.tamanhoArqv}`)

    }

    atualizarEstoque(qtd: number): void {
        this.estoque += qtd;
    }
}

class livraria {
    livros: ILivros[] = [];

    adicionarLivro(livro: ILivros): void {
        this.livros.push(livro);
        console.log(`o livro "${livro.titulo}" foi adicionado.`)
    }

    venderLivro(isbn:string): void{
        const livro = this.livros.find(livro => livro.isbn === isbn);

        if(livro){
            if(livro.estoque > 0 )  {
                livro.atualizarEstoque(-1);
                console.log(`O livro "${livro.titulo}" foi vendido.`)
            }else {
            console.log(`Estoque do livro "${livro.titulo}" esgotado.`)
        } 
            
        } else {
            console.log(`Não foi possível encontrar este livro.`)
        }
    }

    excluirLivro(isbn: string): void {
        const tamanhoInicial = this.livros.length;
        this.livros = this.livros.filter(l => l.isbn !== isbn);

        if (this.livros.length < tamanhoInicial) {
            console.log(`Livro com ISBN ${isbn} foi excluído do acervo.`);
        } else {
            console.log(`Não foi possível excluir Livro com ISBN ${isbn}, pois não foi encontrado.`);
        }
    }

    listarLivros(): void {
        console.log("\nLIVROS DISPONÍVEIS NA LIVRARIA\n");
        if(this.livros.length === 0){
            console.log("Não há nenum livro na livraria no momento.");
        } else {
            this.livros.forEach(livro => {
                livro.exibirDados();
                console.log("\n\n");
            });
        }
        console.log("\n");
    }
    
}

const Livraria = new livraria();

const livroFisico1 = new livrosFisicos("O Senhor dos Anéis", "J.R.R. Tolkien", "HarperCollins", 1954, "978-0618640157", 120.50, 10);
const ebook1 = new ebook("Duna", "Frank Herbert", "Editora Aleph", 1965, "978-8576570231", 45.90, 50, 5);
const livroFisico2 = new livrosFisicos("O Guia do Mochileiro das Galáxias", "Douglas Adams", "Editora Arqueiro", 1979, "978-8599296522", 35.75, 5);

Livraria.adicionarLivro(livroFisico1);
Livraria.adicionarLivro(ebook1);
Livraria.adicionarLivro(livroFisico2);

Livraria.listarLivros();

console.log("\RVendendo Senhor dos Anéis");
Livraria.venderLivro("978-0618640157");

console.log("\n Tentando vender um livro sem estoque");
Livraria.venderLivro("978-8599296522");
Livraria.venderLivro("978-8599296522");
Livraria.venderLivro("978-8599296522");
Livraria.venderLivro("978-8599296522");
Livraria.venderLivro("978-8599296522"); //zerar estoque aqui
Livraria.venderLivro("978-8599296522"); //apresentar errro

console.log("\n Excluindo um livro da livraria...");
Livraria.excluirLivro("978-8576570231");


Livraria.listarLivros(); //verificar se foi vendido