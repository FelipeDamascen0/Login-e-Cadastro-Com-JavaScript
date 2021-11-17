let dados = localStorage

function cadastro(){
  let dadosUser = {
    nomeUsuario: document.querySelector('#user').value,
    senha: document.querySelector('#senha').value
  }

  let {nomeUsuario, senha} = dadosUser;

  dados.setItem('User', nomeUsuario)
  dados.setItem('senha', senha)
  window.location.href = 'index.html'
}

function login(){
  let valueUser = document.querySelector('#loginUser').value
  let valueSenha = document.querySelector('#loginSenha').value
  
  let user = dados.getItem('User')
  let senha = dados.getItem('senha')

  if(user === valueUser && senha === valueSenha){
    window.location.href = 'bemvindo.html'
    document.querySelector('#ola').innerHTML = 'Bem vindo'
  }else{
    document.querySelector('#loginUser').value = ''
    document.querySelector('#loginSenha').value = ''
    alert('Dados incorretos')
  }

}