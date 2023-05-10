import './Formik.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
export function SendForm() {
    
return (
    <div>
    <h1>Formik!</h1>
    <Formik
      initialValues={{ email: '', phone: '' , name: ''}}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Обов`язково';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Невірний email';
        }
        if (!values.phone) {
            errors.phone = 'Обов`язково';
          } else if (
            !/^\d{12}$/i.test(values.phone)
          ) {
            errors.phone = 'Невірний номер телефону';
          }
          if (!values.name) {
            errors.name = 'Обов`язково';
          }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
        <div className="form-item">
            <Field type="text" name="name" placeholder="Ім`я" />
            <ErrorMessage name="name" component="div" />
        </div>
        <div className="form-item">
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
        </div>
        <div className="form-item">
        <Field type="tel" name="phone" placeholder="Phone" />
        <ErrorMessage name="phone" component="div" />
        </div>
        <button type="submit" disabled={isSubmitting}>
        Відправити
        </button>
    </Form>
    )}
    </Formik>
  </div>
    
);
}
