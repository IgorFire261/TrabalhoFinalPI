document.addEventListener('DOMContentLoaded', function () {
    const startScreen = document.querySelector('.start-screen')
    const startButton = document.getElementById('start-button')
    const gameContainer = document.querySelector('.game-container')
    const scoreDisplay = document.getElementById('score')
    const width = 28
    let score = 0
    const grid = document.querySelector('.grid')
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty

    const squares = []


    createBoard()
    function playAudio() {
        let audio = document.getElementById("audio")
        audio.volume = 0.5
        audio.play()
    }
    playAudio()

    // create your board
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div')
            square.id = i
            grid.appendChild(square)
            squares.push(square)

            //layout
            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot')
            }
            if (layout[i] === 1) {
                squares[i].classList.add('wall')
            }
            if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair')
            }
            if (layout[i] === 3) {
                squares[i].classList.add('power-pellet')
            }
            if (layout[i] === 4) {
                squares[i].classList.add('empty')
            }
        }
    }

    //criar personagens
    // desenhar pac-man
    let pacmanCurrentIndex = 490
    squares[pacmanCurrentIndex].classList.add('pac-man')

    //move pacman
    function movePacman(e) {
        squares[pacmanCurrentIndex].classList.remove('pac-man')
        switch (e.key) {
            case 'a':
                if (pacmanCurrentIndex % width !== 0 &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')) {
                    pacmanCurrentIndex -= 1
                }
                if ((pacmanCurrentIndex - 1) === 363) {
                    pacmanCurrentIndex = 391
                }
                break
            case 'd':
                if (pacmanCurrentIndex % width < width - 1 &&
                    !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
                ) {
                    pacmanCurrentIndex += 1
                }
                if ((pacmanCurrentIndex + 1) === 392) {
                    pacmanCurrentIndex = 364
                }
                break
            case 'w':
                if(pacmanCurrentIndex - width >= 0 &&
                    !squares[pacmanCurrentIndex - width].classList.contains('wall')&&
                    !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')){
                    pacmanCurrentIndex -= width
                }
                break
            case 's':
                if(pacmanCurrentIndex + width < width * width &&
                    !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
                    !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")){
                        pacmanCurrentIndex += width
                    }
        }
        squares[pacmanCurrentIndex].classList.add('pac-man')
        packDotEaten()
        powerPelletEaten()
        checkForGameOver()
        checkForWin()
    }
    document.addEventListener('keyup', movePacman)

    //Comer um Pac-point
    function packDotEaten(){
        if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
            score++
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('pac-dot')
        }
    }

    //Comer um poderzinho
    function powerPelletEaten(){
        if(squares[pacmanCurrentIndex].classList.contains('power-pellet')){
            score += 10
            scoreDisplay.innerHTML = score
            ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScareGhosts, 10000)
            squares[pacmanCurrentIndex].classList.remove('power-pellet')
        }
    }

    function unScareGhosts(){
        ghosts.forEach(ghost => ghost.isScared = false)
    }

    //criar fantasmas usando Construtor
    class Ghost{
        constructor(className,startIndex, speed){
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }

    const ghosts = [
        new Ghost ('blinky',348,500),
        new Ghost ('pinky',376,500),
        new Ghost ('inky',351,500),
        new Ghost ('clyde',379,500),
    ]

    ghosts.forEach(ghost => 
        squares[ghost.currentIndex].classList.add(ghost.className, "ghost"))

    ghosts.forEach(ghost => moveGhost(ghost))

    function moveGhost(ghost){
        console.log(ghost)
        const directions = [-1, 1, width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(function(){
            //se o proximo quadrado que o fantasma for não tem outro ou não é uma parede ele pode mover
            if(
                !squares[ghost.currentIndex + direction].classList.contains('ghost') &&
                !squares[ghost.currentIndex + direction].classList.contains('wall')

            ){
                squares[ghost.currentIndex].classList.remove(ghost.className,'ghost','scared-ghost')
                ghost.currentIndex += direction
                squares[ghost.currentIndex].classList.add(ghost.className,'ghost')
                //senão encontra um novo caminho aleatório para poder ir
            }else direction = directions[Math.floor(Math.random() * directions.length)]

            if(ghost.isScared){
                squares[ghost.currentIndex].classList.add('scared-ghost')
            }

            if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')){
                squares[ghost.currentIndex].classList.remove(ghost.className,'ghost','scared-ghost')
                ghost.isScared = false
                ghost.currentIndex = ghost.startIndex
                score += 50
                scoreDisplay.innerHTML = score
                squares[ghost.currentIndex].classList.add(ghost.className,'ghost')
            }
            checkForGameOver()
        },ghost.speed)
    }

    function checkForGameOver(){
        if(
            squares[pacmanCurrentIndex].classList.contains('ghost') &&
            !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
        ){
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup',movePacman)
            setTimeout(function(){ 
                alert('Game Over ')
                window.location.reload()
            },500)
        }
    }

    //Vitória
    function checkForWin(){
        if(score >= 274){
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup',movePacman)
            setTimeout(function(){alert('Você ganhou!!')},500)
        }
    }

})