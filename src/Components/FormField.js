import React from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

// Reusable FormField component with validation
const FormField = ({ label, type, placeholder, name, validation }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Form.Group className="mb-3" controlId={`formBasic${name}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {errors[name] && (
        <Form.Text className="text-danger">{errors[name]?.message}</Form.Text>
      )}
    </Form.Group>
  );
};

export default FormField;
