const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');

        setTimeout(function() {
            dino.classList.remove('jump');
        }, 300);
    }
}

// Проверка на столкновение
let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 160) {
        alert('Игра окончена! Попробуйте снова.');
        cactus.style.animation = 'none'; // Останавливаем кактус
    }
}, 10);