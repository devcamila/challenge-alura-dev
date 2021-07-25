


///////////////////////////////////////////////////////////////////////////////////////
const areaDoCodigo = document.querySelector('.texto')
const linguagem = document.querySelector('.linguagem')
const botao = document.querySelector('.botao-high')

const nomeProjeto = document.querySelector('.nome-projeto')
const descricaoProjeto = document.querySelector('.descricao-projeto')
const botaoSalvar = document.querySelector('.salvar')


//const iconeMenu = document.querySelector('#menu-icon')//

const botaoPng = document.querySelector('.salvar-png')


function mudaLinguagem() {
    const codigo = areaDoCodigo.querySelector('code')
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
    areaDoCodigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})



function chBackcolor01(colorF) {
    colorF = document.querySelector('#cor-fundo').value;
    document.querySelector('.fundo-editor').style.backgroundColor = colorF;
}

function chBackcolor(color) {
    color = document.querySelector('#cor-editor').value;
    document.querySelector('.editor').style.backgroundColor = color;
}

/*iconeMenu.addEventListener('click', () => {
    const body = document.querySelector('.menuHamburguer')
    body.classList.toggle('show')
})
*/


botaoPng.addEventListener('click', () => {
    const canvas = document.querySelector(".fundo-editor");
    console.log('click');
    domtoimage.toBlob(canvas)
        .then(function (blob) {
            saveAs(blob, "projeto.png");
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
});


