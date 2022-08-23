import React, { useState } from "react";
import Modal from "react-modal";
import Rating from "@mui/material/Rating";
import Button from "react-bootstrap/Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
export default function AddMovie({ HundelAdd }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [titel, setTitel] = useState("");
  const [rate, setRate] = useState(0);
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const HundleSubmit = (e) => {
    e.preventDefault();
    HundelAdd({ titel, rate, postUrl: image, Desc1: desc });
    setTitel("");
    setRate("");
    setImage("");
    setDesc("");
    closeModal();
  };
  return (
    <div>
      <Button onClick={openModal}>Add movie</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={HundleSubmit}>
          <label> Titel</label>
          <input
            type="text"
            onChange={(e) => setTitel(e.target.value)}
            required
            value={titel}
          />
          <br />
          <label> Poster Url</label>
          <input
            type="url"
            onChange={(e) => setImage(e.target.value)}
            required
            value={image}
          />
          <br />
          <label> Rate</label>
          <Rating
            name="simple-controlled"
            value={rate}
            onChange={(event, newValue) => {
              setRate(newValue);
            }}
          />
          <br />
          <label> Description</label>
          <input
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            required
            value={desc}
          />
          <button>submit</button>
          <Button onClick={closeModal}>Return</Button>
        </form>
      </Modal>
    </div>
  );
}
