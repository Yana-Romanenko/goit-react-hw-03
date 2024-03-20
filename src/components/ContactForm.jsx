import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const phoneRegExp = /^(\d{3}-\d{2}-\d{2})$/;
const contactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long').required('This is required!'),
    number: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('This is required!')
});

const ContactForm = ({ onAdd }) => {
const contactNameFieldId = useId();
const numberFieldId = useId();

const handleSubmit = (values, actions) => {
    onAdd({
        id: nanoid(),
        name: values.name,
        number: values.number
    });
    actions.resetForm();
}

return (
    <Formik initialValues={{
            name: '',
            number: ''
        }}
    validationSchema={contactSchema}
    onSubmit={handleSubmit} >
        <Form className={css.form}>
            <div className={css.div}>
                <label htmlFor={contactNameFieldId}>Name</label>
                <Field className={css.input} type='tel' name='number' component='span' id={numberFieldId} placeholder="123-45-67" />
                <ErrorMessage className={css.error} name='number' component='span'></ErrorMessage>
             </div>
             <button className={css.btn} type='submit'>Add contact</button>
        </Form>
    </Formik>
)
}



export default ContactForm;