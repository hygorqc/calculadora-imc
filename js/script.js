const form = document.querySelector("form");
const result = document.querySelector("#result-peso");
const resultResumo = document.querySelector("#result-resumo");
const btnCalc = document.querySelector("form [type='submit']")
const modal = document.querySelector(".modal-result");
const btnFechar = document.querySelector('button.fechar')

function calculaImc() {
  const peso = Number(form.peso.value)
  const altura = Number(form.altura.value)
  const imc = peso / (altura * altura)
  if (peso && altura) {
    result.innerText = 'Seu IMC é: ' + imc.toFixed(2);
    modalResult();
    if (imc <= 18.5) {
      resultResumo.innerHTML = 'Sua classificação é: <strong>Magreza</strong>'
    } else if (imc <= 24.9) {
      resultResumo.innerHTML = 'Sua classificação é: <strong>Normal</strong>'
    } else if (imc <= 29.9) {
      resultResumo.innerHTML = 'Sua classificação é: <strong>Sobrepeso</strong>'
    } else if (imc <= 34.9) {
      resultResumo.innerHTML = 'Sua classificação é: <strong>Obesidade grau I</strong>'
    } else if (imc <= 39.9) {
      resultResumo.innerHTML = 'Sua classificação é: <strong>Obesidade grau II</strong>'
    } else {
      resultResumo.innerHTML = 'Sua classificação é: <strong>Obesidade grau III</strong>'
    }
  } else {
    alert('Digite os valores solicitados!')
    return false;
  }
}
function modalResult() {
  modal.classList.toggle('ativo')
}
function cliqueFora(event) {
  if (event.target === this) {
    modalResult()
  }
}
btnCalc.addEventListener('click', (e) => { e.preventDefault(); calculaImc() });
btnFechar.addEventListener('click', modalResult);
modal.addEventListener('click', cliqueFora);