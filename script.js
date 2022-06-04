const bolas = document.getElementsByClassName('ball');
const text = document.getElementById('answer');
const corParaTentarAcertar = document.getElementById('rgb-color');
const btn = document.getElementById('reset-game');
const score = document.getElementById('score');
function corParaAcertar() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  corParaTentarAcertar.innerText = '(' + r + ', ' + g + ', ' + b + ')';
}
let control = 0;
function jogo(e) {
  let acertou = 'rgb' +  corParaTentarAcertar.innerText;
  const alvo = e;
  if (alvo.target.style.backgroundColor === acertou) {
    text.innerText = 'Acertou!';
    control += 3;
    score.innerText = 'Placar: ' + control;
  } else {
    text.innerText = 'Errou! Tente novamente!';
  }
}
function gerarCorDasBolas() {
  for (let i = 0; i < bolas.length; i += 1) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    bolas[i].addEventListener('click', jogo);
    bolas[i].style.backgroundColor = 'rgb' + '(' + r + ', ' + g + ', ' + b + ')';
  }
  let corBolaCerta = Math.floor(Math.random() * 6);
  bolas[corBolaCerta].style.backgroundColor = 'rgb' + corParaTentarAcertar.innerText;
}
function resetGame() {
  corParaAcertar();
  gerarCorDasBolas();
  text.innerText = 'Escolha uma cor';
}
btn.addEventListener('click', resetGame);
window.onload = function aleatoria() {
  gerarCorDasBolas();
};
