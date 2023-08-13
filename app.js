const color = document.querySelector('.color');
const squares = document.querySelectorAll(".square");
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#time-left')

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('color');


    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('color')

    hitPosition = randomSquare.id;




}
squares.forEach(square => {

    square.addEventListener('mouseover', () => {
        if (square.id == hitPosition) {
            result++;
            score.innerHTML = result;

            square.classList.add('bgcolor')

        }

        square.addEventListener('mouseout', () => {
            square.classList.remove('bgcolor')
        })

    })

})


function moveColor() {
    timerId = setInterval(randomSquare, 570)




}

moveColor()

function countDown() {
    currentTime--;
    timeLeft.innerHTML = currentTime;
    if (currentTime == 0) {
        clearInterval(currentTimerId)
        
        console.log('Game over your score is ' + result)
        location.replace(location.href);
    }


}

let currentTimerId = setInterval(countDown, 1000)


