import React from 'react';
import {Component} from 'react';

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0 ,
        totalNumber : 0
      };
      // Change code below this line
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
      this.total = this.total.bind(this);
      // Change code above this line
    }
    // Change code below this line
    increment() {
      if(this.state.count < 20) {
        this.setState(state => ({
          count: state.count + 1
        }));
      }
    }
  
    decrement(){
     if(this.state.count > 0){
        this.setState(state => ({
          count: state.count-1
        }));
     }
  }
  
    reset() {
      this.setState(state => ({
        count: 0
      }));
    }
    // assuming this.state = { value: 0 };
     // this.setState((state) => ({ value: state.value + 1}));
    //  buySlice() {
    //   const totalSlices = this.state.slices === 20 ;
    //   this.setState({
    //     slices: totalSlices +1 
    //   });
    

    total (){
        if(this.state.count === 0 ){
        const totalNumbers = this.state.totalNumber +1 
        this.setState ({
          totalNumber : totalNumbers
        });
     }
    }


    // Change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
         <h1>Current Count: {this.state.count} , {this.state.totalNumber}</h1>
        </div>
      );
    }
  };

export default Counter;