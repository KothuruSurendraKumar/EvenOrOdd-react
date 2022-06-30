// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(preState => ({count: preState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const check = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <p className="text">Count is {check}</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="text2">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
