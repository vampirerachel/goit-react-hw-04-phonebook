import React, { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import styles from "./styles.module.css";

const NameForm = ({ handleAddContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    handleAddContact(newContact);
    setName("");
    setNumber("");
  };

  return (
    <div>
      <p>Name</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <p>Number</p>
          <input
            type="text"
            name="number"
            required
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

NameForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default NameForm;
