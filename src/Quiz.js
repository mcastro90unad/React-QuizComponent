import React, { Component} from 'react'

let quiz_data = require ('./quiz_data.json')

class Quiz extends Component{
    constructor(props){
        super(props)
        this.state = { QuizQuestion: 1}
    }
    render(){
        return (
            <div><div className="QuizQuestion">{quiz_data.quiz_questions[0].instruction_text}</div></div>
        )
    }

}

export default Quiz