import React, { Component } from "react";
import styles from "./Phonebook.module.css";
import AlertMessage from "../AlertMessage/AlertMessage";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import shortid from "shortid";
import { CSSTransition } from "react-transition-group";
import alertMessage from "../AlertMessage/AlertMessageAnime.module.css";

class Phonebook extends Component {
  formInitialState = {
    name: "",
    number: "",
    filter: "",
    alertOn: false,
  };
  state = {
    name: "",
    number: "",
    filter: "",
    alertOn: false,
    contacts: [
      { id: shortid.generate(), name: "Rosie Simpson", number: "459-12-56" },
      { id: shortid.generate(), name: "Hermione Kline", number: "443-89-12" },
      { id: shortid.generate(), name: "Eden Clements", number: "645-17-79" },
      { id: shortid.generate(), name: "Annie Copeland", number: "227-91-26" },
    ],
  };
  componentDidMount() {
    const previouseContacts = localStorage.getItem("contacts");

    if (previouseContacts) {
      this.setState({
        contacts: JSON.parse(previouseContacts),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  inputHandler = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const result = this.state.contacts.some(
      (contact) => contact.name === this.state.name
    );
    if (!result) {
      const singleContact = {
        name,
        number,
        id: shortid.generate(),
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, singleContact],
      }));
      this.setState({ ...this.formInitialState });
    } else {
      this.setState({ alertOn: true });
    }
  };

  clearAlert = () => {
    this.setState({ alertOn: false });
  };

  deleteContact = (event) => {
    const id = event.target.id;
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  getContacts = () => {
    if (this.state.filter !== "") {
      return this.state.contacts.filter((contact) => {
        return contact.name
          .toLocaleLowerCase()
          .includes(this.state.filter.toLocaleLowerCase());
      });
    } else return this.state.contacts;
  };

  render() {
    const { name, number, filter, alertOn } = this.state;
    return (
      <div>
        <CSSTransition
          in={true}
          appear={true}
          timeout={900}
          classNames={styles}
          mountOnExit
        >
          <h1 className={styles.blue}>Phonebook</h1>
        </CSSTransition>
        <ContactForm
          inputHandler={this.inputHandler}
          submitHandler={this.submitHandler}
          addContact={this.addContact}
          name={name}
          number={number}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} inputHandler={this.inputHandler} />
        <ContactList
          deleteContact={this.deleteContact}
          contacts={this.getContacts()}
        />
        <CSSTransition
          in={alertOn}
          timeout={300}
          classNames={alertMessage}
          unmountOnExit
        >
          <AlertMessage name={name} clearAlert={this.clearAlert} />
        </CSSTransition>
      </div>
    );
  }
}
export default Phonebook;
