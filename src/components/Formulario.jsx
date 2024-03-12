import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = () => {
  
  return (
    <Form>
      <Form.Control placeholder="Nombre" type="text" />
      <Form.Control placeholder="Correo (ejemplo@correo.cl)" type="text" />
      <Form.Control
        as="textarea"
        placeholder="Describe tu pedido"
        type="text"
      />
      <Button variant="primary" type="submit" className="mb-3 text-light">
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;
