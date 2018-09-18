import React, {Component} from 'react'

class QuizQuestionButton extends Component{
    
    //DOM Event step 1. add handler in the component that needs to process the event
    handleClick(){
        //Comp. Event step 3. Call event handler
        this.props.clickHandler(this.props.button_text)
    }
    render(){
        return (
            //DOM Event step 2. bind the created function to the DOM event (onClick)
            <li><button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button></li>
        )        
    }
}
 
export default QuizQuestionButton
