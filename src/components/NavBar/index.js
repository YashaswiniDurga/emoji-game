import './index.css'

const NavBar = props => {
  const {totalScore, topScore, gameOver} = props

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="brand">
          <div className="brand-icon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
            />
          </div>

          <div>
            <h1>Emoji Game</h1>
            <p>Test your memory ✨</p>
          </div>
        </div>

        {!gameOver && (
          <div className="score-container">
            <div className="score-box">
              <span className="score-label">SCORE</span>
              <span className="score-value">{totalScore}</span>
            </div>

            <div className="score-box top-score">
              <span className="score-label">TOP SCORE</span>
              <span className="score-value">{topScore}</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
