export function MoodBoardItem({color, image, description}) {
    return (
        <div className="mood-board-item" style={{backgroundColor: color}}>
            <img src={image} alt={description} className="mood-board-image"/>
            <h3 className="mood-board-text">{description}</h3>
        </div>
    )
}

export function MoodBoard() {
    return (
        <div>
            <h1 className="mood-board-heading">Destination Mood Board</h1>
            <div className="mood-board">
                <MoodBoardItem  color="red" description="mazrati" image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" />
                <MoodBoardItem  color="green" description="fazrati" image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" />
                <MoodBoardItem  color="yellow" description="ferari" image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg" />
            </div>
        </div>
    )
}