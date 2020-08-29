import React from 'react';
import './form.css';

export default class Form extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        this.preventDefault()
    }
    render() {
        return (
            <form className="form">
                <div className="form__fieldset">
                    <input 
                        className="form__input" 
                        name="name" 
                        type="text" 
                        placeholder="Imię"
                    />
                    <input 
                        className="form__input" 
                        name="e-mail" 
                        type="email" 
                        placeholder="E-mail"
                    />
                </div>
                <div className="form__fieldset">
                    <textarea 
                        className="form__input form__input--textarea" 
                        name="message" 
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder="Opisz swój projekt"
                    ></textarea>
                </div>
                {/* <input 
                    onClick={this.handleSubmit} 
                    className="form__submit" 
                    type="submit"
                /> */}
            </form>
        )
    }
}