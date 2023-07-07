// Script personalizado (script.js)

var valorList = JSON.parse(localStorage.getItem("valor")) || [];
var descricaoList = JSON.parse(localStorage.getItem("descricao")) || [];

let total = 0; // Variável para armazenar a soma total

// Função para adicionar receita à lista e atualizar a soma total
function adicionarReceita() {
  const descricao = document.getElementById('descricao').value;
  const valor = parseFloat(document.getElementById('valor').value);

  const li = document.createElement('li');
  li.classList.add('list-group-item');
  li.innerText = `${descricao} - R$ ${valor.toFixed(2)}`;

  const listaReceitas = document.getElementById('listaReceitas');
  listaReceitas.appendChild(li);

  total += valor; // Atualiza a soma total

  atualizarTotal(); // Atualiza a exibição da soma total

  document.getElementById('descricao').value = '';
  document.getElementById('valor').value = '';
}

function adicionarDespesa() {
  const descricao = document.getElementById('descricao').value;
  const valor = parseFloat(document.getElementById('valor').value);

  const li = document.createElement('li');
  li.classList.add('list-group-item');
  li.innerText = `${descricao} - R$ ${valor.toFixed(2)}`;

  const listaDespesas = document.getElementById('listaDespesas');
  listaDespesas.appendChild(li);

  total -= valor; // Atualiza a soma total (despesas são subtraídas)
  console.log(descricaoList, valorList)
  atualizarTotal(); // Atualiza a exibição da soma total
  descricaoList.push(descricao)
  valorList.push(valor)

  document.getElementById('descricao').value = '';
  document.getElementById('valor').value = '';
}

// Função para atualizar a exibição da soma total
function atualizarTotal() {
  const totalElement = document.getElementById('total');
  totalElement.innerText = `Total: R$ ${total.toFixed(2)}`;
}

// Evento de envio do formulário de receita
document.getElementById('receitaForm').addEventListener('submit', function (e) {
  e.preventDefault();
  adicionarReceita();
});

// Evento de envio do formulário de despesa
// document.getElementById('despesaForm').addEventListener('submit', function (e) {
//   e.preventDefault();
//   adicionarDespesa();
// });

window.addEventListener("beforeunload", function () {
  // Salvar os dados no localStorage antes de fechar a página
  localStorage.setItem("descricao", JSON.stringify(descricaoList));
  localStorage.setItem("valor", JSON.stringify(valorList));
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Verificar o estado de login ao carregar a página
//   console.log(valor, descricao)
//   if (valorList.length > 0) {
//     valor.forEach((valor, index) => {
//       const li = document.createElement('li');
//       li.classList.add('list-group-item');
//       li.innerText = `${descricao} - R$ ${valor.toFixed(2)}`;

//       const listaReceitas = document.getElementById('listaReceitas');
//       listaReceitas.appendChild(li);

//       total += valor; // Atualiza a soma total

//       atualizarTotal(); // Atualiza a exibição da soma total

//       if (index !== -1) {
//         datas.splice(index, 1);
//         localStorage.setItem("datas", JSON.stringify(datas));
//       }
//     })
//   }
// });

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "admin@gmail.com" && password === "123") {
    // document.getElementById("loginPage").classList.add("hidden");
    // document.getElementById("agendaPage").classList.remove("hidden");
    // localStorage.setItem("isLoggedIn", true);
    location.href = '../pages/home.html'
    console.log('hi')
    // var entryList = document.getElementById("entryList");
    // entryList.innerHTML = ""; // Limpar a lista antes de adicionar as entradas
  } else {
    alert(`Tente o e-mail: "admin@gmail.com" e a senha: 123`);
  }
  console.log(datas)
}