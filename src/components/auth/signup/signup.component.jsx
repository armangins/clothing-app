import { React, useState } from "react";
import Button from "../../button/button.component";
import {
  authWithCredentials,
  createUser,
} from "../../../utilities/firebase/firebase.utilities";
import InputField from "../../input/input.component";
import { Container,Form, InnerContainer } from "./signup.styles.jsx";
import { Link } from "react-router-dom";

const initFormFields = {
  displayName: "",
  email: "",
  password: "",
};

/**
 * Handles the state, set the fields .
 *
 * @component
 * @returns {JSX.Element}
 */

const Signup = () => {
  const [formFields, setFormField] = useState(initFormFields);
  const { displayName, email, password } = formFields;

  /**
   * Handles the state, set the fields .
   * @function
   * @param {Object} event.
   */
  const onChangeHadler = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  /**
   * handles the submit and basic validation .
   * @function
   * @param {Object} event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await authWithCredentials(email, password);
      await createUser(user, displayName);
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("אופס, נראה שאתם כבר רשומים");
      }
    }
  };

  return (
    <Container>
    
        <Form onSubmit={handleSubmit} className="signup">
          <InnerContainer className="form_col p-5 title_group">
            <h2 className="form_title">
              sign up now
              <br />
            </h2>
            <p className="form_subtitle">
              and get a an exclusive special discount
            </p>
            <InputField
              label="name "
              onChange={onChangeHadler}
              required
              autoComplete="off"
              placeholder="name"
              name="displayName"
              type="text"
              className="form_input"
              value={displayName}
            />
            <InputField
              label="email"
              onChange={onChangeHadler}
              required
              placeholder="email"
              autoComplete="off"
              name="email"
              type="email"
              className="form_input"
              value={email}
            />
            <InputField
              onChange={onChangeHadler}
              label="password"
              placeholder="password"
              autoComplete="off"
              name="password"
              type="password"
              className="form_input"
            />
            <div className="button_group">
              <Button type="submit" ButtonType="primary_button">
                sign up
              </Button>
              <Link to="/auth">Signin</Link>
            </div>
          </InnerContainer>
        </Form>
    </Container>
  );
};

export default Signup;
