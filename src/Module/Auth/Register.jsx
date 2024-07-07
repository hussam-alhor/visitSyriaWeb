import React, { useState } from "react";
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // You can rename this to something more general like "Auth.css"

// Registration component
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [ver, setVer] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    setVer(true);

    let flag = true;
    if (password.length < 8) {
      flag = false;
    } else flag = true;

    try {
      if (flag) {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("profile_picture", profilePicture);

        let res = await axios.post("http://127.0.0.1:8000/api/register", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

        if (res.status === 200) {
          window.localStorage.setItem("token", res.data.authorisation.token);
          window.localStorage.setItem("email", email);
          navigate("/home");
        }
      }
    } catch (err) {
      console.log(err);
      setEmailError(err.response.status);
      setPasswordError(err.response.status);
    }
  }

  return (
    <Container className="d-flex justify-content-center align-items-center bg-rgba(212, 239, 229, 0.5) pt-5">
      <Row className="as_row">
        <Col className="as_col">
          <div className="as_login">
            <h1>
              Visit<span> Syria</span>
            </h1>
            <h3>مرحبا بكم في لوحة تحكم visit Syria </h3>
          </div>

          <Form onSubmit={handleRegister} className="as_form">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="as_input"
                placeholder="البريد الإلكتروني"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <FormControl
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="as_input"
                type="password"
                name="password"
                id="password"
                placeholder="كلمة المرور"
              />
              {password.length < 8 && ver || passwordError === 401 ? (
                <p className="as-error">كلمة المرور او الإيميل غير صحيح</p>
              ) : ''}
            </Form.Group>

            <Form.Group controlId="formBasicProfilePicture">
              <FormControl
                onChange={(e) => setProfilePicture(e.target.files[0])}
                className="as_input"
                type="file"
                name="profile_picture"
                id="profile_picture"
                accept="image/*"
                required
              />
            </Form.Group>

            <Button type="submit" className="as-button" size="lg">
              تسجيل
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
