var data = new Date()
/*
Days
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/

let aulas = {
  segunda: {
    primeiro: 'QUI',
    segundo: 'ING',
    terceiro: 'HIST',
    quarto: 'ING',
    quinto: 'MAT'
  },
  terca: {
    primeiro: 'PORT',
    segundo: 'FIS',
    terceiro: 'RED',
    quarto: 'RED',
    quinto: 'QUI'
  },
  quarta: {
    primeiro: 'MAT',
    segundo: 'SOC',
    terceiro: 'SOC',
    quarto: 'MAT',
    quinto: 'FILO'
  },
  quinta: {
    primeiro: 'HIST',
    segundo: 'PORT',
    terceiro: 'PORT',
    quarto: 'GEO',
    quinto: 'GEO'
  },
  sexta: {
    primeiro: 'ED.FIS',
    segundo: 'FILO',
    terceiro: 'BIO',
    quarto: 'BIO',
    quinto: 'FIS'
  }
}

const msgSaudacao = document.querySelector('h1')
const btnConsultar = document.querySelector('.btn-0')
const resposta = document.querySelector('.resposta')

function saudacao(hora) {
  hora = data.getHours()
  if (hora >= 0 && hora < 12) {
    msgSaudacao.innerHTML = 'Bom Dia!'
  } else if (hora >= 12 && hora < 18) {
    msgSaudacao.innerHTML = 'Boa Tarde!'
  } else if (hora >= 18) {
    msgSaudacao.innerHTML = 'Boa Noite!'
  }
}

function horario(dia) {
  dia = data.getDay()
  btnConsultar.style.display = 'none'
  resposta.style.display = 'block'
  switch (dia) {
    case 1:
      resposta.innerHTML = `${aulas.segunda.primeiro}</br>${aulas.segunda.segundo}</br>${aulas.segunda.terceiro}</br>${aulas.segunda.quarto}</br>${aulas.segunda.quinto}`
      break
    case 2:
      resposta.innerHTML = `${aulas.terca.primeiro}</br>${aulas.terca.segundo}</br>${aulas.terca.terceiro}</br>${aulas.terca.quarto}</br>${aulas.terca.quinto}`
      break
    case 3:
      resposta.innerHTML = `${aulas.quarta.primeiro}</br>${aulas.quarta.segundo}</br>${aulas.quarta.terceiro}</br>${aulas.quarta.quarto}</br>${aulas.quarta.quinto}`
      break
    case 4:
      resposta.innerHTML = `${aulas.quinta.primeiro}</br>${aulas.quinta.segundo}</br>${aulas.quinta.terceiro}</br>${aulas.quinta.quarto}</br>${aulas.quinta.quinto}`
      break
    case 5:
      resposta.innerHTML = `${aulas.sexta.primeiro}</br>${aulas.sexta.segundo}</br>${aulas.sexta.terceiro}</br>${aulas.sexta.quarto}</br>${aulas.sexta.quinto}`
      break
    default:
      console.log('Não tem aula hoje')
  }
}

window.onload = saudacao
btnConsultar.addEventListener('click', horario)
