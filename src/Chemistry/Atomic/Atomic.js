import React from 'react'
import * as Questions from './Question_Bank'

class Atomic extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            answer_key: "",
            answer: "",
            question: "",
            A: "",
            B: "",
            C: "",
            D: "",
            E: "",
            index: 0,
            status: "",
            create: 1
        }
        this.handleChange = this.handleChange.bind(this);
        this.createQuestion = this.createQuestion.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.check = this.check.bind(this);
    }

    handleClick(event){
        event.preventDefault()
        const name = event.target.className;
        if (name === "submit"){
            this.check()
        }
        else if (name === "next"){
            this.setState(prevState =>  {
                return {
                    index: prevState.index + 1,
                    status: "",
                    create: 1,
                    answer: ""
                }
            })
        }
    }

    check(){
        if (this.state.answer === this.state.answer_key){
            if (this.state.status !== "Correct"){
                this.setState({status: "Correct", create: 0})
            }
        }
        else{
            if (this.state.status !== "Incorrect"){
                this.setState({status: "Incorrect", create: 0})
            }
        }
    }

    handleChange(event){
        const value = event.target.value
        this.setState({
            answer: value,
            submit: 0
        })
    }

    createQuestion(){
        if (this.state.create === 1){
            const quest = Questions.makeQuestion(this.state.index)

            if (this.state.question !== quest[0]){
                this.setState({
                    answer_key : quest[6],
                    question: quest[0],
                    A: quest[1],
                    B: quest[2],
                    C: quest[3],
                    D: quest[4],
                    E: quest[5],
                    create: 0
                })
            }
            else{
                this.setState({create: 0})
            }
        }
    }

    render() {
        this.createQuestion();
        return (
            <div className="Question">

                <h3>Question number: {this.state.index%10 + 1}</h3>

                <div>
                    {this.state.question}
                </div>

                <br />

                <div id='block-11' >
                    <label for='option-11' >
                    <input type='radio' name='option' value='A' id='option-11' onClick={this.handleChange} checked={this.state.answer === "A"} />
                    {this.state.A}</label>
                </div>
                <br />

                <div id='block-12' >
                    <label for='option-12' >
                    <input type='radio' name='option' value='B' id='option-12' onClick={this.handleChange} checked={this.state.answer === "B"}/>
                    {this.state.B}</label>
                </div>
                <br />

                <div id='block-13' >
                    <label for='option-13' >
                    <input type='radio' name='option' value='C' id='option-13' onClick={this.handleChange} checked={this.state.answer === "C"}/>
                    {this.state.C}</label>
                </div>
                <br />

                <div id='block-14' >
                    <label for='option-14' >
                    <input type='radio' name='option' value='D' id='option-14' onClick={this.handleChange} checked={this.state.answer === "D"}/>
                    {this.state.D}</label>
                </div>
                <br />

                <div id='block-15' >
                    <label for='option-15' >
                    <input type='radio' name='option' value='E' id='option-15' onClick={this.handleChange} checked={this.state.answer === "E"}/>
                    {this.state.E}</label>
                </div>
                <br />

                <br /> <br />
                
                <button className="submit" onClick={this.handleClick}>Submit</button>
                <button className="next" onClick={this.handleClick}>Next Question</button>
                <br />
                <br />

                <h3>{this.state.status}</h3>
            </div>
        )
    }

}

export default Atomic