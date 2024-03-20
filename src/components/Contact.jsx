import css from './Contact.module.css';
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ data: { id, name, number}, onDelete }) => {
return (
    <div className={css.card}>
        <div className={css.contactData}>
        <p><FaUser />{name}</p>
         <p><FaPhone />{number}</p>
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </div>
);
}

export default Contact;