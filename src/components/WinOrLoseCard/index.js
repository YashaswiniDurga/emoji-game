import './index.css'

const WinOrLoseCard = ({totalScore, topScore, playAgain}) => {
  const isWon = totalScore === 12

  return (
    <div className={`result-card ${isWon ? 'win-card' : 'lose-card'}`}>
      <div className="result-content">
        <p className="result-tag">{isWon ? '🎉 AMAZING!' : '💭 NICE TRY!'}</p>

        <h1>{isWon ? 'You Won!' : 'You Lost!'}</h1>

        <p className="result-message">
          {isWon
            ? 'You remembered every emoji!'
            : 'That emoji was already clicked.'}
        </p>

        <img
          src={
            isWon
              ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
          }
          alt="win or lose"
          className="result-image"
        />

        <div className="result-score">
          <span>{isWon ? 'Best Score' : 'Score'}</span>

          <strong>{totalScore}/12</strong>
        </div>

        <button type="button" className="play-again-button" onClick={playAgain}>
          Play Again
          <span>↻</span>
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
