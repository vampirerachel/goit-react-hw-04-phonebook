import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} : {contact.number}
            <p>
              <button type="button" onClick={() => handleDeleteContact(contact.id)}>
                Delete
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
