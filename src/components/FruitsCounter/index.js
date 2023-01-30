// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mangoCountFun = () => {
    this.setState(preState => ({
      ...preState,
      mangoCount: preState.mangoCount + 1,
    }))
  }

  bananaCountFun = () => {
    this.setState(preState => ({
      ...preState,
      bananaCount: preState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bgContainer">
        <div className="innerContainer">
          <h1 className="heading">
            Bob ate <span className="mangoCount">{mangoCount}</span> mangoes{' '}
            <span className="bananaCount">{bananaCount}</span> bananas
          </h1>
          <div className="cardContainer">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.mangoCountFun}
              >
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.bananaCountFun}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
