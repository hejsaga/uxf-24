import { useState, useRef } from "react";
import Input from "./Input";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const formRef = useRef(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formRef.current) {
      alert(`Submitted:\n\nName: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({ name: "", email: "" });

      formRef.current.reset();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Input
        name="name"
        type="text"
        label="Name"
        placeholder="Write your name"
        onChange={handleChange}
      />
      <Input
        name="email"
        type="email"
        label="Email"
        placeholder="Email"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
