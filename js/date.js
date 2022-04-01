let steps = 0, allSteps = 0, currentIndex = 0, speed = 0, numTurn = 0, ace, hero, rank, msg, san, bricks = document.querySelectorAll('[box-id]')

const vipSan = 88888
const vipString = 'PigWinVip888'
let defSan = 1000
let defAce = 0, defHero = 0
let pushHero = document.querySelector('#pushHero'), removeHero = document.querySelector('#removeHero')
const startBtn = document.querySelector('button')
const speedSelect = document.querySelector('#speed')
const numTurnSelect = document.querySelector('#numTurn')
const piginput = document.querySelector('#piginput')
ace = document.querySelector('#get')
hero = document.querySelector('#push')
san = document.querySelector('#san')
msg = document.querySelector('#msg')

const vipSanList = [
    { 'value': 8888, 'str': 'PigWin888' },
    { 'value': 88888, 'str': 'PigWinVip888' },
    { 'value': 888888, 'str': 'PigWinVVip888' },
]
bricks = Array.from(bricks).sort((a, b) => {
    return a.getAttributeNode('box-id').value - b.getAttributeNode('box-id').value
})
bricks.forEach((box, index) => {
    let i = document.createElement('i')
    let _numIndex = index % 6
    switch (_numIndex) {
        case 0:
            i.classList.add('d-block', 'bi', 'bi-dice-1-fill', 'iHight')
            i.setAttribute('target', 1)
            break;
        case 1:
            i.classList.add('d-block', 'bi', 'bi-dice-2-fill', 'iHight')
            i.setAttribute('target', 2)
            break;
        case 2:
            i.classList.add('d-block', 'bi', 'bi-dice-3-fill', 'iHight')
            i.setAttribute('target', 3)
            break;
        case 3:
            i.classList.add('d-block', 'bi', 'bi-dice-4-fill', 'iHight')
            i.setAttribute('target', 4)
            break;
        case 4:
            i.classList.add('d-block', 'bi', 'bi-dice-5-fill', 'iHight')
            i.setAttribute('target', 5)
            break;
        case 5:
            i.classList.add('d-block', 'bi', 'bi-dice-6', 'iHight')
            i.setAttribute('target', 6)
            break;
    }
    i.setAttribute('id', index)
    box.appendChild(i)
})
let bi = document.querySelectorAll('.bi')
bi = Array.from(bi).sort((a, b) => {
    return a.getAttributeNode('id').value - b.getAttributeNode('id').value
})
// numeral(number).format('$0,0');
