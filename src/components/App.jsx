import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import ContactList from "./ContactList";
import NameForm from "./NameForm";
import Filter from "./Filter";
import styles from "./styles.module.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    const duplicateContact = contacts.find(
      (contact) =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (duplicateContact) {
      alert("Duplicate contact");
      return;
    }

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = useMemo(() => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  }, [contacts, filter]);

  return (
    <div className={styles.phonebook}>
      <h2>Phonebook</h2>
      <NameForm handleAddContact={handleAddContact} />
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

App.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default App;

