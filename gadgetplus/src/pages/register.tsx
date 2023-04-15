import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import formStyles from '../styles/form.module.css'
import NavBar from '@/components/NavBar';

const initialValues = {
  name: '',
  password: '',
  password2: '',
  email: '',
  phone_number: '',
  
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phone_number: Yup.string().required('Required'),
  
});

const ContactForm = () => {
  return (
    <>
        <NavBar />
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            resetForm();
            setSubmitting(false);
        }}
        >
        {({ isSubmitting }) => (
            <Form className={formStyles.container}>
            <label htmlFor="name" className={formStyles.label}>Name:</label><br/>
            <Field id="name" name="name" type="text"  className={formStyles.input}/>
            <div className={formStyles.danger}>
                
            </div>

            <label htmlFor="name" className={formStyles.label}>Password:</label><br/>
            <Field id="password" name="password" type="password"  className={formStyles.input}/>
            <div className={formStyles.danger}>
                
            </div>

            <label htmlFor="name" className={formStyles.label}>Confirm Password:</label><br/>
            <Field id="password" name="password2" type="password" className={formStyles.input}/>
            <div className={formStyles.danger}>
                
            </div>

            <label htmlFor="email" className={formStyles.label}>Email Address:</label><br/>
            <Field id="email" name="email" type="email" className={formStyles.input}/>
            <div className={formStyles.danger}>
                
            </div>

            <label htmlFor="email" className={formStyles.label}>Phone Number:</label><br/>
            <Field id="tel" name="phone_number" type="tel" className={formStyles.input}/>
            <div className={formStyles.danger}>
                
            </div>


            <button type="submit" disabled={isSubmitting} className={formStyles.button}>
                Submit
            </button>
            </Form>
        )}
        </Formik>
    </>
    
  );
};

export default ContactForm;


