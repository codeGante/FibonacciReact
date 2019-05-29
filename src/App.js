import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { number: '', answer: '' };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const number = this.state.number;
    const url = `http://localhost:3100/fib/${number}`;
    Axios.post(url).then((res) => {
      this.setState({
        answer: res.data
      })
    }).catch((err) => {
      console.log(err)
    });
  }

  handleInputChange = (e) => {
    this.setState({
      number: e.target.value
    });
  }

  render() {

    const { number, answer } = this.state;

    return (
      <div className="App">
        <section>
          <div className="wrapper">
            <div className="container" id="form">
              <h1>Calculate the Fibonacci Sequence</h1>
              <form className="form" onSubmit={this.handleSubmit}>
                <div><input type="text" ref="number" placeholder="Enter the Number" onChange={this.handleInputChange} /></div>
                <br />
                <div><button type="submit">Submit!</button></div>
              </form>
            </div>
            <div>
              <h2><span>The Fibonacci of {number} is: {answer}</span></h2>
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default App;
