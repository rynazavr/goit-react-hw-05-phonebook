import React from "react";
import styles from "./ContactList.module.css";
import fade from "./Fade.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ContactList = ({ deleteContact, contacts }) => {
  return (
    <ul className={styles.block}>
      <TransitionGroup component="li" className={styles.liCover}>
        {contacts.map((contact) => (
          <CSSTransition key={contact.id} timeout={800} classNames={fade}>
            <ul className={styles.ulBlock}>
              <li className={styles.li} key={contact.id}>
                <span className={styles.span}>{contact.name}</span>
                <span className={styles.span}>{contact.number}</span>
              </li>
              <button
                className={styles.button}
                id={contact.id}
                onClick={deleteContact}
              >
                Delete
              </button>
            </ul>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ContactList;
// import React, { Component } from "react";

// export class ContactList extends Component {
//   render() {
//     return (
//       <ul className={styles.block}>
//         <li className={styles.liCover}>
//           {this.props.contacts.map((contact) => (
//             <ul className={styles.ulBlock}>
//               <li className={styles.li} key={contact.id}>
//                 <span className={styles.span}>{contact.name}</span>
//                 <span className={styles.span}>{contact.number}</span>
//               </li>
//               <button
//                 className={styles.button}
//                 id={contact.id}
//                 onClick={this.props.deleteContact}
//               >
//                 Delete
//               </button>
//             </ul>
//           ))}
//         </li>
//       </ul>
//     );
//   }
// }

// export default ContactList;
