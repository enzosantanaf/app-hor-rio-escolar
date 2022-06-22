//variável master
let data = new Date()
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

//variáveis globais
let dia = data.getDay()
let hora = data.getHours()
const bgHeader = document.querySelector('header')
const msgSaudacao = document.querySelector('h1')
const msgSaudacaoSub = document.querySelector('h3')
const horarioCompleto = document.querySelector('section ul')
const horarioDia = document.querySelector('section h2')
const aula = document.querySelector('ul div p.horario')
const horaAula = document.querySelector('ul div span.hora-aula')
const livroUsado = document.querySelector('ul .horario .livro')

function saudacao() {
  if (hora >= 0 && hora < 12) {
    msgSaudacao.innerHTML = 'Bom Dia!'
  } else if (hora >= 12 && hora < 18) {
    msgSaudacao.innerHTML = 'Boa Tarde!'
  } else if (hora >= 18) {
    msgSaudacao.innerHTML = 'Boa Noite!'
  }
}

function saudacaoModLayout() {
  if (hora >= 0 && hora < 12) {
  } else if (hora >= 12 && hora < 18) {
    msgSaudacao.style.color = 'var(--cor-6)'
    msgSaudacaoSub.style.color = 'var(--cor-2)'
    bgHeader.style.backgroundColor = 'var(--cor-4)'
  } else if (hora >= 18) {
    msgSaudacao.style.color = 'var(--cor-6)'
    msgSaudacaoSub.style.color = 'var(--cor-3)'
    bgHeader.style.backgroundColor = 'var(--cor-8)'
  }
}

function ordemAula() {
  if (hora >= 13 && hora < 14) {
    horaAula.innerHTML = '1° | '
  } else if (hora >= 14 && hora < 15) {
    horaAula.innerHTML = '2° | '
  } else if (hora >= 15 && hora < 16) {
    horaAula.innerHTML = '3° | '
  } else if (hora >= 16 && hora < 17) {
    horaAula.innerHTML = '4° | '
  } else if (hora >= 17 && hora < 18) {
    horaAula.innerHTML = '5° | '
  } else {
    horaAula.style.display = 'none'
  }
}

function aulaEmAndamento() {
  if (dia == 1 && hora >= 13 && hora < 14) {
    aula.innerHTML = aulas.segunda.primeiro
  } else if (dia == 1 && hora >= 14 && hora < 15) {
    aula.innerHTML = aulas.segunda.segundo
  } else if (dia == 1 && hora >= 15 && hora < 16) {
    aula.innerHTML = aulas.segunda.terceiro
  } else if (dia == 1 && hora >= 16 && hora < 17) {
    aula.innerHTML = aulas.segunda.quarto
  } else if (dia == 1 && hora >= 17 && hora < 18) {
    aula.innerHTML = aulas.segunda.quinto
  } else if (dia == 2 && hora >= 13 && hora < 14) {
    aula.innerHTML = aulas.terca.primeiro
  } else if (dia == 2 && hora >= 14 && hora < 15) {
    aula.innerHTML = aulas.terca.segundo
  } else if (dia == 2 && hora >= 15 && hora < 16) {
    aula.innerHTML = aulas.terca.terceiro
  } else if (dia == 2 && hora >= 16 && hora < 17) {
    aula.innerHTML = aulas.terca.quarto
  } else if (dia == 2 && hora >= 17 && hora < 18) {
    aula.innerHTML = aulas.terca.quinto
  } else if (dia == 3 && hora >= 13 && hora < 14) {
    aula.innerHTML = aulas.quarta.primeiro
  } else if (dia == 3 && hora >= 14 && hora < 15) {
    aula.innerHTML = aulas.quarta.segundo
  } else if (dia == 3 && hora >= 15 && hora < 16) {
    aula.innerHTML = aulas.quarta.terceiro
  } else if (dia == 3 && hora >= 16 && hora < 17) {
    aula.innerHTML = aulas.quarta.quarto
  } else if (dia == 3 && hora >= 17 && hora < 18) {
    aula.innerHTML = aulas.quarta.quinto
  } else if (dia == 4 && hora >= 13 && hora < 14) {
    aula.innerHTML = aulas.quinta.primeiro
  } else if (dia == 4 && hora >= 14 && hora < 15) {
    aula.innerHTML = aulas.quinta.segundo
  } else if (dia == 4 && hora >= 15 && hora < 16) {
    aula.innerHTML = aulas.quinta.terceiro
  } else if (dia == 4 && hora >= 16 && hora < 17) {
    aula.innerHTML = aulas.quinta.quarto
  } else if (dia == 4 && hora >= 17 && hora < 18) {
    aula.innerHTML = aulas.quinta.quinto
  } else if (dia == 5 && hora >= 13 && hora < 14) {
    aula.innerHTML = aulas.sexta.primeiro
  } else if (dia == 5 && hora >= 14 && hora < 15) {
    aula.innerHTML = aulas.sexta.segundo
  } else if (dia == 5 && hora >= 15 && hora < 16) {
    aula.innerHTML = aulas.sexta.terceiro
  } else if (dia == 5 && hora >= 16 && hora < 17) {
    aula.innerHTML = aulas.sexta.quarto
  } else if (dia == 5 && hora >= 17 && hora < 18) {
    aula.innerHTML = aulas.sexta.quinto
  } else {
    aula.innerHTML = '-'
  }
}

function livroSendoUsado() {
  if (dia == 1 && hora >= 13 && hora < 14) {
    livroUsado.innerHTML = '-'
  } else if (dia == 1 && hora >= 14 && hora < 15) {
    livroUsado.innerHTML = livro[3]
  } else if (dia == 1 && hora >= 15 && hora < 16) {
    livroUsado.innerHTML = livro[1]
  } else if (dia == 1 && hora >= 16 && hora < 17) {
    livroUsado.innerHTML = livro[3]
  } else if (dia == 1 && hora >= 17 && hora < 18) {
    livroUsado.innerHTML = livro[2]
  } else if (dia == 2 && hora >= 13 && hora < 14) {
    livroUsado.innerHTML = livro[4]
  } else if (dia == 2 && hora >= 14 && hora < 15) {
    livroUsado.innerHTML = '-'
  } else if (dia == 2 && hora >= 15 && hora < 16) {
    livroUsado.innerHTML = '-'
  } else if (dia == 2 && hora >= 16 && hora < 17) {
    livroUsado.innerHTML = '-'
  } else if (dia == 2 && hora >= 17 && hora < 18) {
    livroUsado.innerHTML = '-'
  } else if (dia == 3 && hora >= 13 && hora < 14) {
    livroUsado.innerHTML = livro[2]
  } else if (dia == 3 && hora >= 14 && hora < 15) {
    livroUsado.innerHTML = livro[1]
  } else if (dia == 3 && hora >= 15 && hora < 16) {
    livroUsado.innerHTML = livro[1]
  } else if (dia == 3 && hora >= 16 && hora < 17) {
    livroUsado.innerHTML = livro[2]
  } else if (dia == 3 && hora >= 17 && hora < 18) {
    livroUsado.innerHTML = livro[1]
  } else if (dia == 4 && hora >= 13 && hora < 14) {
    livroUsado.innerHTML = livro[1]
  } else if (dia == 4 && hora >= 14 && hora < 15) {
    livroUsado.innerHTML = livro[4]
  } else if (dia == 4 && hora >= 15 && hora < 16) {
    livroUsado.innerHTML = livro[4]
  } else if (dia == 4 && hora >= 16 && hora < 17) {
    livroUsado.innerHTML = livro[1]
  } else if (dia == 4 && hora >= 17 && hora < 18) {
    livroUsado.innerHTML = livro[1]
  } else if (dia == 5 && hora >= 13 && hora < 14) {
    livroUsado.innerHTML = '-'
  } else if (dia == 5 && hora >= 14 && hora < 15) {
    livroUsado.innerHTML = livro[1]
  } else if (dia == 5 && hora >= 15 && hora < 16) {
    livroUsado.innerHTML = '-'
  } else if (dia == 5 && hora >= 16 && hora < 17) {
    livroUsado.innerHTML = '-'
  } else if (dia == 5 && hora >= 17 && hora < 18) {
    livroUsado.innerHTML = '-'
  } else {
    livroUsado.innerHTML = '-'
  }
}

function diaDeHoje() {
  switch (dia) {
    case 1:
      horarioDia.innerHTML = 'SEG'
      break
    case 2:
      horarioDia.innerHTML = 'TER'
      break
    case 3:
      horarioDia.innerHTML = 'QUA'
      break
    case 4:
      horarioDia.innerHTML = 'QUI'
      break
    case 5:
      horarioDia.innerHTML = 'SEX'
      break
    default:
      horarioDia.style.display = 'none'
  }
}

function horario() {
  switch (dia) {
    case 1:
      horarioCompleto.innerHTML = `
      1° | ${aulas.segunda.primeiro}</br>
      2° | ${aulas.segunda.segundo}</br>
      3° | ${aulas.segunda.terceiro}</br>
      4° | ${aulas.segunda.quarto}</br>
      5° | ${aulas.segunda.quinto}`
      break
    case 2:
      horarioCompleto.innerHTML = `
      1° | ${aulas.terca.primeiro}</br>
      2° | ${aulas.terca.segundo}</br>
      3° | ${aulas.terca.terceiro}</br>
      4° | ${aulas.terca.quarto}</br>
      5° | ${aulas.terca.quinto}`
      break
    case 3:
      horarioCompleto.innerHTML = `
      1° | ${aulas.quarta.primeiro}</br>
      2° | ${aulas.quarta.segundo}</br>
      3° | ${aulas.quarta.terceiro}</br>
      4° | ${aulas.quarta.quarto}</br>
      5° | ${aulas.quarta.quinto}`
      break
    case 4:
      horarioCompleto.innerHTML = `
      1° | ${aulas.quinta.primeiro}</br>
      2° | ${aulas.quinta.segundo}</br>
      3° | ${aulas.quinta.terceiro}</br>
      4° | ${aulas.quinta.quarto}</br>
      5° | ${aulas.quinta.quinto}`
      break
    case 5:
      horarioCompleto.innerHTML = `
      1° | ${aulas.sexta.primeiro}</br>
      2° | ${aulas.sexta.segundo}</br>
      3° | ${aulas.sexta.terceiro}</br>
      4° | ${aulas.sexta.quarto}</br>
      5° | ${aulas.sexta.quinto}`
      break
    default:
      const horarioCompletoPai = document.querySelector('div.horario-dia')
      horarioCompletoPai.style.display = 'block'
      horarioCompleto.style.textAlign = 'center'
      horarioCompleto.innerHTML = 'Não tem aula hoje'
  }
}

saudacao()
saudacaoModLayout()
ordemAula()
aulaEmAndamento()
livroSendoUsado()
diaDeHoje()
horario()
