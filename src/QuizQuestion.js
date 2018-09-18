import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component{
    
    //Comp. Event step 1. add handler to the component that needs to process the event (data)
    handleClick(buttonText){
        if(buttonText === this.props.quiz_question.answer)
            this.props.showNextQuestionHandler();
    }
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_option, index) =>{
                                return <QuizQuestionButton key={index} button_text={answer_option} 
                                //Comp. Event step 2. Pass and bind this component's handler to the child component
                                clickHandler={this.handleClick.bind(this)} />
                            })}                        
                    </ul>
                </section>
            </main>

        )
    }
}

export default QuizQuestion