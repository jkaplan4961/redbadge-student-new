import React, { Component } from 'react';

class ClassDeckFetch extends Component {
    constructor(props){
        super(props);
        this.state = {deckID: ""}
    
    }
    fetchDeck() {
        // what is Url
        // store the data
const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

fetch(url)
.then((res) => res.json())
.then((json) => this.setState({deckID: json.deck_ID}))
    }

    fetchCard() {
const url = `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2
`
fetch(url)
.then((res) => res.json())
.then((json) => console.log(json))
    }

    componentDidMount() {
        this.fetchDeck();
    }

    componentDidUpdate(prevProps, prevState) {
      
        if(prevState.deckID !== this.state.deckID){
            this.fetchCard();
        }
    }
    render() {
        return <div>Hello from ClassDeckFetch</div>
    }
}
export default ClassDeckFetch;