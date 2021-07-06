const areaDoCodigo = document.querySelector('.texto')
const linguagem = document.querySelector('.linguagem')
const botao = document.querySelector('.botao-high')

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

//////////////////////////////////////////////////////////////////////////////////////////

function chBackcolor01(colorF) {
    colorF = document.querySelector('#cor-fundo').value;
    document.querySelector('.fundo-editor').style.backgroundColor = colorF;
}

function chBackcolor(color) {
    color = document.querySelector('#cor-editor').value;
    document.querySelector('.editor').style.backgroundColor = color;
}

