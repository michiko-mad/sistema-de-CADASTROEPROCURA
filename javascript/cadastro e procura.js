//procura o elemento que possui o id "item"
let item= document.getElementById("item")
//procura o elemento que possui o id "lista"
let lista = document.getElementById("lista")
//procura o elemento que possui o id "busca"
let busca = document.getElementById("busca")
//procura o elemento que possui o id "adicionar"
let adiciona = document.getElementById("adicionar")

//cria uma matrix vazia para guardar os itens*/
let itens = []
adiciona.addEventListener("click" , adicionar) /*quando clicar no botao adicionar execut aa funcao*/
busca.addEventListener("keyup", buscar) /* quando o usuario digitar no campo busca, executa a funcao buscar()*/

function adicionar()
{
    //adicionar o valor digitado no array, pega a galinha e leva pra casa
    itens.push(item.value)
    //cria uma nova teg <li>, cria etiqueta vazia
    let li = document.createElement("li")
    //cria um texto com o valor digitado
    let texto = document.createTextNode(item.value)
    //coloca o texto dentro da tag <li>
    li.appendChild(texto)
    //coloca o <li> dentro da lista <ul> 
    lista.appendChild(li)

}

function buscar()
{
    let nome = busca.value.toLowerCase()
    let itenslista = document.getElementsByTagName("li")
    for (let i = 0; i< itenslista.length; i++){
        let texto = itenslista[i].textContent.toLowerCase()
        if (texto.includes(nome))
        {
            itenslista[i].style.display = "block"
        }else{
            itenslista[i].style.display = "none"
        }
    }
}