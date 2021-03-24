import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {...this.state,
            turnedCard: false,
            firstCard: null,
            secondCard: null
        }
    }

    //cardOperation.js dosyasındaki javascript kodlarımı react kısmına uyarlamayı denedim aşağıdaki fonksiyon şeklinde
    // fakat bir takım uyarlamaları yapamadığım için sonuç alamadım.
    handleClick = (turnedCard) => {

        if(turnedCard){
            this.setState({
                turnedCard: true,
                firstCard: 'kedi'
            });
        }
        this.setState({secondCard: this});

        if(this.state.firstCard.dataset.name === 'kedi'){
            document.getElementById("alanId").style.display = 'none';
            document.getElementById("kazandiId").style.display = 'block';
        }

        if(this.state.firstCard.dataset.name ==='kopek' && this.state.secondCard.dataset.name ==='kopek'){
            document.getElementById("alanId").style.display = 'none';
            document.getElementById("yenildiId").style.display = 'block';
        }
    }

    render() {
        const firstCard = this.state.firstCard;
        const secondCard = this.state.secondCard;
        const turnedCard = this.state.turnedCard;
        return(
            <section className="cards_section">

                <div id="cat" className="card" data-name="kedi" onClick={()=> {
                    {document.getElementById("cat").style.transform = 'rotateY(180deg)'}
                    {this.handleClick(turnedCard)}
                }}>
                    <img src="Kedi.jpg" alt="kedi" className="frontFace"/>
                    <img src="card.jpg" alt="Kedi Kartı" className="backFace"/>
                </div>

                <div id="dog" className="card" data-name="kopek" onClick={()=> {
                    {document.getElementById("dog").style.transform = 'rotateY(180deg)'}
                    {this.handleClick(turnedCard)}
                }}>

                    <img src="dog.jpg" alt="Kedi değil" className="frontFace"/>
                    <img src="card.jpg" alt="Kedi Kartı" className="backFace"/>
                </div>

                <div id="dog2" className="card" data-name="kopek" onClick={()=> {
                    {document.getElementById("dog2").style.transform = 'rotateY(180deg)'}
                    {this.handleClick(turnedCard)}
                }}>

                    <img src="dog.jpg" alt="Kedi değil" className="frontFace"/>
                    <img src="card.jpg" alt="Kedi Kartı" className="backFace"/>
                </div>

            </section>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))