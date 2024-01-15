// 'use client'
import { useState } from "react";
// import Modal from "../modals/signup_modal";
import Modal2 from "../modals/modal";

const ButtonType = () => {
  const [modalOpen, setOpenModal] = useState(false);

  console.log("initial state:", modalOpen);

  const openModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded-2xl focus:outline-none hover:text-gray-700 hover:bg-orange-400"
      >
        Join as <pre className="text-[var(--bg)]">Individual</pre>
      </button>
      <button
        onClick={() => setOpenModal(true)}
        className="px-4 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded-2xl focus:outline-none hover:bg-purple-400 hover:text-white"
      >
        Join as{" "}
        <pre className="text-[var(--bgSoft)] hover:text-[var(--bgSoft)]">
          Organisation
        </pre>
      </button>
      <Modal2 modalOpen={modalOpen} closeModal={closeModal} />
    </>
  );
};

export default ButtonType;
