"use client";

import React from "react";

const Modal = ({ modalOpen, closeModal }) => {
  return (
    <dialog id="my_modal_3" className={`modal ${modalOpen && "modal-open"}`} open>
      <div className="modal-box">
        <form method="dialog">
          <div className="flex flex-col items-start ">
            <input
              type="text"
              name="name"
              className="w-1/2 mb-2 text-white rounded-2xl bg-[var(--bg)] px-2 py-2"
            />
            <input
              type="email"
              name="mail"
              className="w-1/2 mb-2 rounded-2xl bg-[var(--bg)] px-2 py-2"
            />
            <input
              type="password"
              name="pass"
              className="w-1/2 mb-2 rounded-2xl bg-[var(--bg)] px-2 py-2"
            />
          </div>
          <button className="btn btn-primary">Join</button>
          <button
            onClick={closeModal}
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
          >
            ✕
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
