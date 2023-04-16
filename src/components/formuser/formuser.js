import React from "react";
import { useFormik } from "formik";
import { Button, Form, ModalFooter } from "react-bootstrap";

function Formuser({ list, setList, setShow, element, index, mode }) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nom: element ? element.nom : "",
      prenom: element ? element.prenom : "",//es6
      dateNaissance: element ? element.dateNaissance : "",
      age: element ? element.age : "",
      poste: element ? element.poste : "",
      salaire: element ? element.salaire : "",
    },
    onSubmit: (values) => {
      // update user
      if (element) {
        var aux = [];
        for (let i = 0; i < list.length; i++) {
          if (index !== i) {
            aux[i] = list[i];
          } else {
            aux[i] = values;
          }
        }
        setList(aux);
        setShow(false);
      }
      // add user
      else {
        setList([...list, ...[values]]);
        setShow(false);
      }
    },
  });
  function changeDate(event) {
    formik.setFieldValue("dateNaissance", event.target.value);
    var today = new Date();
    var dateNaissancee = new Date(event.target.value);
    let age = today.getYear() - dateNaissancee.getYear();
    formik.setFieldValue("age",age);
  }
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-1 d-flex">
        <Form.Label>Nom :</Form.Label>
        <Form.Control
          disabled={mode == "vue"}
          id="nom"
          type="text"
          placeholder="tapez votre nom"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nom}
        />
      </Form.Group>
      <Form.Group className="mb-1 d-flex">
        <Form.Label>PreNom :</Form.Label>
        <Form.Control
          disabled={mode == "vue"}
          id="prenom"
          type="text"
          placeholder="tapez votre prenom"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.prenom}
        />
      </Form.Group>

      <Form.Group className="mb-1 d-flex">
        <Form.Label>Date de naissance :</Form.Label>
        <Form.Control
          disabled={mode == "vue"}
          type="date"
          id="dateNaissance"
          onChange={changeDate}
          onBlur={formik.handleBlur}
          value={formik.values.dateNaissance}
        />
      </Form.Group>
      <Form.Group className="mb-1 d-flex">
        <Form.Label>Age :</Form.Label>
        <Form.Control
          disabled={mode == "vue"}
          type="number"
          id="age"
          placeholder="votre Age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex">
        <Form.Label>proffesion</Form.Label>
        <Form.Select
          disabled={mode == "vue"}
          id="poste"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.poste}
        >
          <option>votre proffesion</option>
          <option>devloppeur web</option>
          <option>integrateur</option>
          <option>Responsable </option>
          <option>Directeur generale</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-1 d-flex">
        <Form.Label>salaire :</Form.Label>
        <Form.Control
          disabled={mode == "vue"}
          type="number"
          id="salaire"
          placeholder="salaire"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.salaire}
        />
      </Form.Group>
      <ModalFooter>
        <Button
          variant="secondary"
          className="me-3"
          onClick={() => {
            setShow(false);
          }}
        >
          Annuler
        </Button>
        <Button
          variant="primary"
          type="submit"
          className="Modal-close"
          hidden={mode == "vue"}
        >
          Valider
        </Button>
      </ModalFooter>
    </Form>
  );
}

export default Formuser;
