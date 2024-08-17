import React, { useEffect } from "react";
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFields } from "../Config/formFieldsConfig";
import { loginSchema } from "../Config/validationSchema";
import FormField from "../Components/FormField";
import { useNavigate } from "react-router-dom";
import { getStoredData } from "../Utils/localStorageUtils";

function Login() {
  const methods = useForm({
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);

  const onSubmit = (data) => {
    const users = getStoredData("users");
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ name: user.name, email: user.email })
      );
      navigate("/LoginSuccessful");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Container className="pt-5">
      <h1 className="text-center">Login</h1>
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              {loginFields.map((field, index) => (
                <FormField
                  key={index}
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  validation={field.validation}
                />
              ))}
              {error && <Alert variant="danger">{error}</Alert>}
              <Button variant="primary" type="submit" className="float-end">
                Submit
              </Button>
            </Form>
          </FormProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
