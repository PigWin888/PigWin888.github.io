window.onload = function () {
    startBtn.disabled = true
    san.innerText = numeral(defSan).format('$0,0')
    hero.innerText = numeral(defHero).format('$0,0')
    ace.innerText = numeral(defAce).format('$0,0')
    createVipCode(vipSanList, vipcode)
}
document.getElementById("pushHero").addEventListener("click", function () {
    if (defSan > 0) {
        defHero = defHero + 100
        defSan = defSan - 100
        hero.innerText = numeral(defHero).format('$0,0')
        san.innerText = numeral(defSan).format('$0,0')
    }
    if (defHero > 0) {
        startBtn.disabled = false
    }
})
document.getElementById("removeHero").addEventListener("click", function () {
    if (defHero > 0) {
        defHero = defHero - 100
        defSan = defSan + 100
        hero.innerText = numeral(defHero).format('$0,0')
        san.innerText = numeral(defSan).format('$0,0')
    }
    if (defHero <= 0) {
        startBtn.disabled = true
    }
})
document.getElementById("pigbtn").addEventListener("click", function () {
    _input = piginput.value.toUpperCase()
    if (_input != '') {
        vipSanList.forEach(e => {
            if (_input == e.str.toUpperCase()) {
                console.log(e.str)
                defSan = defSan + e.value
                san.innerText = numeral(defSan).format('$0,0')
                piginput.value = ''
                checkSan()
            }
        });
    }
})
startBtn.onclick = function () {
    msg.innerText = ''
    speed = parseInt(speedSelect.value)
    numTurn = parseInt(numTurnSelect.value)
    allBtnClose()
    let random = Math.floor(Math.random() * bi.length) + 1
    steps = random + (numTurn * bricks.length)
    allSteps = steps
    turnAroundSpeedCtrl()
}
saveBtn.onclick = function () {
    let _speedSelect = speedSelect.value
    let _numTurnSelect = numTurnSelect.value
    let saveJson = { _speedSelect, _numTurnSelect, defSan, defAce, defHero }
    localStorage.setItem(localKey, JSON.stringify(saveJson));
}
loadBtn.onclick = function () {
    if (localStorage.getItem(localKey)) {
        let loadJson = JSON.parse(localStorage.getItem(localKey));
        speedSelect.value = loadJson._speedSelect
        numTurnSelect.value = loadJson._numTurnSelect
        defSan = loadJson.defSan
        defAce = loadJson.defAce
        defHero = loadJson.defHero
        ace.innerText = aceCheck(defAce)
        san.innerText = numeral(defSan).format('$0,0')
        hero.innerText = numeral(defHero).format('$0,0')
    }
}
function turnAroundSpeedCtrl() {
    bi[currentIndex].classList.remove('active')
    currentIndex++
    if (currentIndex >= bi.length) currentIndex = 0
    bi[currentIndex].classList.add('active')
    steps--
    coin.play()
    if (steps > 0) {
        setTimeout(turnAroundSpeedCtrl, speed)
        if (steps < Math.floor((allSteps / 3))) speed += 7
    } else {
        getSan()
        allBtnOpen()
        checkSan()
    }
}
function aceCheck(aceNum) {
    if (aceNum <= 0) {
        return numeral(0).format('$0,0')
    } else {
        return numeral(defAce).format('$0,0')
    }
}
function getSan() {
    rank = parseInt(bi[currentIndex].attributes[1].value)
    hero.innerText = numeral(defHero).format('$0,0')
    if (rank != 6) {
        defAce = (defHero * -rank)
        msg.innerText = '您輸了！'
    } else {
        defAce = (defHero * rank)
        defSan = defSan + defAce
        ace.innerText = numeral(defAce).format('$0,0')
        msg.innerText = '您贏了！'
    }
    ace.innerText = aceCheck(defAce)
    san.innerText = numeral(defSan).format('$0,0')
    hero.innerText = numeral(0).format('$0,0')
    defHero = 0
    checkSan()
}
function isDie(num) {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}
function checkSan() {
    if (defSan > 0) {
        pushHero.disabled = false
        removeHero.disabled = false
    } else {
        pushHero.disabled = true
        removeHero.disabled = true
    }
}
function allBtnOpen() {
    speedSelect.disabled = false
    numTurnSelect.disabled = false
    pigbtn.disabled = false
    pushHero.disabled = false
    removeHero.disabled = false
    piginput.disabled = false
    checkSan()
}
function allBtnClose() {
    startBtn.disabled = true
    speedSelect.disabled = true
    numTurnSelect.disabled = true
    pigbtn.disabled = true
    pushHero.disabled = true
    removeHero.disabled = true
    piginput.disabled = true
    ace.innerText = numeral(0).format('$0,0')
}
function createVipCode(array, box) {
    array.forEach(code => {
        let btn = document.createElement('a')
        btn.innerText = `輸入 ${code.str} 獲得 ${numeral(code.value).format('$0,0')}`
        btn.classList.add('list-group-item', 'list-group-item-action')
        btn.setAttribute('target', '_blank')
        btn.setAttribute('href', 'https://twitter.com/peachpiggy8917')
        btn.setAttribute('id', 'vipcodebtn')
        box.appendChild(btn)
    });
}
function save() {

}
function load() {

}