import React from "react";
import { Formik } from "formik";
import "./validatedFormLogin.css";

import * as Yup from "yup";
import { Button, Checkbox } from "@material-ui/core";
const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ name: "", email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string()
        .required("Required")
        .matches(/(!=.*[0-9])/, "Make sure to enter name"),
      email: Yup.string().email().required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {(props) => {
      const {
        checked,
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form method="POST" onSubmit={handleSubmit} className="popupItems">
          <input
            autocomplete="off"
            name="name"
            type="text"
            placeholder="Enter your Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name && "error"}
          />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
          <br />
          <input
            autocomplete="off"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <br />
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <br />
          <div className="checkboxField">
            <Checkbox
              name="checkbox"
              value={values.checkbox}
              checked={checked}
              color="primary"
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.checkbox && touched.checkbox && "error"}
            />
            <p>I Agree the terms of use and Privacy policy</p>
          </div>

          {errors.checkbox && touched.checkbox && (
            <div className="input-feedback">{errors.checkbox}</div>
          )}
          <Button
            variant="contained"
            disabled={isSubmitting}
            type="submit"
            autoFocus
            onclick="saveFile()"
            className="buttonStyle2"
          >
            SUBMIT
          </Button>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
