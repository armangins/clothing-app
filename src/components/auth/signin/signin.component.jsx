import React, { useState } from "react";
import Button from "../../button/button.component";
import InputField from "../../input/input.component";

import {
  signInWithGooglePopup,
  signInWithEmailAndPass,
} from "../../../utilities/firebase/firebase.utilities";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./signin.styles.jsx";
import { Container,Form, InnerContainer } from "./signin.styles.jsx";

const initFormFields = {
  email: "",
  password: "",
};

/**
 * This is a functional React component that displays a greeting message.
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name to greet.
 * @returns {JSX.Element} The rendered component.
 */
const Signin = () => {
  const [formFields, setFormField] = useState(initFormFields);
  const { email, password } = formFields;

  /**
   * Handles the state, set the fields .
   * @function
   * @param {Object} event.
   */
  const onChanageHandler = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  /**
   * Handles the login with google popup.
   * @function
   */
  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  /**
   * handles the submit and basic validation .
   * @function
   * @param {Object} event.
   */

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInWithEmailAndPass(email, password);
      if (user) {
        toast.success("logged in", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          toast.error("wrong email/password", {
            position: toast.POSITION.TOP_RIGHT,
          });
          break;
        case "auth/user-not-found":
          toast.error("account doesnt exist", {
            position: toast.POSITION.TOP_RIGHT,
          });
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
          <InnerContainer>
            <h2>
              Login into your account <br />
            </h2>
            <p >all the you need in one place</p>
            <InputField
              onChange={onChanageHandler}
              label="email"
              autoComplete="off"
              placeholder="email"
              name="email"
              type="text"
            
            />
            <InputField
              onChange={onChanageHandler}
              label="password"
              placeholder="password"
              autoComplete="off"
              name="password"
              type="password"
         
            />
       
              <Button 
                type="button"
                ButtonType="provider_button"
                onClick={logGoogleUser}
              >
                sign in with
                <span style={{ marginLeft: "12px" }}>
                  <FontAwesomeIcon icon={faGoogle} />
                </span>
              </Button>
              <Button type="submit" ButtonType="primary_button">
                login
              </Button>
              <p>
                don't have an account yet? no worries ?{" "}
                <Link to="/signup"> Sign up here</Link>
              </p>
            
          </InnerContainer>
          <span></span>
        </Form>
      <ToastContainer />
    </Container>
  );
};

export default Signin;
