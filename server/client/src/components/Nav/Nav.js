import React, { useState } from "react";
import Modal from "react-modal";
import "./Nav.css";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi"; // new import
import Logo from "./Logo.png";

function Nav() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // get form values
    const postimage = event.target.elements.pictureLink.value;
    const caption = event.target.elements.caption.value;
    const user_id = event.target.elements.userId.value;
    // create a new post object

    try {
      const newPost = {
        user_id,
        postimage,
      };
      const response = await fetch("http://localhost:3000/createPost", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: { "Content-Type": "application/json" },
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }

    // make a request to your backend to add the new post to the database
    // ...

    closeModal();
  };

  return (
    <div className="nav">
      <img src={Logo} className="logo" />
      <div className="buttons">
        <button className="btn">
          <FaHome size={"1.5rem"} />
          <span>Home</span>
        </button>
        <button className="btn">
          <CiSearch size={"1.5rem"} />
          <span>Search</span>
        </button>
        <button className="btn">
          <RiCompassDiscoverLine size={"1.5rem"} />
          <span>Discover</span>
        </button>
        <button className="btn" onClick={openModal}>
          <FiMail size={"1.5rem"} />
          <span>Post</span>
        </button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
        >
          <button onClick={closeModal} className="close-button">
            X
          </button>
          <form onSubmit={handleSubmit} className="modal-form">
            <label>
              Picture Link:
              <input
                type="text"
                name="pictureLink"
                required
                className="input-field"
              />
            </label>
            <label>
              Caption:
              <input
                type="text"
                name="caption"
                required
                className="input-field"
              />
            </label>
            <label>
              User ID:
              <input
                type="text"
                name="userId"
                required
                className="input-field"
              />
            </label>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default Nav;
