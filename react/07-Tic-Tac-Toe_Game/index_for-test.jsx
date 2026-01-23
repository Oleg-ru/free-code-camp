const { useState } = React;

export function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const calculateWinner = (squares) => {
        const lines = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];
        for (let line of lines) {
            const [a,b,c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(squares);
    const isDraw = squares.every(s => s !== null) && !winner;

    const handleClick = (i) => {
        if (squares[i] || winner || isDraw) return;

        const newSquares = [...squares];
        newSquares[i] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    };

    let status;
    if (winner) status = `Winner: ${winner}`;
    else if (isDraw) status = "It's a Draw!";
    else status = `Next Player: ${isXNext ? 'X' : 'O'}`;

    return (
        <div className="board">
            <div className="status">{status}</div>
            <div className="board-row">
                <button className="square" onClick={() => handleClick(0)}>{squares[0]}</button>
                <button className="square" onClick={() => handleClick(1)}>{squares[1]}</button>
                <button className="square" onClick={() => handleClick(2)}>{squares[2]}</button>
            </div>
            <div className="board-row">
                <button className="square" onClick={() => handleClick(3)}>{squares[3]}</button>
                <button className="square" onClick={() => handleClick(4)}>{squares[4]}</button>
                <button className="square" onClick={() => handleClick(5)}>{squares[5]}</button>
            </div>
            <div className="board-row">
                <button className="square" onClick={() => handleClick(6)}>{squares[6]}</button>
                <button className="square" onClick={() => handleClick(7)}>{squares[7]}</button>
                <button className="square" onClick={() => handleClick(8)}>{squares[8]}</button>
            </div>
            <button id="reset" onClick={resetGame}>Reset Game</button>
        </div>
    );
}