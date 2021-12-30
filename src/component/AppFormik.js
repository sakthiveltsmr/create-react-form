import { Formik, Form, Field, ErrorMessage } from "formik";
import "./AppFormik.css";
const ValidateEmail = RegExp(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

function AppFormik() {
  return (
    <Formik
      initialValues={{ name: "", Email: "" }}
      validate={(values) => {
        //form validation
        const errors = {};

        if (values.name.length <= 5) {
          errors.name = "Full name should be a 6 character";
        } else if (values.Email.length <= 5) {
          errors.Email = "Email should be a combination of @gmail.com";
        } else if (!ValidateEmail.test(values.Email)) {
          errors.Email = "Enter Valid Email";
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {/* {({ handleChange, handleSubmit, values, errors }) => { */}
      {() => {
        return (
          <>
            <div className="Form-container">
              <h1 className="h1">Job Login Form</h1>
              <Form>
                <div className="name-container">
                  <label>Name : </label>
                  <Field
                    name="name"
                    type="text"
                    //   value={values.name}
                    //   onChange={handleChange}
                    //   required
                  />
                  {/* <span>{errors.name}</span> */}
                  <ErrorMessage name="name" />
                </div>
                <br />
                <div className="email-container">
                  <label>Email : </label>
                  <Field
                    name="Email"
                    type="email"
                    //   value={values.Email}
                    //   onChange={handleChange}
                    //   required
                  />
                  {/* <span>{errors.Email}</span> */}
                  <ErrorMessage name="Email" />
                </div>
                <br />
                <div className="Btn-class">
                  <button type="submit" className="Btn">
                    Login
                  </button>
                </div>
              </Form>
            </div>
          </>
        );
      }}
    </Formik>
  );
}
export default AppFormik;
