import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number,
        };
        this.props.addContact(newContact);
        this.setState({ name: '', number: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
  Name
  <input
    type="text"
    name="name"
    pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    value={this.state.name}
    onChange={this.handleChange}
  />
</label>
<label>
  Number
  <input
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
    value={this.state.number}
    onChange={this.handleChange}
  />
</label>
            <button type="submit">Add contact</button>
          </form>
        );
    }
}

export default ContactForm;