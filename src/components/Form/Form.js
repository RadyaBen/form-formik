import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../MyTextInput';
import { MyCheckbox } from '../MyCheckbox';

const CustomForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false,
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Minimum 2 characters')
                    .required('This is a required field!'),
                email: Yup.string()
                    .email('Incorrect email adress')
                    .required('This is a required field!'),
                amount: Yup.number()
                    .min(5, 'At least 5')
                    .required('This is a required field!'),
                currency: Yup.string().required('Choose currency'),
                text: Yup.string()
                    .min(10, 'At least 10 characters'),
                terms: Yup.boolean()
                    .required('Consent required')
                    .oneOf([true], 'Consent required'),
            })}
            onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className='form' >
                <h2>Send donate</h2>
                <MyTextInput
                    label='Your name'
                    id='name'
                    name='name'
                    type='text'
                    autoComplete='off'
                />
                <MyTextInput
                    label='Your email'
                    id='name'
                    name='email'
                    type='text'
                    autoComplete='off'
                />
                <label htmlFor='amount'>Amount</label>
                <Field
                    id='amount'
                    name='amount'
                    type='number'
                />
                <ErrorMessage className='error' name='amount' component='div' />
                <label htmlFor='currency'>Currency</label>
                <Field
                    id='currency'
                    name='currency'
                    as='select' >
                    <option value=''>Choose currency</option>
                    <option value='USD'>USD</option>
                    <option value='UAH'>UAH</option>
                    <option value='RUB'>RUB</option>
                </Field>
                <ErrorMessage className='error' name='currency' component='div' />
                <label htmlFor='text'>Your message</label>
                <Field
                    id='text'
                    name='text'
                    as='textarea'
                />
                <ErrorMessage className='error' name='text' component='div' />
                <MyCheckbox
                    name='terms'>
					Do you agree with the privacy policy?
                </MyCheckbox>
                <button type='submit'>Send</button>
            </Form>
        </Formik>
    );
};

export { CustomForm };