const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let deadCount = 0;
let lostCount = 0;

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        
        if (this.classList.contains('hole_has-mole')) {
            deadCount++;
            dead.textContent = deadCount;
            
            if (deadCount === 10) {
                alert('Вы победили!');
                resetGame();
            }

        } else {  
            lostCount++;
            lost.textContent = lostCount;

            if (lostCount === 5) {
                alert('Вы проиграли!');
                resetGame();
            }
        }
    };
}

function resetGame() {
    deadCount = 0;
    lostCount = 0;
    dead.textContent = 0;
    lost.textContent = 0;
}