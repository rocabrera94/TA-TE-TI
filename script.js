let tablero;
let jugX = 'X';
let jugO = 'O';
let turno = jugO;
let gameOver = false;

window.onload = function(){
    setGame();
}

function setGame() {
    tablero = [
       [' ', ' ', ' '],
       [' ', ' ', ' '],
       [' ', ' ', ' ']
    ]

    for (let i = 0; i < 3; i++){
        for (let c = 0; c < 3; c++){
            let cuadrado = document.createElement('div');
            cuadrado.id = i.toString() + "-" + c.toString();
            cuadrado.classList.add("cuadrado");
            if (i == 0 || i == 1){
                cuadrado.classList.add('horizontal-linea');
            }
            if (c == 0 || c == 1){
                cuadrado.classList.add('vertical-linea');
            }
            cuadrado.innerText = "";
            cuadrado.addEventListener('click', setCuadrado)
            document.getElementById('tablero').append(cuadrado);
        }
    }
}

function setCuadrado(){
    if (gameOver) {
        return;
    }

   let coordenadas = this.id.split("-");
    let r = parseInt(coordenadas[0])
    let c = parseInt(coordenadas[1])
    
    

    if (tablero[r][c] != ' '){
        return
    }

    tablero[r][c] = turno;
    this.innerText = turno;

    if (turno ==jugO) {
        turno = jugX;
    }
    else {
        turno = jugO
    }

    ganador()
}

function ganador(){
    //horizontal
    for (let r = 0; r < 3; r++) {
        
        if (tablero[r][0] == tablero[r][1] && tablero[r][1] == tablero[r][2] && tablero[r][0] != ' ') {
            
            for (let i = 0; i < 3; i++){
                let cuadrado = document.getElementById(r.toString() + "-" + i.toString());
                cuadrado.classList.add('ganador');
            }
            gameOver = true;
            return;
        }
    }
    //vertical
    for (let c = 0; c < 3; c++) {

        if (tablero[0][c] == tablero[1][c] && tablero[1][c] == tablero[2][c] && tablero[0][c] != ' ') {
        
            for (let i = 0; i < 3; i++) {
                let cuadrado = document.getElementById(i.toString() + '-' + c.toString())
                cuadrado.classList.add('ganador')
            }
            gameOver = true;
            return;
        }
    }
    //diagonal-1
    if (tablero[0][0] == tablero[1][1] && tablero[1][1] == tablero[2][2] && tablero[0][0] != ' '){
        
        for (let i = 0; i < 3; i++) {
            let cuadrado = document.getElementById(i.toString() + '-' + i.toString())
            cuadrado.classList.add('ganador')
        }
        gameOver = true
        return;
    }
    
    //diagonal-2
    if (tablero[0][2] == tablero[1][1] && tablero[1][1] == tablero[2][0] && tablero[0][2] != ' ') {
        let cuadrado = document.getElementById('0-2')
        cuadrado.classList.add('ganador')

        cuadrado = document.getElementById('1-1')
        cuadrado.classList.add('ganador')

        cuadrado = document.getElementById('2-0')
        cuadrado.classList.add('ganador')

        gameOver = true;
        return;
    }
}