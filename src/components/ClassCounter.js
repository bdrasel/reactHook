import React, { Component } from 'react'

export default class ClassCounter extends Component {

    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }

    Increment= () =>{
       this.setState(prevState =>{
            return {
                count:prevState.count + 1
            }
       });
    }


    render() {
        return (
            <div>
               <button onClick={this.Increment}>count</button> 
              <p>{this.state.count}</p>
            </div>
        )
    }
}
