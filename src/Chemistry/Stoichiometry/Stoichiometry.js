import React from 'react'
import * as Questions from './Question_Bank'

class Stoichiometry extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            answer_key: "",
            answer: "",
            question: "",
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
        else if (name === "show_answer"){
            const q = "The answer is " + this.state.answer_key
            alert(q)
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
        else{
            this.setState({
                status: "",
                create: 1,
                answer: ""
            })
        }
    }

    check(){
        if (this.state.index%2 === 1){
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
        else{
            if ((parseFloat(this.state.answer)).toFixed(4) === this.state.answer_key){
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

            if (this.state.answer_key !== quest[1]){
                this.setState({
                    answer_key : quest[1],
                    question: quest[0],
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

                <h3>Question number: {this.state.index%2 + 1}</h3>

                <div>
                    {this.state.question}
                </div>

                <br />

                <input type="text" onChange={this.handleChange} placeholder="ANSWER" value={this.state.answer} />

                <br /> <br />
                
                <button className="submit" onClick={this.handleClick}>Submit</button>
                <button className="next" onClick={this.handleClick}>Next Question</button>
                <button className="refresh" onClick={this.handleClick}>Try With Different Values</button>
                <button className="show_answer" onClick={this.handleClick}>Show Answer</button>
                <br />
                <br />

                <h3>{this.state.status}</h3>
            </div>
        )
    }

}

export default Stoichiometry