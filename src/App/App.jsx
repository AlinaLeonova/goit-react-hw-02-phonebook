import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Contacts from '../Contacts/Contacts';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../FilterContacts/FilterContacts'

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  addContact = (name, number) => {
    const contact = {
      name,
      id: uuidv4(),
      number
    };

    const doubleName = this.state.contacts.find(el => el.name === contact.name);
    if (doubleName) {
      alert(`${contact.name} is already in contacts`);
      return
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      }
    })
  }


  handleDelete = nameId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== nameId)
      }
    })
  }
  handleFilter = () => {
    const { contacts, filter } = this.state;
    return (contacts.length ? contacts.filter((contact => contact.name.toLowerCase().includes(filter.toLowerCase()))) : '')

  }

  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} toFilter={this.handleChange} />
        <Contacts contacts={this.handleFilter()} onDelete={this.handleDelete} />
      </div>
    )
  }
}

export default App;
