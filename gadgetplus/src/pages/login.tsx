import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import formStyles from '../styles/login.module.css'
import NavBar from '@/components/NavBar';
import Link from 'next/link';

const initialValues = {
    email: '',
    password: '',

};

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
    
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
                <label htmlFor="email" className={formStyles.label}>Email Address:</label><br/>
                <Field id="email" name="email" type="email" className={formStyles.input}/>
                <div className={formStyles.danger}>
                    
                </div>

                <label htmlFor="name" className={formStyles.label}>Password:</label><br/>
                <Field id="password" name="password" type="password"  className={formStyles.input}/>
                <div className={formStyles.danger}>
                    
                </div>

                <button type="submit" disabled={isSubmitting} className={formStyles.button}>
                    Submit
                </button>

                <Link href={'/register'} className={formStyles.extras}> Sign Up</Link>
                <Link href={'/register'} className={formStyles.extras}> Forgot Password</Link>
            </Form>
        )}
        </Formik>
    </>
    
  );
};

export default ContactForm;


