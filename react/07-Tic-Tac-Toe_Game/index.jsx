const { useState, useEffect } = React;


const Cell = ({value, index, handleClick}) => {
    return (
        <button className="square" onClick={(e) => handleClick(e, index)} disabled={value}>
            {value}
        </button>
    )
};

export function Board() {
    const [gameBord, setGameBord] = useState([
        null, null, null,
        null, null, null,
        null, null, null,
    ]);
    const [isZero, setIsZero] = useState(false);
    const [endGame, setEndGame] = useState(false);

    useEffect(() => {
        setEndGame(gameEnd(gameBord))
    }, [gameBord]);

    const gameEnd = (board) => {
        const winnerCases = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [6,4,2],
            [0,3,6],
            [1,4,7],
            [2,5,8],
        ];

        for (let combo of winnerCases) {
            const [a, b, c] = combo;
            // Проверяем: все три клетки заполнены И одинаковы
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]; // Возвращаем 'X' или 'O'
            }
        }

        return null; // Нет победителя
    };

    const handleMotion = (e, index) => {
        if (endGame) {
            return
        }
        setGameBord(prev => {
            const newArr = [...prev];
            newArr[index] = isZero ? 'O' : 'X';
            return newArr;
        })

        setIsZero(prev => !prev);
    };

    const resetGame = () => {
        setGameBord([
            null, null, null,
            null, null, null,
            null, null, null,
        ]);
        setEndGame(false)
    };

    return (
        <div className={"cell-container"}>
            {gameBord.map((cell, index) => <Cell key={`${index}-${cell}`} value={cell} index={index} handleClick={handleMotion}  />)}
            {endGame && <p>Winner: {endGame}</p>}
            {endGame && <button id="reset" onClick={resetGame}>Reset game</button>}
        </div>
    )
}