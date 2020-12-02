import React from 'react';
import PropTypes from 'prop-types';
import style from "./Contacts.module.css";

const Contacts = function ({contacts, onDelete}) {
  return (<ul className={style.list}>
    {contacts.length ? contacts.map(contact => <li className={style.item} key={contact.id}>{contact.name}: {contact.number} <button className={style.button} onClick={ () => onDelete(contact.id)} type='button'>Delete</button> </li>) : ''}
  </ul>)
}

Contacts.propTypes = {
  contacts:  PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Contacts;