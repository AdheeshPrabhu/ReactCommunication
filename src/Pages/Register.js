import React, { useEffect } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useForm, FormProvider } from "react-hook-form";
import { formFields } from "../Config/formFieldsConfig";
import FormField from "../Components/FormField";
import { registrationSchema } from "../Config/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDataToLocalStorageArray } from "../Utils/localStorageUtils";
import { useNavigate } from "react-router-dom";

function Register() {
  const methods = useForm({
    resolver: yupResolver(registrationSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const uniqueId = Date.now();
    const dataWithId = { id: uniqueId, ...data };
    addDataToLocalStorageArray("users", dataWithId);
    navigate("/RegisterSuccessful");
  };

  return (
    <Container className="pt-5">
      <h1 className="text-center">Register</h1>
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              {formFields.map((field, index) => (
                <FormField
                  key={index}
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  validation={field.validation}
                />
              ))}
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

export default Register;
