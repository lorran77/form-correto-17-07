// let maca = 8;
// maca += 3;
// 11

let produtos =
    [
        { id: 1, nome: 'sapato', preco: 100.00 },
        { id: 2, nome: 'sandalia', preco: 250.00 },
        { id: 3, nome: 'cinto', preco: 450.00 },
        { id: 4, nome: 'bolsa', preco: 650.00 }
    ]


const tabela = document.querySelector('#tabela');
getprodutos();

function getprodutos() 
{
    produtos.forEach((produto) => {

        tabela.innerHTML += `<tr id="a${produto.id}">`;

        for (let propriedade in produto) {
            document.querySelector("#" + 'a' + produto.id).innerHTML += `<td> ${produto[propriedade]} </td>`;
        }

        tabela.innerHTML += "</tr>";
    });
}


function cadastrar() 
{
    //PASSO 1: pegando as informações que o usuario digitou e colocando em variaveis
    const idInsere = document.querySelector('#id').value;
    const nomeInsere = document.querySelector('#nome').value;
    const precoInsere = document.querySelector('#preco').value;

    //PASSO 2: criando um objeto produto 
    let produto = 
    {
        id: idInsere,
        nome: nomeInsere,
        preco: precoInsere
    }

    //PASSO 3: inserindo o objeto PRODUTO no vetor PRODUTOS
    produtos.push(produto);

    //PASSO4: inserindo os elementos na tabela com INNERHTML
    tabela.innerHTML += `<tr id="a${produto.id}">`;

    document.querySelector("#" + 'a' + produto.id).innerHTML += `<td> ${produto.id} </td>`;
    document.querySelector("#" + 'a' + produto.id).innerHTML += `<td> ${produto.nome} </td>`;
    document.querySelector("#" + 'a' + produto.id).innerHTML += `<td> ${produto.preco} </td>`;

    tabela.innerHTML += "</tr>";
}


// function apagar()
// {
//     let idSelecionado = querySelector('#remover').value;

//     if(idSelecionado == idInsere)
//     {
//         tabela.remove(produtos[idSelecionado]);
//     }

// }   


function apagar()
{
    let idSelecionado = querySelector('#remover').value;
    let tabelaSelecionada = querySelector('#tabela');

    // remover inner html
        
}
