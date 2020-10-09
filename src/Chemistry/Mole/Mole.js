import React from 'react'
import * as Questions from './Question_Bank'

class Mole extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            answer_key: "",
            answer: "",
            question: "",
            index: 0,
            status: "",
            create: 1,
            steps: "",
            show_steps: 0
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
            this.setState({
                show_steps: 1
            })
        }
        else if (name === "next"){
            this.setState(prevState =>  {
                return {
                    index: prevState.index + 1,
                    status: "",
                    create: 1,
                    answer: "",
                    show_steps: 0
                }
            })
        }
        else{
            this.setState({
                status: "",
                create: 1,
                answer: "",
                show_steps: 0
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

            if (this.state.answer_key !== quest[1]){
                this.setState({
                    answer_key : quest[1],
                    question: quest[0],
                    create: 0,
                    steps: quest[2]
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

                <h3>Question number: {this.state.index%3 + 1}</h3>

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
                <br />
                {this.state.show_steps === 0? null : this.state.steps.split('\n').map(i => {
                        return <p>{i}</p>
                })}
            </div>
        )
    }

}

export default Mole