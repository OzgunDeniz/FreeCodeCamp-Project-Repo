import React from 'react';
import {Component} from 'react';

class Results extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      {/* Change code below this line */}
      return <h1>{this.props.fiftyFifty}</h1>;
      {/* Change code above this line */}
    }
  }
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        counter: Math.random()  
      });
    }
    render() {
      const expression = this.state.counter  >= 0.5 ?  "You Win!" : "You Lose!"
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          {/* Change code below this line */}
          <Results fiftyFifty={expression} />
          {/* Change code above this line */}
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  }

  export default GameOfChance ;


  // CodePen Linki : https://codepen.io/yagandogruel/pen/MWppxmv  