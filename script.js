const bolas = document.getElementsByClassName('ball');
const text = document.getElementById('answer');
const corParaTentarAcertar = document.getElementById('rgb-color');
const btn = document.getElementById('reset-game');
const acertos = document.getElementById('acertou');
const erros = document.getElementById('errou');
function corParaAcertar() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  corParaTentarAcertar.innerText = '(' + r + ', ' + g + ', ' + b + ')';
}
let win = 0;
let lose = 0;
function jogo(e) {
  let acertou = 'rgb' +  corParaTentarAcertar.innerText;
  const alvo = e;
  if (alvo.target.style.backgroundColor === acertou) {
    text.innerText = 'Acertou!!!!';
    win += 1;
    acertos.innerText = 'Acertos: ' + win;
  } else {
    text.innerText = 'Errou! Tente novamente!';
    lose += 1;
    erros.innerText = 'Erros: ' + lose;
  }
}
function resetColor() {
  corParaAcertar();
  gerarCorDasBolas();
}
function gerarCorDasBolas() {
  for (let i = 0; i < bolas.length; i += 1) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    bolas[i].addEventListener('click', jogo);
    bolas[i].addEventListener('click', resetColor);
    bolas[i].style.backgroundColor = 'rgb' + '(' + r + ', ' + g + ', ' + b + ')';
  }
  let corBolaCerta = Math.floor(Math.random() * 6);
  bolas[corBolaCerta].style.backgroundColor = 'rgb' + corParaTentarAcertar.innerText;
}
function resetGame() {
  corParaAcertar();
  gerarCorDasBolas();
  text.innerText = 'Escolha uma cor';
  win = 0;
  lose = 0;
  erros.innerText = 'Erros: 0';
  acertos.innerText = 'Acertos : 0';
}
btn.addEventListener('click', resetGame);
window.onload = function aleatoria() {
  gerarCorDasBolas();
};
