import Contact from './Contact';
import css from './ContactList.module.css';

const ContactList = () => {
return (
    <ul className={css.list}>
        {contacts.map((contact) => (
  <li className={css.item} key={contact.id}>
<Contact data={contact} onDelete={onDelete}></Contact>
  </li>
        ))}
    </ul>
);
}

export default ContactList;