import { Button, Table } from "react-bootstrap";
import Modall from "../modal/modal";

import { listeUsers as users } from "./data";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Liste() {
  const [list, setList] = useState(users);
  function flitreList(event) {
    let newList = users.filter((element) => {
      return event.target.value != ""
        ? element.age === event.target.value ||
            element.prenom
              .toUpperCase()
              .includes(event.target.value.toUpperCase()) ||
            element.nom
              .toUpperCase()
              .includes(event.target.value.toUpperCase()) ||
            element.dateNaissance
              .toUpperCase()
              .includes(event.target.value.toUpperCase()) ||
            element.salaire == event.target.value
        : users;
    });
    setList(newList);
  }
  const [mode, setMode] = useState("");
  const [index, setIndex] = useState();
  const [element, setElement] = useState();
  const [show, setShow] = useState(false);
  function handleShow(param, element, index) {
    setShow(true);
    setMode(param);
    setElement(element);
    setIndex(index);
  }
  function handleClose(index) {
    var aux = [];
    var j = 0;
    for (let i = 0; i < list.length; i++) {
      if (i !== index) {
        aux[j] = list[i];
        j = j + 1;
      }
    }
    setList(aux);
  }
  function handleVue(param, element, index) {
    setShow(true);
    setMode(param);
    setElement(element);
    setIndex(index);
    
  }

  return (
    <>
      <div className="title" id="titre1">
        <div className="center">
          <img src="img.png" id="image1" />
          <p id="title">MY FIRST REACT PROJECT</p>
        </div>
      </div>

      <div className="container">
        <div className="conta">
          {/*  */}
          <div className="tit">Nombre des utilisateurs : {list.length}</div>
          {/*  */}
          <Button variant="primary" onClick={() => handleShow("add")}>
            Ajout d'utilisateur
          </Button>
          <Modall
            show={show}
            setShow={setShow}
            list={list}
            setList={setList}
            mode={mode}
            element={element}
            index={index}
          />
          {/*  */}
        </div>
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6" className="filtre">
            <Form.Control
              type="text"
              id="disabledTextInput"
              placeholder="Recherche"
              onChange={flitreList}
            />
          </div>
        </div>
        {/*  */}
        <Table id="tab" className="p-5" bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>PreNom</th>
              <th>Date De Naissance</th>
              <th>Age</th>
              <th>poste</th>
              <th>salaire</th>
              <th>+++++++</th>
            </tr>
          </thead>
          <tbody>
            {list.map((element, index) => {
              return (
                <tr key={"user" + index}>
                  <td>{index + 1}</td>
                  <td>{element.nom}</td>
                  <td>{element.prenom}</td>
                  <td>{element.dateNaissance}</td>
                  <td>{element.age}</td>
                  <td>{element.poste}</td>
                  <td>{element.salaire}</td>
                  <td>
                    <div id="goo">
                      <div>
                        <i className="fas fa-eye pointer" onClick={() => handleVue("vue", element, index)}></i>
                      </div>
                      <div>
                        <i
                          className="fas fa-pencil-alt pointer"
                          onClick={() => handleShow("edit", element, index)}
                        ></i>
                      </div>
                      <div>
                        <i className="fas fa-trash pointer" onClick={() => handleClose(index)}
                        ></i>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {/* Pagination */}
      </div>
    </>
  );
}
export default Liste;
