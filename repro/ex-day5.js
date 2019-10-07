// 1 Precisamos de uma lista de objetos com informações das alunas, sendo essas : nome, data de nascimento, se nasceu em sp, e id.
//    os dados citados acima estão sendo recebidos no eventListener do botaoEnviar,
//    exceto pelo id (este deve ser gerado por vc, começando em 1 e sempre acrescentando +1)
//    precisamos de ao menos 4 alunas nessa lista

function Aluna(nome, dataDeNasc, SP, id) {
  this.nome = nome;
  this.dataDeNasc = dataDeNasc;
  this.SP = SP;
  this.id = id
}
// 2 Depois crie uma função para listar alunas, que irá mostrar (pode ser apenas no console) a lista de alunas.
//   crie uma função  que lista apenas alunas que moram em SP.
//   complete a função calcularIdade e calcule a idade das alunas

const botaoEnviar = document.getElementById("cadastrarAluna")
const nome = document.getElementById("name")
const dataDeNasc = document.getElementById("dataDeNascimento")
const checkbox = document.getElementsByName("nasceuEmSp")
const btnMostrar = document.getElementById("listarAlunas")
const div = document.getElementById("mostrarListadeAlunas")

function nasceuEmSP() {
  let isChecked
  checkbox.forEach(function (item) {
    if (item.checked) {
      isChecked = item.value
    }
  })
  return isChecked
}

botaoEnviar.addEventListener("click", function (e) {
  e.preventDefault()
  //estamos recevendo aqui os dados
  criarAlunas(nome.value, dataDeNasc.value, nasceuEmSP.value)
})

const alunas = []
function criarAlunas() {
  alunas.push(new Aluna(nome, data, sp, ++id))
}
let id = 0;
//  btnMostrar.addEventListener("click", funcao para mostrar alunas)

function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
  const now = new Date()
  const anoAtual = now.getFullYear()
  const mesAtual = now.getMonth() + 1
  const hoje = now.getDate()
}
