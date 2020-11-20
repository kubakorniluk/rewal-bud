import React from 'react';
import './form.css';

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        window.Email.send({
            SecureToken : "a1583609-65ac-4522-bc84-13d4acac9433",
            To : 'kornilukkuba@gmail.com',
            From : this.state.email,
            Subject : "sss",
            Body : "And this is the body"
        })
        .then(
            message => alert(message)
        );

    }
    // handleClick() {
    //     return (null)
    // }
    render() {
        return (
            <>
            <p className="form__subtitle">Zatrudnimy osoby do prac remontowo-budowlanych. Jeżeli jesteś rzetelnym i dokładnym pracownikiem - zadzwoń!</p>
            <p className="form__subtitle">Planujesz remont i szukasz najlepszych specjalistów na rynku? Napisz do nas!</p>
            {/* <form className="form" autoComplete="off">
                <fieldset className="form__fieldset">
                    <input 
                        className="form__input" 
                        name="name" 
                        type="text" 
                        placeholder="Imię i nazwisko"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        className="form__input" 
                        name="email" 
                        type="email" 
                        placeholder="E-mail"
                        required
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </fieldset>
                <fieldset className="form__fieldset">
                    <textarea 
                        className="form__input form__input--textarea"
                        type="text" 
                        name="message" 
                        rows="10" 
                        placeholder="Opisz swój projekt"
                        required
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                </fieldset>
                <input  
                    className="form__submit" 
                    type="submit" 
                    value="Wyślij"
                    onClick={this.handleSubmit}
                />
            </form> */}
            </>
        )
    }
}