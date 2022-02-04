function rollDice() {
    const img = document.querySelector('.dice');
    let random = Math.floor(Math.random() * 6) + 1;
    img.setAttribute('src', `img/${random}.png`);
}
function animation() {
    setTimeout(rollDice, 2000);
    const img = document.querySelector('.dice');
    img.setAttribute('src', `img/dice-roll.gif`);
    img.classList.remove('shake');
    void img.offsetWidth;
    img.classList.add('shake');
}
