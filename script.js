// let maca = 8;
// maca += 3;
// 11



//criando um array de objetos. cada objeto tem 3 propriedades, cada propriedade tem um valor
let produtos =
[
    { id: 1, nome: 'sapato', preco: 100.00 },
    { id: 2, nome: 'sandalia', preco: 250.00 },
    { id: 3, nome: 'cinto', preco: 450.00 },
    { id: 4, nome: 'bolsa', preco: 650.00 }
]



//crio uma variável tabela para trazer o elemento table utilizando o id dela
const tabela = document.querySelector('#tabela');
limpaTabela();
getprodutos(); 



function getprodutos() 
{
//esta função irá listar os produtos na tabela, utilizando manipulação do DOM

//loop mais externo forEach: irá percorrer os produtos
produtos.forEach((produto) => {
    
    //cria uma linha na tabela para começar a inserir os dados do produto
    tabela.innerHTML += `<tr id="linha${produto.id}">`;

    //loop mais interno for: irá percorrer as propriedades do produto "da vez"    
    for (let propriedade in produto) {
        //irá inserir na tabela cada um dos valores de cada uma das propriedades daquele produto
        document.querySelector("#" + 'linha' + produto.id).innerHTML += `<td> ${produto[propriedade]} </td>`;
    }
    //inserindo um botão de DELETE
    // let btnDeletar = `<td><button class=btn-apagar" onclick="delete({produto.id})">APAGAR</td>`

    //primeiro criamos o BOTAO, aplicamos as propriedades e depois o criamos um TD pra ele                        
    let botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', 'btn-apagar');
    botaoApagar.setAttribute('onclick', `deleta(linha${produto.id})`);
    botaoApagar.innerHTML = 'APAGAR'

    //inserindo um botão de UPDATE:                
    // primeiro criamos o BOTAO, aplicamos as propriedades e depois o criamos um TD pra ele                        
    let botaoEditar = document.createElement('button');
    botaoEditar.setAttribute('class', 'btn-editar');
    botaoEditar.setAttribute('onclick', `mostraEditarProduto(linha${produto.id})`);
    botaoEditar.innerHTML = 'EDITAR';

    //criando TDs e anexando a TR
    let td = document.createElement('td');                
    
    td.appendChild(botaoEditar);
    td.appendChild(botaoApagar);

    tr = document.querySelector("#" + 'linha' + produto.id)   ;
    tr.appendChild(td);

    //fecha a linha da tabela
    tabela.innerHTML += "</tr>";
});
}



function cadastrar() 
{
//Esta função irá cadastrar um novo produto no array de produtos

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

limpaTabela();
getprodutos();    

}

function mostraEditarProduto()
{
    // let obj = produtos.find(prod => prod.id == produtoSelecionado);
    // let inputId = document.querySelector('#id').value=obj.id;
    // let inputNome = document.querySelector('#nome').value=obj.nome;
    // let inputPreco = document.querySelector('#preco').value=obj.preco;

    const div = document.getElementById('div-editar');
if (div.classList.contains('div-editar-inativo')) {
    div.classList.remove('div-editar-inativo');
    div.classList.add('div-editar-ativo');
}
else {
    div.classList.remove('div-editar-ativo');
    div.classList.add('div-editar-inativo');
}  
}



function mostraCadastro() 
{
//mostra ou oculta a tela de cadastro quando o usuário clica no botão abaixo da tabela
const div = document.getElementById('div-cadastrar');
if (div.classList.contains('div-cadastrar-inativo')) {
    div.classList.remove('div-cadastrar-inativo');
    div.classList.add('div-cadastrar-ativo');
}
else {
    div.classList.remove('div-cadastrar-ativo');
    div.classList.add('div-cadastrar-inativo');
}

}



function limpaTabela() 
{     
//zera a tabela e deixa só o cabeçalho
 tabela.innerHTML = "<tr> <th>ID</th> <th>PRODUTO</th> <th>PREÇO</th>  <th>AÇÕES</th> </tr>" ;
}



function deleta(produtoSelecionado)
{
    let obj = produtos.find(prod => prod.id == produtoSelecionado);
    let indexDeletar = produtos.indexOf(obj);

    produtos.splice(indexDeletar, 1);

    console.log(obj, ' ',indexDeletar);

    limpaTabela();
    getprodutos();

// find = encontrar objeto dentro de produtos e retornar o objeto que passar no teste
// indexOf = descobre no vetor [produtos] o indice do objeto(obj)
// splice =
// console.log = teste no terminal
// DAO Data Access Object <---
// DAL Data Access Layer
}


function editConfirmado(editarProduto)
{
    limpaTabela();
    getprodutos();

    let obj = produtos.find(prod => prod.id == editarProduto);
    let indexEditar = produtos.indexOf(obj); 

    produtos.splice(1, 2, `${nomeInsere}`, `${precoInsere}`);

    produtos.push(obj);
}

// copiar mostra cadastro para editar cadastro
// criar nova div para edição de dados
// renomear classes
// onclick edit 
//  puxar funcoes limpa tabela e get produtos no começo

//  substituir com splice e indexof

//  1- indice do vetor 
//  2- quantos items vao ser apagados(2)
//  3- (2, 1, 'melancia', )

//  deixar apenas id e editar o resto
//  na tela de edição devera ser puxado os valores já existentes do objeto







