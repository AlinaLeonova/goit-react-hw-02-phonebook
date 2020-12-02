import React, { Component } from 'react';
import style from './ContactForm.module.css'


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({
      name: '',
      number: ''
    })
  }
  render() {
    return (<form className={style.form} onSubmit={this.handleSubmit}>
      <label className={style.lable}>
        Name
      <input className={style.input} name="name" type="text" value={this.state.name} onChange={this.handleChange} />
      </label>
      <label className={style.lable}>
        Number
      <input className={style.input} name="number" type="phone" value={this.state.number} onChange={this.handleChange} />
        <button className={style.button} type="submit">Add contact</button>
      </label>
    </form>)
  }
}

export default ContactForm;