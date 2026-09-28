import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    totalScore: 0,
    topScore: 0,
    gameOver: false,
    shuffledEmojisList: [],
  }

  componentDidMount() {
    this.setState({
      shuffledEmojisList: this.shuffleEmojis(),
    })
  }

  shuffleEmojis = () => {
    const {emojisList} = this.props

    return [...emojisList].sort(() => Math.random() - 0.5)
  }

  updateScore = () => {
    this.setState(prevState => {
      const newScore = prevState.totalScore + 1

      return {
        totalScore: newScore,
        gameOver: newScore === 12,
        shuffledEmojisList: this.shuffleEmojis(),
      }
    })
  }

  loseGame = () => {
    this.setState({
      gameOver: true,
    })
  }

  playAgain = () => {
    this.setState(prevState => ({
      totalScore: 0,
      gameOver: false,
      shuffledEmojisList: this.shuffleEmojis(),
      topScore:
        prevState.totalScore > prevState.topScore
          ? prevState.totalScore
          : prevState.topScore,
    }))
  }

  render() {
    const {totalScore, topScore, gameOver, shuffledEmojisList} = this.state

    return (
      <div className="game-page">
        <NavBar
          totalScore={totalScore}
          topScore={topScore}
          gameOver={gameOver}
        />

        <main className="game-content">
          {gameOver ? (
            <WinOrLoseCard
              totalScore={totalScore}
              topScore={topScore}
              playAgain={this.playAgain}
            />
          ) : (
            <EmojiCard
              emojisList={shuffledEmojisList}
              updateScore={this.updateScore}
              loseGame={this.loseGame}
            />
          )}
        </main>
      </div>
    )
  }
}

export default EmojiGame
