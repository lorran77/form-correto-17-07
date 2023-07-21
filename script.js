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
    botaoApagar.setAttribute('onclick', `deleta(${produto.id})`);
    botaoApagar.innerHTML = 'APAGAR'

    //inserindo um botão de UPDATE:                
    // primeiro criamos o BOTAO, aplicamos as propriedades e depois o criamos um TD pra ele                        
    let botaoEditar = document.createElement('button');
    botaoEditar.setAttribute('class', 'btn-editar');
    botaoEditar.setAttribute('onclick', `mostraEditarProduto(${produto.id})`);
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

function criaId()
{
    let objId = produtos.find(prod => prod.id);

    // produtos.id.forEach((objId) =>
    // {
    //     objId = produtos + 1;
    // });
}


function cadastrar() 
{
//Esta função irá cadastrar um novo produto no array de produtos

//PASSO 1: pegando as informações que o usuario digitou e colocando em variaveis
const idInsere = parseInt(document.querySelector('#id').value=criaId());
const nomeInsere = document.querySelector('#nome').value;
const precoInsere = parseInt(document.querySelector('#preco').value);

//PASSO 2: criando um objeto produto 
let produto = 
{
    id: idInsere,
    nome: nomeInsere,
    preco: `R$ ${precoInsere}`
}

//PASSO 3: inserindo o objeto PRODUTO no vetor PRODUTOS
produtos.push(produto);

limpaTabela();
getprodutos();    

}

function mostraEditarProduto(produtoEditar)
{ 
const cadastroDiv= document.getElementById('div-cadastrar');

if(cadastroDiv.classList.contains('div-cadastrar-ativo'))
{
    cadastroDiv.classList.remove('div-cadastrar-ativo');
    cadastroDiv.classList.add('div-cadastrar-inativo');
}



    let obj = produtos.find(prod => prod.id == produtoEditar);

    document.querySelector('#idedit').value=obj.id;
    document.querySelector('#nomeedit').value=obj.nome;
    document.querySelector('#precoedit').value=obj.preco;

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
const editarDiv = document.getElementById('div-editar');

if(editarDiv.classList.contains('div-editar-ativo'))
{
    editarDiv.classList.remove('div-editar-ativo');
    editarDiv.classList.add('div-editar-inativo');
}


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

    limpaTabela();
    getprodutos();

// find = encontrar objeto dentro de produtos e retornar o objeto que passar no teste
// indexOf = descobre no vetor [produtos] o indice do objeto(obj)
// splice =
// console.log = teste no terminal
// DAO Data Access Object <---
// DAL Data Access Layer
}


function salvarAlteracoes()
{
    let idEdit2 = parseInt(document.getElementById('idedit').value);
    let nomeEdit2 = document.getElementById('nomeedit').value;
    let precoEdit2 = parseInt(document.getElementById('precoedit').value);

    let obj = produtos.find(prod => prod.id == idEdit2);
    let indexEditar = produtos.indexOf(obj); 

    let objNovo = 
    {
        id: idEdit2,
        nome: nomeEdit2,
        preco: `R$ ${precoEdit2}`
    }

    produtos.splice(indexEditar, 1, objNovo); 

    limpaTabela();
    getprodutos();
}

// APENAS ANOTAÇÕES-------------------------------------------------------------------------------

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
//  na tela de edição devera ser puxado os valores já existentes do objeto(usar find sem indexof mais 3 comandos para inserir) s

// comecar com find
// readonly no id









