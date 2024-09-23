function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao'
cartao.innerHTML = `

<div class="conteudo-cartao">
    <h3>${categoria}</h3>
<div class="pergunta-cartao">
    <p>${pergunta}</p>
    </div>

<div class="pergunta-resposta">
    <p>${resposta}<p>
    
</div>
</div>
`

container.appendChild(cartao);
}

let respostaVisivel = false;
function viracartao(){

    respostaVisivel = !respostaVisivel;
    cartao.classlist.tpggle('active', respostaVisivel);
}
cartao.addEventlistener('cliok', viraCartao);
container.appendchild(cartao);