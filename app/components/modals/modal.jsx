import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../modals/form";
import { useRouter } from "next/navigation";

const Modal2 = ({ modalOpen, closeModal }) => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    console.log(user);
    const { username, email, password } = user;
    try {
      const response = await axios.post("/api/signup", { username, email, password })
        .then(()=>router.push("/login"))
      console.log(response.json());
      setUser({ username: "", email: "", password: "" });
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  useEffect(() => {
    if (!modalOpen) {
      // Reset form data when modal is closed
      setUser({ username: "", email: "", password: "" });
    }
  }, [modalOpen]);
  
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      console.log('OK');
    } else {
      console.log('NOT OK');
    }
  }, [user]);

  return (
    <dialog
      id="my_modal_3"
      className={`modal ${modalOpen ? "modal-open" : ""}`}
      open={modalOpen}
    >
      <div className="modal-box">
        <Form user={user} setUser={setUser} />
        <button
          className="mx-auto mt-4 btn btn-outline ml-[12rem] hover:bg-orange-400 "
          onClick={handleSubmit}
        >
          Join
        </button>
        <button
          onClick={closeModal}
          className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
        >
          ✕
        </button>
      </div>
    </dialog>
  );
};

export default Modal2;
