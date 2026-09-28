import './index.css'
import {Component} from 'react'

class EmojiCard extends Component {
  state = {
    clickedList: [],
  }

  clickedEmoji = id => {
    const {clickedList} = this.state
    const {updateScore, loseGame} = this.props

    if (!clickedList.includes(id)) {
      this.setState(prevState => ({
        clickedList: [...prevState.clickedList, id],
      }))

      updateScore()
    } else {
      loseGame()
    }
  }

  render() {
    const {emojisList} = this.props

    return (
      <ul className="emoji-list">
        {emojisList.map(each => (
          <li key={each.id} className="emoji-item">
            <button
              type="button"
              className="emoji-button"
              onClick={() => this.clickedEmoji(each.id)}
            >
              <img src={each.emojiUrl} alt={each.emojiName} />
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

export default EmojiCard
