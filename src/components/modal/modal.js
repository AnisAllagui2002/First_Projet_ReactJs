import Modal from "react-bootstrap/Modal";
import Formuser from "../formuser/formuser";
export default function Modall({list, setList, show, setShow, mode, element, index } ) {
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {mode == "add"
              ? "Ajouter"
              : mode == "edit"
              ? "Modifier"
              : "consulter"}
            un utlisateur
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formuser
            list={list}
            setList={setList}
            setShow={setShow}
            element={element}
            index={index}
            mode={mode}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
