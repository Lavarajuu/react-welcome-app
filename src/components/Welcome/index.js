// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {btnStatus: 'Subscribe'}

  clickedButton = () => {
    const {btnStatus} = this.state
    if (btnStatus === 'Subscribe') {
      this.setState(prevState => ({btnStatus: 'Subscribed'}))
    } else {
      this.setState(prevState => ({btnStatus: 'Subscribe'}))
    }
  }

  render() {
    const {btnStatus} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <br />
        <button className="button" type="button" onClick={this.clickedButton}>
          {btnStatus}
        </button>
      </div>
    )
  }
}
export default Welcome
