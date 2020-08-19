import React, {Component} from 'react'
import data from '../data'

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            index: 0
        }
    }

    incrementIndex = () =>{
        if (this.state.index === 24){
            this.setState({index: 0})
        }else{
            this.setState({index: this.state.index +1})
        }

    }

    decrementIndex = () =>{
        if (this.state.index === 0){
            this.setState({index: 24})
        }else{
            this.setState({index: this.state.index -1})
        }
    }

    render(){
        console.log(data)
        return(
            <div>
                <h2>{data[this.state.index].name.first} {data[this.state.index].name.last}</h2>
                <div>From: {data[this.state.index].city} {data[this.state.index].country}</div>
                <div>Job Title: {data[this.state.index].title}</div>
                <div>Employer: {data[this.state.index].employer}</div>
                <div>Favorit Movies: {data[this.state.index].favoriteMovies}</div>
                <button onClick={this.decrementIndex}>Previous</button>
                <button onClick={this.incrementIndex}>Next</button>
            </div>
        )
    }
}

export default Card
